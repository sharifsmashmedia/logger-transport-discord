import { LoggerTransportOptions, LoggerTransportResult, LoggerTransport } from '@simplyhexagonal/logger/src';
export { version } from '../package.json';
export default class DiscordTransport extends LoggerTransport {
    static version: string;
    readonly destination: string;
    private readonly _axios?;
    constructor(options: LoggerTransportOptions['options']);
    debug([prefixes, ...message]: unknown[]): Promise<LoggerTransportResult>;
    info([prefixes, ...message]: unknown[]): Promise<LoggerTransportResult>;
    warn([prefixes, ...message]: unknown[]): Promise<LoggerTransportResult>;
    error([prefixes, ...message]: unknown[]): Promise<LoggerTransportResult>;
    fatal([prefixes, ...message]: unknown[]): Promise<LoggerTransportResult>;
    all([prefixes, ...message]: unknown[]): Promise<LoggerTransportResult>;
    private postToWebhook;
}
