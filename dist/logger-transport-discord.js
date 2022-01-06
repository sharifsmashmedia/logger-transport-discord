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
        var version3 = "2.0.0";
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
        FunctionQueue3.version = version3;
        var src_default = FunctionQueue3;
        return src_exports2;
      })();
      typeof module != "undefined" && (module.exports = FunctionQueue2.default), typeof window != "undefined" && (FunctionQueue2 = FunctionQueue2.default);
    }
  });

  // node_modules/.pnpm/serialize-error@8.1.0/node_modules/serialize-error/index.js
  var require_serialize_error = __commonJS({
    "node_modules/.pnpm/serialize-error@8.1.0/node_modules/serialize-error/index.js"(exports, module) {
      "use strict";
      var NonError = class extends Error {
        constructor(message) {
          super(NonError._prepareSuperMessage(message));
          Object.defineProperty(this, "name", {
            value: "NonError",
            configurable: true,
            writable: true
          });
          if (Error.captureStackTrace) {
            Error.captureStackTrace(this, NonError);
          }
        }
        static _prepareSuperMessage(message) {
          try {
            return JSON.stringify(message);
          } catch (e) {
            return String(message);
          }
        }
      };
      var commonProperties = [
        { property: "name", enumerable: false },
        { property: "message", enumerable: false },
        { property: "stack", enumerable: false },
        { property: "code", enumerable: true }
      ];
      var isCalled = Symbol(".toJSON called");
      var toJSON = (from) => {
        from[isCalled] = true;
        const json = from.toJSON();
        delete from[isCalled];
        return json;
      };
      var destroyCircular = ({
        from,
        seen,
        to_,
        forceEnumerable,
        maxDepth,
        depth
      }) => {
        const to = to_ || (Array.isArray(from) ? [] : {});
        seen.push(from);
        if (depth >= maxDepth) {
          return to;
        }
        if (typeof from.toJSON === "function" && from[isCalled] !== true) {
          return toJSON(from);
        }
        for (const [key, value] of Object.entries(from)) {
          if (typeof Buffer === "function" && Buffer.isBuffer(value)) {
            to[key] = "[object Buffer]";
            continue;
          }
          if (typeof value === "function") {
            continue;
          }
          if (!value || typeof value !== "object") {
            to[key] = value;
            continue;
          }
          if (!seen.includes(from[key])) {
            depth++;
            to[key] = destroyCircular({
              from: from[key],
              seen: seen.slice(),
              forceEnumerable,
              maxDepth,
              depth
            });
            continue;
          }
          to[key] = "[Circular]";
        }
        for (const { property, enumerable } of commonProperties) {
          if (typeof from[property] === "string") {
            Object.defineProperty(to, property, {
              value: from[property],
              enumerable: forceEnumerable ? true : enumerable,
              configurable: true,
              writable: true
            });
          }
        }
        return to;
      };
      var serializeError2 = (value, options = {}) => {
        const { maxDepth = Number.POSITIVE_INFINITY } = options;
        if (typeof value === "object" && value !== null) {
          return destroyCircular({
            from: value,
            seen: [],
            forceEnumerable: true,
            maxDepth,
            depth: 0
          });
        }
        if (typeof value === "function") {
          return `[Function: ${value.name || "anonymous"}]`;
        }
        return value;
      };
      var deserializeError = (value, options = {}) => {
        const { maxDepth = Number.POSITIVE_INFINITY } = options;
        if (value instanceof Error) {
          return value;
        }
        if (typeof value === "object" && value !== null && !Array.isArray(value)) {
          const newError = new Error();
          destroyCircular({
            from: value,
            seen: [],
            to_: newError,
            maxDepth,
            depth: 0
          });
          return newError;
        }
        return new NonError(value);
      };
      module.exports = {
        serializeError: serializeError2,
        deserializeError
      };
    }
  });

  // node_modules/.pnpm/cuint@0.2.2/node_modules/cuint/lib/uint32.js
  var require_uint32 = __commonJS({
    "node_modules/.pnpm/cuint@0.2.2/node_modules/cuint/lib/uint32.js"(exports, module) {
      (function(root) {
        var radixPowerCache = {
          36: UINT32(Math.pow(36, 5)),
          16: UINT32(Math.pow(16, 7)),
          10: UINT32(Math.pow(10, 9)),
          2: UINT32(Math.pow(2, 30))
        };
        var radixCache = {
          36: UINT32(36),
          16: UINT32(16),
          10: UINT32(10),
          2: UINT32(2)
        };
        function UINT32(l, h) {
          if (!(this instanceof UINT32))
            return new UINT32(l, h);
          this._low = 0;
          this._high = 0;
          this.remainder = null;
          if (typeof h == "undefined")
            return fromNumber.call(this, l);
          if (typeof l == "string")
            return fromString.call(this, l, h);
          fromBits.call(this, l, h);
        }
        function fromBits(l, h) {
          this._low = l | 0;
          this._high = h | 0;
          return this;
        }
        UINT32.prototype.fromBits = fromBits;
        function fromNumber(value) {
          this._low = value & 65535;
          this._high = value >>> 16;
          return this;
        }
        UINT32.prototype.fromNumber = fromNumber;
        function fromString(s, radix) {
          var value = parseInt(s, radix || 10);
          this._low = value & 65535;
          this._high = value >>> 16;
          return this;
        }
        UINT32.prototype.fromString = fromString;
        UINT32.prototype.toNumber = function() {
          return this._high * 65536 + this._low;
        };
        UINT32.prototype.toString = function(radix) {
          return this.toNumber().toString(radix || 10);
        };
        UINT32.prototype.add = function(other) {
          var a00 = this._low + other._low;
          var a16 = a00 >>> 16;
          a16 += this._high + other._high;
          this._low = a00 & 65535;
          this._high = a16 & 65535;
          return this;
        };
        UINT32.prototype.subtract = function(other) {
          return this.add(other.clone().negate());
        };
        UINT32.prototype.multiply = function(other) {
          var a16 = this._high;
          var a00 = this._low;
          var b16 = other._high;
          var b00 = other._low;
          var c16, c00;
          c00 = a00 * b00;
          c16 = c00 >>> 16;
          c16 += a16 * b00;
          c16 &= 65535;
          c16 += a00 * b16;
          this._low = c00 & 65535;
          this._high = c16 & 65535;
          return this;
        };
        UINT32.prototype.div = function(other) {
          if (other._low == 0 && other._high == 0)
            throw Error("division by zero");
          if (other._high == 0 && other._low == 1) {
            this.remainder = new UINT32(0);
            return this;
          }
          if (other.gt(this)) {
            this.remainder = this.clone();
            this._low = 0;
            this._high = 0;
            return this;
          }
          if (this.eq(other)) {
            this.remainder = new UINT32(0);
            this._low = 1;
            this._high = 0;
            return this;
          }
          var _other = other.clone();
          var i = -1;
          while (!this.lt(_other)) {
            _other.shiftLeft(1, true);
            i++;
          }
          this.remainder = this.clone();
          this._low = 0;
          this._high = 0;
          for (; i >= 0; i--) {
            _other.shiftRight(1);
            if (!this.remainder.lt(_other)) {
              this.remainder.subtract(_other);
              if (i >= 16) {
                this._high |= 1 << i - 16;
              } else {
                this._low |= 1 << i;
              }
            }
          }
          return this;
        };
        UINT32.prototype.negate = function() {
          var v = (~this._low & 65535) + 1;
          this._low = v & 65535;
          this._high = ~this._high + (v >>> 16) & 65535;
          return this;
        };
        UINT32.prototype.equals = UINT32.prototype.eq = function(other) {
          return this._low == other._low && this._high == other._high;
        };
        UINT32.prototype.greaterThan = UINT32.prototype.gt = function(other) {
          if (this._high > other._high)
            return true;
          if (this._high < other._high)
            return false;
          return this._low > other._low;
        };
        UINT32.prototype.lessThan = UINT32.prototype.lt = function(other) {
          if (this._high < other._high)
            return true;
          if (this._high > other._high)
            return false;
          return this._low < other._low;
        };
        UINT32.prototype.or = function(other) {
          this._low |= other._low;
          this._high |= other._high;
          return this;
        };
        UINT32.prototype.and = function(other) {
          this._low &= other._low;
          this._high &= other._high;
          return this;
        };
        UINT32.prototype.not = function() {
          this._low = ~this._low & 65535;
          this._high = ~this._high & 65535;
          return this;
        };
        UINT32.prototype.xor = function(other) {
          this._low ^= other._low;
          this._high ^= other._high;
          return this;
        };
        UINT32.prototype.shiftRight = UINT32.prototype.shiftr = function(n) {
          if (n > 16) {
            this._low = this._high >> n - 16;
            this._high = 0;
          } else if (n == 16) {
            this._low = this._high;
            this._high = 0;
          } else {
            this._low = this._low >> n | this._high << 16 - n & 65535;
            this._high >>= n;
          }
          return this;
        };
        UINT32.prototype.shiftLeft = UINT32.prototype.shiftl = function(n, allowOverflow) {
          if (n > 16) {
            this._high = this._low << n - 16;
            this._low = 0;
            if (!allowOverflow) {
              this._high &= 65535;
            }
          } else if (n == 16) {
            this._high = this._low;
            this._low = 0;
          } else {
            this._high = this._high << n | this._low >> 16 - n;
            this._low = this._low << n & 65535;
            if (!allowOverflow) {
              this._high &= 65535;
            }
          }
          return this;
        };
        UINT32.prototype.rotateLeft = UINT32.prototype.rotl = function(n) {
          var v = this._high << 16 | this._low;
          v = v << n | v >>> 32 - n;
          this._low = v & 65535;
          this._high = v >>> 16;
          return this;
        };
        UINT32.prototype.rotateRight = UINT32.prototype.rotr = function(n) {
          var v = this._high << 16 | this._low;
          v = v >>> n | v << 32 - n;
          this._low = v & 65535;
          this._high = v >>> 16;
          return this;
        };
        UINT32.prototype.clone = function() {
          return new UINT32(this._low, this._high);
        };
        if (typeof define != "undefined" && define.amd) {
          define([], function() {
            return UINT32;
          });
        } else if (typeof module != "undefined" && module.exports) {
          module.exports = UINT32;
        } else {
          root["UINT32"] = UINT32;
        }
      })(exports);
    }
  });

  // node_modules/.pnpm/cuint@0.2.2/node_modules/cuint/lib/uint64.js
  var require_uint64 = __commonJS({
    "node_modules/.pnpm/cuint@0.2.2/node_modules/cuint/lib/uint64.js"(exports, module) {
      (function(root) {
        var radixPowerCache = {
          16: UINT64(Math.pow(16, 5)),
          10: UINT64(Math.pow(10, 5)),
          2: UINT64(Math.pow(2, 5))
        };
        var radixCache = {
          16: UINT64(16),
          10: UINT64(10),
          2: UINT64(2)
        };
        function UINT64(a00, a16, a32, a48) {
          if (!(this instanceof UINT64))
            return new UINT64(a00, a16, a32, a48);
          this.remainder = null;
          if (typeof a00 == "string")
            return fromString.call(this, a00, a16);
          if (typeof a16 == "undefined")
            return fromNumber.call(this, a00);
          fromBits.apply(this, arguments);
        }
        function fromBits(a00, a16, a32, a48) {
          if (typeof a32 == "undefined") {
            this._a00 = a00 & 65535;
            this._a16 = a00 >>> 16;
            this._a32 = a16 & 65535;
            this._a48 = a16 >>> 16;
            return this;
          }
          this._a00 = a00 | 0;
          this._a16 = a16 | 0;
          this._a32 = a32 | 0;
          this._a48 = a48 | 0;
          return this;
        }
        UINT64.prototype.fromBits = fromBits;
        function fromNumber(value) {
          this._a00 = value & 65535;
          this._a16 = value >>> 16;
          this._a32 = 0;
          this._a48 = 0;
          return this;
        }
        UINT64.prototype.fromNumber = fromNumber;
        function fromString(s, radix) {
          radix = radix || 10;
          this._a00 = 0;
          this._a16 = 0;
          this._a32 = 0;
          this._a48 = 0;
          var radixUint = radixPowerCache[radix] || new UINT64(Math.pow(radix, 5));
          for (var i = 0, len = s.length; i < len; i += 5) {
            var size = Math.min(5, len - i);
            var value = parseInt(s.slice(i, i + size), radix);
            this.multiply(size < 5 ? new UINT64(Math.pow(radix, size)) : radixUint).add(new UINT64(value));
          }
          return this;
        }
        UINT64.prototype.fromString = fromString;
        UINT64.prototype.toNumber = function() {
          return this._a16 * 65536 + this._a00;
        };
        UINT64.prototype.toString = function(radix) {
          radix = radix || 10;
          var radixUint = radixCache[radix] || new UINT64(radix);
          if (!this.gt(radixUint))
            return this.toNumber().toString(radix);
          var self = this.clone();
          var res = new Array(64);
          for (var i = 63; i >= 0; i--) {
            self.div(radixUint);
            res[i] = self.remainder.toNumber().toString(radix);
            if (!self.gt(radixUint))
              break;
          }
          res[i - 1] = self.toNumber().toString(radix);
          return res.join("");
        };
        UINT64.prototype.add = function(other) {
          var a00 = this._a00 + other._a00;
          var a16 = a00 >>> 16;
          a16 += this._a16 + other._a16;
          var a32 = a16 >>> 16;
          a32 += this._a32 + other._a32;
          var a48 = a32 >>> 16;
          a48 += this._a48 + other._a48;
          this._a00 = a00 & 65535;
          this._a16 = a16 & 65535;
          this._a32 = a32 & 65535;
          this._a48 = a48 & 65535;
          return this;
        };
        UINT64.prototype.subtract = function(other) {
          return this.add(other.clone().negate());
        };
        UINT64.prototype.multiply = function(other) {
          var a00 = this._a00;
          var a16 = this._a16;
          var a32 = this._a32;
          var a48 = this._a48;
          var b00 = other._a00;
          var b16 = other._a16;
          var b32 = other._a32;
          var b48 = other._a48;
          var c00 = a00 * b00;
          var c16 = c00 >>> 16;
          c16 += a00 * b16;
          var c32 = c16 >>> 16;
          c16 &= 65535;
          c16 += a16 * b00;
          c32 += c16 >>> 16;
          c32 += a00 * b32;
          var c48 = c32 >>> 16;
          c32 &= 65535;
          c32 += a16 * b16;
          c48 += c32 >>> 16;
          c32 &= 65535;
          c32 += a32 * b00;
          c48 += c32 >>> 16;
          c48 += a00 * b48;
          c48 &= 65535;
          c48 += a16 * b32;
          c48 &= 65535;
          c48 += a32 * b16;
          c48 &= 65535;
          c48 += a48 * b00;
          this._a00 = c00 & 65535;
          this._a16 = c16 & 65535;
          this._a32 = c32 & 65535;
          this._a48 = c48 & 65535;
          return this;
        };
        UINT64.prototype.div = function(other) {
          if (other._a16 == 0 && other._a32 == 0 && other._a48 == 0) {
            if (other._a00 == 0)
              throw Error("division by zero");
            if (other._a00 == 1) {
              this.remainder = new UINT64(0);
              return this;
            }
          }
          if (other.gt(this)) {
            this.remainder = this.clone();
            this._a00 = 0;
            this._a16 = 0;
            this._a32 = 0;
            this._a48 = 0;
            return this;
          }
          if (this.eq(other)) {
            this.remainder = new UINT64(0);
            this._a00 = 1;
            this._a16 = 0;
            this._a32 = 0;
            this._a48 = 0;
            return this;
          }
          var _other = other.clone();
          var i = -1;
          while (!this.lt(_other)) {
            _other.shiftLeft(1, true);
            i++;
          }
          this.remainder = this.clone();
          this._a00 = 0;
          this._a16 = 0;
          this._a32 = 0;
          this._a48 = 0;
          for (; i >= 0; i--) {
            _other.shiftRight(1);
            if (!this.remainder.lt(_other)) {
              this.remainder.subtract(_other);
              if (i >= 48) {
                this._a48 |= 1 << i - 48;
              } else if (i >= 32) {
                this._a32 |= 1 << i - 32;
              } else if (i >= 16) {
                this._a16 |= 1 << i - 16;
              } else {
                this._a00 |= 1 << i;
              }
            }
          }
          return this;
        };
        UINT64.prototype.negate = function() {
          var v = (~this._a00 & 65535) + 1;
          this._a00 = v & 65535;
          v = (~this._a16 & 65535) + (v >>> 16);
          this._a16 = v & 65535;
          v = (~this._a32 & 65535) + (v >>> 16);
          this._a32 = v & 65535;
          this._a48 = ~this._a48 + (v >>> 16) & 65535;
          return this;
        };
        UINT64.prototype.equals = UINT64.prototype.eq = function(other) {
          return this._a48 == other._a48 && this._a00 == other._a00 && this._a32 == other._a32 && this._a16 == other._a16;
        };
        UINT64.prototype.greaterThan = UINT64.prototype.gt = function(other) {
          if (this._a48 > other._a48)
            return true;
          if (this._a48 < other._a48)
            return false;
          if (this._a32 > other._a32)
            return true;
          if (this._a32 < other._a32)
            return false;
          if (this._a16 > other._a16)
            return true;
          if (this._a16 < other._a16)
            return false;
          return this._a00 > other._a00;
        };
        UINT64.prototype.lessThan = UINT64.prototype.lt = function(other) {
          if (this._a48 < other._a48)
            return true;
          if (this._a48 > other._a48)
            return false;
          if (this._a32 < other._a32)
            return true;
          if (this._a32 > other._a32)
            return false;
          if (this._a16 < other._a16)
            return true;
          if (this._a16 > other._a16)
            return false;
          return this._a00 < other._a00;
        };
        UINT64.prototype.or = function(other) {
          this._a00 |= other._a00;
          this._a16 |= other._a16;
          this._a32 |= other._a32;
          this._a48 |= other._a48;
          return this;
        };
        UINT64.prototype.and = function(other) {
          this._a00 &= other._a00;
          this._a16 &= other._a16;
          this._a32 &= other._a32;
          this._a48 &= other._a48;
          return this;
        };
        UINT64.prototype.xor = function(other) {
          this._a00 ^= other._a00;
          this._a16 ^= other._a16;
          this._a32 ^= other._a32;
          this._a48 ^= other._a48;
          return this;
        };
        UINT64.prototype.not = function() {
          this._a00 = ~this._a00 & 65535;
          this._a16 = ~this._a16 & 65535;
          this._a32 = ~this._a32 & 65535;
          this._a48 = ~this._a48 & 65535;
          return this;
        };
        UINT64.prototype.shiftRight = UINT64.prototype.shiftr = function(n) {
          n %= 64;
          if (n >= 48) {
            this._a00 = this._a48 >> n - 48;
            this._a16 = 0;
            this._a32 = 0;
            this._a48 = 0;
          } else if (n >= 32) {
            n -= 32;
            this._a00 = (this._a32 >> n | this._a48 << 16 - n) & 65535;
            this._a16 = this._a48 >> n & 65535;
            this._a32 = 0;
            this._a48 = 0;
          } else if (n >= 16) {
            n -= 16;
            this._a00 = (this._a16 >> n | this._a32 << 16 - n) & 65535;
            this._a16 = (this._a32 >> n | this._a48 << 16 - n) & 65535;
            this._a32 = this._a48 >> n & 65535;
            this._a48 = 0;
          } else {
            this._a00 = (this._a00 >> n | this._a16 << 16 - n) & 65535;
            this._a16 = (this._a16 >> n | this._a32 << 16 - n) & 65535;
            this._a32 = (this._a32 >> n | this._a48 << 16 - n) & 65535;
            this._a48 = this._a48 >> n & 65535;
          }
          return this;
        };
        UINT64.prototype.shiftLeft = UINT64.prototype.shiftl = function(n, allowOverflow) {
          n %= 64;
          if (n >= 48) {
            this._a48 = this._a00 << n - 48;
            this._a32 = 0;
            this._a16 = 0;
            this._a00 = 0;
          } else if (n >= 32) {
            n -= 32;
            this._a48 = this._a16 << n | this._a00 >> 16 - n;
            this._a32 = this._a00 << n & 65535;
            this._a16 = 0;
            this._a00 = 0;
          } else if (n >= 16) {
            n -= 16;
            this._a48 = this._a32 << n | this._a16 >> 16 - n;
            this._a32 = (this._a16 << n | this._a00 >> 16 - n) & 65535;
            this._a16 = this._a00 << n & 65535;
            this._a00 = 0;
          } else {
            this._a48 = this._a48 << n | this._a32 >> 16 - n;
            this._a32 = (this._a32 << n | this._a16 >> 16 - n) & 65535;
            this._a16 = (this._a16 << n | this._a00 >> 16 - n) & 65535;
            this._a00 = this._a00 << n & 65535;
          }
          if (!allowOverflow) {
            this._a48 &= 65535;
          }
          return this;
        };
        UINT64.prototype.rotateLeft = UINT64.prototype.rotl = function(n) {
          n %= 64;
          if (n == 0)
            return this;
          if (n >= 32) {
            var v = this._a00;
            this._a00 = this._a32;
            this._a32 = v;
            v = this._a48;
            this._a48 = this._a16;
            this._a16 = v;
            if (n == 32)
              return this;
            n -= 32;
          }
          var high = this._a48 << 16 | this._a32;
          var low = this._a16 << 16 | this._a00;
          var _high = high << n | low >>> 32 - n;
          var _low = low << n | high >>> 32 - n;
          this._a00 = _low & 65535;
          this._a16 = _low >>> 16;
          this._a32 = _high & 65535;
          this._a48 = _high >>> 16;
          return this;
        };
        UINT64.prototype.rotateRight = UINT64.prototype.rotr = function(n) {
          n %= 64;
          if (n == 0)
            return this;
          if (n >= 32) {
            var v = this._a00;
            this._a00 = this._a32;
            this._a32 = v;
            v = this._a48;
            this._a48 = this._a16;
            this._a16 = v;
            if (n == 32)
              return this;
            n -= 32;
          }
          var high = this._a48 << 16 | this._a32;
          var low = this._a16 << 16 | this._a00;
          var _high = high >>> n | low << 32 - n;
          var _low = low >>> n | high << 32 - n;
          this._a00 = _low & 65535;
          this._a16 = _low >>> 16;
          this._a32 = _high & 65535;
          this._a48 = _high >>> 16;
          return this;
        };
        UINT64.prototype.clone = function() {
          return new UINT64(this._a00, this._a16, this._a32, this._a48);
        };
        if (typeof define != "undefined" && define.amd) {
          define([], function() {
            return UINT64;
          });
        } else if (typeof module != "undefined" && module.exports) {
          module.exports = UINT64;
        } else {
          root["UINT64"] = UINT64;
        }
      })(exports);
    }
  });

  // node_modules/.pnpm/cuint@0.2.2/node_modules/cuint/index.js
  var require_cuint = __commonJS({
    "node_modules/.pnpm/cuint@0.2.2/node_modules/cuint/index.js"(exports) {
      exports.UINT32 = require_uint32();
      exports.UINT64 = require_uint64();
    }
  });

  // node_modules/.pnpm/xxhashjs@0.2.2/node_modules/xxhashjs/lib/xxhash.js
  var require_xxhash = __commonJS({
    "node_modules/.pnpm/xxhashjs@0.2.2/node_modules/xxhashjs/lib/xxhash.js"(exports, module) {
      var UINT32 = require_cuint().UINT32;
      UINT32.prototype.xxh_update = function(low, high) {
        var b00 = PRIME32_2._low;
        var b16 = PRIME32_2._high;
        var c16, c00;
        c00 = low * b00;
        c16 = c00 >>> 16;
        c16 += high * b00;
        c16 &= 65535;
        c16 += low * b16;
        var a00 = this._low + (c00 & 65535);
        var a16 = a00 >>> 16;
        a16 += this._high + (c16 & 65535);
        var v = a16 << 16 | a00 & 65535;
        v = v << 13 | v >>> 19;
        a00 = v & 65535;
        a16 = v >>> 16;
        b00 = PRIME32_1._low;
        b16 = PRIME32_1._high;
        c00 = a00 * b00;
        c16 = c00 >>> 16;
        c16 += a16 * b00;
        c16 &= 65535;
        c16 += a00 * b16;
        this._low = c00 & 65535;
        this._high = c16 & 65535;
      };
      var PRIME32_1 = UINT32("2654435761");
      var PRIME32_2 = UINT32("2246822519");
      var PRIME32_3 = UINT32("3266489917");
      var PRIME32_4 = UINT32("668265263");
      var PRIME32_5 = UINT32("374761393");
      function toUTF8Array(str) {
        var utf8 = [];
        for (var i = 0, n = str.length; i < n; i++) {
          var charcode = str.charCodeAt(i);
          if (charcode < 128)
            utf8.push(charcode);
          else if (charcode < 2048) {
            utf8.push(192 | charcode >> 6, 128 | charcode & 63);
          } else if (charcode < 55296 || charcode >= 57344) {
            utf8.push(224 | charcode >> 12, 128 | charcode >> 6 & 63, 128 | charcode & 63);
          } else {
            i++;
            charcode = 65536 + ((charcode & 1023) << 10 | str.charCodeAt(i) & 1023);
            utf8.push(240 | charcode >> 18, 128 | charcode >> 12 & 63, 128 | charcode >> 6 & 63, 128 | charcode & 63);
          }
        }
        return new Uint8Array(utf8);
      }
      function XXH2() {
        if (arguments.length == 2)
          return new XXH2(arguments[1]).update(arguments[0]).digest();
        if (!(this instanceof XXH2))
          return new XXH2(arguments[0]);
        init.call(this, arguments[0]);
      }
      function init(seed) {
        this.seed = seed instanceof UINT32 ? seed.clone() : UINT32(seed);
        this.v1 = this.seed.clone().add(PRIME32_1).add(PRIME32_2);
        this.v2 = this.seed.clone().add(PRIME32_2);
        this.v3 = this.seed.clone();
        this.v4 = this.seed.clone().subtract(PRIME32_1);
        this.total_len = 0;
        this.memsize = 0;
        this.memory = null;
        return this;
      }
      XXH2.prototype.init = init;
      XXH2.prototype.update = function(input) {
        var isString = typeof input == "string";
        var isArrayBuffer;
        if (isString) {
          input = toUTF8Array(input);
          isString = false;
          isArrayBuffer = true;
        }
        if (typeof ArrayBuffer !== "undefined" && input instanceof ArrayBuffer) {
          isArrayBuffer = true;
          input = new Uint8Array(input);
        }
        var p = 0;
        var len = input.length;
        var bEnd = p + len;
        if (len == 0)
          return this;
        this.total_len += len;
        if (this.memsize == 0) {
          if (isString) {
            this.memory = "";
          } else if (isArrayBuffer) {
            this.memory = new Uint8Array(16);
          } else {
            this.memory = new Buffer(16);
          }
        }
        if (this.memsize + len < 16) {
          if (isString) {
            this.memory += input;
          } else if (isArrayBuffer) {
            this.memory.set(input.subarray(0, len), this.memsize);
          } else {
            input.copy(this.memory, this.memsize, 0, len);
          }
          this.memsize += len;
          return this;
        }
        if (this.memsize > 0) {
          if (isString) {
            this.memory += input.slice(0, 16 - this.memsize);
          } else if (isArrayBuffer) {
            this.memory.set(input.subarray(0, 16 - this.memsize), this.memsize);
          } else {
            input.copy(this.memory, this.memsize, 0, 16 - this.memsize);
          }
          var p32 = 0;
          if (isString) {
            this.v1.xxh_update(this.memory.charCodeAt(p32 + 1) << 8 | this.memory.charCodeAt(p32), this.memory.charCodeAt(p32 + 3) << 8 | this.memory.charCodeAt(p32 + 2));
            p32 += 4;
            this.v2.xxh_update(this.memory.charCodeAt(p32 + 1) << 8 | this.memory.charCodeAt(p32), this.memory.charCodeAt(p32 + 3) << 8 | this.memory.charCodeAt(p32 + 2));
            p32 += 4;
            this.v3.xxh_update(this.memory.charCodeAt(p32 + 1) << 8 | this.memory.charCodeAt(p32), this.memory.charCodeAt(p32 + 3) << 8 | this.memory.charCodeAt(p32 + 2));
            p32 += 4;
            this.v4.xxh_update(this.memory.charCodeAt(p32 + 1) << 8 | this.memory.charCodeAt(p32), this.memory.charCodeAt(p32 + 3) << 8 | this.memory.charCodeAt(p32 + 2));
          } else {
            this.v1.xxh_update(this.memory[p32 + 1] << 8 | this.memory[p32], this.memory[p32 + 3] << 8 | this.memory[p32 + 2]);
            p32 += 4;
            this.v2.xxh_update(this.memory[p32 + 1] << 8 | this.memory[p32], this.memory[p32 + 3] << 8 | this.memory[p32 + 2]);
            p32 += 4;
            this.v3.xxh_update(this.memory[p32 + 1] << 8 | this.memory[p32], this.memory[p32 + 3] << 8 | this.memory[p32 + 2]);
            p32 += 4;
            this.v4.xxh_update(this.memory[p32 + 1] << 8 | this.memory[p32], this.memory[p32 + 3] << 8 | this.memory[p32 + 2]);
          }
          p += 16 - this.memsize;
          this.memsize = 0;
          if (isString)
            this.memory = "";
        }
        if (p <= bEnd - 16) {
          var limit = bEnd - 16;
          do {
            if (isString) {
              this.v1.xxh_update(input.charCodeAt(p + 1) << 8 | input.charCodeAt(p), input.charCodeAt(p + 3) << 8 | input.charCodeAt(p + 2));
              p += 4;
              this.v2.xxh_update(input.charCodeAt(p + 1) << 8 | input.charCodeAt(p), input.charCodeAt(p + 3) << 8 | input.charCodeAt(p + 2));
              p += 4;
              this.v3.xxh_update(input.charCodeAt(p + 1) << 8 | input.charCodeAt(p), input.charCodeAt(p + 3) << 8 | input.charCodeAt(p + 2));
              p += 4;
              this.v4.xxh_update(input.charCodeAt(p + 1) << 8 | input.charCodeAt(p), input.charCodeAt(p + 3) << 8 | input.charCodeAt(p + 2));
            } else {
              this.v1.xxh_update(input[p + 1] << 8 | input[p], input[p + 3] << 8 | input[p + 2]);
              p += 4;
              this.v2.xxh_update(input[p + 1] << 8 | input[p], input[p + 3] << 8 | input[p + 2]);
              p += 4;
              this.v3.xxh_update(input[p + 1] << 8 | input[p], input[p + 3] << 8 | input[p + 2]);
              p += 4;
              this.v4.xxh_update(input[p + 1] << 8 | input[p], input[p + 3] << 8 | input[p + 2]);
            }
            p += 4;
          } while (p <= limit);
        }
        if (p < bEnd) {
          if (isString) {
            this.memory += input.slice(p);
          } else if (isArrayBuffer) {
            this.memory.set(input.subarray(p, bEnd), this.memsize);
          } else {
            input.copy(this.memory, this.memsize, p, bEnd);
          }
          this.memsize = bEnd - p;
        }
        return this;
      };
      XXH2.prototype.digest = function() {
        var input = this.memory;
        var isString = typeof input == "string";
        var p = 0;
        var bEnd = this.memsize;
        var h32, h;
        var u = new UINT32();
        if (this.total_len >= 16) {
          h32 = this.v1.rotl(1).add(this.v2.rotl(7).add(this.v3.rotl(12).add(this.v4.rotl(18))));
        } else {
          h32 = this.seed.clone().add(PRIME32_5);
        }
        h32.add(u.fromNumber(this.total_len));
        while (p <= bEnd - 4) {
          if (isString) {
            u.fromBits(input.charCodeAt(p + 1) << 8 | input.charCodeAt(p), input.charCodeAt(p + 3) << 8 | input.charCodeAt(p + 2));
          } else {
            u.fromBits(input[p + 1] << 8 | input[p], input[p + 3] << 8 | input[p + 2]);
          }
          h32.add(u.multiply(PRIME32_3)).rotl(17).multiply(PRIME32_4);
          p += 4;
        }
        while (p < bEnd) {
          u.fromBits(isString ? input.charCodeAt(p++) : input[p++], 0);
          h32.add(u.multiply(PRIME32_5)).rotl(11).multiply(PRIME32_1);
        }
        h = h32.clone().shiftRight(15);
        h32.xor(h).multiply(PRIME32_2);
        h = h32.clone().shiftRight(13);
        h32.xor(h).multiply(PRIME32_3);
        h = h32.clone().shiftRight(16);
        h32.xor(h);
        this.init(this.seed);
        return h32;
      };
      module.exports = XXH2;
    }
  });

  // node_modules/.pnpm/xxhashjs@0.2.2/node_modules/xxhashjs/lib/xxhash64.js
  var require_xxhash64 = __commonJS({
    "node_modules/.pnpm/xxhashjs@0.2.2/node_modules/xxhashjs/lib/xxhash64.js"(exports, module) {
      var UINT64 = require_cuint().UINT64;
      var PRIME64_1 = UINT64("11400714785074694791");
      var PRIME64_2 = UINT64("14029467366897019727");
      var PRIME64_3 = UINT64("1609587929392839161");
      var PRIME64_4 = UINT64("9650029242287828579");
      var PRIME64_5 = UINT64("2870177450012600261");
      function toUTF8Array(str) {
        var utf8 = [];
        for (var i = 0, n = str.length; i < n; i++) {
          var charcode = str.charCodeAt(i);
          if (charcode < 128)
            utf8.push(charcode);
          else if (charcode < 2048) {
            utf8.push(192 | charcode >> 6, 128 | charcode & 63);
          } else if (charcode < 55296 || charcode >= 57344) {
            utf8.push(224 | charcode >> 12, 128 | charcode >> 6 & 63, 128 | charcode & 63);
          } else {
            i++;
            charcode = 65536 + ((charcode & 1023) << 10 | str.charCodeAt(i) & 1023);
            utf8.push(240 | charcode >> 18, 128 | charcode >> 12 & 63, 128 | charcode >> 6 & 63, 128 | charcode & 63);
          }
        }
        return new Uint8Array(utf8);
      }
      function XXH64() {
        if (arguments.length == 2)
          return new XXH64(arguments[1]).update(arguments[0]).digest();
        if (!(this instanceof XXH64))
          return new XXH64(arguments[0]);
        init.call(this, arguments[0]);
      }
      function init(seed) {
        this.seed = seed instanceof UINT64 ? seed.clone() : UINT64(seed);
        this.v1 = this.seed.clone().add(PRIME64_1).add(PRIME64_2);
        this.v2 = this.seed.clone().add(PRIME64_2);
        this.v3 = this.seed.clone();
        this.v4 = this.seed.clone().subtract(PRIME64_1);
        this.total_len = 0;
        this.memsize = 0;
        this.memory = null;
        return this;
      }
      XXH64.prototype.init = init;
      XXH64.prototype.update = function(input) {
        var isString = typeof input == "string";
        var isArrayBuffer;
        if (isString) {
          input = toUTF8Array(input);
          isString = false;
          isArrayBuffer = true;
        }
        if (typeof ArrayBuffer !== "undefined" && input instanceof ArrayBuffer) {
          isArrayBuffer = true;
          input = new Uint8Array(input);
        }
        var p = 0;
        var len = input.length;
        var bEnd = p + len;
        if (len == 0)
          return this;
        this.total_len += len;
        if (this.memsize == 0) {
          if (isString) {
            this.memory = "";
          } else if (isArrayBuffer) {
            this.memory = new Uint8Array(32);
          } else {
            this.memory = new Buffer(32);
          }
        }
        if (this.memsize + len < 32) {
          if (isString) {
            this.memory += input;
          } else if (isArrayBuffer) {
            this.memory.set(input.subarray(0, len), this.memsize);
          } else {
            input.copy(this.memory, this.memsize, 0, len);
          }
          this.memsize += len;
          return this;
        }
        if (this.memsize > 0) {
          if (isString) {
            this.memory += input.slice(0, 32 - this.memsize);
          } else if (isArrayBuffer) {
            this.memory.set(input.subarray(0, 32 - this.memsize), this.memsize);
          } else {
            input.copy(this.memory, this.memsize, 0, 32 - this.memsize);
          }
          var p64 = 0;
          if (isString) {
            var other;
            other = UINT64(this.memory.charCodeAt(p64 + 1) << 8 | this.memory.charCodeAt(p64), this.memory.charCodeAt(p64 + 3) << 8 | this.memory.charCodeAt(p64 + 2), this.memory.charCodeAt(p64 + 5) << 8 | this.memory.charCodeAt(p64 + 4), this.memory.charCodeAt(p64 + 7) << 8 | this.memory.charCodeAt(p64 + 6));
            this.v1.add(other.multiply(PRIME64_2)).rotl(31).multiply(PRIME64_1);
            p64 += 8;
            other = UINT64(this.memory.charCodeAt(p64 + 1) << 8 | this.memory.charCodeAt(p64), this.memory.charCodeAt(p64 + 3) << 8 | this.memory.charCodeAt(p64 + 2), this.memory.charCodeAt(p64 + 5) << 8 | this.memory.charCodeAt(p64 + 4), this.memory.charCodeAt(p64 + 7) << 8 | this.memory.charCodeAt(p64 + 6));
            this.v2.add(other.multiply(PRIME64_2)).rotl(31).multiply(PRIME64_1);
            p64 += 8;
            other = UINT64(this.memory.charCodeAt(p64 + 1) << 8 | this.memory.charCodeAt(p64), this.memory.charCodeAt(p64 + 3) << 8 | this.memory.charCodeAt(p64 + 2), this.memory.charCodeAt(p64 + 5) << 8 | this.memory.charCodeAt(p64 + 4), this.memory.charCodeAt(p64 + 7) << 8 | this.memory.charCodeAt(p64 + 6));
            this.v3.add(other.multiply(PRIME64_2)).rotl(31).multiply(PRIME64_1);
            p64 += 8;
            other = UINT64(this.memory.charCodeAt(p64 + 1) << 8 | this.memory.charCodeAt(p64), this.memory.charCodeAt(p64 + 3) << 8 | this.memory.charCodeAt(p64 + 2), this.memory.charCodeAt(p64 + 5) << 8 | this.memory.charCodeAt(p64 + 4), this.memory.charCodeAt(p64 + 7) << 8 | this.memory.charCodeAt(p64 + 6));
            this.v4.add(other.multiply(PRIME64_2)).rotl(31).multiply(PRIME64_1);
          } else {
            var other;
            other = UINT64(this.memory[p64 + 1] << 8 | this.memory[p64], this.memory[p64 + 3] << 8 | this.memory[p64 + 2], this.memory[p64 + 5] << 8 | this.memory[p64 + 4], this.memory[p64 + 7] << 8 | this.memory[p64 + 6]);
            this.v1.add(other.multiply(PRIME64_2)).rotl(31).multiply(PRIME64_1);
            p64 += 8;
            other = UINT64(this.memory[p64 + 1] << 8 | this.memory[p64], this.memory[p64 + 3] << 8 | this.memory[p64 + 2], this.memory[p64 + 5] << 8 | this.memory[p64 + 4], this.memory[p64 + 7] << 8 | this.memory[p64 + 6]);
            this.v2.add(other.multiply(PRIME64_2)).rotl(31).multiply(PRIME64_1);
            p64 += 8;
            other = UINT64(this.memory[p64 + 1] << 8 | this.memory[p64], this.memory[p64 + 3] << 8 | this.memory[p64 + 2], this.memory[p64 + 5] << 8 | this.memory[p64 + 4], this.memory[p64 + 7] << 8 | this.memory[p64 + 6]);
            this.v3.add(other.multiply(PRIME64_2)).rotl(31).multiply(PRIME64_1);
            p64 += 8;
            other = UINT64(this.memory[p64 + 1] << 8 | this.memory[p64], this.memory[p64 + 3] << 8 | this.memory[p64 + 2], this.memory[p64 + 5] << 8 | this.memory[p64 + 4], this.memory[p64 + 7] << 8 | this.memory[p64 + 6]);
            this.v4.add(other.multiply(PRIME64_2)).rotl(31).multiply(PRIME64_1);
          }
          p += 32 - this.memsize;
          this.memsize = 0;
          if (isString)
            this.memory = "";
        }
        if (p <= bEnd - 32) {
          var limit = bEnd - 32;
          do {
            if (isString) {
              var other;
              other = UINT64(input.charCodeAt(p + 1) << 8 | input.charCodeAt(p), input.charCodeAt(p + 3) << 8 | input.charCodeAt(p + 2), input.charCodeAt(p + 5) << 8 | input.charCodeAt(p + 4), input.charCodeAt(p + 7) << 8 | input.charCodeAt(p + 6));
              this.v1.add(other.multiply(PRIME64_2)).rotl(31).multiply(PRIME64_1);
              p += 8;
              other = UINT64(input.charCodeAt(p + 1) << 8 | input.charCodeAt(p), input.charCodeAt(p + 3) << 8 | input.charCodeAt(p + 2), input.charCodeAt(p + 5) << 8 | input.charCodeAt(p + 4), input.charCodeAt(p + 7) << 8 | input.charCodeAt(p + 6));
              this.v2.add(other.multiply(PRIME64_2)).rotl(31).multiply(PRIME64_1);
              p += 8;
              other = UINT64(input.charCodeAt(p + 1) << 8 | input.charCodeAt(p), input.charCodeAt(p + 3) << 8 | input.charCodeAt(p + 2), input.charCodeAt(p + 5) << 8 | input.charCodeAt(p + 4), input.charCodeAt(p + 7) << 8 | input.charCodeAt(p + 6));
              this.v3.add(other.multiply(PRIME64_2)).rotl(31).multiply(PRIME64_1);
              p += 8;
              other = UINT64(input.charCodeAt(p + 1) << 8 | input.charCodeAt(p), input.charCodeAt(p + 3) << 8 | input.charCodeAt(p + 2), input.charCodeAt(p + 5) << 8 | input.charCodeAt(p + 4), input.charCodeAt(p + 7) << 8 | input.charCodeAt(p + 6));
              this.v4.add(other.multiply(PRIME64_2)).rotl(31).multiply(PRIME64_1);
            } else {
              var other;
              other = UINT64(input[p + 1] << 8 | input[p], input[p + 3] << 8 | input[p + 2], input[p + 5] << 8 | input[p + 4], input[p + 7] << 8 | input[p + 6]);
              this.v1.add(other.multiply(PRIME64_2)).rotl(31).multiply(PRIME64_1);
              p += 8;
              other = UINT64(input[p + 1] << 8 | input[p], input[p + 3] << 8 | input[p + 2], input[p + 5] << 8 | input[p + 4], input[p + 7] << 8 | input[p + 6]);
              this.v2.add(other.multiply(PRIME64_2)).rotl(31).multiply(PRIME64_1);
              p += 8;
              other = UINT64(input[p + 1] << 8 | input[p], input[p + 3] << 8 | input[p + 2], input[p + 5] << 8 | input[p + 4], input[p + 7] << 8 | input[p + 6]);
              this.v3.add(other.multiply(PRIME64_2)).rotl(31).multiply(PRIME64_1);
              p += 8;
              other = UINT64(input[p + 1] << 8 | input[p], input[p + 3] << 8 | input[p + 2], input[p + 5] << 8 | input[p + 4], input[p + 7] << 8 | input[p + 6]);
              this.v4.add(other.multiply(PRIME64_2)).rotl(31).multiply(PRIME64_1);
            }
            p += 8;
          } while (p <= limit);
        }
        if (p < bEnd) {
          if (isString) {
            this.memory += input.slice(p);
          } else if (isArrayBuffer) {
            this.memory.set(input.subarray(p, bEnd), this.memsize);
          } else {
            input.copy(this.memory, this.memsize, p, bEnd);
          }
          this.memsize = bEnd - p;
        }
        return this;
      };
      XXH64.prototype.digest = function() {
        var input = this.memory;
        var isString = typeof input == "string";
        var p = 0;
        var bEnd = this.memsize;
        var h64, h;
        var u = new UINT64();
        if (this.total_len >= 32) {
          h64 = this.v1.clone().rotl(1);
          h64.add(this.v2.clone().rotl(7));
          h64.add(this.v3.clone().rotl(12));
          h64.add(this.v4.clone().rotl(18));
          h64.xor(this.v1.multiply(PRIME64_2).rotl(31).multiply(PRIME64_1));
          h64.multiply(PRIME64_1).add(PRIME64_4);
          h64.xor(this.v2.multiply(PRIME64_2).rotl(31).multiply(PRIME64_1));
          h64.multiply(PRIME64_1).add(PRIME64_4);
          h64.xor(this.v3.multiply(PRIME64_2).rotl(31).multiply(PRIME64_1));
          h64.multiply(PRIME64_1).add(PRIME64_4);
          h64.xor(this.v4.multiply(PRIME64_2).rotl(31).multiply(PRIME64_1));
          h64.multiply(PRIME64_1).add(PRIME64_4);
        } else {
          h64 = this.seed.clone().add(PRIME64_5);
        }
        h64.add(u.fromNumber(this.total_len));
        while (p <= bEnd - 8) {
          if (isString) {
            u.fromBits(input.charCodeAt(p + 1) << 8 | input.charCodeAt(p), input.charCodeAt(p + 3) << 8 | input.charCodeAt(p + 2), input.charCodeAt(p + 5) << 8 | input.charCodeAt(p + 4), input.charCodeAt(p + 7) << 8 | input.charCodeAt(p + 6));
          } else {
            u.fromBits(input[p + 1] << 8 | input[p], input[p + 3] << 8 | input[p + 2], input[p + 5] << 8 | input[p + 4], input[p + 7] << 8 | input[p + 6]);
          }
          u.multiply(PRIME64_2).rotl(31).multiply(PRIME64_1);
          h64.xor(u).rotl(27).multiply(PRIME64_1).add(PRIME64_4);
          p += 8;
        }
        if (p + 4 <= bEnd) {
          if (isString) {
            u.fromBits(input.charCodeAt(p + 1) << 8 | input.charCodeAt(p), input.charCodeAt(p + 3) << 8 | input.charCodeAt(p + 2), 0, 0);
          } else {
            u.fromBits(input[p + 1] << 8 | input[p], input[p + 3] << 8 | input[p + 2], 0, 0);
          }
          h64.xor(u.multiply(PRIME64_1)).rotl(23).multiply(PRIME64_2).add(PRIME64_3);
          p += 4;
        }
        while (p < bEnd) {
          u.fromBits(isString ? input.charCodeAt(p++) : input[p++], 0, 0, 0);
          h64.xor(u.multiply(PRIME64_5)).rotl(11).multiply(PRIME64_1);
        }
        h = h64.clone().shiftRight(33);
        h64.xor(h).multiply(PRIME64_2);
        h = h64.clone().shiftRight(29);
        h64.xor(h).multiply(PRIME64_3);
        h = h64.clone().shiftRight(32);
        h64.xor(h);
        this.init(this.seed);
        return h64;
      };
      module.exports = XXH64;
    }
  });

  // node_modules/.pnpm/xxhashjs@0.2.2/node_modules/xxhashjs/lib/index.js
  var require_lib = __commonJS({
    "node_modules/.pnpm/xxhashjs@0.2.2/node_modules/xxhashjs/lib/index.js"(exports, module) {
      module.exports = {
        h32: require_xxhash(),
        h64: require_xxhash64()
      };
    }
  });

  // node_modules/.pnpm/ansicolor@1.1.95/node_modules/ansicolor/build/ansicolor.js
  var require_ansicolor = __commonJS({
    "node_modules/.pnpm/ansicolor@1.1.95/node_modules/ansicolor/build/ansicolor.js"(exports, module) {
      "use strict";
      var _slicedToArray = function() {
        function sliceIterator(arr, i) {
          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = void 0;
          try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);
              if (i && _arr.length === i)
                break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"])
                _i["return"]();
            } finally {
              if (_d)
                throw _e;
            }
          }
          return _arr;
        }
        return function(arr, i) {
          if (Array.isArray(arr)) {
            return arr;
          } else if (Symbol.iterator in Object(arr)) {
            return sliceIterator(arr, i);
          } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          }
        };
      }();
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        } else {
          return Array.from(arr);
        }
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      var O = Object;
      var colorCodes = ["black", "red", "green", "yellow", "blue", "magenta", "cyan", "lightGray", "", "default"];
      var colorCodesLight = ["darkGray", "lightRed", "lightGreen", "lightYellow", "lightBlue", "lightMagenta", "lightCyan", "white", ""];
      var styleCodes = ["", "bright", "dim", "italic", "underline", "", "", "inverse"];
      var asBright = {
        "red": "lightRed",
        "green": "lightGreen",
        "yellow": "lightYellow",
        "blue": "lightBlue",
        "magenta": "lightMagenta",
        "cyan": "lightCyan",
        "black": "darkGray",
        "lightGray": "white"
      };
      var types = {
        0: "style",
        2: "unstyle",
        3: "color",
        9: "colorLight",
        4: "bgColor",
        10: "bgColorLight"
      };
      var subtypes = {
        color: colorCodes,
        colorLight: colorCodesLight,
        bgColor: colorCodes,
        bgColorLight: colorCodesLight,
        style: styleCodes,
        unstyle: styleCodes
      };
      var clean = function clean2(obj) {
        for (var k in obj) {
          if (!obj[k]) {
            delete obj[k];
          }
        }
        return O.keys(obj).length === 0 ? void 0 : obj;
      };
      var Color = function() {
        function Color2(background, name, brightness) {
          _classCallCheck(this, Color2);
          this.background = background;
          this.name = name;
          this.brightness = brightness;
        }
        _createClass(Color2, [{
          key: "defaultBrightness",
          value: function defaultBrightness(value) {
            return new Color2(this.background, this.name, this.brightness || value);
          }
        }, {
          key: "css",
          value: function css(inverted) {
            var color = inverted ? this.inverse : this;
            var rgbName = color.brightness === Code.bright && asBright[color.name] || color.name;
            var prop = color.background ? "background:" : "color:", rgb2 = Colors2.rgb[rgbName], alpha = this.brightness === Code.dim ? 0.5 : 1;
            return rgb2 ? prop + "rgba(" + [].concat(_toConsumableArray(rgb2), [alpha]).join(",") + ");" : !color.background && alpha < 1 ? "color:rgba(0,0,0,0.5);" : "";
          }
        }, {
          key: "inverse",
          get: function get() {
            return new Color2(!this.background, this.name || (this.background ? "black" : "white"), this.brightness);
          }
        }, {
          key: "clean",
          get: function get() {
            return clean({
              name: this.name === "default" ? "" : this.name,
              bright: this.brightness === Code.bright,
              dim: this.brightness === Code.dim
            });
          }
        }]);
        return Color2;
      }();
      var Code = function() {
        function Code2(n) {
          _classCallCheck(this, Code2);
          if (n !== void 0) {
            this.value = Number(n);
          }
        }
        _createClass(Code2, [{
          key: "type",
          get: function get() {
            return types[Math.floor(this.value / 10)];
          }
        }, {
          key: "subtype",
          get: function get() {
            return subtypes[this.type][this.value % 10];
          }
        }, {
          key: "str",
          get: function get() {
            return this.value ? "[" + this.value + "m" : "";
          }
        }, {
          key: "isBrightness",
          get: function get() {
            return this.value === Code2.noBrightness || this.value === Code2.bright || this.value === Code2.dim;
          }
        }], [{
          key: "str",
          value: function str(x) {
            return new Code2(x).str;
          }
        }]);
        return Code2;
      }();
      O.assign(Code, {
        reset: 0,
        bright: 1,
        dim: 2,
        inverse: 7,
        noBrightness: 22,
        noItalic: 23,
        noUnderline: 24,
        noInverse: 27,
        noColor: 39,
        noBgColor: 49
      });
      var replaceAll = function replaceAll2(str, a, b) {
        return str.split(a).join(b);
      };
      var denormalizeBrightness = function denormalizeBrightness2(s) {
        return s.replace(/(\u001b\[(1|2)m)/g, "[22m$1");
      };
      var normalizeBrightness = function normalizeBrightness2(s) {
        return s.replace(/\u001b\[22m(\u001b\[(1|2)m)/g, "$1");
      };
      var wrap = function wrap2(x, openCode, closeCode) {
        var open = Code.str(openCode), close = Code.str(closeCode);
        return String(x).split("\n").map(function(line) {
          return denormalizeBrightness(open + replaceAll(normalizeBrightness(line), close, open) + close);
        }).join("\n");
      };
      var camel = function camel2(a, b) {
        return a + b.charAt(0).toUpperCase() + b.slice(1);
      };
      var stringWrappingMethods = function() {
        return [].concat(_toConsumableArray(colorCodes.map(function(k, i) {
          return !k ? [] : [
            [k, 30 + i, Code.noColor],
            [camel("bg", k), 40 + i, Code.noBgColor]
          ];
        })), _toConsumableArray(colorCodesLight.map(function(k, i) {
          return !k ? [] : [
            [k, 90 + i, Code.noColor],
            [camel("bg", k), 100 + i, Code.noBgColor]
          ];
        })), _toConsumableArray(["", "BrightRed", "BrightGreen", "BrightYellow", "BrightBlue", "BrightMagenta", "BrightCyan"].map(function(k, i) {
          return !k ? [] : [["bg" + k, 100 + i, Code.noBgColor]];
        })), _toConsumableArray(styleCodes.map(function(k, i) {
          return !k ? [] : [
            [k, i, k === "bright" || k === "dim" ? Code.noBrightness : 20 + i]
          ];
        }))).reduce(function(a, b) {
          return a.concat(b);
        });
      }();
      var assignStringWrappingAPI = function assignStringWrappingAPI2(target) {
        var wrapBefore = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : target;
        return stringWrappingMethods.reduce(function(memo, _ref) {
          var _ref2 = _slicedToArray(_ref, 3), k = _ref2[0], open = _ref2[1], close = _ref2[2];
          return O.defineProperty(memo, k, {
            get: function get() {
              return assignStringWrappingAPI2(function(str) {
                return wrapBefore(wrap(str, open, close));
              });
            }
          });
        }, target);
      };
      var TEXT = 0;
      var BRACKET = 1;
      var CODE = 2;
      function rawParse(s) {
        var state = TEXT, buffer = "", text = "", code = "", codes = [];
        var spans = [];
        for (var i = 0, n = s.length; i < n; i++) {
          var c = s[i];
          buffer += c;
          switch (state) {
            case TEXT:
              if (c === "") {
                state = BRACKET;
                buffer = c;
              } else {
                text += c;
              }
              break;
            case BRACKET:
              if (c === "[") {
                state = CODE;
                code = "";
                codes = [];
              } else {
                state = TEXT;
                text += buffer;
              }
              break;
            case CODE:
              if (c >= "0" && c <= "9") {
                code += c;
              } else if (c === ";") {
                codes.push(new Code(code));
                code = "";
              } else if (c === "m") {
                code = code || "0";
                codes.push(new Code(code));
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = void 0;
                try {
                  for (var _iterator = codes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _code = _step.value;
                    spans.push({ text, code: _code });
                    text = "";
                  }
                } catch (err) {
                  _didIteratorError = true;
                  _iteratorError = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                      _iterator.return();
                    }
                  } finally {
                    if (_didIteratorError) {
                      throw _iteratorError;
                    }
                  }
                }
                state = TEXT;
              } else {
                state = TEXT;
                text += buffer;
              }
          }
        }
        if (state !== TEXT)
          text += buffer;
        if (text)
          spans.push({ text, code: new Code() });
        return spans;
      }
      var Colors2 = function() {
        function Colors3(s) {
          _classCallCheck(this, Colors3);
          this.spans = s ? rawParse(s) : [];
        }
        _createClass(Colors3, [{
          key: Symbol.iterator,
          value: function value() {
            return this.spans[Symbol.iterator]();
          }
        }, {
          key: "str",
          get: function get() {
            return this.spans.reduce(function(str, p) {
              return str + p.text + p.code.str;
            }, "");
          }
        }, {
          key: "parsed",
          get: function get() {
            var color = void 0, bgColor = void 0, brightness = void 0, styles = void 0;
            function reset() {
              color = new Color(), bgColor = new Color(true), brightness = void 0, styles = new Set();
            }
            reset();
            return O.assign(new Colors3(), {
              spans: this.spans.map(function(span) {
                var c = span.code;
                var inverted = styles.has("inverse"), underline2 = styles.has("underline") ? "text-decoration: underline;" : "", italic2 = styles.has("italic") ? "font-style: italic;" : "", bold = brightness === Code.bright ? "font-weight: bold;" : "";
                var foreColor = color.defaultBrightness(brightness);
                var styledSpan = O.assign({ css: bold + italic2 + underline2 + foreColor.css(inverted) + bgColor.css(inverted) }, clean({ bold: !!bold, color: foreColor.clean, bgColor: bgColor.clean }), span);
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = void 0;
                try {
                  for (var _iterator2 = styles[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var k = _step2.value;
                    styledSpan[k] = true;
                  }
                } catch (err) {
                  _didIteratorError2 = true;
                  _iteratorError2 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                      _iterator2.return();
                    }
                  } finally {
                    if (_didIteratorError2) {
                      throw _iteratorError2;
                    }
                  }
                }
                if (c.isBrightness) {
                  brightness = c.value;
                } else if (span.code.value !== void 0) {
                  if (span.code.value === Code.reset) {
                    reset();
                  } else {
                    switch (span.code.type) {
                      case "color":
                      case "colorLight":
                        color = new Color(false, c.subtype);
                        break;
                      case "bgColor":
                      case "bgColorLight":
                        bgColor = new Color(true, c.subtype);
                        break;
                      case "style":
                        styles.add(c.subtype);
                        break;
                      case "unstyle":
                        styles.delete(c.subtype);
                        break;
                    }
                  }
                }
                return styledSpan;
              }).filter(function(s) {
                return s.text.length > 0;
              })
            });
          }
        }, {
          key: "asChromeConsoleLogArguments",
          get: function get() {
            var spans = this.parsed.spans;
            return [spans.map(function(s) {
              return "%c" + s.text;
            }).join("")].concat(_toConsumableArray(spans.map(function(s) {
              return s.css;
            })));
          }
        }, {
          key: "browserConsoleArguments",
          get: function get() {
            return this.asChromeConsoleLogArguments;
          }
        }], [{
          key: "parse",
          value: function parse2(s) {
            return new Colors3(s).parsed;
          }
        }, {
          key: "strip",
          value: function strip2(s) {
            return s.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-nqry=><]/g, "");
          }
        }, {
          key: "nice",
          get: function get() {
            Colors3.names.forEach(function(k) {
              if (!(k in String.prototype)) {
                O.defineProperty(String.prototype, k, { get: function get2() {
                  return Colors3[k](this);
                } });
              }
            });
            return Colors3;
          }
        }, {
          key: "ansicolor",
          get: function get() {
            return Colors3;
          }
        }]);
        return Colors3;
      }();
      assignStringWrappingAPI(Colors2, function(str) {
        return str;
      });
      Colors2.names = stringWrappingMethods.map(function(_ref3) {
        var _ref4 = _slicedToArray(_ref3, 1), k = _ref4[0];
        return k;
      });
      Colors2.rgb = {
        black: [0, 0, 0],
        darkGray: [100, 100, 100],
        lightGray: [200, 200, 200],
        white: [255, 255, 255],
        red: [204, 0, 0],
        lightRed: [255, 51, 0],
        green: [0, 204, 0],
        lightGreen: [51, 204, 51],
        yellow: [204, 102, 0],
        lightYellow: [255, 153, 51],
        blue: [0, 0, 255],
        lightBlue: [26, 140, 255],
        magenta: [204, 0, 204],
        lightMagenta: [255, 0, 255],
        cyan: [0, 153, 255],
        lightCyan: [0, 204, 255]
      };
      module.exports = Colors2;
    }
  });

  // src/index.ts
  var src_exports = {};
  __export(src_exports, {
    Multipart: () => Multipart,
    default: () => DiscordTransport,
    version: () => version2
  });
  var import_function_queue = __toModule(require_function_queue());

  // node_modules/.pnpm/@simplyhexagonal+logger@1.3.0/node_modules/@simplyhexagonal/logger/package.json
  var version = "1.3.0";

  // node_modules/.pnpm/@simplyhexagonal+logger@1.3.0/node_modules/@simplyhexagonal/logger/src/interfaces.ts
  var LogLevelsEnum;
  (function(LogLevelsEnum2) {
    LogLevelsEnum2["DEBUG"] = "debug";
    LogLevelsEnum2["INFO"] = "info";
    LogLevelsEnum2["WARN"] = "warn";
    LogLevelsEnum2["ERROR"] = "error";
    LogLevelsEnum2["FATAL"] = "fatal";
    LogLevelsEnum2["ALL"] = "all";
    LogLevelsEnum2["RAW"] = "raw";
  })(LogLevelsEnum || (LogLevelsEnum = {}));
  var LoggerTransportNameEnum;
  (function(LoggerTransportNameEnum2) {
    LoggerTransportNameEnum2["CONSOLE"] = "console";
    LoggerTransportNameEnum2["SLACK"] = "slack";
    LoggerTransportNameEnum2["DISCORD"] = "discord";
    LoggerTransportNameEnum2["EMAIL"] = "email";
    LoggerTransportNameEnum2["SMS"] = "sms";
    LoggerTransportNameEnum2["SOCKET"] = "socket";
  })(LoggerTransportNameEnum || (LoggerTransportNameEnum = {}));

  // node_modules/.pnpm/@simplyhexagonal+logger@1.3.0/node_modules/@simplyhexagonal/logger/src/transports/base.ts
  var import_serialize_error = __toModule(require_serialize_error());
  var XXH;
  if (typeof window !== "undefined") {
    XXH = window.XXH;
  } else {
    XXH = require_lib();
  }
  var stringify = (obj) => {
    let cache = [];
    const result = typeof obj === "string" ? obj : JSON.stringify(obj, (_key, value) => {
      if (value instanceof Error)
        return (0, import_serialize_error.serializeError)(value);
      if (typeof value === "object" && value !== null) {
        if (cache.includes(value))
          return void 0;
        cache.push(value);
      }
      return value;
    }, 2);
    cache = [];
    return result;
  };
  var _LoggerTransport = class {
    async debug(..._message) {
      return {};
    }
    async info(..._message) {
      return {};
    }
    async warn(..._message) {
      return {};
    }
    async error(..._message) {
      return {};
    }
    async fatal(..._message) {
      return {};
    }
    async all(..._message) {
      return {};
    }
    async raw(..._message) {
      return {};
    }
    format(message) {
      return message.map(stringify).join(" ").replace(/\n (\S)/g, "\n$1");
    }
    constructor({ r, destination, channelName }) {
      this._id = XXH.h32(destination, 43981).toString(16);
      this._r = r;
      this._isBrowser = process.env.IS_BROWSER && process.env.IS_BROWSER === "TRUE";
      this.channelName = channelName || "-";
      if (_LoggerTransport.instances[this._id]) {
        return _LoggerTransport.instances[this._id];
      }
      _LoggerTransport.instances[this._id] = this;
    }
  };
  var LoggerTransport = _LoggerTransport;
  LoggerTransport.instances = {};

  // node_modules/.pnpm/ansicolor@1.1.95/node_modules/ansicolor/build/ansicolor.mjs
  var import_ansicolor = __toModule(require_ansicolor());
  var nice = import_ansicolor.default.nice;
  var parse = import_ansicolor.default.parse;
  var strip = import_ansicolor.default.strip;
  var ansicolor = import_ansicolor.default.ansicolor;
  var black = import_ansicolor.default.black;
  var bgBlack = import_ansicolor.default.bgBlack;
  var red = import_ansicolor.default.red;
  var bgRed = import_ansicolor.default.bgRed;
  var green = import_ansicolor.default.green;
  var bgGreen = import_ansicolor.default.bgGreen;
  var yellow = import_ansicolor.default.yellow;
  var bgYellow = import_ansicolor.default.bgYellow;
  var blue = import_ansicolor.default.blue;
  var bgBlue = import_ansicolor.default.bgBlue;
  var magenta = import_ansicolor.default.magenta;
  var bgMagenta = import_ansicolor.default.bgMagenta;
  var cyan = import_ansicolor.default.cyan;
  var bgCyan = import_ansicolor.default.bgCyan;
  var lightGray = import_ansicolor.default.lightGray;
  var bgLightGray = import_ansicolor.default.bgLightGray;
  var bgDefault = import_ansicolor.default.bgDefault;
  var darkGray = import_ansicolor.default.darkGray;
  var bgDarkGray = import_ansicolor.default.bgDarkGray;
  var lightRed = import_ansicolor.default.lightRed;
  var bgLightRed = import_ansicolor.default.bgLightRed;
  var lightGreen = import_ansicolor.default.lightGreen;
  var bgLightGreen = import_ansicolor.default.bgLightGreen;
  var lightYellow = import_ansicolor.default.lightYellow;
  var bgLightYellow = import_ansicolor.default.bgLightYellow;
  var lightBlue = import_ansicolor.default.lightBlue;
  var bgLightBlue = import_ansicolor.default.bgLightBlue;
  var lightMagenta = import_ansicolor.default.lightMagenta;
  var bgLightMagenta = import_ansicolor.default.bgLightMagenta;
  var lightCyan = import_ansicolor.default.lightCyan;
  var bgLightCyan = import_ansicolor.default.bgLightCyan;
  var white = import_ansicolor.default.white;
  var bgWhite = import_ansicolor.default.bgWhite;
  var bgBrightRed = import_ansicolor.default.bgBrightRed;
  var bgBrightGreen = import_ansicolor.default.bgBrightGreen;
  var bgBrightYellow = import_ansicolor.default.bgBrightYellow;
  var bgBrightBlue = import_ansicolor.default.bgBrightBlue;
  var bgBrightMagenta = import_ansicolor.default.bgBrightMagenta;
  var bgBrightCyan = import_ansicolor.default.bgBrightCyan;
  var bright = import_ansicolor.default.bright;
  var dim = import_ansicolor.default.dim;
  var italic = import_ansicolor.default.italic;
  var underline = import_ansicolor.default.underline;
  var inverse = import_ansicolor.default.inverse;
  var names = import_ansicolor.default.names;
  var rgb = import_ansicolor.default.rgb;

  // node_modules/.pnpm/@simplyhexagonal+logger@1.3.0/node_modules/@simplyhexagonal/logger/src/transports/console.ts
  var LogLevels = __spreadValues({}, LogLevelsEnum);
  var ConsoleTransport = class extends LoggerTransport {
    constructor(options) {
      const r = Math.random().toString(36).substring(7);
      super(__spreadProps(__spreadValues({}, options), { r }));
      this.destination = options.destination;
      if (r !== this._r) {
        return this;
      }
    }
    async debug([prefixes, ...message]) {
      console.log(...this.recolor(lightMagenta(this.format([
        prefixes,
        LogLevels.DEBUG.toUpperCase(),
        "\u{1F41E}\uFE0F:\n\n",
        ...message,
        "\n"
      ]).replace(/\n/g, "\n	"))));
      return {
        destination: this.destination,
        channelName: this.channelName,
        result: true
      };
    }
    async info([prefixes, ...message]) {
      console.log(...this.recolor(green(this.format([
        prefixes,
        LogLevels.INFO.toUpperCase(),
        "\u2705\uFE0F:\n\n",
        ...message,
        "\n"
      ]).replace(/\n/g, "\n	"))));
      return {
        destination: this.destination,
        channelName: this.channelName,
        result: true
      };
    }
    async warn([prefixes, ...message]) {
      console.log(...this.recolor(yellow(this.format([
        prefixes,
        LogLevels.WARN.toUpperCase(),
        "\u{1F7E1}:\n\n",
        ...message,
        "\n"
      ]).replace(/\n/g, "\n	"))));
      return {
        destination: this.destination,
        channelName: this.channelName,
        result: true
      };
    }
    async error([prefixes, ...message]) {
      console.log(...this.recolor(red(this.format([
        prefixes,
        LogLevels.ERROR.toUpperCase(),
        "\u{1F6A8}\uFE0F:\n\n",
        ...message,
        "\n"
      ]).replace(/\n/g, "\n	"))));
      return {
        destination: this.destination,
        channelName: this.channelName,
        result: true
      };
    }
    async fatal([prefixes, ...message]) {
      console.log(...this.recolor(bgRed(this.format([
        prefixes,
        LogLevels.FATAL.toUpperCase(),
        "\u{1F480}:\n\n",
        ...message,
        "\n"
      ]).replace(/\n/g, "\n	"))));
      return {
        destination: this.destination,
        channelName: this.channelName,
        result: true
      };
    }
    async all([prefixes, ...message]) {
      console.log(...this.recolor(lightCyan(this.format([
        prefixes,
        LogLevels.ALL.toUpperCase(),
        "\u{1F4DD}:\n\n",
        ...message,
        "\n"
      ]).replace(/\n/g, "\n	"))));
      return {
        destination: this.destination,
        channelName: this.channelName,
        result: true
      };
    }
    async raw([prefixes, ...message]) {
      console.log(this.format(message));
      return {
        destination: this.destination,
        channelName: this.channelName,
        result: true
      };
    }
    recolor(formattedMessage) {
      if (this._isBrowser) {
        return parse(formattedMessage).asChromeConsoleLogArguments;
      }
      return [formattedMessage];
    }
  };

  // node_modules/.pnpm/@simplyhexagonal+logger@1.3.0/node_modules/@simplyhexagonal/logger/src/transports/undefined.ts
  var UndefinedTransportError = class extends Error {
    constructor(message, transportResult) {
      super(message);
      this.transportResult = transportResult;
    }
  };
  var errorString = `LOGGER ERROR: transport "TRANSPORT_NAME" is NOT available, it was not defined in the logger options!`;
  var UndefinedTransport = class extends LoggerTransport {
    constructor(options) {
      const r = Math.random().toString(36).substring(7);
      super(__spreadProps(__spreadValues({}, options), { r }));
      console.log(...this.recolor(yellow(new Date().toISOString())), ...this.recolor(yellow(`WARN \u{1F7E1}:

	Logger transport "${options.name}" is NOT defined!
`)));
      this.destination = options.destination;
      this.transportName = options.name;
    }
    async debug(message) {
      this.throwDefault();
      return {};
    }
    async info(message) {
      this.throwDefault();
      return {};
    }
    async warn(message) {
      this.throwDefault();
      return {};
    }
    async error(message) {
      this.throwDefault();
      return {};
    }
    async fatal(message) {
      this.throwDefault();
      return {};
    }
    async all(message) {
      this.throwDefault();
      return {};
    }
    async raw(message) {
      this.throwDefault();
      return {};
    }
    throwDefault() {
      const errorMessage = errorString.replace("TRANSPORT_NAME", this.transportName || "undefined");
      const error = new UndefinedTransportError(errorMessage, {
        destination: this.destination,
        channelName: this.channelName,
        error: new Error(errorMessage)
      });
      throw error;
    }
    recolor(formattedMessage) {
      if (this._isBrowser) {
        return parse(formattedMessage).asChromeConsoleLogArguments;
      }
      return [formattedMessage];
    }
  };

  // node_modules/.pnpm/@simplyhexagonal+logger@1.3.0/node_modules/@simplyhexagonal/logger/src/index.ts
  var LoggerTransportName = __spreadValues({}, LoggerTransportNameEnum);
  var LogLevels2 = __spreadValues({}, LogLevelsEnum);
  var LOG_LEVELS = {
    debug: 0,
    info: 10,
    warn: 20,
    error: 30,
    fatal: 40,
    all: 100,
    raw: 110
  };
  var defaultLoggerTransportOptions = {
    transport: LoggerTransportName.CONSOLE,
    options: {
      destination: LoggerTransportName.CONSOLE,
      channelName: LoggerTransportName.CONSOLE
    }
  };
  var defaultOptionsByLevel = {
    debug: [defaultLoggerTransportOptions],
    info: [defaultLoggerTransportOptions],
    warn: [defaultLoggerTransportOptions],
    error: [defaultLoggerTransportOptions],
    fatal: [defaultLoggerTransportOptions],
    all: [defaultLoggerTransportOptions],
    raw: [defaultLoggerTransportOptions]
  };
  var initialTransportInstances = {
    debug: [],
    info: [],
    warn: [],
    error: [],
    fatal: [],
    all: [],
    raw: []
  };
  var defaultTransports = {
    [LoggerTransportName.CONSOLE]: ConsoleTransport,
    [LoggerTransportName.SLACK]: UndefinedTransport,
    [LoggerTransportName.DISCORD]: UndefinedTransport,
    [LoggerTransportName.EMAIL]: UndefinedTransport,
    [LoggerTransportName.SMS]: UndefinedTransport,
    [LoggerTransportName.SOCKET]: UndefinedTransport
  };
  var _Logger = class {
    constructor({
      optionsByLevel,
      transports,
      singleton = true,
      logLevel,
      catchTransportErrors,
      fallbackTransport,
      appIdentifiers
    }) {
      this.transportInstances = JSON.parse(JSON.stringify(initialTransportInstances));
      this.appIdentifiers = {};
      this.catchTransportErrors = false;
      this.optionsByLevel = __spreadValues(__spreadValues({}, defaultOptionsByLevel), optionsByLevel);
      this.availableTransports = __spreadValues(__spreadValues({}, defaultTransports), transports);
      this.appIdentifiers = appIdentifiers || {};
      const {
        LOG_LEVEL,
        LOGGER_CATCH_TRANSPORT_ERRORS
      } = process.env;
      this.catchTransportErrors = (LOGGER_CATCH_TRANSPORT_ERRORS || "").toLowerCase() === "true" || catchTransportErrors || this.catchTransportErrors;
      if (singleton && _Logger.instance)
        return _Logger.instance;
      if (singleton && !_Logger.instance)
        _Logger.instance = this;
      if (this.catchTransportErrors) {
        if (fallbackTransport) {
          this.fallbackTransport = new fallbackTransport({
            destination: `Logger:Fallback(${fallbackTransport.name})`
          });
        } else {
          this.fallbackTransport = new ConsoleTransport({ destination: "Logger:Fallback" });
        }
      }
      const envLogLevel = LOG_LEVELS[LOG_LEVEL];
      const destinations = [];
      const transportInstanceMap = {};
      Object.entries(LOG_LEVELS).forEach(([k, v]) => {
        this.broadcast;
        if (v >= (envLogLevel || (logLevel ? LOG_LEVELS[logLevel] : LOG_LEVELS[LogLevels2.DEBUG])) || k === LogLevels2.ALL) {
          let lvlOptions = this.optionsByLevel[k];
          if (lvlOptions.length === 0) {
            lvlOptions = defaultOptionsByLevel[k];
          }
          lvlOptions.forEach(({ transport, options }) => {
            const { destination } = options;
            const TransportClass = this.availableTransports[transport] || UndefinedTransport;
            if (!destinations.includes(destination)) {
              destinations.push(destination);
              transportInstanceMap[destination] = new TransportClass(__spreadValues({
                name: transport
              }, options));
            }
            this.transportInstances[k].push(transportInstanceMap[destination]);
          });
        }
      });
    }
    appIdString() {
      const {
        region,
        clusterType,
        cluster,
        hostname,
        ip,
        app
      } = this.appIdentifiers;
      const result = [
        region,
        clusterType,
        cluster,
        hostname,
        ip,
        app
      ].filter((i) => i).join(" > ");
      return result ? `[${result}]` : "";
    }
    debug(...message) {
      return this.broadcast(message, LogLevels2.DEBUG);
    }
    info(...message) {
      return this.broadcast(message, LogLevels2.INFO);
    }
    warn(...message) {
      return this.broadcast(message, LogLevels2.WARN);
    }
    error(...message) {
      return this.broadcast(message, LogLevels2.ERROR);
    }
    fatal(...message) {
      return this.broadcast(message, LogLevels2.FATAL);
    }
    all(...message) {
      return this.broadcast(message, LogLevels2.ALL);
    }
    raw(...message) {
      return this.broadcast(message, LogLevels2.RAW);
    }
    channel(channelName) {
      return {
        [LogLevels2.DEBUG]: async (...message) => {
          return this.broadcast(message, LogLevels2.DEBUG, channelName);
        },
        [LogLevels2.INFO]: async (...message) => {
          return this.broadcast(message, LogLevels2.INFO, channelName);
        },
        [LogLevels2.WARN]: async (...message) => {
          return this.broadcast(message, LogLevels2.WARN, channelName);
        },
        [LogLevels2.ERROR]: async (...message) => {
          return this.broadcast(message, LogLevels2.ERROR, channelName);
        },
        [LogLevels2.FATAL]: async (...message) => {
          return this.broadcast(message, LogLevels2.FATAL, channelName);
        },
        [LogLevels2.ALL]: async (...message) => {
          return this.broadcast(message, LogLevels2.ALL, channelName);
        },
        [LogLevels2.RAW]: async (...message) => {
          return this.broadcast(message, LogLevels2.RAW, channelName);
        }
      };
    }
    async broadcast(message, level, channelName = "-") {
      const results = [];
      await this.transportInstances[level].reduce(async (a, transport) => {
        await a;
        if (channelName === "-" || transport.channelName === channelName) {
          const result = transport[level]([
            [
              this.appIdString(),
              `[${new Date().toISOString()}]`
            ].join(" "),
            ...message
          ].filter((m) => m)).catch((e) => {
            if (!this.catchTransportErrors) {
              throw e;
            }
            ;
            const fallbackResult = this.fallbackTransport.error([
              [
                this.appIdString(),
                `[${new Date().toISOString()}]`
              ].join(" "),
              e
            ]).then((r) => __spreadValues(__spreadValues({}, e.transportResult || {}), r));
            return fallbackResult;
          });
          results.push(result);
          return result;
        }
        return Promise.resolve();
      }, Promise.resolve());
      return await Promise.all(results);
    }
  };
  var Logger = _Logger;
  Logger.version = version;
  Logger.LoggerTransportName = LoggerTransportName;
  Logger.LogLevels = LogLevels2;
  Logger.LoggerTransport = LoggerTransport;

  // package.json
  var version2 = "3.0.0";

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
  var DEFAULT_RATE_LIMIT = 400;
  var DiscordTransport = class extends LoggerTransport {
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
\`\`\`${message}\`\`\``;
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
          throw new Error(`Bad Response: ${response.reason}`);
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
          throw new Error(`Bad Response: ${response.reason}`);
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
  DiscordTransport.version = version2;
  return src_exports;
})();
//# sourceMappingURL=logger-transport-discord.js.map
'undefined'!=typeof module&&(module.exports=DiscordTransport.default),'undefined'!=typeof window&&(DiscordTransport=DiscordTransport.default);