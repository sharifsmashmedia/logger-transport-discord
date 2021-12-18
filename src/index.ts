import { AxiosStatic, AxiosInstance, AxiosRequestConfig } from 'axios';
import {
  FunctionQueue,
  QueueableFunction,
  FunctionQueueResult,
} from '@simplyhexagonal/function-queue';
import debounce from 'lodash.debounce';
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

interface QFnPayload {
  infoString: string;
  message: string;
}

export default class DiscordTransport extends LoggerTransport {
  static version = version;

  readonly destination: string;
  private readonly _axios?: AxiosInstance;
  private readonly _fnQ?: FunctionQueue;
  private readonly _processQ?: () => Promise<FunctionQueueResult<void>[]>;

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

    const qFn: QueueableFunction<QFnPayload, void> = async (payload) => {
      this.postToWebhook(payload);
      return;
    };

    const fnQ = new FunctionQueue(qFn, {waitTimeBetweenRuns: 200, maxRetries: 0});
    this._fnQ = fnQ;
    this._processQ = debounce(async () => await fnQ.processQueue(), 1000) as () => Promise<FunctionQueueResult<void>[]>;
  }

  async debug([prefixes, ...message]: unknown[]) {
    this._fnQ?.queuePayload(
      {
        infoString: `**${prefixes} DEBUG** 🐞️:`,
        message: `${this.format(message)}`
      }
    );

    try {
      this._processQ?.();
    } catch (error) {
      console.log(`${prefixes} WARN 🟡: Logger Discord Transport -> Unable to process queue.`);
    }

    return {
      destination: this.destination,
      channelName: this.channelName,
      result: true,
    };
  }

  async info([prefixes, ...message]: unknown[]) {
    this._fnQ?.queuePayload(
      {
        infoString: `**${prefixes} INFO** ✅️️:`,
        message: `${this.format(message)}`
      }
    );

    try {
      this._processQ?.();
    } catch (error) {
      console.log(`${prefixes} WARN 🟡: Logger Discord Transport -> Unable to process queue.`);
    }

    return {
      destination: this.destination,
      channelName: this.channelName,
      result: true,
    };
  }

  async warn([prefixes, ...message]: unknown[]) {
    this._fnQ?.queuePayload(
      {
        infoString: `**${prefixes} WARN** 🟡:`,
        message: `${this.format(message)}`
      }
    );

    try {
      this._processQ?.();
    } catch (error) {
      console.log(`${prefixes} WARN 🟡: Logger Discord Transport -> Unable to process queue.`);
    }

    return {
      destination: this.destination,
      channelName: this.channelName,
      result: true,
    };
  }

  async error([prefixes, ...message]: unknown[]) {
    this._fnQ?.queuePayload(
      {
        infoString: `**${prefixes} ERROR** 🚨️:`,
        message: `${this.format(message)}`
      }
    );

    try {
      this._processQ?.();
    } catch (error) {
      console.log(`${prefixes} WARN 🟡: Logger Discord Transport -> Unable to process queue.`);
    }

    return {
      destination: this.destination,
      channelName: this.channelName,
      result: true,
    };
  }

  async fatal([prefixes, ...message]: unknown[]) {
    this._fnQ?.queuePayload(
      {
        infoString: `**${prefixes} FATAL** 💀:`,
        message: `${this.format(message)}`
      }
    );

    try {
      this._processQ?.();
    } catch (error) {
      console.log(`${prefixes} WARN 🟡: Logger Discord Transport -> Unable to process queue.`);
    }

    return {
      destination: this.destination,
      channelName: this.channelName,
      result: true,
    };
  }

  async all([prefixes, ...message]: unknown[]) {
    this._fnQ?.queuePayload(
      {
        infoString: `**${prefixes} ALL** 📝:`,
        message: `${this.format(message)}`
      }
    );

    try {
      this._processQ?.();
    } catch (error) {
      console.log(`${prefixes} WARN 🟡: Logger Discord Transport -> Unable to process queue.`);
    }

    return {
      destination: this.destination,
      channelName: this.channelName,
      result: true,
    };
  }

  async raw([prefixes, ...message]: unknown[]) {
    this._fnQ?.queuePayload(
      {
        infoString: '',
        message: this.format(message)
      }
    );

    try {
      this._processQ?.();
    } catch (error) {
      console.log(`${prefixes} WARN 🟡: Logger Discord Transport -> Unable to process queue.`);
    }

    return {
      destination: this.destination,
      channelName: this.channelName,
      result: true,
    };
  }

  private async postToWebhook({infoString, message}: QFnPayload): Promise<LoggerTransportResult> {
    const attachMessage = Boolean((infoString.length + message.length) >= 2000);

    let content = '';
    
    if (infoString.length > 0) {
      content = (attachMessage) ? infoString : `${infoString}\n\`\`\`${message}\`\`\``;
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
        console.log(`${infoString} WARN 🟡: Logger Discord Transport -> Bad Response -> ${(response as any).reason}`);
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
        console.log(`${infoString} WARN 🟡: Logger Discord Transport -> Bad Response -> ${(response as any).reason}`);
      };
    }

    return {
      destination: this.destination,
      channelName: this.channelName,
      result: true,
    };
  }
}
