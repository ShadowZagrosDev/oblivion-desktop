import fs from 'fs';
import log from 'electron-log';
import { sbConfigPath, sbCacheName } from '../constants';
import { disableSbLogs } from '../dxConfig';
import { IConfig, IGeoConfig, IRoutingRules } from './sbManager';

export function createSbConfig(config: IConfig, geoConfig: IGeoConfig, rulesConfig: IRoutingRules) {
    const logConfig = disableSbLogs
        ? { disabled: true }
        : {
              disabled: false,
              level: 'warn',
              timestamp: true,
              output: 'sing-box.log'
          };

    const configuration = {
        log: logConfig,
        dns: {
            final: 'dns-remote',
            independent_cache: true,
            strategy: 'prefer_ipv4',
            rules: [
                {
                    outbound: ['any'],
                    server: 'dns-direct'
                },
                ...(geoConfig.geoBlock
                    ? [
                          {
                              rule_set: [
                                  'geosite-category-ads-all',
                                  'geosite-malware',
                                  'geosite-phishing',
                                  'geosite-cryptominers',
                                  'geoip-malware',
                                  'geoip-phishing'
                              ],
                              disable_cache: true,
                              server: 'dns-block'
                          }
                      ]
                    : []),
                ...(geoConfig.geoSite !== 'none'
                    ? [
                          {
                              rule_set: `geosite-${geoConfig.geoSite}`,
                              server: 'dns-direct'
                          }
                      ]
                    : [])
            ],
            servers: [
                {
                    address: 'https://1.1.1.2/dns-query',
                    address_resolver: 'dns-direct',
                    detour: 'socks-out',
                    tag: 'dns-remote'
                },
                {
                    address: '8.8.8.8',
                    detour: 'direct-out',
                    tag: 'dns-direct'
                },
                {
                    address: 'rcode://success',
                    tag: 'dns-block'
                }
            ]
        },
        inbounds: [
            {
                listen: '0.0.0.0',
                listen_port: 6450,
                override_address: '8.8.8.8',
                override_port: 53,
                tag: 'dns-in',
                type: 'direct'
            },
            {
                type: 'tun',
                tag: 'tun-in',
                mtu: config.tunMtu,
                address: ['172.19.0.1/30', 'fdfe:dcba:9876::1/126'],
                auto_route: true,
                strict_route: true,
                stack: 'mixed',
                sniff: process.platform === 'darwin',
                sniff_override_destination: process.platform === 'darwin'
            }
        ],
        outbounds: [
            {
                type: 'socks',
                tag: 'socks-out',
                server: '127.0.0.1',
                server_port: config.socksPort,
                version: '5'
            },
            {
                type: 'direct',
                tag: 'direct-out'
            },
            {
                type: 'block',
                tag: 'block-out'
            },
            {
                type: 'dns',
                tag: 'dns-out'
            }
        ],
        route: {
            rules: [
                {
                    outbound: 'dns-out',
                    port: [53]
                },
                {
                    inbound: ['dns-in'],
                    outbound: 'dns-out'
                },
                ...(process.platform === 'darwin'
                    ? [
                          {
                              network: 'udp',
                              outbound: 'direct-out'
                          }
                      ]
                    : []),
                {
                    ip_is_private: true,
                    outbound: 'direct-out'
                },
                ...(rulesConfig.ipSet.length > 0
                    ? [
                          {
                              ip_cidr: rulesConfig.ipSet,
                              outbound: 'direct-out'
                          }
                      ]
                    : []),
                ...(rulesConfig.domainSet.length > 0
                    ? [
                          {
                              domain: rulesConfig.domainSet,
                              outbound: 'direct-out'
                          }
                      ]
                    : []),
                ...(rulesConfig.domainSuffixSet.length > 0
                    ? [
                          {
                              domain_suffix: rulesConfig.domainSuffixSet,
                              outbound: 'direct-out'
                          }
                      ]
                    : []),
                ...(rulesConfig.processSet.length > 0
                    ? [
                          {
                              process_name: rulesConfig.processSet,
                              outbound: 'direct-out'
                          }
                      ]
                    : []),
                ...(geoConfig.geoIp !== 'none'
                    ? [
                          {
                              rule_set: `geoip-${geoConfig.geoIp}`,
                              outbound: 'direct-out'
                          }
                      ]
                    : []),
                ...(geoConfig.geoSite !== 'none'
                    ? [
                          {
                              rule_set: `geosite-${geoConfig.geoSite}`,
                              outbound: 'direct-out'
                          }
                      ]
                    : []),
                ...(geoConfig.geoBlock
                    ? [
                          {
                              rule_set: [
                                  'geosite-category-ads-all',
                                  'geosite-malware',
                                  'geosite-phishing',
                                  'geosite-cryptominers',
                                  'geoip-malware',
                                  'geoip-phishing'
                              ],
                              outbound: 'block-out'
                          }
                      ]
                    : [])
            ],
            rule_set: [
                ...(geoConfig.geoIp !== 'none'
                    ? [
                          {
                              tag: `geoip-${geoConfig.geoIp}`,
                              type: 'remote',
                              format: 'binary',
                              url: `https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geoip-${geoConfig.geoIp}.srs`,
                              download_detour: 'direct-out',
                              update_interval: '3d'
                          }
                      ]
                    : []),
                ...(geoConfig.geoSite !== 'none'
                    ? [
                          {
                              tag: `geosite-${geoConfig.geoSite}`,
                              type: 'remote',
                              format: 'binary',
                              url: `https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-${geoConfig.geoSite}.srs`,
                              download_detour: 'direct-out',
                              update_interval: '3d'
                          }
                      ]
                    : []),
                ...(geoConfig.geoBlock
                    ? [
                          {
                              tag: 'geosite-category-ads-all',
                              type: 'remote',
                              format: 'binary',
                              url: 'https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-category-ads-all.srs',
                              download_detour: 'direct-out',
                              update_interval: '3d'
                          },
                          {
                              tag: 'geosite-malware',
                              type: 'remote',
                              format: 'binary',
                              url: 'https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-malware.srs',
                              download_detour: 'direct-out',
                              update_interval: '3d'
                          },
                          {
                              tag: 'geosite-phishing',
                              type: 'remote',
                              format: 'binary',
                              url: 'https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-phishing.srs',
                              download_detour: 'direct-out',
                              update_interval: '3d'
                          },
                          {
                              tag: 'geosite-cryptominers',
                              type: 'remote',
                              format: 'binary',
                              url: 'https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-cryptominers.srs',
                              download_detour: 'direct-out',
                              update_interval: '3d'
                          },
                          {
                              tag: 'geoip-malware',
                              type: 'remote',
                              format: 'binary',
                              url: 'https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geoip-malware.srs',
                              download_detour: 'direct-out',
                              update_interval: '3d'
                          },
                          {
                              tag: 'geoip-phishing',
                              type: 'remote',
                              format: 'binary',
                              url: 'https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geoip-phishing.srs',
                              download_detour: 'direct-out',
                              update_interval: '3d'
                          }
                      ]
                    : [])
            ],
            final: 'socks-out',
            auto_detect_interface: true
        },
        experimental: {
            cache_file: {
                enabled: true,
                path: sbCacheName,
                store_fakeip: true
            }
        }
    };

    fs.writeFileSync(sbConfigPath, JSON.stringify(configuration, null, 2), 'utf-8');
    log.info(`Sing-Box config file has been created at ${sbConfigPath}`);
}
