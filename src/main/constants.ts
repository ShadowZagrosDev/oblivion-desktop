import { app } from 'electron';
import path from 'path';
import SingBoxManager from './lib/sbManager';
import NetworkMonitor from './lib/netStatsManager';
import SpeedTestManager from './lib/speedTestManager';

// Constants
export const appVersion = app.getVersion();
export const wpFileName = `warp-plus${process.platform === 'win32' ? '.exe' : ''}`;
export const sbAssetFileName = `sing-box${process.platform === 'win32' ? '.exe' : ''}`;
export const sbWDFileName = `oblivion-sb${process.platform === 'win32' ? '.exe' : ''}`;
export const helperFileName = `oblivion-helper${process.platform === 'win32' ? '.exe' : ''}`;
export const netStatsFileName = `zag-netStats${process.platform === 'win32' ? '.exe' : ''}`;
export const sbConfigName = 'sbConfig.json';
export const sbCacheName = 'sbCache.db';

// Paths
const appPath = app.getAppPath().replace('/app.asar', '').replace('\\app.asar', '');
export const binAssetPath = path.join(appPath, 'assets', 'bin');
export const wpAssetPath = path.join(appPath, 'assets', 'bin', wpFileName);
export const sbAssetPath = path.join(appPath, 'assets', 'bin', 'sing-box', sbAssetFileName);
export const helperAssetPath = path.join(appPath, 'assets', 'bin', helperFileName);
export const netStatsAssetPath = path.join(appPath, 'assets', 'bin', netStatsFileName);
export const protoAssetPath = path.join(appPath, 'assets', 'proto', 'oblivion.proto');
export const regeditVbsDirPath = path.join(appPath, 'vbs');

export const workingDirPath = app.getPath('userData');
export const wpBinPath = path.join(workingDirPath, wpFileName);
export const stuffPath = path.join(workingDirPath, 'stuff');
export const sbBinPath = path.join(workingDirPath, sbWDFileName);
export const sbConfigPath = path.join(workingDirPath, sbConfigName);
export const helperPath = path.join(workingDirPath, helperFileName);
export const netStatsPath = path.join(workingDirPath, netStatsFileName);
export const helperConfigPath = path.join(workingDirPath, 'config.obv');
export const sbCachePath = path.join(workingDirPath, sbCacheName);
export const versionFilePath = path.join(workingDirPath, 'ver.txt');

export const logPath = path.join(app?.getPath('logs'), 'main.log');

// Managers
export const singBoxManager = new SingBoxManager();
export const networkMonitor = new NetworkMonitor();
export const speedTestManager = new SpeedTestManager();

//Interfaces
export interface INetStats {
    sentSpeed: { value: number; unit: string };
    recvSpeed: { value: number; unit: string };
    totalSent: { value: number; unit: string };
    totalRecv: { value: number; unit: string };
    totalUsage: { value: number; unit: string };
}

export interface IConfig {
    socksPort: number;
    tunMtu: number;
}

export interface IGeoConfig {
    geoIp: string;
    geoSite: string;
    geoBlock: boolean;
}

export interface IRoutingRules {
    ipSet: string[];
    domainSet: string[];
    domainSuffixSet: string[];
    processSet: string[];
}
