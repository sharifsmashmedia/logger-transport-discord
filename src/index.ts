import { AxiosStatic, AxiosInstance } from 'axios';
import {
  LoggerTransportOptions,
  LoggerTransportResult,
  LoggerTransport,
} from '@simplyhexagonal/logger/src';

// @ts-ignore
import {version} from '../package.json';
// @ts-ignore
export {version} from '../package.json';

let axios: AxiosStatic;

if (typeof window !== 'undefined') {
  axios = (window as any).axios as AxiosStatic;
} else {
  axios = require('axios');
}

export default class DiscordTransport extends LoggerTransport {
  static version = version;

  readonly destination: string;
  private readonly _axios?: AxiosInstance;

  constructor(options: LoggerTransportOptions['options']) {
    const r = Math.random().toString(36).substring(7);
    super({...options, r});

    this.destination = options.destination;

    if (r !== this._r) {
      return this;
    }

    this._axios = axios.create({
      url: this.destination,
    });
  }

  async debug([prefixes, ...message]: unknown[]) {
    return await this.postToWebhook(`**${prefixes} DEBUG** 🐞️:\n\`\`\`${this.format(message)}\`\`\``);
  }

  async info([prefixes, ...message]: unknown[]) {
    return await this.postToWebhook(`**${prefixes} INFO** ✅️️:\n\`\`\`${this.format(message)}\`\`\``);
  }

  async warn([prefixes, ...message]: unknown[]) {
    return await this.postToWebhook(`**${prefixes} WARN** 🟡:\n\`\`\`${this.format(message)}\`\`\``);
  }

  async error([prefixes, ...message]: unknown[]) {
    return await this.postToWebhook(`**${prefixes} ERROR** 🚨️:\n\`\`\`${this.format(message)}\`\`\``);
  }

  async fatal([prefixes, ...message]: unknown[]) {
    return await this.postToWebhook(`**${prefixes} FATAL** 💀:\n\`\`\`${this.format(message)}\`\`\``);
  }

  async all([prefixes, ...message]: unknown[]) {
    return await this.postToWebhook(`**${prefixes} ALL** 📝:\n\`\`\`${this.format(message)}\`\`\``);
  }

  private async postToWebhook(message: string): Promise<LoggerTransportResult> {
    const body = {
      content: message,
    };

    const response = await (this._axios as AxiosInstance).post<undefined>(
      this.destination,
      body,
    ).catch((reason) => {
      return {
        status: 400,
        reason,
      };
    });

    if (response.status < 200 || response.status > 399) {
      throw new Error(`Bad Response: ${(response as any).reason}`);
    };

    return {
      destination: this.destination,
      channelName: this.channelName,
      result: true,
    };
  }
}
