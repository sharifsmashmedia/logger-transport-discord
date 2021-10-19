import { AxiosStatic, AxiosInstance, AxiosRequestConfig } from 'axios';
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

export class Multipart {
  boundary = 'loggerTransportDiscord';
  multipart = '';

  constructor(...data: {
    name: string;
    data: string;
    fileName?: string;
  }[]) {
    if (data.length > 0) {
      data.forEach(({name, data, fileName}) => {
        this.append(name, data, fileName)
      });
    }
  }

  append(
      name: string,
      data: string,
      fileName?: string,
  ): void {
    if (!data) return;

    let contentInfo = `Content-Disposition: form-data; name="${name}"`;
    if (fileName) {
      contentInfo += `; filename="${fileName}"`;
    }
    contentInfo += '\nContent-Type: text/plain; charset=utf-8\n';

    this.multipart += `--${this.boundary}\n${contentInfo}\n${data}\n--${this.boundary}--\n`;
  }
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
    return await this.postToWebhook(`**${prefixes} DEBUG** 🐞️:`, `${this.format(message)}`);
  }

  async info([prefixes, ...message]: unknown[]) {
    return await this.postToWebhook(`**${prefixes} INFO** ✅️️:`, `${this.format(message)}`);
  }

  async warn([prefixes, ...message]: unknown[]) {
    return await this.postToWebhook(`**${prefixes} WARN** 🟡:`, `${this.format(message)}`);
  }

  async error([prefixes, ...message]: unknown[]) {
    return await this.postToWebhook(`**${prefixes} ERROR** 🚨️:`, `${this.format(message)}`);
  }

  async fatal([prefixes, ...message]: unknown[]) {
    return await this.postToWebhook(`**${prefixes} FATAL** 💀:`, `${this.format(message)}`);
  }

  async all([prefixes, ...message]: unknown[]) {
    return await this.postToWebhook(`**${prefixes} ALL** 📝:`, `${this.format(message)}`);
  }

  private async postToWebhook(infoString: string, message: string): Promise<LoggerTransportResult> {
    const attachMessage = Boolean((infoString.length + message.length) >= 2000);

    const content = (attachMessage) ? infoString : `${infoString}\n\`\`\`${message}\`\`\``;

    let data;
    let config: AxiosRequestConfig = {};
    data = {
      content,
    };

    let response = await (this._axios as AxiosInstance).post<undefined>(
      this.destination,
      data,
      config,
    ).catch((reason) => {
      return {
        status: 400,
        reason,
      };
    });

    if (response.status < 200 || response.status > 399) {
      throw new Error(`Bad Response: ${(response as any).reason}`);
    };

    if (attachMessage) {
      const multi = new Multipart(
        { name: 'file', data: message, fileName: 'message.txt' },
      );

      data = multi.multipart;

      config = {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${multi.boundary}`,
        }
      };

      response = await (this._axios as AxiosInstance).post<undefined>(
        this.destination,
        data,
        config,
      ).catch((reason) => {
        return {
          status: 400,
          reason,
        };
      });

      if (response.status < 200 || response.status > 399) {
        throw new Error(`Bad Response: ${(response as any).reason}`);
      };
    }

    return {
      destination: this.destination,
      channelName: this.channelName,
      result: true,
    };
  }
}
