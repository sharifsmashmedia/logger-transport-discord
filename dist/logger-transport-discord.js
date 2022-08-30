var DiscordTransport = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    __markAsModule(target);
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // node_modules/.pnpm/@simplyhexagonal+function-queue@2.0.0/node_modules/@simplyhexagonal/function-queue/dist/function-queue.js
  var require_function_queue = __commonJS({
    "node_modules/.pnpm/@simplyhexagonal+function-queue@2.0.0/node_modules/@simplyhexagonal/function-queue/dist/function-queue.js"(exports, module) {
      var FunctionQueue2 = (() => {
        var __create2 = Object.create;
        var __defProp2 = Object.defineProperty;
        var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
        var __getOwnPropNames2 = Object.getOwnPropertyNames;
        var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
        var __getProtoOf2 = Object.getPrototypeOf;
        var __hasOwnProp2 = Object.prototype.hasOwnProperty;
        var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
        var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
        var __spreadValues2 = (a, b) => {
          for (var prop in b || (b = {}))
            if (__hasOwnProp2.call(b, prop))
              __defNormalProp2(a, prop, b[prop]);
          if (__getOwnPropSymbols2)
            for (var prop of __getOwnPropSymbols2(b)) {
              if (__propIsEnum2.call(b, prop))
                __defNormalProp2(a, prop, b[prop]);
            }
          return a;
        };
        var __markAsModule2 = (target) => __defProp2(target, "__esModule", { value: true });
        var __commonJS2 = (cb, mod) => function __require2() {
          return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
        };
        var __export2 = (target, all) => {
          __markAsModule2(target);
          for (var name in all)
            __defProp2(target, name, { get: all[name], enumerable: true });
        };
        var __reExport2 = (target, module2, desc) => {
          if (module2 && typeof module2 === "object" || typeof module2 === "function") {
            for (let key of __getOwnPropNames2(module2))
              if (!__hasOwnProp2.call(target, key) && key !== "default")
                __defProp2(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc2(module2, key)) || desc.enumerable });
          }
          return target;
        };
        var __toModule2 = (module2) => {
          return __reExport2(__markAsModule2(__defProp2(module2 != null ? __create2(__getProtoOf2(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
        };
        var require_short_unique_id = __commonJS2({
          "node_modules/.pnpm/short-unique-id@4.4.4/node_modules/short-unique-id/dist/short-unique-id.js"(exports2, module2) {
            var ShortUniqueId2 = (() => {
              var __defProp22 = Object.defineProperty;
              var __getOwnPropSymbols22 = Object.getOwnPropertySymbols;
              var __hasOwnProp22 = Object.prototype.hasOwnProperty;
              var __propIsEnum22 = Object.prototype.propertyIsEnumerable;
              var __defNormalProp22 = (obj, key, value) => key in obj ? __defProp22(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
              var __spreadValues22 = (a, b) => {
                for (var prop in b || (b = {}))
                  if (__hasOwnProp22.call(b, prop))
                    __defNormalProp22(a, prop, b[prop]);
                if (__getOwnPropSymbols22)
                  for (var prop of __getOwnPropSymbols22(b)) {
                    if (__propIsEnum22.call(b, prop))
                      __defNormalProp22(a, prop, b[prop]);
                  }
                return a;
              };
              var __markAsModule22 = (target) => __defProp22(target, "__esModule", { value: true });
              var __export22 = (target, all) => {
                __markAsModule22(target);
                for (var name in all)
                  __defProp22(target, name, { get: all[name], enumerable: true });
              };
              var src_exports22 = {};
              __export22(src_exports22, {
                DEFAULT_UUID_LENGTH: () => DEFAULT_UUID_LENGTH,
                default: () => ShortUniqueId3
              });
              var version22 = "4.4.4";
              var DEFAULT_UUID_LENGTH = 6;
              var DEFAULT_OPTIONS = {
                dictionary: "alphanum",
                shuffle: true,
                debug: false,
                length: DEFAULT_UUID_LENGTH
              };
              var _ShortUniqueId = class extends Function {
                constructor(argOptions = {}) {
                  super();
                  this.dictIndex = 0;
                  this.dictRange = [];
                  this.lowerBound = 0;
                  this.upperBound = 0;
                  this.dictLength = 0;
                  this._digit_first_ascii = 48;
                  this._digit_last_ascii = 58;
                  this._alpha_lower_first_ascii = 97;
                  this._alpha_lower_last_ascii = 123;
                  this._hex_last_ascii = 103;
                  this._alpha_upper_first_ascii = 65;
                  this._alpha_upper_last_ascii = 91;
                  this._number_dict_ranges = {
                    digits: [this._digit_first_ascii, this._digit_last_ascii]
                  };
                  this._alpha_dict_ranges = {
                    lowerCase: [this._alpha_lower_first_ascii, this._alpha_lower_last_ascii],
                    upperCase: [this._alpha_upper_first_ascii, this._alpha_upper_last_ascii]
                  };
                  this._alpha_lower_dict_ranges = {
                    lowerCase: [this._alpha_lower_first_ascii, this._alpha_lower_last_ascii]
                  };
                  this._alpha_upper_dict_ranges = {
                    upperCase: [this._alpha_upper_first_ascii, this._alpha_upper_last_ascii]
                  };
                  this._alphanum_dict_ranges = {
                    digits: [this._digit_first_ascii, this._digit_last_ascii],
                    lowerCase: [this._alpha_lower_first_ascii, this._alpha_lower_last_ascii],
                    upperCase: [this._alpha_upper_first_ascii, this._alpha_upper_last_ascii]
                  };
                  this._alphanum_lower_dict_ranges = {
                    digits: [this._digit_first_ascii, this._digit_last_ascii],
                    lowerCase: [this._alpha_lower_first_ascii, this._alpha_lower_last_ascii]
                  };
                  this._alphanum_upper_dict_ranges = {
                    digits: [this._digit_first_ascii, this._digit_last_ascii],
                    upperCase: [this._alpha_upper_first_ascii, this._alpha_upper_last_ascii]
                  };
                  this._hex_dict_ranges = {
                    decDigits: [this._digit_first_ascii, this._digit_last_ascii],
                    alphaDigits: [this._alpha_lower_first_ascii, this._hex_last_ascii]
                  };
                  this.log = (...args) => {
                    const finalArgs = [...args];
                    finalArgs[0] = `[short-unique-id] ${args[0]}`;
                    if (this.debug === true) {
                      if (typeof console !== "undefined" && console !== null) {
                        return console.log(...finalArgs);
                      }
                    }
                  };
                  this.setDictionary = (dictionary2, shuffle2) => {
                    let finalDict;
                    if (dictionary2 && Array.isArray(dictionary2) && dictionary2.length > 1) {
                      finalDict = dictionary2;
                    } else {
                      finalDict = [];
                      let i;
                      this.dictIndex = i = 0;
                      const rangesName = `_${dictionary2}_dict_ranges`;
                      const ranges = this[rangesName];
                      Object.keys(ranges).forEach((rangeType) => {
                        const rangeTypeKey = rangeType;
                        this.dictRange = ranges[rangeTypeKey];
                        this.lowerBound = this.dictRange[0];
                        this.upperBound = this.dictRange[1];
                        for (this.dictIndex = i = this.lowerBound; this.lowerBound <= this.upperBound ? i < this.upperBound : i > this.upperBound; this.dictIndex = this.lowerBound <= this.upperBound ? i += 1 : i -= 1) {
                          finalDict.push(String.fromCharCode(this.dictIndex));
                        }
                      });
                    }
                    if (shuffle2) {
                      const PROBABILITY = 0.5;
                      finalDict = finalDict.sort(() => Math.random() - PROBABILITY);
                    }
                    this.dict = finalDict;
                    this.dictLength = this.dict.length;
                    this.counter = 0;
                  };
                  this.seq = () => {
                    return this.sequentialUUID();
                  };
                  this.sequentialUUID = () => {
                    let counterDiv;
                    let counterRem;
                    let id = "";
                    counterDiv = this.counter;
                    do {
                      counterRem = counterDiv % this.dictLength;
                      counterDiv = Math.trunc(counterDiv / this.dictLength);
                      id += this.dict[counterRem];
                    } while (counterDiv !== 0);
                    this.counter += 1;
                    return id;
                  };
                  this.randomUUID = (uuidLength = this.uuidLength || DEFAULT_UUID_LENGTH) => {
                    let id;
                    let randomPartIdx;
                    let j;
                    if (uuidLength === null || typeof uuidLength === "undefined" || uuidLength < 1) {
                      throw new Error("Invalid UUID Length Provided");
                    }
                    const isPositive = uuidLength >= 0;
                    id = "";
                    for (j = 0; j < uuidLength; j += 1) {
                      randomPartIdx = parseInt((Math.random() * this.dictLength).toFixed(0), 10) % this.dictLength;
                      id += this.dict[randomPartIdx];
                    }
                    return id;
                  };
                  this.availableUUIDs = (uuidLength = this.uuidLength) => {
                    return parseFloat(Math.pow([...new Set(this.dict)].length, uuidLength).toFixed(0));
                  };
                  this.approxMaxBeforeCollision = (rounds = this.availableUUIDs(this.uuidLength)) => {
                    return parseFloat(Math.sqrt(Math.PI / 2 * rounds).toFixed(20));
                  };
                  this.collisionProbability = (rounds = this.availableUUIDs(this.uuidLength), uuidLength = this.uuidLength) => {
                    return parseFloat((this.approxMaxBeforeCollision(rounds) / this.availableUUIDs(uuidLength)).toFixed(20));
                  };
                  this.uniqueness = (rounds = this.availableUUIDs(this.uuidLength)) => {
                    const score = parseFloat((1 - this.approxMaxBeforeCollision(rounds) / rounds).toFixed(20));
                    return score > 1 ? 1 : score < 0 ? 0 : score;
                  };
                  this.getVersion = () => {
                    return this.version;
                  };
                  this.stamp = (finalLength) => {
                    if (typeof finalLength !== "number" || finalLength < 10) {
                      throw new Error("Param finalLength must be number greater than 10");
                    }
                    const hexStamp = Math.floor(+new Date() / 1e3).toString(16);
                    const idLength = finalLength - 9;
                    const rndIdx = Math.round(Math.random() * (idLength > 15 ? 15 : idLength));
                    const id = this.randomUUID(idLength);
                    return `${id.substr(0, rndIdx)}${hexStamp}${id.substr(rndIdx)}${rndIdx.toString(16)}`;
                  };
                  this.parseStamp = (stamp) => {
                    if (stamp.length < 10) {
                      throw new Error("Stamp length invalid");
                    }
                    const rndIdx = parseInt(stamp.substr(stamp.length - 1, 1), 16);
                    return new Date(parseInt(stamp.substr(rndIdx, 8), 16) * 1e3);
                  };
                  const options = __spreadValues22(__spreadValues22({}, DEFAULT_OPTIONS), argOptions);
                  this.counter = 0;
                  this.debug = false;
                  this.dict = [];
                  this.version = version22;
                  const {
                    dictionary,
                    shuffle,
                    length
                  } = options;
                  this.uuidLength = length;
                  this.setDictionary(dictionary, shuffle);
                  this.debug = options.debug;
                  this.log(this.dict);
                  this.log(`Generator instantiated with Dictionary Size ${this.dictLength}`);
                  return new Proxy(this, {
                    apply: (target, that, args) => this.randomUUID(...args)
                  });
                }
              };
              var ShortUniqueId3 = _ShortUniqueId;
              ShortUniqueId3.default = _ShortUniqueId;
              return src_exports22;
            })();
            typeof module2 != "undefined" && (module2.exports = ShortUniqueId2.default), typeof window != "undefined" && (ShortUniqueId2 = ShortUniqueId2.default);
          }
        });
        var src_exports2 = {};
        __export2(src_exports2, {
          default: () => src_default
        });
        var import_short_unique_id = __toModule2(require_short_unique_id());
        var version2 = "2.0.0";
        var uid = new import_short_unique_id.default({ length: 8 });
        var defaultOptions = {
          waitTimeBetweenRuns: 100,
          getResultTimeout: 6e4,
          maxRetries: 1,
          cleanupResultsOlderThan: 6e4
        };
        var sleep2 = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        var FunctionQueue3 = class {
          constructor(fn, options) {
            this._queue = [];
            this._processing = false;
            this.results = [];
            this.processQueuePromise = Promise.resolve([]);
            this._tryFn = async (id, payload, startTimestamp) => {
              let retries = 0;
              let finalResult;
              while ((!finalResult || finalResult.error) && retries <= this._options.maxRetries) {
                retries++;
                try {
                  await sleep2(this._options.waitTimeBetweenRuns);
                  const fnResult = await this._fn(payload);
                  const endTimestamp = Date.now();
                  const duration = endTimestamp - startTimestamp;
                  finalResult = {
                    id,
                    duration,
                    startTimestamp,
                    endTimestamp,
                    result: fnResult
                  };
                } catch (error) {
                  const endTimestamp = Date.now();
                  const duration = endTimestamp - startTimestamp;
                  finalResult = {
                    id,
                    duration,
                    startTimestamp,
                    endTimestamp,
                    error
                  };
                }
              }
              return finalResult;
            };
            this._fn = fn;
            this._options = __spreadValues2(__spreadValues2({}, defaultOptions), options || {});
          }
          queuePayload(payload) {
            const id = uid();
            this._queue.push({ payload, id });
            return id;
          }
          async _processQueue() {
            this._processing = true;
            let entry;
            const startTimestamp = Date.now();
            while (entry = this._queue.shift()) {
              const { payload, id } = entry;
              try {
                const result = await this._tryFn(id, payload, startTimestamp);
                this.results.push(__spreadValues2({}, result));
              } catch (error) {
                const endTimestamp = Date.now();
                this.results.push({
                  id,
                  startTimestamp,
                  duration: endTimestamp - startTimestamp,
                  endTimestamp,
                  error
                });
              }
            }
            this._processing = false;
          }
          cleanupResults() {
            this.results = this.results.filter((r) => {
              const age = Date.now() - r.endTimestamp;
              return age < this._options.cleanupResultsOlderThan;
            });
          }
          async processQueue() {
            if (this._processing) {
              return;
            }
            this.cleanupResults();
            this.processQueuePromise = this._processQueue().then(() => this.results);
          }
          async getResult(id) {
            this.cleanupResults();
            let result = this.results.find((r) => r.id === id);
            const startTimestamp = Date.now();
            while (!result && Date.now() - startTimestamp < this._options.getResultTimeout) {
              await sleep2(this._options.waitTimeBetweenRuns);
              result = this.results.find((r) => r.id === id);
            }
            if (!result) {
              const endTimestamp = Date.now();
              return {
                id,
                startTimestamp,
                duration: endTimestamp - startTimestamp,
                endTimestamp,
                error: new Error(`Result for id ${id} not found (timeout of ${this._options.getResultTimeout}ms exceeded)`)
              };
            }
            this.results = this.results.filter((r) => r.id !== id);
            return result;
          }
        };
        FunctionQueue3.version = version2;
        var src_default = FunctionQueue3;
        return src_exports2;
      })();
      typeof module != "undefined" && (module.exports = FunctionQueue2.default), typeof window != "undefined" && (FunctionQueue2 = FunctionQueue2.default);
    }
  });

  // src/index.ts
  var src_exports = {};
  __export(src_exports, {
    Multipart: () => Multipart,
    default: () => DiscordTransport,
    version: () => version
  });
  var import_function_queue = __toModule(require_function_queue());
  var import_logger = __toModule(__require("@simplyhexagonal/logger"));

  // package.json
  var version = "3.1.2";

  // src/index.ts
  var axios;
  if (typeof window !== "undefined") {
    axios = window.axios;
  } else {
    axios = __require("axios");
  }
  var sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  var Multipart = class {
    constructor(...data) {
      this.boundary = "loggerTransportDiscord";
      this.multipart = "";
      if (data.length > 0) {
        data.forEach(({ name, data: data2, fileName }) => {
          this.append(name, data2, fileName);
        });
      }
    }
    append(name, data, fileName) {
      if (!data)
        return;
      let contentInfo = `Content-Disposition: form-data; name="${name}"`;
      if (fileName) {
        contentInfo += `; filename="${fileName}"`;
      }
      contentInfo += "\nContent-Type: text/plain; charset=utf-8\n";
      this.multipart += `--${this.boundary}
${contentInfo}
${data}
--${this.boundary}--
`;
    }
  };
  var DEFAULT_RATE_LIMIT = 420;
  var DiscordTransport = class extends import_logger.LoggerTransport {
    constructor(options) {
      const r = Math.random().toString(36).substring(7);
      super(__spreadProps(__spreadValues({}, options), { r }));
      this.destination = options.destination;
      if (r !== this._r) {
        return this;
      }
      this._rateLimit = options.rateLimit || DEFAULT_RATE_LIMIT;
      this._axios = axios.create({
        url: this.destination
      });
      const qFn = async (payload) => {
        return this.postToWebhook(payload);
      };
      const fnQ = new import_function_queue.default(qFn, { waitTimeBetweenRuns: this._rateLimit, maxRetries: 0 });
      this._fnQ = fnQ;
    }
    async debug([prefixes, ...message]) {
      const fnQ = this._fnQ;
      const payloadId = fnQ.queuePayload({
        infoString: `**${prefixes} DEBUG** \u{1F41E}\uFE0F:`,
        message: `${this.format(message)}`
      });
      fnQ.processQueue();
      const { result, error } = await fnQ.getResult(payloadId);
      if (error) {
        throw error;
      }
      return result;
    }
    async info([prefixes, ...message]) {
      const fnQ = this._fnQ;
      const payloadId = fnQ.queuePayload({
        infoString: `**${prefixes} INFO** \u2705\uFE0F\uFE0F:`,
        message: `${this.format(message)}`
      });
      fnQ.processQueue();
      const { result, error } = await fnQ.getResult(payloadId);
      if (error) {
        throw error;
      }
      return result;
    }
    async warn([prefixes, ...message]) {
      const fnQ = this._fnQ;
      const payloadId = fnQ.queuePayload({
        infoString: `**${prefixes} WARN** \u{1F7E1}:`,
        message: `${this.format(message)}`
      });
      fnQ.processQueue();
      const { result, error } = await fnQ.getResult(payloadId);
      if (error) {
        throw error;
      }
      return result;
    }
    async error([prefixes, ...message]) {
      const fnQ = this._fnQ;
      const payloadId = fnQ.queuePayload({
        infoString: `**${prefixes} ERROR** \u{1F6A8}\uFE0F:`,
        message: `${this.format(message)}`
      });
      fnQ.processQueue();
      const { result, error } = await fnQ.getResult(payloadId);
      if (error) {
        throw error;
      }
      return result;
    }
    async fatal([prefixes, ...message]) {
      const fnQ = this._fnQ;
      const payloadId = fnQ.queuePayload({
        infoString: `**${prefixes} FATAL** \u{1F480}:`,
        message: `${this.format(message)}`
      });
      fnQ.processQueue();
      const { result, error } = await fnQ.getResult(payloadId);
      if (error) {
        throw error;
      }
      return result;
    }
    async all([prefixes, ...message]) {
      const fnQ = this._fnQ;
      const payloadId = fnQ.queuePayload({
        infoString: `**${prefixes} ALL** \u{1F4DD}:`,
        message: `${this.format(message)}`
      });
      fnQ.processQueue();
      const { result, error } = await fnQ.getResult(payloadId);
      if (error) {
        throw error;
      }
      return result;
    }
    async raw([prefixes, ...message]) {
      const fnQ = this._fnQ;
      const payloadId = fnQ.queuePayload({
        infoString: "",
        message: this.format(message)
      });
      fnQ.processQueue();
      const { result, error } = await fnQ.getResult(payloadId);
      if (error) {
        throw error;
      }
      return result;
    }
    async postToWebhook({ infoString, message }) {
      const attachMessage = Boolean(infoString.length + message.length >= 2e3);
      let content = "";
      if (infoString.length > 0) {
        content = attachMessage ? infoString : `${infoString}
\`\`\`
${message}
\`\`\``;
      } else if (!attachMessage) {
        content = message;
      }
      let data;
      let config = {};
      let response;
      if (content.length > 0) {
        data = {
          content
        };
        response = await this._axios.post(this.destination, data, config).catch((reason) => {
          return {
            status: 400,
            reason
          };
        });
        if (response.status < 200 || response.status > 399) {
          console.error(`Bad Response: ${response.reason}`);
        }
        ;
      }
      if (attachMessage) {
        const multi = new Multipart({ name: "file", data: message, fileName: "message.txt" });
        data = multi.multipart;
        config = {
          headers: {
            "Content-Type": `multipart/form-data; boundary=${multi.boundary}`
          }
        };
        await sleep(this._rateLimit || DEFAULT_RATE_LIMIT);
        response = await this._axios.post(this.destination, data, config).catch((reason) => {
          return {
            status: 400,
            reason
          };
        });
        if (response.status < 200 || response.status > 399) {
          console.error(`Bad Response: ${response.reason}`);
        }
        ;
      }
      return {
        destination: this.destination,
        channelName: this.channelName,
        result: true
      };
    }
  };
  DiscordTransport.version = version;
  return src_exports;
})();
//# sourceMappingURL=logger-transport-discord.js.map
'undefined'!=typeof module&&(module.exports=DiscordTransport.default),'undefined'!=typeof window&&(DiscordTransport=DiscordTransport.default);