import { LoggerTransportOptions, LoggerTransport } from '@simplyhexagonal/logger/src';
export { version } from '../package.json';
export declare class Multipart {
    boundary: string;
    multipart: string;
    constructor(...data: {
        name: string;
        data: string;
        fileName?: string;
    }[]);
    append(name: string, data: string, fileName?: string): void;
}
export default class DiscordTransport extends LoggerTransport {
    static version: string;
    readonly destination: string;
    private readonly _axios?;
    private readonly _fnQ?;
    private readonly _processQ?;
    constructor(options: LoggerTransportOptions['options']);
    debug([prefixes, ...message]: unknown[]): Promise<{
        destination: string;
        channelName: string;
        result: boolean;
    }>;
    info([prefixes, ...message]: unknown[]): Promise<{
        destination: string;
        channelName: string;
        result: boolean;
    }>;
    warn([prefixes, ...message]: unknown[]): Promise<{
        destination: string;
        channelName: string;
        result: boolean;
    }>;
    error([prefixes, ...message]: unknown[]): Promise<{
        destination: string;
        channelName: string;
        result: boolean;
    }>;
    fatal([prefixes, ...message]: unknown[]): Promise<{
        destination: string;
        channelName: string;
        result: boolean;
    }>;
    all([prefixes, ...message]: unknown[]): Promise<{
        destination: string;
        channelName: string;
        result: boolean;
    }>;
    raw([prefixes, ...message]: unknown[]): Promise<{
        destination: string;
        channelName: string;
        result: boolean;
    }>;
    private postToWebhook;
}
