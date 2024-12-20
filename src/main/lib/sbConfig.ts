import fs from 'fs';
import log from 'electron-log';
import { disableSbLogs } from '../dxConfig';
import {
    sbConfigPath,
    sbCacheName,
    IConfig,
    IGeoConfig,
    IRoutingRules,
    isDarwin,
    ruleSetType,
    ruleSetFormat,
    ruleSetBaseUrl,
    ruleSetUpdateInterval
} from '../constants';

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
                sniff: isDarwin,
                sniff_override_destination: isDarwin
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
                ...(isDarwin
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
                              type: ruleSetType,
                              format: ruleSetFormat,
                              url: `${ruleSetBaseUrl}geoip-${geoConfig.geoIp}.srs`,
                              ...(isDarwin ? { download_detour: 'direct-out' } : {}),
                              update_interval: ruleSetUpdateInterval
                          }
                      ]
                    : []),
                ...(geoConfig.geoSite !== 'none'
                    ? [
                          {
                              tag: `geosite-${geoConfig.geoSite}`,
                              type: ruleSetType,
                              format: ruleSetFormat,
                              url: `${ruleSetBaseUrl}geosite-${geoConfig.geoSite}.srs`,
                              ...(isDarwin ? { download_detour: 'direct-out' } : {}),
                              update_interval: ruleSetUpdateInterval
                          }
                      ]
                    : []),
                ...(geoConfig.geoBlock
                    ? [
                          {
                              tag: 'geosite-category-ads-all',
                              type: ruleSetType,
                              format: ruleSetFormat,
                              url: `${ruleSetBaseUrl}geosite-category-ads-all.srs`,
                              ...(isDarwin ? { download_detour: 'direct-out' } : {}),
                              update_interval: ruleSetUpdateInterval
                          },
                          {
                              tag: 'geosite-malware',
                              type: ruleSetType,
                              format: ruleSetFormat,
                              url: `${ruleSetBaseUrl}geosite-malware.srs`,
                              ...(isDarwin ? { download_detour: 'direct-out'} : {}),
                              update_interval: ruleSetUpdateInterval
                          },
                          {
                              tag: 'geosite-phishing',
                              type: ruleSetType,
                              format: ruleSetFormat,
                              url: `${ruleSetBaseUrl}geosite-phishing.srs`,
                              ...(isDarwin ? { download_detour: 'direct-out' } : {}),
                              update_interval: ruleSetUpdateInterval
                          },
                          {
                              tag: 'geosite-cryptominers',
                              type: ruleSetType,
                              format: ruleSetFormat,
                              url: `${ruleSetBaseUrl}geosite-cryptominers.srs`,
                              ...(isDarwin ? { download_detour: 'direct-out'} : {}),
                              update_interval: ruleSetUpdateInterval
                          },
                          {
                              tag: 'geoip-malware',
                              type: ruleSetType,
                              format: ruleSetFormat,
                              url: `${ruleSetBaseUrl}geoip-malware.srs`,
                              ...(isDarwin ? { download_detour: 'direct-out' } : {}),
                              update_interval: ruleSetUpdateInterval
                          },
                          {
                              tag: 'geoip-phishing',
                              type: ruleSetType,
                              format: ruleSetFormat,
                              url: `${ruleSetBaseUrl}geoip-phishing.srs`,
                              ...(isDarwin ? { download_detour: 'direct-out' } : {}),
                              update_interval: ruleSetUpdateInterval
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
