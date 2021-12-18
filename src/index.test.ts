require('dotenv').config();
import os from 'os';
import Logger, {
  LoggerTransportName,
  LoggerTransportResult,
} from '@simplyhexagonal/logger';

import DiscordTransport from './';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

describe('Discord transport for Simply Hexagonal Logger', () => {
  // it('can generate useful error output', async () => {
  //   const logger = new Logger({
  //     optionsByLevel: {
  //       warn: [],
  //       info: [],
  //       debug: [],
  //       error: [],
  //       fatal: [],
  //       all: [
  //         {
  //           transport: LoggerTransportName.DISCORD,
  //           options: {
  //             destination: (`${process.env.DISCORD_WEBHOOK}x` || ''),
  //           },
  //         },
  //       ],
  //       raw: [],
  //     },
  //     singleton: false,
  //     transports: {
  //       [`${LoggerTransportName.DISCORD}`]: DiscordTransport,
  //     },
  //     appIdentifiers: {
  //       clusterType: 'TEST',
  //       cluster: 'CI',
  //       hostname: os.hostname(),
  //       app: 'logger-transport-discord',
  //     },
  //     catchTransportErrors: true,
  //   });

  //   const result = await logger.all('🛑 This should never reach Discord');

  //   expect(result.length).toBe(1);
  //   expect((result[0] as LoggerTransportResult).destination).toBe('Logger:Fallback');
  //   expect((result[0] as LoggerTransportResult).result).toBe(true);
  // });

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
        raw: [],
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

  it('can truncate messages that are too long for Discord webhook', async () => {
    const logger = new Logger({
      optionsByLevel: {
        warn: [
          {
            transport: LoggerTransportName.DISCORD,
            options: {
              destination: (process.env.DISCORD_WEBHOOK || ''),
            },
          },
        ],
        info: [],
        debug: [],
        error: [],
        fatal: [],
        all: [],
        raw: [],
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

    const result = await logger.warn({
      "killed": false,
      "code": 1,
      "signal": null,
      "cmd": "pnpm test",
      "stdout": "\n> project@0.0.1 w /some/really/long/path/to/a/project\n> pnpm --filter \"project\" \"test\"\n\n\n> project@0.9.1 test /some/really/long/path/to/a/project/apps/project\n> jest\n\nundefined\n/some/really/long/path/to/a/project/apps/project:\n ERR_PNPM_RECURSIVE_RUN_FIRST_FAIL  project@0.9.1 test: \`jest\`\nExit status 139\n ELIFECYCLE  Command failed with exit code 1.\n",
      "stderr": "ts-jest[versions] (WARN) Version 27.2.5 of jest installed has not been tested with ts-jest. If you're experiencing issues, consider using a supported version (>=26.0.0 <27.0.0-0). Please do not report issues in ts-jest if you are using unsupported versions.\nts-jest[config] (WARN) The option \`tsConfig\` is deprecated and will be removed in ts-jest 27, use \`tsconfig\` instead\nSegmentation fault\n",
      "name": "Error",
      "message": "Command failed: pnpm test\nts-jest[versions] (WARN) Version 27.2.5 of jest installed has not been tested with ts-jest. If you're experiencing issues, consider using a supported version (>=26.0.0 <27.0.0-0). Please do not report issues in ts-jest if you are using unsupported versions.\nts-jest[config] (WARN) The option \`tsConfig\` is deprecated and will be removed in ts-jest 27, use \`tsconfig\` instead\nSegmentation fault\n",
      "stack": "Error: Command failed: pnpm test\nts-jest[versions] (WARN) Version 27.2.5 of jest installed has not been tested with ts-jest. If you're experiencing issues, consider using a supported version (>=26.0.0 <27.0.0-0). Please do not report issues in ts-jest if you are using unsupported versions.\nts-jest[config] (WARN) The option \`tsConfig\` is deprecated and will be removed in ts-jest 27, use \`tsconfig\` instead\nSegmentation fault\n\n    at ChildProcess.exithandler (child_process.js:319:12)\n    at ChildProcess.emit (events.js:376:20)\n    at maybeClose (internal/child_process.js:1055:16)\n    at Process.ChildProcess._handle.onexit (internal/child_process.js:288:5)"
    });

    expect(result.length).toBe(1);
    expect((result[0] as LoggerTransportResult).destination).toBe(process.env.DISCORD_WEBHOOK);
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
        all: [],
        raw: [
          {
            transport: LoggerTransportName.DISCORD,
            options: {
              destination: (process.env.DISCORD_WEBHOOK || ''),
            },
          },],
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

    const result = await logger.raw('https://tenor.com/bLlRt.gif');

    expect(result.length).toBe(1);
    expect((result[0] as LoggerTransportResult).destination).toBe(process.env.DISCORD_WEBHOOK);
    expect((result[0] as LoggerTransportResult).result).toBe(true);
  });

  afterAll(async () => {
    await sleep(3000);
  });
});
