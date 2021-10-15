require('dotenv').config();
import os from 'os';
import Logger, {
  LoggerTransportName,
  LoggerTransportResult,
} from '@simplyhexagonal/logger';

import DiscordTransport from './';

describe('Discord transport for Simply Hexagonal Logger', () => {
  it('can generate useful error output', async () => {
    const logger = new Logger({
      optionsByLevel: {
        warn: [],
        info: [],
        debug: [],
        error: [],
        fatal: [],
        all: [
          {
            transport: LoggerTransportName.DISCORD,
            options: {
              destination: (`${process.env.DISCORD_WEBHOOK}x` || ''),
            },
          },
        ],
      },
      singleton: false,
      transports: {
        [`${LoggerTransportName.DISCORD}`]: DiscordTransport,
      },
      appIdentifiers: {
        clusterType: 'TEST',
        cluster: 'CI',
        hostname: os.hostname(),
        app: 'logger-transport-discord',
      },
      catchTransportErrors: true,
    });

    const result = await logger.all('🛑 This should never reach Discord');

    expect(result.length).toBe(1);
    expect((result[0] as LoggerTransportResult).destination).toBe('Logger:Fallback');
    expect((result[0] as LoggerTransportResult).result).toBe(true);
  });

  it('works', async () => {
    const logger = new Logger({
      optionsByLevel: {
        warn: [],
        info: [],
        debug: [],
        error: [],
        fatal: [],
        all: [
          {
            transport: LoggerTransportName.DISCORD,
            options: {
              destination: (process.env.DISCORD_WEBHOOK || ''),
            },
          },
        ],
      },
      singleton: false,
      transports: {
        [`${LoggerTransportName.DISCORD}`]: DiscordTransport,
      },
      appIdentifiers: {
        clusterType: 'TEST',
        cluster: 'CI',
        hostname: os.hostname(),
        app: 'logger-transport-discord',
      },
      catchTransportErrors: true,
    });

    const result = await logger.all('👀 Hello discord', 2, 'app', { simply: 'hexagonal' });

    expect(result.length).toBe(1);
    expect((result[0] as LoggerTransportResult).destination).toBe(process.env.DISCORD_WEBHOOK);
    expect((result[0] as LoggerTransportResult).result).toBe(true);
  });
});
