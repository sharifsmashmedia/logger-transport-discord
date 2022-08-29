import { AxiosStatic, AxiosInstance, AxiosRequestConfig } from 'axios';
import FunctionQueue, {
  QueueableFunction,
} from '@simplyhexagonal/function-queue';
import {
  LoggerTransportOptions,
  LoggerTransportResult,
  LoggerTransport,
} from '@simplyhexagonal/logger';

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

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

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

interface QFnPayload {
  infoString: string;
  message: string;
}

const DEFAULT_RATE_LIMIT = 420;

export default class DiscordTransport extends LoggerTransport {
  static version = version;

  readonly destination: string;
  private readonly _axios?: AxiosInstance;
  private readonly _fnQ?: FunctionQueue<QFnPayload, LoggerTransportResult>;
  private readonly _rateLimit;

  constructor(options: LoggerTransportOptions['options'] & {rateLimit?: number}) {
    const r = Math.random().toString(36).substring(7);
    super({...options, r});

    this.destination = options.destination;

    if (r !== this._r) {
      return this;
    }

    this._rateLimit = options.rateLimit || DEFAULT_RATE_LIMIT;

    this._axios = axios.create({
      url: this.destination,
    });

    const qFn: QueueableFunction<QFnPayload, LoggerTransportResult> = async (payload) => {
      return this.postToWebhook(payload);
    };

    const fnQ = new FunctionQueue(qFn, {waitTimeBetweenRuns: this._rateLimit, maxRetries: 0});
    this._fnQ = fnQ;
  }

  async debug([prefixes, ...message]: unknown[]) {
    const fnQ = this._fnQ as FunctionQueue<QFnPayload, LoggerTransportResult>;

    const payloadId = fnQ.queuePayload(
      {
        infoString: `**${prefixes} DEBUG** 🐞️:`,
        message: `${this.format(message)}`
      }
    );

    fnQ.processQueue();
    const {result, error} = await fnQ.getResult(payloadId);

    if (error) {
      throw error;
    }

    return result as LoggerTransportResult;
  }

  async info([prefixes, ...message]: unknown[]) {
    const fnQ = this._fnQ as FunctionQueue<QFnPayload, LoggerTransportResult>;

    const payloadId = fnQ.queuePayload(
      {
        infoString: `**${prefixes} INFO** ✅️️:`,
        message: `${this.format(message)}`
      }
    );

    fnQ.processQueue();
    const {result, error} = await fnQ.getResult(payloadId);

    if (error) {
      throw error;
    }

    return result as LoggerTransportResult;
  }

  async warn([prefixes, ...message]: unknown[]) {
    const fnQ = this._fnQ as FunctionQueue<QFnPayload, LoggerTransportResult>;

    const payloadId = fnQ.queuePayload(
      {
        infoString: `**${prefixes} WARN** 🟡:`,
        message: `${this.format(message)}`
      }
    );

    fnQ.processQueue();
    const {result, error} = await fnQ.getResult(payloadId);

    if (error) {
      throw error;
    }

    return result as LoggerTransportResult;
  }

  async error([prefixes, ...message]: unknown[]) {
    const fnQ = this._fnQ as FunctionQueue<QFnPayload, LoggerTransportResult>;

    const payloadId = fnQ.queuePayload(
      {
        infoString: `**${prefixes} ERROR** 🚨️:`,
        message: `${this.format(message)}`
      }
    );

    fnQ.processQueue();
    const {result, error} = await fnQ.getResult(payloadId);

    if (error) {
      throw error;
    }

    return result as LoggerTransportResult;
  }

  async fatal([prefixes, ...message]: unknown[]) {
    const fnQ = this._fnQ as FunctionQueue<QFnPayload, LoggerTransportResult>;

    const payloadId = fnQ.queuePayload(
      {
        infoString: `**${prefixes} FATAL** 💀:`,
        message: `${this.format(message)}`
      }
    );

    fnQ.processQueue();
    const {result, error} = await fnQ.getResult(payloadId);

    if (error) {
      throw error;
    }

    return result as LoggerTransportResult;
  }

  async all([prefixes, ...message]: unknown[]) {
    const fnQ = this._fnQ as FunctionQueue<QFnPayload, LoggerTransportResult>;

    const payloadId = fnQ.queuePayload(
      {
        infoString: `**${prefixes} ALL** 📝:`,
        message: `${this.format(message)}`
      }
    );

    fnQ.processQueue();
    const {result, error} = await fnQ.getResult(payloadId);

    if (error) {
      throw error;
    }

    return result as LoggerTransportResult;
  }

  async raw([prefixes, ...message]: unknown[]) {
    const fnQ = this._fnQ as FunctionQueue<QFnPayload, LoggerTransportResult>;

    const payloadId = fnQ.queuePayload(
      {
        infoString: '',
        message: this.format(message)
      }
    );

    fnQ.processQueue();
    const {result, error} = await fnQ.getResult(payloadId);

    if (error) {
      throw error;
    }

    return result as LoggerTransportResult;
  }

  private async postToWebhook({infoString, message}: QFnPayload): Promise<LoggerTransportResult> {
    const attachMessage = Boolean((infoString.length + message.length) >= 2000);

    let content = '';
    
    if (infoString.length > 0) {
      content = (attachMessage) ? infoString : `${infoString}\n\`\`\`\n${message}\n\`\`\``;
    } else if (!attachMessage) {
      content = message;
    }

    let data;
    let config: AxiosRequestConfig = {};
    let response;

    if (content.length > 0) {
      data = {
        content,
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
        console.error(`Bad Response: ${(response as any).reason}`);
      };
    }

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

      await sleep(this._rateLimit || DEFAULT_RATE_LIMIT);

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
        console.error(`Bad Response: ${(response as any).reason}`);
      };
    }

    return {
      destination: this.destination,
      channelName: this.channelName,
      result: true,
    };
  }
}
