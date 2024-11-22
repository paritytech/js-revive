'use strict';

var _documentCurrentScript = typeof document !== 'undefined' ? document.currentScript : null;
function _regeneratorRuntime() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return (String )(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var createRevive = function () {
  var _scriptName = (typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : (_documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === 'SCRIPT' && _documentCurrentScript.src || new URL('resolc.js', document.baseURI).href));
  return /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var moduleArg,
      moduleRtn,
      Module,
      readyPromiseResolve,
      readyPromiseReject,
      readyPromise,
      ENVIRONMENT_IS_WEB,
      ENVIRONMENT_IS_WORKER,
      ENVIRONMENT_IS_NODE,
      _yield$import,
      createRequire,
      require$1,
      moduleOverrides,
      arguments_,
      thisProgram,
      quit_,
      scriptDirectory,
      locateFile,
      readAsync,
      readBinary,
      fs,
      nodePath,
      out,
      err,
      wasmBinary,
      wasmMemory,
      ABORT,
      EXITSTATUS,
      HEAP8,
      HEAPU8,
      HEAP16,
      HEAP32,
      HEAPU32,
      updateMemoryViews,
      __ATPRERUN__,
      __ATINIT__,
      __ATMAIN__,
      __ATEXIT__,
      __ATPOSTRUN__,
      runtimeExited,
      preRun,
      initRuntime,
      preMain,
      exitRuntime,
      postRun,
      addOnPreRun,
      addOnInit,
      addOnPostRun,
      runDependencies,
      runDependencyWatcher,
      dependenciesFulfilled,
      getUniqueRunDependency,
      addRunDependency,
      removeRunDependency,
      abort,
      dataURIPrefix,
      isDataURI,
      isFileURI,
      findWasmBinary,
      wasmBinaryFile,
      getBinarySync,
      getBinaryPromise,
      instantiateArrayBuffer,
      instantiateAsync,
      getWasmImports,
      createWasm,
      tempDouble,
      tempI64,
      ExitStatus,
      callRuntimeCallbacks,
      noExitRuntime,
      stackRestore,
      stackSave,
      convertI32PairToI53Checked,
      wasmTableMirror,
      wasmTable,
      getWasmTableEntry,
      ___call_sighandler,
      exceptionCaught,
      uncaughtExceptionCount,
      ___cxa_begin_catch,
      exceptionLast,
      ___cxa_end_catch,
      ExceptionInfo,
      ___resumeException,
      setTempRet0,
      findMatchingCatch,
      ___cxa_find_matching_catch_2,
      ___cxa_find_matching_catch_3,
      ___cxa_find_matching_catch_4,
      ___cxa_rethrow,
      ___cxa_rethrow_primary_exception,
      ___cxa_throw,
      ___cxa_uncaught_exceptions,
      PATH,
      initRandomFill,
      _randomFill,
      PATH_FS,
      UTF8Decoder,
      UTF8ArrayToString,
      FS_stdin_getChar_buffer,
      lengthBytesUTF8,
      stringToUTF8Array,
      intArrayFromString,
      FS_stdin_getChar,
      TTY,
      zeroMemory,
      alignMemory,
      mmapAlloc,
      MEMFS,
      asyncLoad,
      FS_createDataFile,
      preloadPlugins,
      FS_handledByPreloadPlugin,
      FS_createPreloadedFile,
      FS_modeStringToFlags,
      FS_getMode,
      FS,
      UTF8ToString,
      SYSCALLS,
      ___syscall_chdir,
      ___syscall_chmod,
      ___syscall_faccessat,
      ___syscall_fchmod,
      syscallGetVarargI,
      syscallGetVarargP,
      ___syscall_fcntl64,
      ___syscall_fstat64,
      ___syscall_ftruncate64,
      stringToUTF8,
      ___syscall_getcwd,
      ___syscall_getdents64,
      ___syscall_lstat64,
      ___syscall_mkdirat,
      ___syscall_newfstatat,
      ___syscall_openat,
      ___syscall_readlinkat,
      ___syscall_renameat,
      ___syscall_rmdir,
      ___syscall_stat64,
      ___syscall_statfs64,
      ___syscall_unlinkat,
      __abort_js,
      nowIsMonotonic,
      __emscripten_get_now_is_monotonic,
      __emscripten_memcpy_js,
      __emscripten_runtime_keepalive_clear,
      __emscripten_throw_longjmp,
      isLeapYear,
      MONTH_DAYS_LEAP_CUMULATIVE,
      MONTH_DAYS_REGULAR_CUMULATIVE,
      ydayFromDate,
      __localtime_js,
      __mmap_js,
      __munmap_js,
      timers,
      handleException,
      runtimeKeepaliveCounter,
      keepRuntimeAlive,
      _proc_exit,
      exitJS,
      _exit,
      maybeExit,
      callUserCallback,
      _emscripten_get_now,
      __setitimer_js,
      __tzset_js,
      _emscripten_date_now,
      getHeapMax,
      _emscripten_get_heap_max,
      growMemory,
      _emscripten_resize_heap,
      ENV,
      getExecutableName,
      _getEnvStrings,
      stringToAscii,
      _environ_get,
      _environ_sizes_get,
      _fd_close,
      _fd_fdstat_get,
      doReadv,
      _fd_pread,
      _fd_read,
      _fd_seek,
      doWritev,
      _fd_write,
      _getentropy,
      _llvm_eh_typeid_for,
      _resolc_compile,
      _soljson_compile,
      _soljson_version,
      stackAlloc,
      stringToUTF8OnStack,
      stringToNewUTF8,
      getCFunc,
      writeArrayToMemory,
      ccall,
      cwrap,
      wasmImports,
      wasmExports,
      _main,
      _malloc,
      _funcs_on_exit,
      _fflush2,
      _emscripten_builtin_memalign2,
      _emscripten_timeout,
      _setThrew2,
      _emscripten_tempret_set,
      _emscripten_stack_restore,
      _emscripten_stack_alloc,
      _emscripten_stack_get_current2,
      _cxa_decrement_exception_refcount,
      _cxa_increment_exception_refcount,
      _cxa_can_catch,
      _cxa_is_pointer_type,
      dynCall_iijj,
      dynCall_viijj,
      dynCall_jii,
      dynCall_iiji,
      dynCall_iiij,
      dynCall_vij,
      dynCall_viij,
      dynCall_viiij,
      dynCall_viiiij,
      dynCall_viiiiji,
      dynCall_viiiiiiijii,
      dynCall_viiijji,
      dynCall_viiiji,
      dynCall_viijii,
      dynCall_viiji,
      dynCall_jijj,
      dynCall_viiiijiijiii,
      dynCall_viijiii,
      dynCall_viiiijj,
      dynCall_viiijii,
      dynCall_jijjji,
      dynCall_jijji,
      dynCall_vijiii,
      dynCall_ji,
      dynCall_viiijjii,
      dynCall_viiiijii,
      dynCall_viiiiiiiiijiiii,
      dynCall_j,
      dynCall_iiiiij,
      dynCall_jiiii,
      dynCall_viiiiiiji,
      invoke_vi,
      invoke_vii,
      invoke_viii,
      invoke_ii,
      invoke_viiii,
      invoke_iiii,
      invoke_iii,
      invoke_viiiiiiii,
      invoke_viiiiii,
      invoke_iiiii,
      invoke_viiiiiiiiiiiiiiii,
      invoke_viiiiiii,
      invoke_viiiii,
      invoke_i,
      invoke_viiiiiiiiiiii,
      invoke_v,
      invoke_iiiiiiiiiiiiiiiiiii,
      invoke_iiiiiiii,
      invoke_iiiiiii,
      invoke_viiiiiiiiiii,
      invoke_iiiiii,
      invoke_viiiiiiiii,
      invoke_iiiiiiiiiiii,
      invoke_viiiiiiiiii,
      invoke_iiiiiiiiii,
      invoke_iiiiiiiiiii,
      invoke_iiiiiiiiiiiiii,
      invoke_viiiiiiiiiiiiiii,
      invoke_diiii,
      invoke_iiiiid,
      invoke_fiii,
      invoke_diii,
      invoke_viif,
      invoke_viid,
      invoke_viijj,
      invoke_jii,
      invoke_iiji,
      invoke_iiij,
      invoke_vij,
      invoke_viij,
      invoke_iijj,
      invoke_viiij,
      invoke_viiiij,
      invoke_viiiiji,
      invoke_viiijji,
      invoke_viiiji,
      invoke_viijii,
      invoke_viiji,
      invoke_jijj,
      invoke_viiiijiijiii,
      invoke_viijiii,
      invoke_viiiijj,
      invoke_viiijii,
      invoke_jijjji,
      invoke_jijji,
      invoke_vijiii,
      invoke_viiijjii,
      invoke_viiiiiiji,
      invoke_viiiijii,
      invoke_viiiiiiijii,
      invoke_viiiiiiiiijiiii,
      invoke_j,
      invoke_ji,
      invoke_iiiiij,
      invoke_jiiii,
      applySignatureConversions,
      calledRun,
      callMain,
      run,
      shouldRunNow,
      _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          run = function _run() {
            var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : arguments_;
            if (runDependencies > 0) {
              return;
            }
            preRun();
            if (runDependencies > 0) {
              return;
            }
            function doRun() {
              var _Module$onRuntimeInit, _Module5;
              if (calledRun) return;
              calledRun = true;
              Module["calledRun"] = true;
              if (ABORT) return;
              initRuntime();
              preMain();
              readyPromiseResolve(Module);
              (_Module$onRuntimeInit = (_Module5 = Module)["onRuntimeInitialized"]) === null || _Module$onRuntimeInit === void 0 || _Module$onRuntimeInit.call(_Module5);
              if (shouldRunNow) callMain(args);
              postRun();
            }
            if (Module["setStatus"]) {
              Module["setStatus"]("Running...");
              setTimeout(function () {
                setTimeout(function () {
                  Module["setStatus"]("");
                }, 1);
                doRun();
              }, 1);
            } else {
              doRun();
            }
          };
          callMain = function _callMain() {
            var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var entryFunction = _main;
            args.unshift(thisProgram);
            var argc = args.length;
            var argv = stackAlloc((argc + 1) * 4);
            var argv_ptr = argv;
            args.forEach(function (arg) {
              HEAPU32[argv_ptr >>> 2 >>> 0] = stringToUTF8OnStack(arg);
              argv_ptr += 4;
            });
            HEAPU32[argv_ptr >>> 2 >>> 0] = 0;
            try {
              var ret = entryFunction(argc, argv);
              exitJS(ret, true);
              return ret;
            } catch (e) {
              return handleException(e);
            }
          };
          applySignatureConversions = function _applySignatureConver(wasmExports) {
            wasmExports = Object.assign({}, wasmExports);
            var makeWrapper_pp = function makeWrapper_pp(f) {
              return function (a0) {
                return f(a0) >>> 0;
              };
            };
            var makeWrapper_ppp = function makeWrapper_ppp(f) {
              return function (a0, a1) {
                return f(a0, a1) >>> 0;
              };
            };
            var makeWrapper_p = function makeWrapper_p(f) {
              return function () {
                return f() >>> 0;
              };
            };
            wasmExports["vb"] = makeWrapper_pp(wasmExports["vb"]);
            wasmExports["yb"] = makeWrapper_ppp(wasmExports["yb"]);
            wasmExports["Db"] = makeWrapper_pp(wasmExports["Db"]);
            wasmExports["Eb"] = makeWrapper_p(wasmExports["Eb"]);
            return wasmExports;
          };
          invoke_jiiii = function _invoke_jiiii(index, a1, a2, a3, a4) {
            var sp = stackSave();
            try {
              return dynCall_jiiii(index, a1, a2, a3, a4);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_iiiiij = function _invoke_iiiiij(index, a1, a2, a3, a4, a5, a6) {
            var sp = stackSave();
            try {
              return dynCall_iiiiij(index, a1, a2, a3, a4, a5, a6);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_ji = function _invoke_ji(index, a1) {
            var sp = stackSave();
            try {
              return dynCall_ji(index, a1);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_j = function _invoke_j(index) {
            var sp = stackSave();
            try {
              return dynCall_j(index);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_viiiiiiiiijiiii = function _invoke_viiiiiiiiijii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15) {
            var sp = stackSave();
            try {
              dynCall_viiiiiiiiijiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_viiiiiiijii = function _invoke_viiiiiiijii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
            var sp = stackSave();
            try {
              dynCall_viiiiiiijii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_viiiijii = function _invoke_viiiijii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
            var sp = stackSave();
            try {
              dynCall_viiiijii(index, a1, a2, a3, a4, a5, a6, a7, a8);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_viiiiiiji = function _invoke_viiiiiiji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
            var sp = stackSave();
            try {
              dynCall_viiiiiiji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_viiijjii = function _invoke_viiijjii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
            var sp = stackSave();
            try {
              dynCall_viiijjii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_vijiii = function _invoke_vijiii(index, a1, a2, a3, a4, a5, a6) {
            var sp = stackSave();
            try {
              dynCall_vijiii(index, a1, a2, a3, a4, a5, a6);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_jijji = function _invoke_jijji(index, a1, a2, a3, a4, a5, a6) {
            var sp = stackSave();
            try {
              return dynCall_jijji(index, a1, a2, a3, a4, a5, a6);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_jijjji = function _invoke_jijjji(index, a1, a2, a3, a4, a5, a6, a7, a8) {
            var sp = stackSave();
            try {
              return dynCall_jijjji(index, a1, a2, a3, a4, a5, a6, a7, a8);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_viiijii = function _invoke_viiijii(index, a1, a2, a3, a4, a5, a6, a7) {
            var sp = stackSave();
            try {
              dynCall_viiijii(index, a1, a2, a3, a4, a5, a6, a7);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_viiiijj = function _invoke_viiiijj(index, a1, a2, a3, a4, a5, a6, a7, a8) {
            var sp = stackSave();
            try {
              dynCall_viiiijj(index, a1, a2, a3, a4, a5, a6, a7, a8);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_viijiii = function _invoke_viijiii(index, a1, a2, a3, a4, a5, a6, a7) {
            var sp = stackSave();
            try {
              dynCall_viijiii(index, a1, a2, a3, a4, a5, a6, a7);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_viiiijiijiii = function _invoke_viiiijiijiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13) {
            var sp = stackSave();
            try {
              dynCall_viiiijiijiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_jijj = function _invoke_jijj(index, a1, a2, a3, a4, a5) {
            var sp = stackSave();
            try {
              return dynCall_jijj(index, a1, a2, a3, a4, a5);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_viiji = function _invoke_viiji(index, a1, a2, a3, a4, a5) {
            var sp = stackSave();
            try {
              dynCall_viiji(index, a1, a2, a3, a4, a5);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_viijii = function _invoke_viijii(index, a1, a2, a3, a4, a5, a6) {
            var sp = stackSave();
            try {
              dynCall_viijii(index, a1, a2, a3, a4, a5, a6);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_viiiji = function _invoke_viiiji(index, a1, a2, a3, a4, a5, a6) {
            var sp = stackSave();
            try {
              dynCall_viiiji(index, a1, a2, a3, a4, a5, a6);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_viiijji = function _invoke_viiijji(index, a1, a2, a3, a4, a5, a6, a7, a8) {
            var sp = stackSave();
            try {
              dynCall_viiijji(index, a1, a2, a3, a4, a5, a6, a7, a8);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_viiiiji = function _invoke_viiiiji(index, a1, a2, a3, a4, a5, a6, a7) {
            var sp = stackSave();
            try {
              dynCall_viiiiji(index, a1, a2, a3, a4, a5, a6, a7);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_viiiij = function _invoke_viiiij(index, a1, a2, a3, a4, a5, a6) {
            var sp = stackSave();
            try {
              dynCall_viiiij(index, a1, a2, a3, a4, a5, a6);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_viiij = function _invoke_viiij(index, a1, a2, a3, a4, a5) {
            var sp = stackSave();
            try {
              dynCall_viiij(index, a1, a2, a3, a4, a5);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_iijj = function _invoke_iijj(index, a1, a2, a3, a4, a5) {
            var sp = stackSave();
            try {
              return dynCall_iijj(index, a1, a2, a3, a4, a5);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_viij = function _invoke_viij(index, a1, a2, a3, a4) {
            var sp = stackSave();
            try {
              dynCall_viij(index, a1, a2, a3, a4);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_vij = function _invoke_vij(index, a1, a2, a3) {
            var sp = stackSave();
            try {
              dynCall_vij(index, a1, a2, a3);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_iiij = function _invoke_iiij(index, a1, a2, a3, a4) {
            var sp = stackSave();
            try {
              return dynCall_iiij(index, a1, a2, a3, a4);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_iiji = function _invoke_iiji(index, a1, a2, a3, a4) {
            var sp = stackSave();
            try {
              return dynCall_iiji(index, a1, a2, a3, a4);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_jii = function _invoke_jii(index, a1, a2) {
            var sp = stackSave();
            try {
              return dynCall_jii(index, a1, a2);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_viijj = function _invoke_viijj(index, a1, a2, a3, a4, a5, a6) {
            var sp = stackSave();
            try {
              dynCall_viijj(index, a1, a2, a3, a4, a5, a6);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_viid = function _invoke_viid(index, a1, a2, a3) {
            var sp = stackSave();
            try {
              getWasmTableEntry(index)(a1, a2, a3);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_viif = function _invoke_viif(index, a1, a2, a3) {
            var sp = stackSave();
            try {
              getWasmTableEntry(index)(a1, a2, a3);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_diii = function _invoke_diii(index, a1, a2, a3) {
            var sp = stackSave();
            try {
              return getWasmTableEntry(index)(a1, a2, a3);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_fiii = function _invoke_fiii(index, a1, a2, a3) {
            var sp = stackSave();
            try {
              return getWasmTableEntry(index)(a1, a2, a3);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_iiiiid = function _invoke_iiiiid(index, a1, a2, a3, a4, a5) {
            var sp = stackSave();
            try {
              return getWasmTableEntry(index)(a1, a2, a3, a4, a5);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_diiii = function _invoke_diiii(index, a1, a2, a3, a4) {
            var sp = stackSave();
            try {
              return getWasmTableEntry(index)(a1, a2, a3, a4);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_viiiiiiiiiiiiiii = function _invoke_viiiiiiiiiiii3(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15) {
            var sp = stackSave();
            try {
              getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_iiiiiiiiiiiiii = function _invoke_iiiiiiiiiiiii2(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13) {
            var sp = stackSave();
            try {
              return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_iiiiiiiiiii = function _invoke_iiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
            var sp = stackSave();
            try {
              return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_iiiiiiiiii = function _invoke_iiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
            var sp = stackSave();
            try {
              return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_viiiiiiiiii = function _invoke_viiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
            var sp = stackSave();
            try {
              getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_iiiiiiiiiiii = function _invoke_iiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
            var sp = stackSave();
            try {
              return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_viiiiiiiii = function _invoke_viiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
            var sp = stackSave();
            try {
              getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_iiiiii = function _invoke_iiiiii(index, a1, a2, a3, a4, a5) {
            var sp = stackSave();
            try {
              return getWasmTableEntry(index)(a1, a2, a3, a4, a5);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_viiiiiiiiiii = function _invoke_viiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
            var sp = stackSave();
            try {
              getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_iiiiiii = function _invoke_iiiiiii(index, a1, a2, a3, a4, a5, a6) {
            var sp = stackSave();
            try {
              return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_iiiiiiii = function _invoke_iiiiiiii(index, a1, a2, a3, a4, a5, a6, a7) {
            var sp = stackSave();
            try {
              return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_iiiiiiiiiiiiiiiiiii = function _invoke_iiiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18) {
            var sp = stackSave();
            try {
              return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_v = function _invoke_v(index) {
            var sp = stackSave();
            try {
              getWasmTableEntry(index)();
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_viiiiiiiiiiii = function _invoke_viiiiiiiiiiii2(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) {
            var sp = stackSave();
            try {
              getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_i = function _invoke_i(index) {
            var sp = stackSave();
            try {
              return getWasmTableEntry(index)();
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_viiiii = function _invoke_viiiii(index, a1, a2, a3, a4, a5) {
            var sp = stackSave();
            try {
              getWasmTableEntry(index)(a1, a2, a3, a4, a5);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_viiiiiii = function _invoke_viiiiiii(index, a1, a2, a3, a4, a5, a6, a7) {
            var sp = stackSave();
            try {
              getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_viiiiiiiiiiiiiiii = function _invoke_viiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16) {
            var sp = stackSave();
            try {
              getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_iiiii = function _invoke_iiiii(index, a1, a2, a3, a4) {
            var sp = stackSave();
            try {
              return getWasmTableEntry(index)(a1, a2, a3, a4);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_viiiiii = function _invoke_viiiiii(index, a1, a2, a3, a4, a5, a6) {
            var sp = stackSave();
            try {
              getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_viiiiiiii = function _invoke_viiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
            var sp = stackSave();
            try {
              getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_iii = function _invoke_iii(index, a1, a2) {
            var sp = stackSave();
            try {
              return getWasmTableEntry(index)(a1, a2);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_iiii = function _invoke_iiii(index, a1, a2, a3) {
            var sp = stackSave();
            try {
              return getWasmTableEntry(index)(a1, a2, a3);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_viiii = function _invoke_viiii(index, a1, a2, a3, a4) {
            var sp = stackSave();
            try {
              getWasmTableEntry(index)(a1, a2, a3, a4);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_ii = function _invoke_ii(index, a1) {
            var sp = stackSave();
            try {
              return getWasmTableEntry(index)(a1);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_viii = function _invoke_viii(index, a1, a2, a3) {
            var sp = stackSave();
            try {
              getWasmTableEntry(index)(a1, a2, a3);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_vii = function _invoke_vii(index, a1, a2) {
            var sp = stackSave();
            try {
              getWasmTableEntry(index)(a1, a2);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          invoke_vi = function _invoke_vi(index, a1) {
            var sp = stackSave();
            try {
              getWasmTableEntry(index)(a1);
            } catch (e) {
              stackRestore(sp);
              if (e !== e + 0) throw e;
              _setThrew2(1, 0);
            }
          };
          _soljson_version = function _soljson_version2() {
            var version = Module.solc.version();
            return stringToNewUTF8(version);
          };
          _soljson_compile = function _soljson_compile2(inputPtr, inputLen) {
            var inputJson = UTF8ToString(inputPtr, inputLen);
            var output = Module.solc.compile(inputJson);
            return stringToNewUTF8(output);
          };
          _resolc_compile = function _resolc_compile2(inputPtr, inputLen) {
            var _require = require$1("worker_threads"),
              Worker = _require.Worker;
            var deasync = require$1("deasync");
            var inputJson = UTF8ToString(inputPtr, inputLen);
            function compileWithWorker(inputJson, callback) {
              return new Promise(function (resolve, reject) {
                var worker = new Worker(new URL("./worker.js", (typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : (_documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === 'SCRIPT' && _documentCurrentScript.src || new URL('resolc.js', document.baseURI).href))), {
                  type: "module"
                });
                worker.on("message", function (message) {
                  resolve(message.output);
                  callback(null, message.output);
                  worker.terminate();
                });
                worker.on("error", function (error) {
                  reject(error);
                  callback(error);
                  worker.terminate();
                });
                worker.postMessage(inputJson);
              });
            }
            var result = null;
            var error = null;
            compileWithWorker(inputJson, function (err, res) {
              error = err;
              result = res;
            });
            deasync.loopWhile(function () {
              return result === null && error === null;
            });
            if (error) {
              var errorJson = JSON.stringify({
                type: "error",
                message: error.message || "Unknown error"
              });
              return stringToNewUTF8(errorJson);
            }
            var resultJson = JSON.stringify({
              type: "success",
              data: result
            });
            return stringToNewUTF8(resultJson);
          };
          _llvm_eh_typeid_for = function _llvm_eh_typeid_for2(type) {
            type >>>= 0;
            return type;
          };
          _getentropy = function _getentropy2(buffer, size) {
            buffer >>>= 0;
            size >>>= 0;
            _randomFill(HEAPU8.subarray(buffer >>> 0, buffer + size >>> 0));
            return 0;
          };
          _fd_write = function _fd_write2(fd, iov, iovcnt, pnum) {
            iov >>>= 0;
            iovcnt >>>= 0;
            pnum >>>= 0;
            try {
              var stream = SYSCALLS.getStreamFromFD(fd);
              var num = doWritev(stream, iov, iovcnt);
              HEAPU32[pnum >>> 2 >>> 0] = num;
              return 0;
            } catch (e) {
              if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
              return e.errno;
            }
          };
          _fd_seek = function _fd_seek2(fd, offset_low, offset_high, whence, newOffset) {
            var offset = convertI32PairToI53Checked(offset_low, offset_high);
            newOffset >>>= 0;
            try {
              if (isNaN(offset)) return 61;
              var stream = SYSCALLS.getStreamFromFD(fd);
              FS.llseek(stream, offset, whence);
              tempI64 = [stream.position >>> 0, (tempDouble = stream.position, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[newOffset >>> 2 >>> 0] = tempI64[0], HEAP32[newOffset + 4 >>> 2 >>> 0] = tempI64[1];
              if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null;
              return 0;
            } catch (e) {
              if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
              return e.errno;
            }
          };
          _fd_read = function _fd_read2(fd, iov, iovcnt, pnum) {
            iov >>>= 0;
            iovcnt >>>= 0;
            pnum >>>= 0;
            try {
              var stream = SYSCALLS.getStreamFromFD(fd);
              var num = doReadv(stream, iov, iovcnt);
              HEAPU32[pnum >>> 2 >>> 0] = num;
              return 0;
            } catch (e) {
              if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
              return e.errno;
            }
          };
          _fd_pread = function _fd_pread2(fd, iov, iovcnt, offset_low, offset_high, pnum) {
            iov >>>= 0;
            iovcnt >>>= 0;
            var offset = convertI32PairToI53Checked(offset_low, offset_high);
            pnum >>>= 0;
            try {
              if (isNaN(offset)) return 61;
              var stream = SYSCALLS.getStreamFromFD(fd);
              var num = doReadv(stream, iov, iovcnt, offset);
              HEAPU32[pnum >>> 2 >>> 0] = num;
              return 0;
            } catch (e) {
              if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
              return e.errno;
            }
          };
          _fd_fdstat_get = function _fd_fdstat_get2(fd, pbuf) {
            pbuf >>>= 0;
            try {
              var rightsBase = 0;
              var rightsInheriting = 0;
              var flags = 0;
              {
                var stream = SYSCALLS.getStreamFromFD(fd);
                var type = stream.tty ? 2 : FS.isDir(stream.mode) ? 3 : FS.isLink(stream.mode) ? 7 : 4;
              }
              HEAP8[pbuf >>> 0] = type;
              HEAP16[pbuf + 2 >>> 1 >>> 0] = flags;
              tempI64 = [rightsBase >>> 0, (tempDouble = rightsBase, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[pbuf + 8 >>> 2 >>> 0] = tempI64[0], HEAP32[pbuf + 12 >>> 2 >>> 0] = tempI64[1];
              tempI64 = [rightsInheriting >>> 0, (tempDouble = rightsInheriting, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[pbuf + 16 >>> 2 >>> 0] = tempI64[0], HEAP32[pbuf + 20 >>> 2 >>> 0] = tempI64[1];
              return 0;
            } catch (e) {
              if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
              return e.errno;
            }
          };
          _fd_close = function _fd_close2(fd) {
            try {
              var stream = SYSCALLS.getStreamFromFD(fd);
              FS.close(stream);
              return 0;
            } catch (e) {
              if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
              return e.errno;
            }
          };
          _emscripten_resize_heap = function _emscripten_resize_he(requestedSize) {
            requestedSize >>>= 0;
            var oldSize = HEAPU8.length;
            var maxHeapSize = getHeapMax();
            if (requestedSize > maxHeapSize) {
              return false;
            }
            var alignUp = function alignUp(x, multiple) {
              return x + (multiple - x % multiple) % multiple;
            };
            for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
              var overGrownHeapSize = oldSize * (1 + .2 / cutDown);
              overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
              var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
              var replacement = growMemory(newSize);
              if (replacement) {
                return true;
              }
            }
            return false;
          };
          _emscripten_get_heap_max = function _emscripten_get_heap_() {
            return getHeapMax();
          };
          __munmap_js = function _munmap_js(addr, len, prot, flags, fd, offset_low, offset_high) {
            addr >>>= 0;
            len >>>= 0;
            var offset = convertI32PairToI53Checked(offset_low, offset_high);
            try {
              var stream = SYSCALLS.getStreamFromFD(fd);
              if (prot & 2) {
                SYSCALLS.doMsync(addr, stream, len, flags, offset);
              }
            } catch (e) {
              if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
              return -e.errno;
            }
          };
          __mmap_js = function _mmap_js(len, prot, flags, fd, offset_low, offset_high, allocated, addr) {
            len >>>= 0;
            var offset = convertI32PairToI53Checked(offset_low, offset_high);
            allocated >>>= 0;
            addr >>>= 0;
            try {
              if (isNaN(offset)) return 61;
              var stream = SYSCALLS.getStreamFromFD(fd);
              var res = FS.mmap(stream, len, offset, prot, flags);
              var ptr = res.ptr;
              HEAP32[allocated >>> 2 >>> 0] = res.allocated;
              HEAPU32[addr >>> 2 >>> 0] = ptr;
              return 0;
            } catch (e) {
              if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
              return -e.errno;
            }
          };
          __localtime_js = function _localtime_js(time_low, time_high, tmPtr) {
            var time = convertI32PairToI53Checked(time_low, time_high);
            tmPtr >>>= 0;
            var date = new Date(time * 1e3);
            HEAP32[tmPtr >>> 2 >>> 0] = date.getSeconds();
            HEAP32[tmPtr + 4 >>> 2 >>> 0] = date.getMinutes();
            HEAP32[tmPtr + 8 >>> 2 >>> 0] = date.getHours();
            HEAP32[tmPtr + 12 >>> 2 >>> 0] = date.getDate();
            HEAP32[tmPtr + 16 >>> 2 >>> 0] = date.getMonth();
            HEAP32[tmPtr + 20 >>> 2 >>> 0] = date.getFullYear() - 1900;
            HEAP32[tmPtr + 24 >>> 2 >>> 0] = date.getDay();
            var yday = ydayFromDate(date) | 0;
            HEAP32[tmPtr + 28 >>> 2 >>> 0] = yday;
            HEAP32[tmPtr + 36 >>> 2 >>> 0] = -(date.getTimezoneOffset() * 60);
            var start = new Date(date.getFullYear(), 0, 1);
            var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
            var winterOffset = start.getTimezoneOffset();
            var dst = (summerOffset != winterOffset && date.getTimezoneOffset() == Math.min(winterOffset, summerOffset)) | 0;
            HEAP32[tmPtr + 32 >>> 2 >>> 0] = dst;
          };
          __emscripten_memcpy_js = function _emscripten_memcpy_j(dest, src, num) {
            dest >>>= 0;
            src >>>= 0;
            num >>>= 0;
            return HEAPU8.copyWithin(dest >>> 0, src >>> 0, src + num >>> 0);
          };
          ___syscall_unlinkat = function _syscall_unlinkat(dirfd, path, flags) {
            path >>>= 0;
            try {
              path = SYSCALLS.getStr(path);
              path = SYSCALLS.calculateAt(dirfd, path);
              if (flags === 0) {
                FS.unlink(path);
              } else if (flags === 512) {
                FS.rmdir(path);
              } else {
                abort("Invalid flags passed to unlinkat");
              }
              return 0;
            } catch (e) {
              if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
              return -e.errno;
            }
          };
          ___syscall_statfs64 = function _syscall_statfs(path, size, buf) {
            path >>>= 0;
            buf >>>= 0;
            try {
              path = SYSCALLS.getStr(path);
              HEAP32[buf + 4 >>> 2 >>> 0] = 4096;
              HEAP32[buf + 40 >>> 2 >>> 0] = 4096;
              HEAP32[buf + 8 >>> 2 >>> 0] = 1e6;
              HEAP32[buf + 12 >>> 2 >>> 0] = 5e5;
              HEAP32[buf + 16 >>> 2 >>> 0] = 5e5;
              HEAP32[buf + 20 >>> 2 >>> 0] = FS.nextInode;
              HEAP32[buf + 24 >>> 2 >>> 0] = 1e6;
              HEAP32[buf + 28 >>> 2 >>> 0] = 42;
              HEAP32[buf + 44 >>> 2 >>> 0] = 2;
              HEAP32[buf + 36 >>> 2 >>> 0] = 255;
              return 0;
            } catch (e) {
              if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
              return -e.errno;
            }
          };
          ___syscall_stat64 = function _syscall_stat(path, buf) {
            path >>>= 0;
            buf >>>= 0;
            try {
              path = SYSCALLS.getStr(path);
              return SYSCALLS.doStat(FS.stat, path, buf);
            } catch (e) {
              if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
              return -e.errno;
            }
          };
          ___syscall_rmdir = function _syscall_rmdir(path) {
            path >>>= 0;
            try {
              path = SYSCALLS.getStr(path);
              FS.rmdir(path);
              return 0;
            } catch (e) {
              if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
              return -e.errno;
            }
          };
          ___syscall_renameat = function _syscall_renameat(olddirfd, oldpath, newdirfd, newpath) {
            oldpath >>>= 0;
            newpath >>>= 0;
            try {
              oldpath = SYSCALLS.getStr(oldpath);
              newpath = SYSCALLS.getStr(newpath);
              oldpath = SYSCALLS.calculateAt(olddirfd, oldpath);
              newpath = SYSCALLS.calculateAt(newdirfd, newpath);
              FS.rename(oldpath, newpath);
              return 0;
            } catch (e) {
              if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
              return -e.errno;
            }
          };
          ___syscall_readlinkat = function _syscall_readlinkat(dirfd, path, buf, bufsize) {
            path >>>= 0;
            buf >>>= 0;
            bufsize >>>= 0;
            try {
              path = SYSCALLS.getStr(path);
              path = SYSCALLS.calculateAt(dirfd, path);
              if (bufsize <= 0) return -28;
              var ret = FS.readlink(path);
              var len = Math.min(bufsize, lengthBytesUTF8(ret));
              var endChar = HEAP8[buf + len >>> 0];
              stringToUTF8(ret, buf, bufsize + 1);
              HEAP8[buf + len >>> 0] = endChar;
              return len;
            } catch (e) {
              if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
              return -e.errno;
            }
          };
          ___syscall_openat = function _syscall_openat(dirfd, path, flags, varargs) {
            path >>>= 0;
            varargs >>>= 0;
            SYSCALLS.varargs = varargs;
            try {
              path = SYSCALLS.getStr(path);
              path = SYSCALLS.calculateAt(dirfd, path);
              var mode = varargs ? syscallGetVarargI() : 0;
              return FS.open(path, flags, mode).fd;
            } catch (e) {
              if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
              return -e.errno;
            }
          };
          ___syscall_newfstatat = function _syscall_newfstatat(dirfd, path, buf, flags) {
            path >>>= 0;
            buf >>>= 0;
            try {
              path = SYSCALLS.getStr(path);
              var nofollow = flags & 256;
              var allowEmpty = flags & 4096;
              flags = flags & ~6400;
              path = SYSCALLS.calculateAt(dirfd, path, allowEmpty);
              return SYSCALLS.doStat(nofollow ? FS.lstat : FS.stat, path, buf);
            } catch (e) {
              if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
              return -e.errno;
            }
          };
          ___syscall_mkdirat = function _syscall_mkdirat(dirfd, path, mode) {
            path >>>= 0;
            try {
              path = SYSCALLS.getStr(path);
              path = SYSCALLS.calculateAt(dirfd, path);
              path = PATH.normalize(path);
              if (path[path.length - 1] === "/") path = path.substr(0, path.length - 1);
              FS.mkdir(path, mode, 0);
              return 0;
            } catch (e) {
              if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
              return -e.errno;
            }
          };
          ___syscall_lstat64 = function _syscall_lstat(path, buf) {
            path >>>= 0;
            buf >>>= 0;
            try {
              path = SYSCALLS.getStr(path);
              return SYSCALLS.doStat(FS.lstat, path, buf);
            } catch (e) {
              if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
              return -e.errno;
            }
          };
          ___syscall_getdents64 = function _syscall_getdents(fd, dirp, count) {
            dirp >>>= 0;
            count >>>= 0;
            try {
              var stream = SYSCALLS.getStreamFromFD(fd);
              stream.getdents || (stream.getdents = FS.readdir(stream.path));
              var struct_size = 280;
              var pos = 0;
              var off = FS.llseek(stream, 0, 1);
              var idx = Math.floor(off / struct_size);
              while (idx < stream.getdents.length && pos + struct_size <= count) {
                var id;
                var type;
                var name = stream.getdents[idx];
                if (name === ".") {
                  id = stream.node.id;
                  type = 4;
                } else if (name === "..") {
                  var lookup = FS.lookupPath(stream.path, {
                    parent: true
                  });
                  id = lookup.node.id;
                  type = 4;
                } else {
                  var child = FS.lookupNode(stream.node, name);
                  id = child.id;
                  type = FS.isChrdev(child.mode) ? 2 : FS.isDir(child.mode) ? 4 : FS.isLink(child.mode) ? 10 : 8;
                }
                tempI64 = [id >>> 0, (tempDouble = id, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[dirp + pos >>> 2 >>> 0] = tempI64[0], HEAP32[dirp + pos + 4 >>> 2 >>> 0] = tempI64[1];
                tempI64 = [(idx + 1) * struct_size >>> 0, (tempDouble = (idx + 1) * struct_size, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[dirp + pos + 8 >>> 2 >>> 0] = tempI64[0], HEAP32[dirp + pos + 12 >>> 2 >>> 0] = tempI64[1];
                HEAP16[dirp + pos + 16 >>> 1 >>> 0] = 280;
                HEAP8[dirp + pos + 18 >>> 0] = type;
                stringToUTF8(name, dirp + pos + 19, 256);
                pos += struct_size;
                idx += 1;
              }
              FS.llseek(stream, idx * struct_size, 0);
              return pos;
            } catch (e) {
              if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
              return -e.errno;
            }
          };
          ___syscall_getcwd = function _syscall_getcwd(buf, size) {
            buf >>>= 0;
            size >>>= 0;
            try {
              if (size === 0) return -28;
              var cwd = FS.cwd();
              var cwdLengthInBytes = lengthBytesUTF8(cwd) + 1;
              if (size < cwdLengthInBytes) return -68;
              stringToUTF8(cwd, buf, size);
              return cwdLengthInBytes;
            } catch (e) {
              if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
              return -e.errno;
            }
          };
          ___syscall_ftruncate64 = function _syscall_ftruncate(fd, length_low, length_high) {
            var length = convertI32PairToI53Checked(length_low, length_high);
            try {
              if (isNaN(length)) return 61;
              FS.ftruncate(fd, length);
              return 0;
            } catch (e) {
              if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
              return -e.errno;
            }
          };
          ___syscall_fstat64 = function _syscall_fstat(fd, buf) {
            buf >>>= 0;
            try {
              var stream = SYSCALLS.getStreamFromFD(fd);
              return SYSCALLS.doStat(FS.stat, stream.path, buf);
            } catch (e) {
              if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
              return -e.errno;
            }
          };
          ___syscall_fcntl64 = function _syscall_fcntl(fd, cmd, varargs) {
            varargs >>>= 0;
            SYSCALLS.varargs = varargs;
            try {
              var stream = SYSCALLS.getStreamFromFD(fd);
              switch (cmd) {
                case 0:
                  {
                    var arg = syscallGetVarargI();
                    if (arg < 0) {
                      return -28;
                    }
                    while (FS.streams[arg]) {
                      arg++;
                    }
                    var newStream;
                    newStream = FS.dupStream(stream, arg);
                    return newStream.fd;
                  }
                case 1:
                case 2:
                  return 0;
                case 3:
                  return stream.flags;
                case 4:
                  {
                    var arg = syscallGetVarargI();
                    stream.flags |= arg;
                    return 0;
                  }
                case 12:
                  {
                    var arg = syscallGetVarargP();
                    var offset = 0;
                    HEAP16[arg + offset >>> 1 >>> 0] = 2;
                    return 0;
                  }
                case 13:
                case 14:
                  return 0;
              }
              return -28;
            } catch (e) {
              if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
              return -e.errno;
            }
          };
          syscallGetVarargI = function _syscallGetVarargI() {
            var ret = HEAP32[+SYSCALLS.varargs >>> 2 >>> 0];
            SYSCALLS.varargs += 4;
            return ret;
          };
          ___syscall_fchmod = function _syscall_fchmod(fd, mode) {
            try {
              FS.fchmod(fd, mode);
              return 0;
            } catch (e) {
              if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
              return -e.errno;
            }
          };
          ___syscall_faccessat = function _syscall_faccessat(dirfd, path, amode, flags) {
            path >>>= 0;
            try {
              path = SYSCALLS.getStr(path);
              path = SYSCALLS.calculateAt(dirfd, path);
              if (amode & ~7) {
                return -28;
              }
              var lookup = FS.lookupPath(path, {
                follow: true
              });
              var node = lookup.node;
              if (!node) {
                return -44;
              }
              var perms = "";
              if (amode & 4) perms += "r";
              if (amode & 2) perms += "w";
              if (amode & 1) perms += "x";
              if (perms && FS.nodePermissions(node, perms)) {
                return -2;
              }
              return 0;
            } catch (e) {
              if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
              return -e.errno;
            }
          };
          ___syscall_chmod = function _syscall_chmod(path, mode) {
            path >>>= 0;
            try {
              path = SYSCALLS.getStr(path);
              FS.chmod(path, mode);
              return 0;
            } catch (e) {
              if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
              return -e.errno;
            }
          };
          ___syscall_chdir = function _syscall_chdir(path) {
            path >>>= 0;
            try {
              path = SYSCALLS.getStr(path);
              FS.chdir(path);
              return 0;
            } catch (e) {
              if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
              return -e.errno;
            }
          };
          intArrayFromString = function _intArrayFromString(stringy, dontAddNull, length) {
            var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
            var u8array = new Array(len);
            var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
            if (dontAddNull) u8array.length = numBytesWritten;
            return u8array;
          };
          ___cxa_throw = function _cxa_throw(ptr, type, destructor) {
            ptr >>>= 0;
            type >>>= 0;
            destructor >>>= 0;
            var info = new ExceptionInfo(ptr);
            info.init(type, destructor);
            exceptionLast = ptr;
            uncaughtExceptionCount++;
            throw exceptionLast;
          };
          ___cxa_rethrow_primary_exception = function _cxa_rethrow_primar(ptr) {
            ptr >>>= 0;
            if (!ptr) return;
            var info = new ExceptionInfo(ptr);
            exceptionCaught.push(info);
            info.set_rethrown(true);
            ___cxa_rethrow();
          };
          ___cxa_find_matching_catch_4 = function _cxa_find_matching_3(arg0, arg1) {
            arg0 >>>= 0;
            arg1 >>>= 0;
            return findMatchingCatch([arg0, arg1]);
          };
          ___cxa_find_matching_catch_3 = function _cxa_find_matching_2(arg0) {
            arg0 >>>= 0;
            return findMatchingCatch([arg0]);
          };
          ___cxa_find_matching_catch_2 = function _cxa_find_matching_() {
            return findMatchingCatch([]);
          };
          ___resumeException = function _resumeException(ptr) {
            ptr >>>= 0;
            if (!exceptionLast) {
              exceptionLast = ptr;
            }
            throw exceptionLast;
          };
          ___cxa_begin_catch = function _cxa_begin_catch(ptr) {
            ptr >>>= 0;
            var info = new ExceptionInfo(ptr);
            if (!info.get_caught()) {
              info.set_caught(true);
              uncaughtExceptionCount--;
            }
            info.set_rethrown(false);
            exceptionCaught.push(info);
            _cxa_increment_exception_refcount(info.excPtr);
            return info.get_exception_ptr();
          };
          ___call_sighandler = function _call_sighandler(fp, sig) {
            fp >>>= 0;
            return getWasmTableEntry(fp)(sig);
          };
          ExitStatus = function _ExitStatus(status) {
            this.name = "ExitStatus";
            this.message = "Program terminated with exit(".concat(status, ")");
            this.status = status;
          };
          createWasm = function _createWasm() {
            var info = getWasmImports();
            function receiveInstance(instance, module) {
              wasmExports = instance.exports;
              wasmExports = applySignatureConversions(wasmExports);
              wasmMemory = wasmExports["qb"];
              updateMemoryViews();
              wasmTable = wasmExports["sb"];
              addOnInit(wasmExports["rb"]);
              removeRunDependency("wasm-instantiate");
              return wasmExports;
            }
            addRunDependency("wasm-instantiate");
            function receiveInstantiationResult(result) {
              receiveInstance(result["instance"]);
            }
            if (Module["instantiateWasm"]) {
              try {
                return Module["instantiateWasm"](info, receiveInstance);
              } catch (e) {
                err("Module.instantiateWasm callback failed with error: ".concat(e));
                readyPromiseReject(e);
              }
            }
            if (!wasmBinaryFile) wasmBinaryFile = findWasmBinary();
            instantiateAsync(wasmBinary, wasmBinaryFile, info, receiveInstantiationResult)["catch"](readyPromiseReject);
            return {};
          };
          getWasmImports = function _getWasmImports() {
            return {
              a: wasmImports
            };
          };
          instantiateAsync = function _instantiateAsync(binary, binaryFile, imports, callback) {
            if (!binary && typeof WebAssembly.instantiateStreaming == "function" && !isDataURI(binaryFile) && !isFileURI(binaryFile) && !ENVIRONMENT_IS_NODE && typeof fetch == "function") {
              return fetch(binaryFile, {
                credentials: "same-origin"
              }).then(function (response) {
                var result = WebAssembly.instantiateStreaming(response, imports);
                return result.then(callback, function (reason) {
                  err("wasm streaming compile failed: ".concat(reason));
                  err("falling back to ArrayBuffer instantiation");
                  return instantiateArrayBuffer(binaryFile, imports, callback);
                });
              });
            }
            return instantiateArrayBuffer(binaryFile, imports, callback);
          };
          instantiateArrayBuffer = function _instantiateArrayBuff(binaryFile, imports, receiver) {
            return getBinaryPromise(binaryFile).then(function (binary) {
              return WebAssembly.instantiate(binary, imports);
            }).then(receiver, function (reason) {
              err("failed to asynchronously prepare wasm: ".concat(reason));
              abort(reason);
            });
          };
          getBinaryPromise = function _getBinaryPromise(binaryFile) {
            if (!wasmBinary) {
              return readAsync(binaryFile).then(function (response) {
                return new Uint8Array(response);
              }, function () {
                return getBinarySync(binaryFile);
              });
            }
            return Promise.resolve().then(function () {
              return getBinarySync(binaryFile);
            });
          };
          getBinarySync = function _getBinarySync(file) {
            if (file == wasmBinaryFile && wasmBinary) {
              return new Uint8Array(wasmBinary);
            }
            if (readBinary) {
              return readBinary(file);
            }
            throw "both async and sync fetching of the wasm failed";
          };
          findWasmBinary = function _findWasmBinary() {
            if (Module["locateFile"]) {
              var f = "resolc.wasm";
              if (!isDataURI(f)) {
                return locateFile(f);
              }
              return f;
            }
            return new URL("resolc.wasm", (typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : (_documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === 'SCRIPT' && _documentCurrentScript.src || new URL('resolc.js', document.baseURI).href))).href;
          };
          abort = function _abort(what) {
            var _Module$onAbort, _Module3;
            (_Module$onAbort = (_Module3 = Module)["onAbort"]) === null || _Module$onAbort === void 0 || _Module$onAbort.call(_Module3, what);
            what = "Aborted(" + what + ")";
            err(what);
            ABORT = true;
            EXITSTATUS = 1;
            what += ". Build with -sASSERTIONS for more info.";
            var e = new WebAssembly.RuntimeError(what);
            readyPromiseReject(e);
            throw e;
          };
          removeRunDependency = function _removeRunDependency(id) {
            var _Module$monitorRunDep2, _Module2;
            runDependencies--;
            (_Module$monitorRunDep2 = (_Module2 = Module)["monitorRunDependencies"]) === null || _Module$monitorRunDep2 === void 0 || _Module$monitorRunDep2.call(_Module2, runDependencies);
            if (runDependencies == 0) {
              if (runDependencyWatcher !== null) {
                clearInterval(runDependencyWatcher);
                runDependencyWatcher = null;
              }
              if (dependenciesFulfilled) {
                var callback = dependenciesFulfilled;
                dependenciesFulfilled = null;
                callback();
              }
            }
          };
          addRunDependency = function _addRunDependency(id) {
            var _Module$monitorRunDep, _Module;
            runDependencies++;
            (_Module$monitorRunDep = (_Module = Module)["monitorRunDependencies"]) === null || _Module$monitorRunDep === void 0 || _Module$monitorRunDep.call(_Module, runDependencies);
          };
          getUniqueRunDependency = function _getUniqueRunDependen(id) {
            return id;
          };
          addOnPostRun = function _addOnPostRun(cb) {
            __ATPOSTRUN__.unshift(cb);
          };
          addOnInit = function _addOnInit(cb) {
            __ATINIT__.unshift(cb);
          };
          addOnPreRun = function _addOnPreRun(cb) {
            __ATPRERUN__.unshift(cb);
          };
          postRun = function _postRun() {
            if (Module["postRun"]) {
              if (typeof Module["postRun"] == "function") Module["postRun"] = [Module["postRun"]];
              while (Module["postRun"].length) {
                addOnPostRun(Module["postRun"].shift());
              }
            }
            callRuntimeCallbacks(__ATPOSTRUN__);
          };
          exitRuntime = function _exitRuntime() {
            _funcs_on_exit();
            callRuntimeCallbacks(__ATEXIT__);
            FS.quit();
            TTY.shutdown();
            runtimeExited = true;
          };
          preMain = function _preMain() {
            callRuntimeCallbacks(__ATMAIN__);
          };
          initRuntime = function _initRuntime() {
            if (!Module["noFSInit"] && !FS.init.initialized) FS.init();
            FS.ignorePermissions = false;
            TTY.init();
            callRuntimeCallbacks(__ATINIT__);
          };
          preRun = function _preRun() {
            if (Module["preRun"]) {
              if (typeof Module["preRun"] == "function") Module["preRun"] = [Module["preRun"]];
              while (Module["preRun"].length) {
                addOnPreRun(Module["preRun"].shift());
              }
            }
            callRuntimeCallbacks(__ATPRERUN__);
          };
          updateMemoryViews = function _updateMemoryViews() {
            var b = wasmMemory.buffer;
            Module["HEAP8"] = HEAP8 = new Int8Array(b);
            Module["HEAP16"] = HEAP16 = new Int16Array(b);
            Module["HEAPU8"] = HEAPU8 = new Uint8Array(b);
            Module["HEAPU16"] = new Uint16Array(b);
            Module["HEAP32"] = HEAP32 = new Int32Array(b);
            Module["HEAPU32"] = HEAPU32 = new Uint32Array(b);
            Module["HEAPF32"] = new Float32Array(b);
            Module["HEAPF64"] = new Float64Array(b);
          };
          locateFile = function _locateFile(path) {
            if (Module["locateFile"]) {
              return Module["locateFile"](path, scriptDirectory);
            }
            return scriptDirectory + path;
          };
          moduleArg = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
          Module = moduleArg;
          readyPromise = new Promise(function (resolve, reject) {
            readyPromiseResolve = resolve;
            readyPromiseReject = reject;
          });
          ENVIRONMENT_IS_WEB = (typeof window === "undefined" ? "undefined" : _typeof(window)) == "object";
          ENVIRONMENT_IS_WORKER = typeof importScripts == "function";
          ENVIRONMENT_IS_NODE = (typeof process === "undefined" ? "undefined" : _typeof(process)) == "object" && _typeof(process.versions) == "object" && typeof process.versions.node == "string";
          if (!ENVIRONMENT_IS_NODE) {
            _context.next = 148;
            break;
          }
          _context.next = 145;
          return import('module');
        case 145:
          _yield$import = _context.sent;
          createRequire = _yield$import.createRequire;
          require$1 = createRequire((typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : (_documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === 'SCRIPT' && _documentCurrentScript.src || new URL('resolc.js', document.baseURI).href)));
        case 148:
          Module = {
            stdinData: "",
            stdoutCallback: null,
            stderrCallback: null,
            setStdoutCallback: function setStdoutCallback(callback) {
              this.stdoutCallback = callback;
            },
            setStderrCallback: function setStderrCallback(callback) {
              this.stderrCallback = callback;
            },
            setStdinData: function setStdinData(data) {
              this.stdinData = data;
            },
            preRun: function preRun() {
              function customStdin() {
                if (Module.stdinData.length === 0) {
                  return null;
                }
                var _char = Module.stdinData.charCodeAt(0);
                Module.stdinData = Module.stdinData.slice(1);
                return _char;
              }
              function customStdout(_char2) {
                if (Module.stdoutCallback) {
                  Module.stdoutCallback(String.fromCharCode(_char2));
                }
              }
              function customStderr(_char3) {
                if (Module.stderrCallback) {
                  Module.stderrCallback(String.fromCharCode(_char3));
                }
              }
              FS.init(customStdin, customStdout, customStderr);
            }
          };
          moduleOverrides = Object.assign({}, Module);
          arguments_ = [];
          thisProgram = "./this.program";
          quit_ = function quit_(status, toThrow) {
            throw toThrow;
          };
          scriptDirectory = "";
          if (ENVIRONMENT_IS_NODE) {
            fs = require$1("fs");
            nodePath = require$1("path");
            scriptDirectory = require$1("url").fileURLToPath(new URL("./", (typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : (_documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === 'SCRIPT' && _documentCurrentScript.src || new URL('resolc.js', document.baseURI).href))));
            readBinary = function readBinary(filename) {
              filename = isFileURI(filename) ? new URL(filename) : nodePath.normalize(filename);
              var ret = fs.readFileSync(filename);
              return ret;
            };
            readAsync = function readAsync(filename) {
              var binary = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
              filename = isFileURI(filename) ? new URL(filename) : nodePath.normalize(filename);
              return new Promise(function (resolve, reject) {
                fs.readFile(filename, binary ? undefined : "utf8", function (err, data) {
                  if (err) reject(err);else resolve(binary ? data.buffer : data);
                });
              });
            };
            if (!Module["thisProgram"] && process.argv.length > 1) {
              thisProgram = process.argv[1].replace(/\\/g, "/");
            }
            arguments_ = process.argv.slice(2);
            quit_ = function quit_(status, toThrow) {
              process.exitCode = status;
              throw toThrow;
            };
          } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
            if (ENVIRONMENT_IS_WORKER) {
              scriptDirectory = self.location.href;
            } else if (typeof document != "undefined" && document.currentScript) {
              scriptDirectory = document.currentScript.src;
            }
            if (_scriptName) {
              scriptDirectory = _scriptName;
            }
            if (scriptDirectory.startsWith("blob:")) {
              scriptDirectory = "";
            } else {
              scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1);
            }
            {
              if (ENVIRONMENT_IS_WORKER) {
                readBinary = function readBinary(url) {
                  var xhr = new XMLHttpRequest();
                  xhr.open("GET", url, false);
                  xhr.responseType = "arraybuffer";
                  xhr.send(null);
                  return new Uint8Array(xhr.response);
                };
              }
              readAsync = function readAsync(url) {
                if (isFileURI(url)) {
                  return new Promise(function (reject, resolve) {
                    var xhr = new XMLHttpRequest();
                    xhr.open("GET", url, true);
                    xhr.responseType = "arraybuffer";
                    xhr.onload = function () {
                      if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
                        resolve(xhr.response);
                      }
                      reject(xhr.status);
                    };
                    xhr.onerror = reject;
                    xhr.send(null);
                  });
                }
                return fetch(url, {
                  credentials: "same-origin"
                }).then(function (response) {
                  if (response.ok) {
                    return response.arrayBuffer();
                  }
                  return Promise.reject(new Error(response.status + " : " + response.url));
                });
              };
            }
          } else ;
          out = Module["print"] || console.log.bind(console);
          err = Module["printErr"] || console.error.bind(console);
          Object.assign(Module, moduleOverrides);
          moduleOverrides = null;
          if (Module["arguments"]) arguments_ = Module["arguments"];
          if (Module["thisProgram"]) thisProgram = Module["thisProgram"];
          if (Module["quit"]) quit_ = Module["quit"];
          if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];
          ABORT = false;
          __ATPRERUN__ = [];
          __ATINIT__ = [];
          __ATMAIN__ = [];
          __ATEXIT__ = [];
          __ATPOSTRUN__ = [];
          runtimeExited = false;
          runDependencies = 0;
          runDependencyWatcher = null;
          dependenciesFulfilled = null;
          dataURIPrefix = "data:application/octet-stream;base64,";
          isDataURI = function isDataURI(filename) {
            return filename.startsWith(dataURIPrefix);
          };
          isFileURI = function isFileURI(filename) {
            return filename.startsWith("file://");
          };
          callRuntimeCallbacks = function callRuntimeCallbacks(callbacks) {
            while (callbacks.length > 0) {
              callbacks.shift()(Module);
            }
          };
          noExitRuntime = Module["noExitRuntime"] || false;
          stackRestore = function stackRestore(val) {
            return _emscripten_stack_restore(val);
          };
          stackSave = function stackSave() {
            return _emscripten_stack_get_current2();
          };
          convertI32PairToI53Checked = function convertI32PairToI53Checked(lo, hi) {
            return hi + 2097152 >>> 0 < 4194305 - !!lo ? (lo >>> 0) + hi * 4294967296 : NaN;
          };
          wasmTableMirror = [];
          getWasmTableEntry = function getWasmTableEntry(funcPtr) {
            var func = wasmTableMirror[funcPtr];
            if (!func) {
              if (funcPtr >= wasmTableMirror.length) wasmTableMirror.length = funcPtr + 1;
              wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr);
            }
            return func;
          };
          exceptionCaught = [];
          uncaughtExceptionCount = 0;
          exceptionLast = 0;
          ___cxa_end_catch = function ___cxa_end_catch() {
            _setThrew2(0, 0);
            var info = exceptionCaught.pop();
            _cxa_decrement_exception_refcount(info.excPtr);
            exceptionLast = 0;
          };
          ExceptionInfo = /*#__PURE__*/function () {
            function ExceptionInfo(excPtr) {
              _classCallCheck(this, ExceptionInfo);
              this.excPtr = excPtr;
              this.ptr = excPtr - 24;
            }
            return _createClass(ExceptionInfo, [{
              key: "set_type",
              value: function set_type(type) {
                HEAPU32[this.ptr + 4 >>> 2 >>> 0] = type;
              }
            }, {
              key: "get_type",
              value: function get_type() {
                return HEAPU32[this.ptr + 4 >>> 2 >>> 0];
              }
            }, {
              key: "set_destructor",
              value: function set_destructor(destructor) {
                HEAPU32[this.ptr + 8 >>> 2 >>> 0] = destructor;
              }
            }, {
              key: "get_destructor",
              value: function get_destructor() {
                return HEAPU32[this.ptr + 8 >>> 2 >>> 0];
              }
            }, {
              key: "set_caught",
              value: function set_caught(caught) {
                caught = caught ? 1 : 0;
                HEAP8[this.ptr + 12 >>> 0] = caught;
              }
            }, {
              key: "get_caught",
              value: function get_caught() {
                return HEAP8[this.ptr + 12 >>> 0] != 0;
              }
            }, {
              key: "set_rethrown",
              value: function set_rethrown(rethrown) {
                rethrown = rethrown ? 1 : 0;
                HEAP8[this.ptr + 13 >>> 0] = rethrown;
              }
            }, {
              key: "get_rethrown",
              value: function get_rethrown() {
                return HEAP8[this.ptr + 13 >>> 0] != 0;
              }
            }, {
              key: "init",
              value: function init(type, destructor) {
                this.set_adjusted_ptr(0);
                this.set_type(type);
                this.set_destructor(destructor);
              }
            }, {
              key: "set_adjusted_ptr",
              value: function set_adjusted_ptr(adjustedPtr) {
                HEAPU32[this.ptr + 16 >>> 2 >>> 0] = adjustedPtr;
              }
            }, {
              key: "get_adjusted_ptr",
              value: function get_adjusted_ptr() {
                return HEAPU32[this.ptr + 16 >>> 2 >>> 0];
              }
            }, {
              key: "get_exception_ptr",
              value: function get_exception_ptr() {
                var isPointer = _cxa_is_pointer_type(this.get_type());
                if (isPointer) {
                  return HEAPU32[this.excPtr >>> 2 >>> 0];
                }
                var adjusted = this.get_adjusted_ptr();
                if (adjusted !== 0) return adjusted;
                return this.excPtr;
              }
            }]);
          }();
          setTempRet0 = function setTempRet0(val) {
            return _emscripten_tempret_set(val);
          };
          findMatchingCatch = function findMatchingCatch(args) {
            var thrown = exceptionLast;
            if (!thrown) {
              setTempRet0(0);
              return 0;
            }
            var info = new ExceptionInfo(thrown);
            info.set_adjusted_ptr(thrown);
            var thrownType = info.get_type();
            if (!thrownType) {
              setTempRet0(0);
              return thrown;
            }
            var _iterator = _createForOfIteratorHelper(args),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var caughtType = _step.value;
                if (caughtType === 0 || caughtType === thrownType) {
                  break;
                }
                var adjusted_ptr_addr = info.ptr + 16;
                if (_cxa_can_catch(caughtType, thrownType, adjusted_ptr_addr)) {
                  setTempRet0(caughtType);
                  return thrown;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            setTempRet0(thrownType);
            return thrown;
          };
          ___cxa_rethrow = function ___cxa_rethrow() {
            var info = exceptionCaught.pop();
            if (!info) {
              abort("no exception to throw");
            }
            var ptr = info.excPtr;
            if (!info.get_rethrown()) {
              exceptionCaught.push(info);
              info.set_rethrown(true);
              info.set_caught(false);
              uncaughtExceptionCount++;
            }
            exceptionLast = ptr;
            throw exceptionLast;
          };
          ___cxa_uncaught_exceptions = function ___cxa_uncaught_exceptions() {
            return uncaughtExceptionCount;
          };
          PATH = {
            isAbs: function isAbs(path) {
              return path.charAt(0) === "/";
            },
            splitPath: function splitPath(filename) {
              var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
              return splitPathRe.exec(filename).slice(1);
            },
            normalizeArray: function normalizeArray(parts, allowAboveRoot) {
              var up = 0;
              for (var i = parts.length - 1; i >= 0; i--) {
                var last = parts[i];
                if (last === ".") {
                  parts.splice(i, 1);
                } else if (last === "..") {
                  parts.splice(i, 1);
                  up++;
                } else if (up) {
                  parts.splice(i, 1);
                  up--;
                }
              }
              if (allowAboveRoot) {
                for (; up; up--) {
                  parts.unshift("..");
                }
              }
              return parts;
            },
            normalize: function normalize(path) {
              var isAbsolute = PATH.isAbs(path),
                trailingSlash = path.substr(-1) === "/";
              path = PATH.normalizeArray(path.split("/").filter(function (p) {
                return !!p;
              }), !isAbsolute).join("/");
              if (!path && !isAbsolute) {
                path = ".";
              }
              if (path && trailingSlash) {
                path += "/";
              }
              return (isAbsolute ? "/" : "") + path;
            },
            dirname: function dirname(path) {
              var result = PATH.splitPath(path),
                root = result[0],
                dir = result[1];
              if (!root && !dir) {
                return ".";
              }
              if (dir) {
                dir = dir.substr(0, dir.length - 1);
              }
              return root + dir;
            },
            basename: function basename(path) {
              if (path === "/") return "/";
              path = PATH.normalize(path);
              path = path.replace(/\/$/, "");
              var lastSlash = path.lastIndexOf("/");
              if (lastSlash === -1) return path;
              return path.substr(lastSlash + 1);
            },
            join: function join() {
              for (var _len = arguments.length, paths = new Array(_len), _key = 0; _key < _len; _key++) {
                paths[_key] = arguments[_key];
              }
              return PATH.normalize(paths.join("/"));
            },
            join2: function join2(l, r) {
              return PATH.normalize(l + "/" + r);
            }
          };
          initRandomFill = function initRandomFill() {
            if ((typeof crypto === "undefined" ? "undefined" : _typeof(crypto)) == "object" && typeof crypto["getRandomValues"] == "function") {
              return function (view) {
                return crypto.getRandomValues(view);
              };
            } else if (ENVIRONMENT_IS_NODE) {
              try {
                var crypto_module = require$1("crypto");
                var randomFillSync = crypto_module["randomFillSync"];
                if (randomFillSync) {
                  return function (view) {
                    return crypto_module["randomFillSync"](view);
                  };
                }
                var randomBytes = crypto_module["randomBytes"];
                return function (view) {
                  return view.set(randomBytes(view.byteLength)), view;
                };
              } catch (e) {}
            }
            abort("initRandomDevice");
          };
          _randomFill = function randomFill(view) {
            return (_randomFill = initRandomFill())(view);
          };
          PATH_FS = {
            resolve: function resolve() {
              var resolvedPath = "",
                resolvedAbsolute = false;
              for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
                var path = i >= 0 ? i < 0 || arguments.length <= i ? undefined : arguments[i] : FS.cwd();
                if (typeof path != "string") {
                  throw new TypeError("Arguments to path.resolve must be strings");
                } else if (!path) {
                  return "";
                }
                resolvedPath = path + "/" + resolvedPath;
                resolvedAbsolute = PATH.isAbs(path);
              }
              resolvedPath = PATH.normalizeArray(resolvedPath.split("/").filter(function (p) {
                return !!p;
              }), !resolvedAbsolute).join("/");
              return (resolvedAbsolute ? "/" : "") + resolvedPath || ".";
            },
            relative: function relative(from, to) {
              from = PATH_FS.resolve(from).substr(1);
              to = PATH_FS.resolve(to).substr(1);
              function trim(arr) {
                var start = 0;
                for (; start < arr.length; start++) {
                  if (arr[start] !== "") break;
                }
                var end = arr.length - 1;
                for (; end >= 0; end--) {
                  if (arr[end] !== "") break;
                }
                if (start > end) return [];
                return arr.slice(start, end - start + 1);
              }
              var fromParts = trim(from.split("/"));
              var toParts = trim(to.split("/"));
              var length = Math.min(fromParts.length, toParts.length);
              var samePartsLength = length;
              for (var i = 0; i < length; i++) {
                if (fromParts[i] !== toParts[i]) {
                  samePartsLength = i;
                  break;
                }
              }
              var outputParts = [];
              for (var i = samePartsLength; i < fromParts.length; i++) {
                outputParts.push("..");
              }
              outputParts = outputParts.concat(toParts.slice(samePartsLength));
              return outputParts.join("/");
            }
          };
          UTF8Decoder = typeof TextDecoder != "undefined" ? new TextDecoder() : undefined;
          UTF8ArrayToString = function UTF8ArrayToString(heapOrArray, idx, maxBytesToRead) {
            idx >>>= 0;
            var endIdx = idx + maxBytesToRead;
            var endPtr = idx;
            while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;
            if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
              return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
            }
            var str = "";
            while (idx < endPtr) {
              var u0 = heapOrArray[idx++];
              if (!(u0 & 128)) {
                str += String.fromCharCode(u0);
                continue;
              }
              var u1 = heapOrArray[idx++] & 63;
              if ((u0 & 224) == 192) {
                str += String.fromCharCode((u0 & 31) << 6 | u1);
                continue;
              }
              var u2 = heapOrArray[idx++] & 63;
              if ((u0 & 240) == 224) {
                u0 = (u0 & 15) << 12 | u1 << 6 | u2;
              } else {
                u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heapOrArray[idx++] & 63;
              }
              if (u0 < 65536) {
                str += String.fromCharCode(u0);
              } else {
                var ch = u0 - 65536;
                str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
              }
            }
            return str;
          };
          FS_stdin_getChar_buffer = [];
          lengthBytesUTF8 = function lengthBytesUTF8(str) {
            var len = 0;
            for (var i = 0; i < str.length; ++i) {
              var c = str.charCodeAt(i);
              if (c <= 127) {
                len++;
              } else if (c <= 2047) {
                len += 2;
              } else if (c >= 55296 && c <= 57343) {
                len += 4;
                ++i;
              } else {
                len += 3;
              }
            }
            return len;
          };
          stringToUTF8Array = function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
            outIdx >>>= 0;
            if (!(maxBytesToWrite > 0)) return 0;
            var startIdx = outIdx;
            var endIdx = outIdx + maxBytesToWrite - 1;
            for (var i = 0; i < str.length; ++i) {
              var u = str.charCodeAt(i);
              if (u >= 55296 && u <= 57343) {
                var u1 = str.charCodeAt(++i);
                u = 65536 + ((u & 1023) << 10) | u1 & 1023;
              }
              if (u <= 127) {
                if (outIdx >= endIdx) break;
                heap[outIdx++ >>> 0] = u;
              } else if (u <= 2047) {
                if (outIdx + 1 >= endIdx) break;
                heap[outIdx++ >>> 0] = 192 | u >> 6;
                heap[outIdx++ >>> 0] = 128 | u & 63;
              } else if (u <= 65535) {
                if (outIdx + 2 >= endIdx) break;
                heap[outIdx++ >>> 0] = 224 | u >> 12;
                heap[outIdx++ >>> 0] = 128 | u >> 6 & 63;
                heap[outIdx++ >>> 0] = 128 | u & 63;
              } else {
                if (outIdx + 3 >= endIdx) break;
                heap[outIdx++ >>> 0] = 240 | u >> 18;
                heap[outIdx++ >>> 0] = 128 | u >> 12 & 63;
                heap[outIdx++ >>> 0] = 128 | u >> 6 & 63;
                heap[outIdx++ >>> 0] = 128 | u & 63;
              }
            }
            heap[outIdx >>> 0] = 0;
            return outIdx - startIdx;
          };
          FS_stdin_getChar = function FS_stdin_getChar() {
            if (!FS_stdin_getChar_buffer.length) {
              var result = null;
              if (ENVIRONMENT_IS_NODE) {
                var BUFSIZE = 256;
                var buf = Buffer.alloc(BUFSIZE);
                var bytesRead = 0;
                var fd = process.stdin.fd;
                try {
                  bytesRead = fs.readSync(fd, buf, 0, BUFSIZE);
                } catch (e) {
                  if (e.toString().includes("EOF")) bytesRead = 0;else throw e;
                }
                if (bytesRead > 0) {
                  result = buf.slice(0, bytesRead).toString("utf-8");
                }
              } else if (typeof window != "undefined" && typeof window.prompt == "function") {
                result = window.prompt("Input: ");
                if (result !== null) {
                  result += "\n";
                }
              } else ;
              if (!result) {
                return null;
              }
              FS_stdin_getChar_buffer = intArrayFromString(result, true);
            }
            return FS_stdin_getChar_buffer.shift();
          };
          TTY = {
            ttys: [],
            init: function init() {},
            shutdown: function shutdown() {},
            register: function register(dev, ops) {
              TTY.ttys[dev] = {
                input: [],
                output: [],
                ops: ops
              };
              FS.registerDevice(dev, TTY.stream_ops);
            },
            stream_ops: {
              open: function open(stream) {
                var tty = TTY.ttys[stream.node.rdev];
                if (!tty) {
                  throw new FS.ErrnoError(43);
                }
                stream.tty = tty;
                stream.seekable = false;
              },
              close: function close(stream) {
                stream.tty.ops.fsync(stream.tty);
              },
              fsync: function fsync(stream) {
                stream.tty.ops.fsync(stream.tty);
              },
              read: function read(stream, buffer, offset, length, pos) {
                if (!stream.tty || !stream.tty.ops.get_char) {
                  throw new FS.ErrnoError(60);
                }
                var bytesRead = 0;
                for (var i = 0; i < length; i++) {
                  var result;
                  try {
                    result = stream.tty.ops.get_char(stream.tty);
                  } catch (e) {
                    throw new FS.ErrnoError(29);
                  }
                  if (result === undefined && bytesRead === 0) {
                    throw new FS.ErrnoError(6);
                  }
                  if (result === null || result === undefined) break;
                  bytesRead++;
                  buffer[offset + i] = result;
                }
                if (bytesRead) {
                  stream.node.timestamp = Date.now();
                }
                return bytesRead;
              },
              write: function write(stream, buffer, offset, length, pos) {
                if (!stream.tty || !stream.tty.ops.put_char) {
                  throw new FS.ErrnoError(60);
                }
                try {
                  for (var i = 0; i < length; i++) {
                    stream.tty.ops.put_char(stream.tty, buffer[offset + i]);
                  }
                } catch (e) {
                  throw new FS.ErrnoError(29);
                }
                if (length) {
                  stream.node.timestamp = Date.now();
                }
                return i;
              }
            },
            default_tty_ops: {
              get_char: function get_char(tty) {
                return FS_stdin_getChar();
              },
              put_char: function put_char(tty, val) {
                if (val === null || val === 10) {
                  out(UTF8ArrayToString(tty.output, 0));
                  tty.output = [];
                } else {
                  if (val != 0) tty.output.push(val);
                }
              },
              fsync: function fsync(tty) {
                if (tty.output && tty.output.length > 0) {
                  out(UTF8ArrayToString(tty.output, 0));
                  tty.output = [];
                }
              },
              ioctl_tcgets: function ioctl_tcgets(tty) {
                return {
                  c_iflag: 25856,
                  c_oflag: 5,
                  c_cflag: 191,
                  c_lflag: 35387,
                  c_cc: [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                };
              },
              ioctl_tcsets: function ioctl_tcsets(tty, optional_actions, data) {
                return 0;
              },
              ioctl_tiocgwinsz: function ioctl_tiocgwinsz(tty) {
                return [24, 80];
              }
            },
            default_tty1_ops: {
              put_char: function put_char(tty, val) {
                if (val === null || val === 10) {
                  err(UTF8ArrayToString(tty.output, 0));
                  tty.output = [];
                } else {
                  if (val != 0) tty.output.push(val);
                }
              },
              fsync: function fsync(tty) {
                if (tty.output && tty.output.length > 0) {
                  err(UTF8ArrayToString(tty.output, 0));
                  tty.output = [];
                }
              }
            }
          };
          zeroMemory = function zeroMemory(address, size) {
            HEAPU8.fill(0, address, address + size);
            return address;
          };
          alignMemory = function alignMemory(size, alignment) {
            return Math.ceil(size / alignment) * alignment;
          };
          mmapAlloc = function mmapAlloc(size) {
            size = alignMemory(size, 65536);
            var ptr = _emscripten_builtin_memalign2(65536, size);
            if (!ptr) return 0;
            return zeroMemory(ptr, size);
          };
          MEMFS = {
            ops_table: null,
            mount: function mount(_mount) {
              return MEMFS.createNode(null, "/", 16384 | 511, 0);
            },
            createNode: function createNode(parent, name, mode, dev) {
              if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
                throw new FS.ErrnoError(63);
              }
              MEMFS.ops_table || (MEMFS.ops_table = {
                dir: {
                  node: {
                    getattr: MEMFS.node_ops.getattr,
                    setattr: MEMFS.node_ops.setattr,
                    lookup: MEMFS.node_ops.lookup,
                    mknod: MEMFS.node_ops.mknod,
                    rename: MEMFS.node_ops.rename,
                    unlink: MEMFS.node_ops.unlink,
                    rmdir: MEMFS.node_ops.rmdir,
                    readdir: MEMFS.node_ops.readdir,
                    symlink: MEMFS.node_ops.symlink
                  },
                  stream: {
                    llseek: MEMFS.stream_ops.llseek
                  }
                },
                file: {
                  node: {
                    getattr: MEMFS.node_ops.getattr,
                    setattr: MEMFS.node_ops.setattr
                  },
                  stream: {
                    llseek: MEMFS.stream_ops.llseek,
                    read: MEMFS.stream_ops.read,
                    write: MEMFS.stream_ops.write,
                    allocate: MEMFS.stream_ops.allocate,
                    mmap: MEMFS.stream_ops.mmap,
                    msync: MEMFS.stream_ops.msync
                  }
                },
                link: {
                  node: {
                    getattr: MEMFS.node_ops.getattr,
                    setattr: MEMFS.node_ops.setattr,
                    readlink: MEMFS.node_ops.readlink
                  },
                  stream: {}
                },
                chrdev: {
                  node: {
                    getattr: MEMFS.node_ops.getattr,
                    setattr: MEMFS.node_ops.setattr
                  },
                  stream: FS.chrdev_stream_ops
                }
              });
              var node = FS.createNode(parent, name, mode, dev);
              if (FS.isDir(node.mode)) {
                node.node_ops = MEMFS.ops_table.dir.node;
                node.stream_ops = MEMFS.ops_table.dir.stream;
                node.contents = {};
              } else if (FS.isFile(node.mode)) {
                node.node_ops = MEMFS.ops_table.file.node;
                node.stream_ops = MEMFS.ops_table.file.stream;
                node.usedBytes = 0;
                node.contents = null;
              } else if (FS.isLink(node.mode)) {
                node.node_ops = MEMFS.ops_table.link.node;
                node.stream_ops = MEMFS.ops_table.link.stream;
              } else if (FS.isChrdev(node.mode)) {
                node.node_ops = MEMFS.ops_table.chrdev.node;
                node.stream_ops = MEMFS.ops_table.chrdev.stream;
              }
              node.timestamp = Date.now();
              if (parent) {
                parent.contents[name] = node;
                parent.timestamp = node.timestamp;
              }
              return node;
            },
            getFileDataAsTypedArray: function getFileDataAsTypedArray(node) {
              if (!node.contents) return new Uint8Array(0);
              if (node.contents.subarray) return node.contents.subarray(0, node.usedBytes);
              return new Uint8Array(node.contents);
            },
            expandFileStorage: function expandFileStorage(node, newCapacity) {
              var prevCapacity = node.contents ? node.contents.length : 0;
              if (prevCapacity >= newCapacity) return;
              var CAPACITY_DOUBLING_MAX = 1024 * 1024;
              newCapacity = Math.max(newCapacity, prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2 : 1.125) >>> 0);
              if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256);
              var oldContents = node.contents;
              node.contents = new Uint8Array(newCapacity);
              if (node.usedBytes > 0) node.contents.set(oldContents.subarray(0, node.usedBytes), 0);
            },
            resizeFileStorage: function resizeFileStorage(node, newSize) {
              if (node.usedBytes == newSize) return;
              if (newSize == 0) {
                node.contents = null;
                node.usedBytes = 0;
              } else {
                var oldContents = node.contents;
                node.contents = new Uint8Array(newSize);
                if (oldContents) {
                  node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes)));
                }
                node.usedBytes = newSize;
              }
            },
            node_ops: {
              getattr: function getattr(node) {
                var attr = {};
                attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
                attr.ino = node.id;
                attr.mode = node.mode;
                attr.nlink = 1;
                attr.uid = 0;
                attr.gid = 0;
                attr.rdev = node.rdev;
                if (FS.isDir(node.mode)) {
                  attr.size = 4096;
                } else if (FS.isFile(node.mode)) {
                  attr.size = node.usedBytes;
                } else if (FS.isLink(node.mode)) {
                  attr.size = node.link.length;
                } else {
                  attr.size = 0;
                }
                attr.atime = new Date(node.timestamp);
                attr.mtime = new Date(node.timestamp);
                attr.ctime = new Date(node.timestamp);
                attr.blksize = 4096;
                attr.blocks = Math.ceil(attr.size / attr.blksize);
                return attr;
              },
              setattr: function setattr(node, attr) {
                if (attr.mode !== undefined) {
                  node.mode = attr.mode;
                }
                if (attr.timestamp !== undefined) {
                  node.timestamp = attr.timestamp;
                }
                if (attr.size !== undefined) {
                  MEMFS.resizeFileStorage(node, attr.size);
                }
              },
              lookup: function lookup(parent, name) {
                throw FS.genericErrors[44];
              },
              mknod: function mknod(parent, name, mode, dev) {
                return MEMFS.createNode(parent, name, mode, dev);
              },
              rename: function rename(old_node, new_dir, new_name) {
                if (FS.isDir(old_node.mode)) {
                  var new_node;
                  try {
                    new_node = FS.lookupNode(new_dir, new_name);
                  } catch (e) {}
                  if (new_node) {
                    for (var i in new_node.contents) {
                      throw new FS.ErrnoError(55);
                    }
                  }
                }
                delete old_node.parent.contents[old_node.name];
                old_node.parent.timestamp = Date.now();
                old_node.name = new_name;
                new_dir.contents[new_name] = old_node;
                new_dir.timestamp = old_node.parent.timestamp;
              },
              unlink: function unlink(parent, name) {
                delete parent.contents[name];
                parent.timestamp = Date.now();
              },
              rmdir: function rmdir(parent, name) {
                var node = FS.lookupNode(parent, name);
                for (var i in node.contents) {
                  throw new FS.ErrnoError(55);
                }
                delete parent.contents[name];
                parent.timestamp = Date.now();
              },
              readdir: function readdir(node) {
                var entries = [".", ".."];
                for (var _i = 0, _Object$keys = Object.keys(node.contents); _i < _Object$keys.length; _i++) {
                  var key = _Object$keys[_i];
                  entries.push(key);
                }
                return entries;
              },
              symlink: function symlink(parent, newname, oldpath) {
                var node = MEMFS.createNode(parent, newname, 511 | 40960, 0);
                node.link = oldpath;
                return node;
              },
              readlink: function readlink(node) {
                if (!FS.isLink(node.mode)) {
                  throw new FS.ErrnoError(28);
                }
                return node.link;
              }
            },
            stream_ops: {
              read: function read(stream, buffer, offset, length, position) {
                var contents = stream.node.contents;
                if (position >= stream.node.usedBytes) return 0;
                var size = Math.min(stream.node.usedBytes - position, length);
                if (size > 8 && contents.subarray) {
                  buffer.set(contents.subarray(position, position + size), offset);
                } else {
                  for (var i = 0; i < size; i++) buffer[offset + i] = contents[position + i];
                }
                return size;
              },
              write: function write(stream, buffer, offset, length, position, canOwn) {
                if (buffer.buffer === HEAP8.buffer) {
                  canOwn = false;
                }
                if (!length) return 0;
                var node = stream.node;
                node.timestamp = Date.now();
                if (buffer.subarray && (!node.contents || node.contents.subarray)) {
                  if (canOwn) {
                    node.contents = buffer.subarray(offset, offset + length);
                    node.usedBytes = length;
                    return length;
                  } else if (node.usedBytes === 0 && position === 0) {
                    node.contents = buffer.slice(offset, offset + length);
                    node.usedBytes = length;
                    return length;
                  } else if (position + length <= node.usedBytes) {
                    node.contents.set(buffer.subarray(offset, offset + length), position);
                    return length;
                  }
                }
                MEMFS.expandFileStorage(node, position + length);
                if (node.contents.subarray && buffer.subarray) {
                  node.contents.set(buffer.subarray(offset, offset + length), position);
                } else {
                  for (var i = 0; i < length; i++) {
                    node.contents[position + i] = buffer[offset + i];
                  }
                }
                node.usedBytes = Math.max(node.usedBytes, position + length);
                return length;
              },
              llseek: function llseek(stream, offset, whence) {
                var position = offset;
                if (whence === 1) {
                  position += stream.position;
                } else if (whence === 2) {
                  if (FS.isFile(stream.node.mode)) {
                    position += stream.node.usedBytes;
                  }
                }
                if (position < 0) {
                  throw new FS.ErrnoError(28);
                }
                return position;
              },
              allocate: function allocate(stream, offset, length) {
                MEMFS.expandFileStorage(stream.node, offset + length);
                stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length);
              },
              mmap: function mmap(stream, length, position, prot, flags) {
                if (!FS.isFile(stream.node.mode)) {
                  throw new FS.ErrnoError(43);
                }
                var ptr;
                var allocated;
                var contents = stream.node.contents;
                if (!(flags & 2) && contents.buffer === HEAP8.buffer) {
                  allocated = false;
                  ptr = contents.byteOffset;
                } else {
                  if (position > 0 || position + length < contents.length) {
                    if (contents.subarray) {
                      contents = contents.subarray(position, position + length);
                    } else {
                      contents = Array.prototype.slice.call(contents, position, position + length);
                    }
                  }
                  allocated = true;
                  ptr = mmapAlloc(length);
                  if (!ptr) {
                    throw new FS.ErrnoError(48);
                  }
                  HEAP8.set(contents, ptr >>> 0);
                }
                return {
                  ptr: ptr,
                  allocated: allocated
                };
              },
              msync: function msync(stream, buffer, offset, length, mmapFlags) {
                MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
                return 0;
              }
            }
          };
          asyncLoad = function asyncLoad(url, onload, onerror, noRunDep) {
            var dep = !noRunDep ? getUniqueRunDependency("al ".concat(url)) : "";
            readAsync(url).then(function (arrayBuffer) {
              onload(new Uint8Array(arrayBuffer));
              if (dep) removeRunDependency(dep);
            }, function (err) {
              if (onerror) {
                onerror();
              } else {
                throw "Loading data file \"".concat(url, "\" failed.");
              }
            });
            if (dep) addRunDependency(dep);
          };
          FS_createDataFile = function FS_createDataFile(parent, name, fileData, canRead, canWrite, canOwn) {
            FS.createDataFile(parent, name, fileData, canRead, canWrite, canOwn);
          };
          preloadPlugins = Module["preloadPlugins"] || [];
          FS_handledByPreloadPlugin = function FS_handledByPreloadPlugin(byteArray, fullname, finish, onerror) {
            if (typeof Browser != "undefined") Browser.init();
            var handled = false;
            preloadPlugins.forEach(function (plugin) {
              if (handled) return;
              if (plugin["canHandle"](fullname)) {
                plugin["handle"](byteArray, fullname, finish, onerror);
                handled = true;
              }
            });
            return handled;
          };
          FS_createPreloadedFile = function FS_createPreloadedFile(parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) {
            var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
            var dep = getUniqueRunDependency("cp ".concat(fullname));
            function processData(byteArray) {
              function finish(byteArray) {
                preFinish === null || preFinish === void 0 || preFinish();
                if (!dontCreateFile) {
                  FS_createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
                }
                onload === null || onload === void 0 || onload();
                removeRunDependency(dep);
              }
              if (FS_handledByPreloadPlugin(byteArray, fullname, finish, function () {
                onerror === null || onerror === void 0 || onerror();
                removeRunDependency(dep);
              })) {
                return;
              }
              finish(byteArray);
            }
            addRunDependency(dep);
            if (typeof url == "string") {
              asyncLoad(url, processData, onerror);
            } else {
              processData(url);
            }
          };
          FS_modeStringToFlags = function FS_modeStringToFlags(str) {
            var flagModes = {
              r: 0,
              "r+": 2,
              w: 512 | 64 | 1,
              "w+": 512 | 64 | 2,
              a: 1024 | 64 | 1,
              "a+": 1024 | 64 | 2
            };
            var flags = flagModes[str];
            if (typeof flags == "undefined") {
              throw new Error("Unknown file open mode: ".concat(str));
            }
            return flags;
          };
          FS_getMode = function FS_getMode(canRead, canWrite) {
            var mode = 0;
            if (canRead) mode |= 292 | 73;
            if (canWrite) mode |= 146;
            return mode;
          };
          FS = {
            root: null,
            mounts: [],
            devices: {},
            streams: [],
            nextInode: 1,
            nameTable: null,
            currentPath: "/",
            initialized: false,
            ignorePermissions: true,
            ErrnoError: /*#__PURE__*/_createClass(function ErrnoError(errno) {
              _classCallCheck(this, ErrnoError);
              this.name = "ErrnoError";
              this.errno = errno;
            }),
            genericErrors: {},
            filesystems: null,
            syncFSRequests: 0,
            FSStream: /*#__PURE__*/function () {
              function FSStream() {
                _classCallCheck(this, FSStream);
                this.shared = {};
              }
              return _createClass(FSStream, [{
                key: "object",
                get: function get() {
                  return this.node;
                },
                set: function set(val) {
                  this.node = val;
                }
              }, {
                key: "isRead",
                get: function get() {
                  return (this.flags & 2097155) !== 1;
                }
              }, {
                key: "isWrite",
                get: function get() {
                  return (this.flags & 2097155) !== 0;
                }
              }, {
                key: "isAppend",
                get: function get() {
                  return this.flags & 1024;
                }
              }, {
                key: "flags",
                get: function get() {
                  return this.shared.flags;
                },
                set: function set(val) {
                  this.shared.flags = val;
                }
              }, {
                key: "position",
                get: function get() {
                  return this.shared.position;
                },
                set: function set(val) {
                  this.shared.position = val;
                }
              }]);
            }(),
            FSNode: /*#__PURE__*/function () {
              function FSNode(parent, name, mode, rdev) {
                _classCallCheck(this, FSNode);
                if (!parent) {
                  parent = this;
                }
                this.parent = parent;
                this.mount = parent.mount;
                this.mounted = null;
                this.id = FS.nextInode++;
                this.name = name;
                this.mode = mode;
                this.node_ops = {};
                this.stream_ops = {};
                this.rdev = rdev;
                this.readMode = 292 | 73;
                this.writeMode = 146;
              }
              return _createClass(FSNode, [{
                key: "read",
                get: function get() {
                  return (this.mode & this.readMode) === this.readMode;
                },
                set: function set(val) {
                  val ? this.mode |= this.readMode : this.mode &= ~this.readMode;
                }
              }, {
                key: "write",
                get: function get() {
                  return (this.mode & this.writeMode) === this.writeMode;
                },
                set: function set(val) {
                  val ? this.mode |= this.writeMode : this.mode &= ~this.writeMode;
                }
              }, {
                key: "isFolder",
                get: function get() {
                  return FS.isDir(this.mode);
                }
              }, {
                key: "isDevice",
                get: function get() {
                  return FS.isChrdev(this.mode);
                }
              }]);
            }(),
            lookupPath: function lookupPath(path) {
              var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
              path = PATH_FS.resolve(path);
              if (!path) return {
                path: "",
                node: null
              };
              var defaults = {
                follow_mount: true,
                recurse_count: 0
              };
              opts = Object.assign(defaults, opts);
              if (opts.recurse_count > 8) {
                throw new FS.ErrnoError(32);
              }
              var parts = path.split("/").filter(function (p) {
                return !!p;
              });
              var current = FS.root;
              var current_path = "/";
              for (var i = 0; i < parts.length; i++) {
                var islast = i === parts.length - 1;
                if (islast && opts.parent) {
                  break;
                }
                current = FS.lookupNode(current, parts[i]);
                current_path = PATH.join2(current_path, parts[i]);
                if (FS.isMountpoint(current)) {
                  if (!islast || islast && opts.follow_mount) {
                    current = current.mounted.root;
                  }
                }
                if (!islast || opts.follow) {
                  var count = 0;
                  while (FS.isLink(current.mode)) {
                    var link = FS.readlink(current_path);
                    current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
                    var lookup = FS.lookupPath(current_path, {
                      recurse_count: opts.recurse_count + 1
                    });
                    current = lookup.node;
                    if (count++ > 40) {
                      throw new FS.ErrnoError(32);
                    }
                  }
                }
              }
              return {
                path: current_path,
                node: current
              };
            },
            getPath: function getPath(node) {
              var path;
              while (true) {
                if (FS.isRoot(node)) {
                  var mount = node.mount.mountpoint;
                  if (!path) return mount;
                  return mount[mount.length - 1] !== "/" ? "".concat(mount, "/").concat(path) : mount + path;
                }
                path = path ? "".concat(node.name, "/").concat(path) : node.name;
                node = node.parent;
              }
            },
            hashName: function hashName(parentid, name) {
              var hash = 0;
              for (var i = 0; i < name.length; i++) {
                hash = (hash << 5) - hash + name.charCodeAt(i) | 0;
              }
              return (parentid + hash >>> 0) % FS.nameTable.length;
            },
            hashAddNode: function hashAddNode(node) {
              var hash = FS.hashName(node.parent.id, node.name);
              node.name_next = FS.nameTable[hash];
              FS.nameTable[hash] = node;
            },
            hashRemoveNode: function hashRemoveNode(node) {
              var hash = FS.hashName(node.parent.id, node.name);
              if (FS.nameTable[hash] === node) {
                FS.nameTable[hash] = node.name_next;
              } else {
                var current = FS.nameTable[hash];
                while (current) {
                  if (current.name_next === node) {
                    current.name_next = node.name_next;
                    break;
                  }
                  current = current.name_next;
                }
              }
            },
            lookupNode: function lookupNode(parent, name) {
              var errCode = FS.mayLookup(parent);
              if (errCode) {
                throw new FS.ErrnoError(errCode);
              }
              var hash = FS.hashName(parent.id, name);
              for (var node = FS.nameTable[hash]; node; node = node.name_next) {
                var nodeName = node.name;
                if (node.parent.id === parent.id && nodeName === name) {
                  return node;
                }
              }
              return FS.lookup(parent, name);
            },
            createNode: function createNode(parent, name, mode, rdev) {
              var node = new FS.FSNode(parent, name, mode, rdev);
              FS.hashAddNode(node);
              return node;
            },
            destroyNode: function destroyNode(node) {
              FS.hashRemoveNode(node);
            },
            isRoot: function isRoot(node) {
              return node === node.parent;
            },
            isMountpoint: function isMountpoint(node) {
              return !!node.mounted;
            },
            isFile: function isFile(mode) {
              return (mode & 61440) === 32768;
            },
            isDir: function isDir(mode) {
              return (mode & 61440) === 16384;
            },
            isLink: function isLink(mode) {
              return (mode & 61440) === 40960;
            },
            isChrdev: function isChrdev(mode) {
              return (mode & 61440) === 8192;
            },
            isBlkdev: function isBlkdev(mode) {
              return (mode & 61440) === 24576;
            },
            isFIFO: function isFIFO(mode) {
              return (mode & 61440) === 4096;
            },
            isSocket: function isSocket(mode) {
              return (mode & 49152) === 49152;
            },
            flagsToPermissionString: function flagsToPermissionString(flag) {
              var perms = ["r", "w", "rw"][flag & 3];
              if (flag & 512) {
                perms += "w";
              }
              return perms;
            },
            nodePermissions: function nodePermissions(node, perms) {
              if (FS.ignorePermissions) {
                return 0;
              }
              if (perms.includes("r") && !(node.mode & 292)) {
                return 2;
              } else if (perms.includes("w") && !(node.mode & 146)) {
                return 2;
              } else if (perms.includes("x") && !(node.mode & 73)) {
                return 2;
              }
              return 0;
            },
            mayLookup: function mayLookup(dir) {
              if (!FS.isDir(dir.mode)) return 54;
              var errCode = FS.nodePermissions(dir, "x");
              if (errCode) return errCode;
              if (!dir.node_ops.lookup) return 2;
              return 0;
            },
            mayCreate: function mayCreate(dir, name) {
              try {
                var node = FS.lookupNode(dir, name);
                return 20;
              } catch (e) {}
              return FS.nodePermissions(dir, "wx");
            },
            mayDelete: function mayDelete(dir, name, isdir) {
              var node;
              try {
                node = FS.lookupNode(dir, name);
              } catch (e) {
                return e.errno;
              }
              var errCode = FS.nodePermissions(dir, "wx");
              if (errCode) {
                return errCode;
              }
              if (isdir) {
                if (!FS.isDir(node.mode)) {
                  return 54;
                }
                if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
                  return 10;
                }
              } else {
                if (FS.isDir(node.mode)) {
                  return 31;
                }
              }
              return 0;
            },
            mayOpen: function mayOpen(node, flags) {
              if (!node) {
                return 44;
              }
              if (FS.isLink(node.mode)) {
                return 32;
              } else if (FS.isDir(node.mode)) {
                if (FS.flagsToPermissionString(flags) !== "r" || flags & 512) {
                  return 31;
                }
              }
              return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
            },
            MAX_OPEN_FDS: 4096,
            nextfd: function nextfd() {
              for (var fd = 0; fd <= FS.MAX_OPEN_FDS; fd++) {
                if (!FS.streams[fd]) {
                  return fd;
                }
              }
              throw new FS.ErrnoError(33);
            },
            getStreamChecked: function getStreamChecked(fd) {
              var stream = FS.getStream(fd);
              if (!stream) {
                throw new FS.ErrnoError(8);
              }
              return stream;
            },
            getStream: function getStream(fd) {
              return FS.streams[fd];
            },
            createStream: function createStream(stream) {
              var fd = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
              stream = Object.assign(new FS.FSStream(), stream);
              if (fd == -1) {
                fd = FS.nextfd();
              }
              stream.fd = fd;
              FS.streams[fd] = stream;
              return stream;
            },
            closeStream: function closeStream(fd) {
              FS.streams[fd] = null;
            },
            dupStream: function dupStream(origStream) {
              var _stream$stream_ops, _stream$stream_ops$du;
              var fd = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
              var stream = FS.createStream(origStream, fd);
              (_stream$stream_ops = stream.stream_ops) === null || _stream$stream_ops === void 0 || (_stream$stream_ops$du = _stream$stream_ops.dup) === null || _stream$stream_ops$du === void 0 || _stream$stream_ops$du.call(_stream$stream_ops, stream);
              return stream;
            },
            chrdev_stream_ops: {
              open: function open(stream) {
                var _stream$stream_ops$op, _stream$stream_ops2;
                var device = FS.getDevice(stream.node.rdev);
                stream.stream_ops = device.stream_ops;
                (_stream$stream_ops$op = (_stream$stream_ops2 = stream.stream_ops).open) === null || _stream$stream_ops$op === void 0 || _stream$stream_ops$op.call(_stream$stream_ops2, stream);
              },
              llseek: function llseek() {
                throw new FS.ErrnoError(70);
              }
            },
            major: function major(dev) {
              return dev >> 8;
            },
            minor: function minor(dev) {
              return dev & 255;
            },
            makedev: function makedev(ma, mi) {
              return ma << 8 | mi;
            },
            registerDevice: function registerDevice(dev, ops) {
              FS.devices[dev] = {
                stream_ops: ops
              };
            },
            getDevice: function getDevice(dev) {
              return FS.devices[dev];
            },
            getMounts: function getMounts(mount) {
              var mounts = [];
              var check = [mount];
              while (check.length) {
                var m = check.pop();
                mounts.push(m);
                check.push.apply(check, _toConsumableArray(m.mounts));
              }
              return mounts;
            },
            syncfs: function syncfs(populate, callback) {
              if (typeof populate == "function") {
                callback = populate;
                populate = false;
              }
              FS.syncFSRequests++;
              if (FS.syncFSRequests > 1) {
                err("warning: ".concat(FS.syncFSRequests, " FS.syncfs operations in flight at once, probably just doing extra work"));
              }
              var mounts = FS.getMounts(FS.root.mount);
              var completed = 0;
              function doCallback(errCode) {
                FS.syncFSRequests--;
                return callback(errCode);
              }
              function done(errCode) {
                if (errCode) {
                  if (!done.errored) {
                    done.errored = true;
                    return doCallback(errCode);
                  }
                  return;
                }
                if (++completed >= mounts.length) {
                  doCallback(null);
                }
              }
              mounts.forEach(function (mount) {
                if (!mount.type.syncfs) {
                  return done(null);
                }
                mount.type.syncfs(mount, populate, done);
              });
            },
            mount: function mount(type, opts, mountpoint) {
              var root = mountpoint === "/";
              var pseudo = !mountpoint;
              var node;
              if (root && FS.root) {
                throw new FS.ErrnoError(10);
              } else if (!root && !pseudo) {
                var lookup = FS.lookupPath(mountpoint, {
                  follow_mount: false
                });
                mountpoint = lookup.path;
                node = lookup.node;
                if (FS.isMountpoint(node)) {
                  throw new FS.ErrnoError(10);
                }
                if (!FS.isDir(node.mode)) {
                  throw new FS.ErrnoError(54);
                }
              }
              var mount = {
                type: type,
                opts: opts,
                mountpoint: mountpoint,
                mounts: []
              };
              var mountRoot = type.mount(mount);
              mountRoot.mount = mount;
              mount.root = mountRoot;
              if (root) {
                FS.root = mountRoot;
              } else if (node) {
                node.mounted = mount;
                if (node.mount) {
                  node.mount.mounts.push(mount);
                }
              }
              return mountRoot;
            },
            unmount: function unmount(mountpoint) {
              var lookup = FS.lookupPath(mountpoint, {
                follow_mount: false
              });
              if (!FS.isMountpoint(lookup.node)) {
                throw new FS.ErrnoError(28);
              }
              var node = lookup.node;
              var mount = node.mounted;
              var mounts = FS.getMounts(mount);
              Object.keys(FS.nameTable).forEach(function (hash) {
                var current = FS.nameTable[hash];
                while (current) {
                  var next = current.name_next;
                  if (mounts.includes(current.mount)) {
                    FS.destroyNode(current);
                  }
                  current = next;
                }
              });
              node.mounted = null;
              var idx = node.mount.mounts.indexOf(mount);
              node.mount.mounts.splice(idx, 1);
            },
            lookup: function lookup(parent, name) {
              return parent.node_ops.lookup(parent, name);
            },
            mknod: function mknod(path, mode, dev) {
              var lookup = FS.lookupPath(path, {
                parent: true
              });
              var parent = lookup.node;
              var name = PATH.basename(path);
              if (!name || name === "." || name === "..") {
                throw new FS.ErrnoError(28);
              }
              var errCode = FS.mayCreate(parent, name);
              if (errCode) {
                throw new FS.ErrnoError(errCode);
              }
              if (!parent.node_ops.mknod) {
                throw new FS.ErrnoError(63);
              }
              return parent.node_ops.mknod(parent, name, mode, dev);
            },
            create: function create(path, mode) {
              mode = mode !== undefined ? mode : 438;
              mode &= 4095;
              mode |= 32768;
              return FS.mknod(path, mode, 0);
            },
            mkdir: function mkdir(path, mode) {
              mode = mode !== undefined ? mode : 511;
              mode &= 511 | 512;
              mode |= 16384;
              return FS.mknod(path, mode, 0);
            },
            mkdirTree: function mkdirTree(path, mode) {
              var dirs = path.split("/");
              var d = "";
              for (var i = 0; i < dirs.length; ++i) {
                if (!dirs[i]) continue;
                d += "/" + dirs[i];
                try {
                  FS.mkdir(d, mode);
                } catch (e) {
                  if (e.errno != 20) throw e;
                }
              }
            },
            mkdev: function mkdev(path, mode, dev) {
              if (typeof dev == "undefined") {
                dev = mode;
                mode = 438;
              }
              mode |= 8192;
              return FS.mknod(path, mode, dev);
            },
            symlink: function symlink(oldpath, newpath) {
              if (!PATH_FS.resolve(oldpath)) {
                throw new FS.ErrnoError(44);
              }
              var lookup = FS.lookupPath(newpath, {
                parent: true
              });
              var parent = lookup.node;
              if (!parent) {
                throw new FS.ErrnoError(44);
              }
              var newname = PATH.basename(newpath);
              var errCode = FS.mayCreate(parent, newname);
              if (errCode) {
                throw new FS.ErrnoError(errCode);
              }
              if (!parent.node_ops.symlink) {
                throw new FS.ErrnoError(63);
              }
              return parent.node_ops.symlink(parent, newname, oldpath);
            },
            rename: function rename(old_path, new_path) {
              var old_dirname = PATH.dirname(old_path);
              var new_dirname = PATH.dirname(new_path);
              var old_name = PATH.basename(old_path);
              var new_name = PATH.basename(new_path);
              var lookup, old_dir, new_dir;
              lookup = FS.lookupPath(old_path, {
                parent: true
              });
              old_dir = lookup.node;
              lookup = FS.lookupPath(new_path, {
                parent: true
              });
              new_dir = lookup.node;
              if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
              if (old_dir.mount !== new_dir.mount) {
                throw new FS.ErrnoError(75);
              }
              var old_node = FS.lookupNode(old_dir, old_name);
              var relative = PATH_FS.relative(old_path, new_dirname);
              if (relative.charAt(0) !== ".") {
                throw new FS.ErrnoError(28);
              }
              relative = PATH_FS.relative(new_path, old_dirname);
              if (relative.charAt(0) !== ".") {
                throw new FS.ErrnoError(55);
              }
              var new_node;
              try {
                new_node = FS.lookupNode(new_dir, new_name);
              } catch (e) {}
              if (old_node === new_node) {
                return;
              }
              var isdir = FS.isDir(old_node.mode);
              var errCode = FS.mayDelete(old_dir, old_name, isdir);
              if (errCode) {
                throw new FS.ErrnoError(errCode);
              }
              errCode = new_node ? FS.mayDelete(new_dir, new_name, isdir) : FS.mayCreate(new_dir, new_name);
              if (errCode) {
                throw new FS.ErrnoError(errCode);
              }
              if (!old_dir.node_ops.rename) {
                throw new FS.ErrnoError(63);
              }
              if (FS.isMountpoint(old_node) || new_node && FS.isMountpoint(new_node)) {
                throw new FS.ErrnoError(10);
              }
              if (new_dir !== old_dir) {
                errCode = FS.nodePermissions(old_dir, "w");
                if (errCode) {
                  throw new FS.ErrnoError(errCode);
                }
              }
              FS.hashRemoveNode(old_node);
              try {
                old_dir.node_ops.rename(old_node, new_dir, new_name);
                old_node.parent = new_dir;
              } catch (e) {
                throw e;
              } finally {
                FS.hashAddNode(old_node);
              }
            },
            rmdir: function rmdir(path) {
              var lookup = FS.lookupPath(path, {
                parent: true
              });
              var parent = lookup.node;
              var name = PATH.basename(path);
              var node = FS.lookupNode(parent, name);
              var errCode = FS.mayDelete(parent, name, true);
              if (errCode) {
                throw new FS.ErrnoError(errCode);
              }
              if (!parent.node_ops.rmdir) {
                throw new FS.ErrnoError(63);
              }
              if (FS.isMountpoint(node)) {
                throw new FS.ErrnoError(10);
              }
              parent.node_ops.rmdir(parent, name);
              FS.destroyNode(node);
            },
            readdir: function readdir(path) {
              var lookup = FS.lookupPath(path, {
                follow: true
              });
              var node = lookup.node;
              if (!node.node_ops.readdir) {
                throw new FS.ErrnoError(54);
              }
              return node.node_ops.readdir(node);
            },
            unlink: function unlink(path) {
              var lookup = FS.lookupPath(path, {
                parent: true
              });
              var parent = lookup.node;
              if (!parent) {
                throw new FS.ErrnoError(44);
              }
              var name = PATH.basename(path);
              var node = FS.lookupNode(parent, name);
              var errCode = FS.mayDelete(parent, name, false);
              if (errCode) {
                throw new FS.ErrnoError(errCode);
              }
              if (!parent.node_ops.unlink) {
                throw new FS.ErrnoError(63);
              }
              if (FS.isMountpoint(node)) {
                throw new FS.ErrnoError(10);
              }
              parent.node_ops.unlink(parent, name);
              FS.destroyNode(node);
            },
            readlink: function readlink(path) {
              var lookup = FS.lookupPath(path);
              var link = lookup.node;
              if (!link) {
                throw new FS.ErrnoError(44);
              }
              if (!link.node_ops.readlink) {
                throw new FS.ErrnoError(28);
              }
              return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link));
            },
            stat: function stat(path, dontFollow) {
              var lookup = FS.lookupPath(path, {
                follow: !dontFollow
              });
              var node = lookup.node;
              if (!node) {
                throw new FS.ErrnoError(44);
              }
              if (!node.node_ops.getattr) {
                throw new FS.ErrnoError(63);
              }
              return node.node_ops.getattr(node);
            },
            lstat: function lstat(path) {
              return FS.stat(path, true);
            },
            chmod: function chmod(path, mode, dontFollow) {
              var node;
              if (typeof path == "string") {
                var lookup = FS.lookupPath(path, {
                  follow: !dontFollow
                });
                node = lookup.node;
              } else {
                node = path;
              }
              if (!node.node_ops.setattr) {
                throw new FS.ErrnoError(63);
              }
              node.node_ops.setattr(node, {
                mode: mode & 4095 | node.mode & ~4095,
                timestamp: Date.now()
              });
            },
            lchmod: function lchmod(path, mode) {
              FS.chmod(path, mode, true);
            },
            fchmod: function fchmod(fd, mode) {
              var stream = FS.getStreamChecked(fd);
              FS.chmod(stream.node, mode);
            },
            chown: function chown(path, uid, gid, dontFollow) {
              var node;
              if (typeof path == "string") {
                var lookup = FS.lookupPath(path, {
                  follow: !dontFollow
                });
                node = lookup.node;
              } else {
                node = path;
              }
              if (!node.node_ops.setattr) {
                throw new FS.ErrnoError(63);
              }
              node.node_ops.setattr(node, {
                timestamp: Date.now()
              });
            },
            lchown: function lchown(path, uid, gid) {
              FS.chown(path, uid, gid, true);
            },
            fchown: function fchown(fd, uid, gid) {
              var stream = FS.getStreamChecked(fd);
              FS.chown(stream.node, uid, gid);
            },
            truncate: function truncate(path, len) {
              if (len < 0) {
                throw new FS.ErrnoError(28);
              }
              var node;
              if (typeof path == "string") {
                var lookup = FS.lookupPath(path, {
                  follow: true
                });
                node = lookup.node;
              } else {
                node = path;
              }
              if (!node.node_ops.setattr) {
                throw new FS.ErrnoError(63);
              }
              if (FS.isDir(node.mode)) {
                throw new FS.ErrnoError(31);
              }
              if (!FS.isFile(node.mode)) {
                throw new FS.ErrnoError(28);
              }
              var errCode = FS.nodePermissions(node, "w");
              if (errCode) {
                throw new FS.ErrnoError(errCode);
              }
              node.node_ops.setattr(node, {
                size: len,
                timestamp: Date.now()
              });
            },
            ftruncate: function ftruncate(fd, len) {
              var stream = FS.getStreamChecked(fd);
              if ((stream.flags & 2097155) === 0) {
                throw new FS.ErrnoError(28);
              }
              FS.truncate(stream.node, len);
            },
            utime: function utime(path, atime, mtime) {
              var lookup = FS.lookupPath(path, {
                follow: true
              });
              var node = lookup.node;
              node.node_ops.setattr(node, {
                timestamp: Math.max(atime, mtime)
              });
            },
            open: function open(path, flags, mode) {
              if (path === "") {
                throw new FS.ErrnoError(44);
              }
              flags = typeof flags == "string" ? FS_modeStringToFlags(flags) : flags;
              if (flags & 64) {
                mode = typeof mode == "undefined" ? 438 : mode;
                mode = mode & 4095 | 32768;
              } else {
                mode = 0;
              }
              var node;
              if (_typeof(path) == "object") {
                node = path;
              } else {
                path = PATH.normalize(path);
                try {
                  var lookup = FS.lookupPath(path, {
                    follow: !(flags & 131072)
                  });
                  node = lookup.node;
                } catch (e) {}
              }
              var created = false;
              if (flags & 64) {
                if (node) {
                  if (flags & 128) {
                    throw new FS.ErrnoError(20);
                  }
                } else {
                  node = FS.mknod(path, mode, 0);
                  created = true;
                }
              }
              if (!node) {
                throw new FS.ErrnoError(44);
              }
              if (FS.isChrdev(node.mode)) {
                flags &= ~512;
              }
              if (flags & 65536 && !FS.isDir(node.mode)) {
                throw new FS.ErrnoError(54);
              }
              if (!created) {
                var errCode = FS.mayOpen(node, flags);
                if (errCode) {
                  throw new FS.ErrnoError(errCode);
                }
              }
              if (flags & 512 && !created) {
                FS.truncate(node, 0);
              }
              flags &= ~(128 | 512 | 131072);
              var stream = FS.createStream({
                node: node,
                path: FS.getPath(node),
                flags: flags,
                seekable: true,
                position: 0,
                stream_ops: node.stream_ops,
                ungotten: [],
                error: false
              });
              if (stream.stream_ops.open) {
                stream.stream_ops.open(stream);
              }
              if (Module["logReadFiles"] && !(flags & 1)) {
                if (!FS.readFiles) FS.readFiles = {};
                if (!(path in FS.readFiles)) {
                  FS.readFiles[path] = 1;
                }
              }
              return stream;
            },
            close: function close(stream) {
              if (FS.isClosed(stream)) {
                throw new FS.ErrnoError(8);
              }
              if (stream.getdents) stream.getdents = null;
              try {
                if (stream.stream_ops.close) {
                  stream.stream_ops.close(stream);
                }
              } catch (e) {
                throw e;
              } finally {
                FS.closeStream(stream.fd);
              }
              stream.fd = null;
            },
            isClosed: function isClosed(stream) {
              return stream.fd === null;
            },
            llseek: function llseek(stream, offset, whence) {
              if (FS.isClosed(stream)) {
                throw new FS.ErrnoError(8);
              }
              if (!stream.seekable || !stream.stream_ops.llseek) {
                throw new FS.ErrnoError(70);
              }
              if (whence != 0 && whence != 1 && whence != 2) {
                throw new FS.ErrnoError(28);
              }
              stream.position = stream.stream_ops.llseek(stream, offset, whence);
              stream.ungotten = [];
              return stream.position;
            },
            read: function read(stream, buffer, offset, length, position) {
              if (length < 0 || position < 0) {
                throw new FS.ErrnoError(28);
              }
              if (FS.isClosed(stream)) {
                throw new FS.ErrnoError(8);
              }
              if ((stream.flags & 2097155) === 1) {
                throw new FS.ErrnoError(8);
              }
              if (FS.isDir(stream.node.mode)) {
                throw new FS.ErrnoError(31);
              }
              if (!stream.stream_ops.read) {
                throw new FS.ErrnoError(28);
              }
              var seeking = typeof position != "undefined";
              if (!seeking) {
                position = stream.position;
              } else if (!stream.seekable) {
                throw new FS.ErrnoError(70);
              }
              var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
              if (!seeking) stream.position += bytesRead;
              return bytesRead;
            },
            write: function write(stream, buffer, offset, length, position, canOwn) {
              if (length < 0 || position < 0) {
                throw new FS.ErrnoError(28);
              }
              if (FS.isClosed(stream)) {
                throw new FS.ErrnoError(8);
              }
              if ((stream.flags & 2097155) === 0) {
                throw new FS.ErrnoError(8);
              }
              if (FS.isDir(stream.node.mode)) {
                throw new FS.ErrnoError(31);
              }
              if (!stream.stream_ops.write) {
                throw new FS.ErrnoError(28);
              }
              if (stream.seekable && stream.flags & 1024) {
                FS.llseek(stream, 0, 2);
              }
              var seeking = typeof position != "undefined";
              if (!seeking) {
                position = stream.position;
              } else if (!stream.seekable) {
                throw new FS.ErrnoError(70);
              }
              var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
              if (!seeking) stream.position += bytesWritten;
              return bytesWritten;
            },
            allocate: function allocate(stream, offset, length) {
              if (FS.isClosed(stream)) {
                throw new FS.ErrnoError(8);
              }
              if (offset < 0 || length <= 0) {
                throw new FS.ErrnoError(28);
              }
              if ((stream.flags & 2097155) === 0) {
                throw new FS.ErrnoError(8);
              }
              if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
                throw new FS.ErrnoError(43);
              }
              if (!stream.stream_ops.allocate) {
                throw new FS.ErrnoError(138);
              }
              stream.stream_ops.allocate(stream, offset, length);
            },
            mmap: function mmap(stream, length, position, prot, flags) {
              if ((prot & 2) !== 0 && (flags & 2) === 0 && (stream.flags & 2097155) !== 2) {
                throw new FS.ErrnoError(2);
              }
              if ((stream.flags & 2097155) === 1) {
                throw new FS.ErrnoError(2);
              }
              if (!stream.stream_ops.mmap) {
                throw new FS.ErrnoError(43);
              }
              return stream.stream_ops.mmap(stream, length, position, prot, flags);
            },
            msync: function msync(stream, buffer, offset, length, mmapFlags) {
              if (!stream.stream_ops.msync) {
                return 0;
              }
              return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
            },
            ioctl: function ioctl(stream, cmd, arg) {
              if (!stream.stream_ops.ioctl) {
                throw new FS.ErrnoError(59);
              }
              return stream.stream_ops.ioctl(stream, cmd, arg);
            },
            readFile: function readFile(path) {
              var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
              opts.flags = opts.flags || 0;
              opts.encoding = opts.encoding || "binary";
              if (opts.encoding !== "utf8" && opts.encoding !== "binary") {
                throw new Error("Invalid encoding type \"".concat(opts.encoding, "\""));
              }
              var ret;
              var stream = FS.open(path, opts.flags);
              var stat = FS.stat(path);
              var length = stat.size;
              var buf = new Uint8Array(length);
              FS.read(stream, buf, 0, length, 0);
              if (opts.encoding === "utf8") {
                ret = UTF8ArrayToString(buf, 0);
              } else if (opts.encoding === "binary") {
                ret = buf;
              }
              FS.close(stream);
              return ret;
            },
            writeFile: function writeFile(path, data) {
              var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
              opts.flags = opts.flags || 577;
              var stream = FS.open(path, opts.flags, opts.mode);
              if (typeof data == "string") {
                var buf = new Uint8Array(lengthBytesUTF8(data) + 1);
                var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
                FS.write(stream, buf, 0, actualNumBytes, undefined, opts.canOwn);
              } else if (ArrayBuffer.isView(data)) {
                FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn);
              } else {
                throw new Error("Unsupported data type");
              }
              FS.close(stream);
            },
            cwd: function cwd() {
              return FS.currentPath;
            },
            chdir: function chdir(path) {
              var lookup = FS.lookupPath(path, {
                follow: true
              });
              if (lookup.node === null) {
                throw new FS.ErrnoError(44);
              }
              if (!FS.isDir(lookup.node.mode)) {
                throw new FS.ErrnoError(54);
              }
              var errCode = FS.nodePermissions(lookup.node, "x");
              if (errCode) {
                throw new FS.ErrnoError(errCode);
              }
              FS.currentPath = lookup.path;
            },
            createDefaultDirectories: function createDefaultDirectories() {
              FS.mkdir("/tmp");
              FS.mkdir("/home");
              FS.mkdir("/home/web_user");
            },
            createDefaultDevices: function createDefaultDevices() {
              FS.mkdir("/dev");
              FS.registerDevice(FS.makedev(1, 3), {
                read: function read() {
                  return 0;
                },
                write: function write(stream, buffer, offset, length, pos) {
                  return length;
                }
              });
              FS.mkdev("/dev/null", FS.makedev(1, 3));
              TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
              TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
              FS.mkdev("/dev/tty", FS.makedev(5, 0));
              FS.mkdev("/dev/tty1", FS.makedev(6, 0));
              var randomBuffer = new Uint8Array(1024),
                randomLeft = 0;
              var randomByte = function randomByte() {
                if (randomLeft === 0) {
                  randomLeft = _randomFill(randomBuffer).byteLength;
                }
                return randomBuffer[--randomLeft];
              };
              FS.createDevice("/dev", "random", randomByte);
              FS.createDevice("/dev", "urandom", randomByte);
              FS.mkdir("/dev/shm");
              FS.mkdir("/dev/shm/tmp");
            },
            createSpecialDirectories: function createSpecialDirectories() {
              FS.mkdir("/proc");
              var proc_self = FS.mkdir("/proc/self");
              FS.mkdir("/proc/self/fd");
              FS.mount({
                mount: function mount() {
                  var node = FS.createNode(proc_self, "fd", 16384 | 511, 73);
                  node.node_ops = {
                    lookup: function lookup(parent, name) {
                      var fd = +name;
                      var stream = FS.getStreamChecked(fd);
                      var ret = {
                        parent: null,
                        mount: {
                          mountpoint: "fake"
                        },
                        node_ops: {
                          readlink: function readlink() {
                            return stream.path;
                          }
                        }
                      };
                      ret.parent = ret;
                      return ret;
                    }
                  };
                  return node;
                }
              }, {}, "/proc/self/fd");
            },
            createStandardStreams: function createStandardStreams() {
              if (Module["stdin"]) {
                FS.createDevice("/dev", "stdin", Module["stdin"]);
              } else {
                FS.symlink("/dev/tty", "/dev/stdin");
              }
              if (Module["stdout"]) {
                FS.createDevice("/dev", "stdout", null, Module["stdout"]);
              } else {
                FS.symlink("/dev/tty", "/dev/stdout");
              }
              if (Module["stderr"]) {
                FS.createDevice("/dev", "stderr", null, Module["stderr"]);
              } else {
                FS.symlink("/dev/tty1", "/dev/stderr");
              }
              FS.open("/dev/stdin", 0);
              FS.open("/dev/stdout", 1);
              FS.open("/dev/stderr", 1);
            },
            staticInit: function staticInit() {
              [44].forEach(function (code) {
                FS.genericErrors[code] = new FS.ErrnoError(code);
                FS.genericErrors[code].stack = "<generic error, no stack>";
              });
              FS.nameTable = new Array(4096);
              FS.mount(MEMFS, {}, "/");
              FS.createDefaultDirectories();
              FS.createDefaultDevices();
              FS.createSpecialDirectories();
              FS.filesystems = {
                MEMFS: MEMFS
              };
            },
            init: function init(input, output, error) {
              FS.init.initialized = true;
              Module["stdin"] = input || Module["stdin"];
              Module["stdout"] = output || Module["stdout"];
              Module["stderr"] = error || Module["stderr"];
              FS.createStandardStreams();
            },
            quit: function quit() {
              FS.init.initialized = false;
              _fflush2(0);
              for (var i = 0; i < FS.streams.length; i++) {
                var stream = FS.streams[i];
                if (!stream) {
                  continue;
                }
                FS.close(stream);
              }
            },
            findObject: function findObject(path, dontResolveLastLink) {
              var ret = FS.analyzePath(path, dontResolveLastLink);
              if (!ret.exists) {
                return null;
              }
              return ret.object;
            },
            analyzePath: function analyzePath(path, dontResolveLastLink) {
              try {
                var lookup = FS.lookupPath(path, {
                  follow: !dontResolveLastLink
                });
                path = lookup.path;
              } catch (e) {}
              var ret = {
                isRoot: false,
                exists: false,
                error: 0,
                name: null,
                path: null,
                object: null,
                parentExists: false,
                parentPath: null,
                parentObject: null
              };
              try {
                var lookup = FS.lookupPath(path, {
                  parent: true
                });
                ret.parentExists = true;
                ret.parentPath = lookup.path;
                ret.parentObject = lookup.node;
                ret.name = PATH.basename(path);
                lookup = FS.lookupPath(path, {
                  follow: !dontResolveLastLink
                });
                ret.exists = true;
                ret.path = lookup.path;
                ret.object = lookup.node;
                ret.name = lookup.node.name;
                ret.isRoot = lookup.path === "/";
              } catch (e) {
                ret.error = e.errno;
              }
              return ret;
            },
            createPath: function createPath(parent, path, canRead, canWrite) {
              parent = typeof parent == "string" ? parent : FS.getPath(parent);
              var parts = path.split("/").reverse();
              while (parts.length) {
                var part = parts.pop();
                if (!part) continue;
                var current = PATH.join2(parent, part);
                try {
                  FS.mkdir(current);
                } catch (e) {}
                parent = current;
              }
              return current;
            },
            createFile: function createFile(parent, name, properties, canRead, canWrite) {
              var path = PATH.join2(typeof parent == "string" ? parent : FS.getPath(parent), name);
              var mode = FS_getMode(canRead, canWrite);
              return FS.create(path, mode);
            },
            createDataFile: function createDataFile(parent, name, data, canRead, canWrite, canOwn) {
              var path = name;
              if (parent) {
                parent = typeof parent == "string" ? parent : FS.getPath(parent);
                path = name ? PATH.join2(parent, name) : parent;
              }
              var mode = FS_getMode(canRead, canWrite);
              var node = FS.create(path, mode);
              if (data) {
                if (typeof data == "string") {
                  var arr = new Array(data.length);
                  for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
                  data = arr;
                }
                FS.chmod(node, mode | 146);
                var stream = FS.open(node, 577);
                FS.write(stream, data, 0, data.length, 0, canOwn);
                FS.close(stream);
                FS.chmod(node, mode);
              }
            },
            createDevice: function createDevice(parent, name, input, output) {
              var path = PATH.join2(typeof parent == "string" ? parent : FS.getPath(parent), name);
              var mode = FS_getMode(!!input, !!output);
              if (!FS.createDevice.major) FS.createDevice.major = 64;
              var dev = FS.makedev(FS.createDevice.major++, 0);
              FS.registerDevice(dev, {
                open: function open(stream) {
                  stream.seekable = false;
                },
                close: function close(stream) {
                  var _output$buffer;
                  if (output !== null && output !== void 0 && (_output$buffer = output.buffer) !== null && _output$buffer !== void 0 && _output$buffer.length) {
                    output(10);
                  }
                },
                read: function read(stream, buffer, offset, length, pos) {
                  var bytesRead = 0;
                  for (var i = 0; i < length; i++) {
                    var result;
                    try {
                      result = input();
                    } catch (e) {
                      throw new FS.ErrnoError(29);
                    }
                    if (result === undefined && bytesRead === 0) {
                      throw new FS.ErrnoError(6);
                    }
                    if (result === null || result === undefined) break;
                    bytesRead++;
                    buffer[offset + i] = result;
                  }
                  if (bytesRead) {
                    stream.node.timestamp = Date.now();
                  }
                  return bytesRead;
                },
                write: function write(stream, buffer, offset, length, pos) {
                  for (var i = 0; i < length; i++) {
                    try {
                      output(buffer[offset + i]);
                    } catch (e) {
                      throw new FS.ErrnoError(29);
                    }
                  }
                  if (length) {
                    stream.node.timestamp = Date.now();
                  }
                  return i;
                }
              });
              return FS.mkdev(path, mode, dev);
            },
            forceLoadFile: function forceLoadFile(obj) {
              if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
              if (typeof XMLHttpRequest != "undefined") {
                throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
              } else {
                try {
                  obj.contents = readBinary(obj.url);
                  obj.usedBytes = obj.contents.length;
                } catch (e) {
                  throw new FS.ErrnoError(29);
                }
              }
            },
            createLazyFile: function createLazyFile(parent, name, url, canRead, canWrite) {
              var LazyUint8Array = /*#__PURE__*/function () {
                function LazyUint8Array() {
                  _classCallCheck(this, LazyUint8Array);
                  this.lengthKnown = false;
                  this.chunks = [];
                }
                return _createClass(LazyUint8Array, [{
                  key: "get",
                  value: function get(idx) {
                    if (idx > this.length - 1 || idx < 0) {
                      return undefined;
                    }
                    var chunkOffset = idx % this.chunkSize;
                    var chunkNum = idx / this.chunkSize | 0;
                    return this.getter(chunkNum)[chunkOffset];
                  }
                }, {
                  key: "setDataGetter",
                  value: function setDataGetter(getter) {
                    this.getter = getter;
                  }
                }, {
                  key: "cacheLength",
                  value: function cacheLength() {
                    var xhr = new XMLHttpRequest();
                    xhr.open("HEAD", url, false);
                    xhr.send(null);
                    if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
                    var datalength = Number(xhr.getResponseHeader("Content-length"));
                    var header;
                    var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
                    var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
                    var chunkSize = 1024 * 1024;
                    if (!hasByteServing) chunkSize = datalength;
                    var doXHR = function doXHR(from, to) {
                      if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
                      if (to > datalength - 1) throw new Error("only " + datalength + " bytes available! programmer error!");
                      var xhr = new XMLHttpRequest();
                      xhr.open("GET", url, false);
                      if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
                      xhr.responseType = "arraybuffer";
                      if (xhr.overrideMimeType) {
                        xhr.overrideMimeType("text/plain; charset=x-user-defined");
                      }
                      xhr.send(null);
                      if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
                      if (xhr.response !== undefined) {
                        return new Uint8Array(xhr.response || []);
                      }
                      return intArrayFromString(xhr.responseText || "", true);
                    };
                    var lazyArray = this;
                    lazyArray.setDataGetter(function (chunkNum) {
                      var start = chunkNum * chunkSize;
                      var end = (chunkNum + 1) * chunkSize - 1;
                      end = Math.min(end, datalength - 1);
                      if (typeof lazyArray.chunks[chunkNum] == "undefined") {
                        lazyArray.chunks[chunkNum] = doXHR(start, end);
                      }
                      if (typeof lazyArray.chunks[chunkNum] == "undefined") throw new Error("doXHR failed!");
                      return lazyArray.chunks[chunkNum];
                    });
                    if (usesGzip || !datalength) {
                      chunkSize = datalength = 1;
                      datalength = this.getter(0).length;
                      chunkSize = datalength;
                      out("LazyFiles on gzip forces download of the whole file when length is accessed");
                    }
                    this._length = datalength;
                    this._chunkSize = chunkSize;
                    this.lengthKnown = true;
                  }
                }, {
                  key: "length",
                  get: function get() {
                    if (!this.lengthKnown) {
                      this.cacheLength();
                    }
                    return this._length;
                  }
                }, {
                  key: "chunkSize",
                  get: function get() {
                    if (!this.lengthKnown) {
                      this.cacheLength();
                    }
                    return this._chunkSize;
                  }
                }]);
              }();
              if (typeof XMLHttpRequest != "undefined") {
                if (!ENVIRONMENT_IS_WORKER) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
                var lazyArray = new LazyUint8Array();
                var properties = {
                  isDevice: false,
                  contents: lazyArray
                };
              } else {
                var properties = {
                  isDevice: false,
                  url: url
                };
              }
              var node = FS.createFile(parent, name, properties, canRead, canWrite);
              if (properties.contents) {
                node.contents = properties.contents;
              } else if (properties.url) {
                node.contents = null;
                node.url = properties.url;
              }
              Object.defineProperties(node, {
                usedBytes: {
                  get: function get() {
                    return this.contents.length;
                  }
                }
              });
              var stream_ops = {};
              var keys = Object.keys(node.stream_ops);
              keys.forEach(function (key) {
                var fn = node.stream_ops[key];
                stream_ops[key] = function () {
                  FS.forceLoadFile(node);
                  return fn.apply(void 0, arguments);
                };
              });
              function writeChunks(stream, buffer, offset, length, position) {
                var contents = stream.node.contents;
                if (position >= contents.length) return 0;
                var size = Math.min(contents.length - position, length);
                if (contents.slice) {
                  for (var i = 0; i < size; i++) {
                    buffer[offset + i] = contents[position + i];
                  }
                } else {
                  for (var i = 0; i < size; i++) {
                    buffer[offset + i] = contents.get(position + i);
                  }
                }
                return size;
              }
              stream_ops.read = function (stream, buffer, offset, length, position) {
                FS.forceLoadFile(node);
                return writeChunks(stream, buffer, offset, length, position);
              };
              stream_ops.mmap = function (stream, length, position, prot, flags) {
                FS.forceLoadFile(node);
                var ptr = mmapAlloc(length);
                if (!ptr) {
                  throw new FS.ErrnoError(48);
                }
                writeChunks(stream, HEAP8, ptr, length, position);
                return {
                  ptr: ptr,
                  allocated: true
                };
              };
              node.stream_ops = stream_ops;
              return node;
            }
          };
          UTF8ToString = function UTF8ToString(ptr, maxBytesToRead) {
            ptr >>>= 0;
            return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
          };
          SYSCALLS = {
            DEFAULT_POLLMASK: 5,
            calculateAt: function calculateAt(dirfd, path, allowEmpty) {
              if (PATH.isAbs(path)) {
                return path;
              }
              var dir;
              if (dirfd === -100) {
                dir = FS.cwd();
              } else {
                var dirstream = SYSCALLS.getStreamFromFD(dirfd);
                dir = dirstream.path;
              }
              if (path.length == 0) {
                if (!allowEmpty) {
                  throw new FS.ErrnoError(44);
                }
                return dir;
              }
              return PATH.join2(dir, path);
            },
            doStat: function doStat(func, path, buf) {
              var stat = func(path);
              HEAP32[buf >>> 2 >>> 0] = stat.dev;
              HEAP32[buf + 4 >>> 2 >>> 0] = stat.mode;
              HEAPU32[buf + 8 >>> 2 >>> 0] = stat.nlink;
              HEAP32[buf + 12 >>> 2 >>> 0] = stat.uid;
              HEAP32[buf + 16 >>> 2 >>> 0] = stat.gid;
              HEAP32[buf + 20 >>> 2 >>> 0] = stat.rdev;
              tempI64 = [stat.size >>> 0, (tempDouble = stat.size, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 24 >>> 2 >>> 0] = tempI64[0], HEAP32[buf + 28 >>> 2 >>> 0] = tempI64[1];
              HEAP32[buf + 32 >>> 2 >>> 0] = 4096;
              HEAP32[buf + 36 >>> 2 >>> 0] = stat.blocks;
              var atime = stat.atime.getTime();
              var mtime = stat.mtime.getTime();
              var ctime = stat.ctime.getTime();
              tempI64 = [Math.floor(atime / 1e3) >>> 0, (tempDouble = Math.floor(atime / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 40 >>> 2 >>> 0] = tempI64[0], HEAP32[buf + 44 >>> 2 >>> 0] = tempI64[1];
              HEAPU32[buf + 48 >>> 2 >>> 0] = atime % 1e3 * 1e3;
              tempI64 = [Math.floor(mtime / 1e3) >>> 0, (tempDouble = Math.floor(mtime / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 56 >>> 2 >>> 0] = tempI64[0], HEAP32[buf + 60 >>> 2 >>> 0] = tempI64[1];
              HEAPU32[buf + 64 >>> 2 >>> 0] = mtime % 1e3 * 1e3;
              tempI64 = [Math.floor(ctime / 1e3) >>> 0, (tempDouble = Math.floor(ctime / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 72 >>> 2 >>> 0] = tempI64[0], HEAP32[buf + 76 >>> 2 >>> 0] = tempI64[1];
              HEAPU32[buf + 80 >>> 2 >>> 0] = ctime % 1e3 * 1e3;
              tempI64 = [stat.ino >>> 0, (tempDouble = stat.ino, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 88 >>> 2 >>> 0] = tempI64[0], HEAP32[buf + 92 >>> 2 >>> 0] = tempI64[1];
              return 0;
            },
            doMsync: function doMsync(addr, stream, len, flags, offset) {
              if (!FS.isFile(stream.node.mode)) {
                throw new FS.ErrnoError(43);
              }
              if (flags & 2) {
                return 0;
              }
              var buffer = HEAPU8.slice(addr, addr + len);
              FS.msync(stream, buffer, offset, len, flags);
            },
            getStreamFromFD: function getStreamFromFD(fd) {
              var stream = FS.getStreamChecked(fd);
              return stream;
            },
            varargs: undefined,
            getStr: function getStr(ptr) {
              var ret = UTF8ToString(ptr);
              return ret;
            }
          };
          syscallGetVarargP = syscallGetVarargI;
          stringToUTF8 = function stringToUTF8(str, outPtr, maxBytesToWrite) {
            return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
          };
          __abort_js = function __abort_js() {
            abort("");
          };
          nowIsMonotonic = 1;
          __emscripten_get_now_is_monotonic = function __emscripten_get_now_is_monotonic() {
            return nowIsMonotonic;
          };
          __emscripten_runtime_keepalive_clear = function __emscripten_runtime_keepalive_clear() {
            noExitRuntime = false;
            runtimeKeepaliveCounter = 0;
          };
          __emscripten_throw_longjmp = function __emscripten_throw_longjmp() {
            throw Infinity;
          };
          isLeapYear = function isLeapYear(year) {
            return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
          };
          MONTH_DAYS_LEAP_CUMULATIVE = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
          MONTH_DAYS_REGULAR_CUMULATIVE = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
          ydayFromDate = function ydayFromDate(date) {
            var leap = isLeapYear(date.getFullYear());
            var monthDaysCumulative = leap ? MONTH_DAYS_LEAP_CUMULATIVE : MONTH_DAYS_REGULAR_CUMULATIVE;
            var yday = monthDaysCumulative[date.getMonth()] + date.getDate() - 1;
            return yday;
          };
          timers = {};
          handleException = function handleException(e) {
            if (e instanceof ExitStatus || e == "unwind") {
              return EXITSTATUS;
            }
            quit_(1, e);
          };
          runtimeKeepaliveCounter = 0;
          keepRuntimeAlive = function keepRuntimeAlive() {
            return noExitRuntime || runtimeKeepaliveCounter > 0;
          };
          _proc_exit = function _proc_exit(code) {
            EXITSTATUS = code;
            if (!keepRuntimeAlive()) {
              var _Module$onExit, _Module4;
              (_Module$onExit = (_Module4 = Module)["onExit"]) === null || _Module$onExit === void 0 || _Module$onExit.call(_Module4, code);
              ABORT = true;
            }
            quit_(code, new ExitStatus(code));
          };
          exitJS = function exitJS(status, implicit) {
            EXITSTATUS = status;
            if (!keepRuntimeAlive()) {
              exitRuntime();
            }
            _proc_exit(status);
          };
          _exit = exitJS;
          maybeExit = function maybeExit() {
            if (runtimeExited) {
              return;
            }
            if (!keepRuntimeAlive()) {
              try {
                _exit(EXITSTATUS);
              } catch (e) {
                handleException(e);
              }
            }
          };
          callUserCallback = function callUserCallback(func) {
            if (runtimeExited || ABORT) {
              return;
            }
            try {
              func();
              maybeExit();
            } catch (e) {
              handleException(e);
            }
          };
          _emscripten_get_now = function _emscripten_get_now() {
            return performance.now();
          };
          __setitimer_js = function __setitimer_js(which, timeout_ms) {
            if (timers[which]) {
              clearTimeout(timers[which].id);
              delete timers[which];
            }
            if (!timeout_ms) return 0;
            var id = setTimeout(function () {
              delete timers[which];
              callUserCallback(function () {
                return _emscripten_timeout(which, _emscripten_get_now());
              });
            }, timeout_ms);
            timers[which] = {
              id: id,
              timeout_ms: timeout_ms
            };
            return 0;
          };
          __tzset_js = function __tzset_js(timezone, daylight, std_name, dst_name) {
            timezone >>>= 0;
            daylight >>>= 0;
            std_name >>>= 0;
            dst_name >>>= 0;
            var currentYear = new Date().getFullYear();
            var winter = new Date(currentYear, 0, 1);
            var summer = new Date(currentYear, 6, 1);
            var winterOffset = winter.getTimezoneOffset();
            var summerOffset = summer.getTimezoneOffset();
            var stdTimezoneOffset = Math.max(winterOffset, summerOffset);
            HEAPU32[timezone >>> 2 >>> 0] = stdTimezoneOffset * 60;
            HEAP32[daylight >>> 2 >>> 0] = Number(winterOffset != summerOffset);
            var extractZone = function extractZone(timezoneOffset) {
              var sign = timezoneOffset >= 0 ? "-" : "+";
              var absOffset = Math.abs(timezoneOffset);
              var hours = String(Math.floor(absOffset / 60)).padStart(2, "0");
              var minutes = String(absOffset % 60).padStart(2, "0");
              return "UTC".concat(sign).concat(hours).concat(minutes);
            };
            var winterName = extractZone(winterOffset);
            var summerName = extractZone(summerOffset);
            if (summerOffset < winterOffset) {
              stringToUTF8(winterName, std_name, 17);
              stringToUTF8(summerName, dst_name, 17);
            } else {
              stringToUTF8(winterName, dst_name, 17);
              stringToUTF8(summerName, std_name, 17);
            }
          };
          _emscripten_date_now = function _emscripten_date_now() {
            return Date.now();
          };
          getHeapMax = function getHeapMax() {
            return 4294901760;
          };
          growMemory = function growMemory(size) {
            var b = wasmMemory.buffer;
            var pages = (size - b.byteLength + 65535) / 65536;
            try {
              wasmMemory.grow(pages);
              updateMemoryViews();
              return 1;
            } catch (e) {}
          };
          ENV = {};
          getExecutableName = function getExecutableName() {
            return thisProgram || "./this.program";
          };
          _getEnvStrings = function getEnvStrings() {
            if (!_getEnvStrings.strings) {
              var lang = ((typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
              var env = {
                USER: "web_user",
                LOGNAME: "web_user",
                PATH: "/",
                PWD: "/",
                HOME: "/home/web_user",
                LANG: lang,
                _: getExecutableName()
              };
              for (var x in ENV) {
                if (ENV[x] === undefined) delete env[x];else env[x] = ENV[x];
              }
              var strings = [];
              for (var x in env) {
                strings.push("".concat(x, "=").concat(env[x]));
              }
              _getEnvStrings.strings = strings;
            }
            return _getEnvStrings.strings;
          };
          stringToAscii = function stringToAscii(str, buffer) {
            for (var i = 0; i < str.length; ++i) {
              HEAP8[buffer++ >>> 0] = str.charCodeAt(i);
            }
            HEAP8[buffer >>> 0] = 0;
          };
          _environ_get = function _environ_get(__environ, environ_buf) {
            __environ >>>= 0;
            environ_buf >>>= 0;
            var bufSize = 0;
            _getEnvStrings().forEach(function (string, i) {
              var ptr = environ_buf + bufSize;
              HEAPU32[__environ + i * 4 >>> 2 >>> 0] = ptr;
              stringToAscii(string, ptr);
              bufSize += string.length + 1;
            });
            return 0;
          };
          _environ_sizes_get = function _environ_sizes_get(penviron_count, penviron_buf_size) {
            penviron_count >>>= 0;
            penviron_buf_size >>>= 0;
            var strings = _getEnvStrings();
            HEAPU32[penviron_count >>> 2 >>> 0] = strings.length;
            var bufSize = 0;
            strings.forEach(function (string) {
              return bufSize += string.length + 1;
            });
            HEAPU32[penviron_buf_size >>> 2 >>> 0] = bufSize;
            return 0;
          };
          doReadv = function doReadv(stream, iov, iovcnt, offset) {
            var ret = 0;
            for (var i = 0; i < iovcnt; i++) {
              var ptr = HEAPU32[iov >>> 2 >>> 0];
              var len = HEAPU32[iov + 4 >>> 2 >>> 0];
              iov += 8;
              var curr = FS.read(stream, HEAP8, ptr, len, offset);
              if (curr < 0) return -1;
              ret += curr;
              if (curr < len) break;
              if (typeof offset != "undefined") {
                offset += curr;
              }
            }
            return ret;
          };
          doWritev = function doWritev(stream, iov, iovcnt, offset) {
            var ret = 0;
            for (var i = 0; i < iovcnt; i++) {
              var ptr = HEAPU32[iov >>> 2 >>> 0];
              var len = HEAPU32[iov + 4 >>> 2 >>> 0];
              iov += 8;
              var curr = FS.write(stream, HEAP8, ptr, len, offset);
              if (curr < 0) return -1;
              ret += curr;
              if (typeof offset != "undefined") {
                offset += curr;
              }
            }
            return ret;
          };
          stackAlloc = function stackAlloc(sz) {
            return _emscripten_stack_alloc(sz);
          };
          stringToUTF8OnStack = function stringToUTF8OnStack(str) {
            var size = lengthBytesUTF8(str) + 1;
            var ret = stackAlloc(size);
            stringToUTF8(str, ret, size);
            return ret;
          };
          stringToNewUTF8 = function stringToNewUTF8(str) {
            var size = lengthBytesUTF8(str) + 1;
            var ret = _malloc(size);
            if (ret) stringToUTF8(str, ret, size);
            return ret;
          };
          getCFunc = function getCFunc(ident) {
            var func = Module["_" + ident];
            return func;
          };
          writeArrayToMemory = function writeArrayToMemory(array, buffer) {
            HEAP8.set(array, buffer >>> 0);
          };
          ccall = function ccall(ident, returnType, argTypes, args, opts) {
            var toC = {
              string: function string(str) {
                var ret = 0;
                if (str !== null && str !== undefined && str !== 0) {
                  ret = stringToUTF8OnStack(str);
                }
                return ret;
              },
              array: function array(arr) {
                var ret = stackAlloc(arr.length);
                writeArrayToMemory(arr, ret);
                return ret;
              }
            };
            function convertReturnValue(ret) {
              if (returnType === "string") {
                return UTF8ToString(ret);
              }
              if (returnType === "boolean") return Boolean(ret);
              return ret;
            }
            var func = getCFunc(ident);
            var cArgs = [];
            var stack = 0;
            if (args) {
              for (var i = 0; i < args.length; i++) {
                var converter = toC[argTypes[i]];
                if (converter) {
                  if (stack === 0) stack = stackSave();
                  cArgs[i] = converter(args[i]);
                } else {
                  cArgs[i] = args[i];
                }
              }
            }
            var ret = func.apply(void 0, cArgs);
            function onDone(ret) {
              if (stack !== 0) stackRestore(stack);
              return convertReturnValue(ret);
            }
            ret = onDone(ret);
            return ret;
          };
          cwrap = function cwrap(ident, returnType, argTypes, opts) {
            var numericArgs = !argTypes || argTypes.every(function (type) {
              return type === "number" || type === "boolean";
            });
            var numericRet = returnType !== "string";
            if (numericRet && numericArgs && !opts) {
              return getCFunc(ident);
            }
            return function () {
              for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
              }
              return ccall(ident, returnType, argTypes, args, opts);
            };
          };
          FS.createPreloadedFile = FS_createPreloadedFile;
          FS.staticInit();
          wasmImports = {
            wa: ___call_sighandler,
            x: ___cxa_begin_catch,
            y: ___cxa_end_catch,
            a: ___cxa_find_matching_catch_2,
            n: ___cxa_find_matching_catch_3,
            C: ___cxa_find_matching_catch_4,
            ka: ___cxa_rethrow,
            la: ___cxa_rethrow_primary_exception,
            w: ___cxa_throw,
            ma: ___cxa_uncaught_exceptions,
            d: ___resumeException,
            Ja: ___syscall_chdir,
            Ia: ___syscall_chmod,
            Ka: ___syscall_faccessat,
            Fa: ___syscall_fchmod,
            A: ___syscall_fcntl64,
            Ea: ___syscall_fstat64,
            bb: ___syscall_ftruncate64,
            Aa: ___syscall_getcwd,
            ua: ___syscall_getdents64,
            Ba: ___syscall_lstat64,
            za: ___syscall_mkdirat,
            Ca: ___syscall_newfstatat,
            Q: ___syscall_openat,
            ta: ___syscall_readlinkat,
            ra: ___syscall_renameat,
            sa: ___syscall_rmdir,
            Da: ___syscall_stat64,
            qa: ___syscall_statfs64,
            K: ___syscall_unlinkat,
            La: __abort_js,
            Ga: __emscripten_get_now_is_monotonic,
            Ha: __emscripten_memcpy_js,
            xa: __emscripten_runtime_keepalive_clear,
            na: __emscripten_throw_longjmp,
            $a: __localtime_js,
            Za: __mmap_js,
            _a: __munmap_js,
            O: __setitimer_js,
            ya: __tzset_js,
            S: _emscripten_date_now,
            pa: _emscripten_get_heap_max,
            R: _emscripten_get_now,
            oa: _emscripten_resize_heap,
            Na: _environ_get,
            Oa: _environ_sizes_get,
            t: _exit,
            L: _fd_close,
            P: _fd_fdstat_get,
            Ya: _fd_pread,
            va: _fd_read,
            ab: _fd_seek,
            F: _fd_write,
            T: _getentropy,
            M: invoke_diii,
            Pa: invoke_diiii,
            N: invoke_fiii,
            s: invoke_i,
            f: invoke_ii,
            g: invoke_iii,
            j: invoke_iiii,
            l: invoke_iiiii,
            ja: invoke_iiiiid,
            p: invoke_iiiiii,
            u: invoke_iiiiiii,
            z: invoke_iiiiiiii,
            J: invoke_iiiiiiiiii,
            I: invoke_iiiiiiiiiii,
            E: invoke_iiiiiiiiiiii,
            H: invoke_iiiiiiiiiiiiii,
            Ta: invoke_iiiiiiiiiiiiiiiiiii,
            Va: invoke_iiiiij,
            da: invoke_iiij,
            ea: invoke_iiji,
            aa: invoke_iijj,
            Xa: invoke_j,
            Wa: invoke_ji,
            fa: invoke_jii,
            Ua: invoke_jiiii,
            ob: invoke_jijj,
            ib: invoke_jijji,
            jb: invoke_jijjji,
            o: invoke_v,
            b: invoke_vi,
            c: invoke_vii,
            ha: invoke_viid,
            ia: invoke_viif,
            e: invoke_viii,
            i: invoke_viiii,
            h: invoke_viiiii,
            k: invoke_viiiiii,
            q: invoke_viiiiiii,
            m: invoke_viiiiiiii,
            r: invoke_viiiiiiiii,
            v: invoke_viiiiiiiiii,
            U: invoke_viiiiiiiiiii,
            B: invoke_viiiiiiiiiiii,
            D: invoke_viiiiiiiiiiiiiii,
            V: invoke_viiiiiiiiiiiiiiii,
            cb: invoke_viiiiiiiiijiiii,
            db: invoke_viiiiiiijii,
            fb: invoke_viiiiiiji,
            _: invoke_viiiij,
            Z: invoke_viiiiji,
            eb: invoke_viiiijii,
            nb: invoke_viiiijiijiii,
            lb: invoke_viiiijj,
            $: invoke_viiij,
            X: invoke_viiiji,
            kb: invoke_viiijii,
            Y: invoke_viiijji,
            gb: invoke_viiijjii,
            ba: invoke_viij,
            pb: invoke_viiji,
            W: invoke_viijii,
            mb: invoke_viijiii,
            ga: invoke_viijj,
            ca: invoke_vij,
            hb: invoke_vijiii,
            G: _llvm_eh_typeid_for,
            Ma: _proc_exit,
            Qa: _resolc_compile,
            Sa: _soljson_compile,
            Ra: _soljson_version
          };
          wasmExports = createWasm();
          _main = Module["_main"] = function (a0, a1) {
            return (_main = Module["_main"] = wasmExports["tb"])(a0, a1);
          };
          Module["_free"] = function (a0) {
            return (Module["_free"] = wasmExports["ub"])(a0);
          };
          _malloc = Module["_malloc"] = function (a0) {
            return (_malloc = Module["_malloc"] = wasmExports["vb"])(a0);
          };
          _funcs_on_exit = function ___funcs_on_exit() {
            return (_funcs_on_exit = wasmExports["wb"])();
          };
          _fflush2 = function _fflush(a0) {
            return (_fflush2 = wasmExports["xb"])(a0);
          };
          _emscripten_builtin_memalign2 = function _emscripten_builtin_memalign(a0, a1) {
            return (_emscripten_builtin_memalign2 = wasmExports["yb"])(a0, a1);
          };
          _emscripten_timeout = function __emscripten_timeout(a0, a1) {
            return (_emscripten_timeout = wasmExports["zb"])(a0, a1);
          };
          _setThrew2 = function _setThrew(a0, a1) {
            return (_setThrew2 = wasmExports["Ab"])(a0, a1);
          };
          _emscripten_tempret_set = function __emscripten_tempret_set(a0) {
            return (_emscripten_tempret_set = wasmExports["Bb"])(a0);
          };
          _emscripten_stack_restore = function __emscripten_stack_restore(a0) {
            return (_emscripten_stack_restore = wasmExports["Cb"])(a0);
          };
          _emscripten_stack_alloc = function __emscripten_stack_alloc(a0) {
            return (_emscripten_stack_alloc = wasmExports["Db"])(a0);
          };
          _emscripten_stack_get_current2 = function _emscripten_stack_get_current() {
            return (_emscripten_stack_get_current2 = wasmExports["Eb"])();
          };
          _cxa_decrement_exception_refcount = function ___cxa_decrement_exception_refcount(a0) {
            return (_cxa_decrement_exception_refcount = wasmExports["Fb"])(a0);
          };
          _cxa_increment_exception_refcount = function ___cxa_increment_exception_refcount(a0) {
            return (_cxa_increment_exception_refcount = wasmExports["Gb"])(a0);
          };
          _cxa_can_catch = function ___cxa_can_catch(a0, a1, a2) {
            return (_cxa_can_catch = wasmExports["Hb"])(a0, a1, a2);
          };
          _cxa_is_pointer_type = function ___cxa_is_pointer_type(a0) {
            return (_cxa_is_pointer_type = wasmExports["Ib"])(a0);
          };
          dynCall_iijj = Module["dynCall_iijj"] = function (a0, a1, a2, a3, a4, a5) {
            return (dynCall_iijj = Module["dynCall_iijj"] = wasmExports["Jb"])(a0, a1, a2, a3, a4, a5);
          };
          dynCall_viijj = Module["dynCall_viijj"] = function (a0, a1, a2, a3, a4, a5, a6) {
            return (dynCall_viijj = Module["dynCall_viijj"] = wasmExports["Kb"])(a0, a1, a2, a3, a4, a5, a6);
          };
          dynCall_jii = Module["dynCall_jii"] = function (a0, a1, a2) {
            return (dynCall_jii = Module["dynCall_jii"] = wasmExports["Lb"])(a0, a1, a2);
          };
          dynCall_iiji = Module["dynCall_iiji"] = function (a0, a1, a2, a3, a4) {
            return (dynCall_iiji = Module["dynCall_iiji"] = wasmExports["Mb"])(a0, a1, a2, a3, a4);
          };
          dynCall_iiij = Module["dynCall_iiij"] = function (a0, a1, a2, a3, a4) {
            return (dynCall_iiij = Module["dynCall_iiij"] = wasmExports["Nb"])(a0, a1, a2, a3, a4);
          };
          dynCall_vij = Module["dynCall_vij"] = function (a0, a1, a2, a3) {
            return (dynCall_vij = Module["dynCall_vij"] = wasmExports["Ob"])(a0, a1, a2, a3);
          };
          dynCall_viij = Module["dynCall_viij"] = function (a0, a1, a2, a3, a4) {
            return (dynCall_viij = Module["dynCall_viij"] = wasmExports["Pb"])(a0, a1, a2, a3, a4);
          };
          dynCall_viiij = Module["dynCall_viiij"] = function (a0, a1, a2, a3, a4, a5) {
            return (dynCall_viiij = Module["dynCall_viiij"] = wasmExports["Qb"])(a0, a1, a2, a3, a4, a5);
          };
          dynCall_viiiij = Module["dynCall_viiiij"] = function (a0, a1, a2, a3, a4, a5, a6) {
            return (dynCall_viiiij = Module["dynCall_viiiij"] = wasmExports["Rb"])(a0, a1, a2, a3, a4, a5, a6);
          };
          dynCall_viiiiji = Module["dynCall_viiiiji"] = function (a0, a1, a2, a3, a4, a5, a6, a7) {
            return (dynCall_viiiiji = Module["dynCall_viiiiji"] = wasmExports["Sb"])(a0, a1, a2, a3, a4, a5, a6, a7);
          };
          dynCall_viiiiiiijii = Module["dynCall_viiiiiiijii"] = function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
            return (dynCall_viiiiiiijii = Module["dynCall_viiiiiiijii"] = wasmExports["Tb"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
          };
          dynCall_viiijji = Module["dynCall_viiijji"] = function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
            return (dynCall_viiijji = Module["dynCall_viiijji"] = wasmExports["Ub"])(a0, a1, a2, a3, a4, a5, a6, a7, a8);
          };
          dynCall_viiiji = Module["dynCall_viiiji"] = function (a0, a1, a2, a3, a4, a5, a6) {
            return (dynCall_viiiji = Module["dynCall_viiiji"] = wasmExports["Vb"])(a0, a1, a2, a3, a4, a5, a6);
          };
          dynCall_viijii = Module["dynCall_viijii"] = function (a0, a1, a2, a3, a4, a5, a6) {
            return (dynCall_viijii = Module["dynCall_viijii"] = wasmExports["Wb"])(a0, a1, a2, a3, a4, a5, a6);
          };
          dynCall_viiji = Module["dynCall_viiji"] = function (a0, a1, a2, a3, a4, a5) {
            return (dynCall_viiji = Module["dynCall_viiji"] = wasmExports["Xb"])(a0, a1, a2, a3, a4, a5);
          };
          dynCall_jijj = Module["dynCall_jijj"] = function (a0, a1, a2, a3, a4, a5) {
            return (dynCall_jijj = Module["dynCall_jijj"] = wasmExports["Yb"])(a0, a1, a2, a3, a4, a5);
          };
          dynCall_viiiijiijiii = Module["dynCall_viiiijiijiii"] = function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13) {
            return (dynCall_viiiijiijiii = Module["dynCall_viiiijiijiii"] = wasmExports["Zb"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13);
          };
          dynCall_viijiii = Module["dynCall_viijiii"] = function (a0, a1, a2, a3, a4, a5, a6, a7) {
            return (dynCall_viijiii = Module["dynCall_viijiii"] = wasmExports["_b"])(a0, a1, a2, a3, a4, a5, a6, a7);
          };
          dynCall_viiiijj = Module["dynCall_viiiijj"] = function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
            return (dynCall_viiiijj = Module["dynCall_viiiijj"] = wasmExports["$b"])(a0, a1, a2, a3, a4, a5, a6, a7, a8);
          };
          dynCall_viiijii = Module["dynCall_viiijii"] = function (a0, a1, a2, a3, a4, a5, a6, a7) {
            return (dynCall_viiijii = Module["dynCall_viiijii"] = wasmExports["ac"])(a0, a1, a2, a3, a4, a5, a6, a7);
          };
          dynCall_jijjji = Module["dynCall_jijjji"] = function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
            return (dynCall_jijjji = Module["dynCall_jijjji"] = wasmExports["bc"])(a0, a1, a2, a3, a4, a5, a6, a7, a8);
          };
          dynCall_jijji = Module["dynCall_jijji"] = function (a0, a1, a2, a3, a4, a5, a6) {
            return (dynCall_jijji = Module["dynCall_jijji"] = wasmExports["cc"])(a0, a1, a2, a3, a4, a5, a6);
          };
          dynCall_vijiii = Module["dynCall_vijiii"] = function (a0, a1, a2, a3, a4, a5, a6) {
            return (dynCall_vijiii = Module["dynCall_vijiii"] = wasmExports["dc"])(a0, a1, a2, a3, a4, a5, a6);
          };
          dynCall_ji = Module["dynCall_ji"] = function (a0, a1) {
            return (dynCall_ji = Module["dynCall_ji"] = wasmExports["ec"])(a0, a1);
          };
          dynCall_viiijjii = Module["dynCall_viiijjii"] = function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
            return (dynCall_viiijjii = Module["dynCall_viiijjii"] = wasmExports["fc"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
          };
          dynCall_viiiijii = Module["dynCall_viiiijii"] = function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
            return (dynCall_viiiijii = Module["dynCall_viiiijii"] = wasmExports["gc"])(a0, a1, a2, a3, a4, a5, a6, a7, a8);
          };
          dynCall_viiiiiiiiijiiii = Module["dynCall_viiiiiiiiijiiii"] = function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15) {
            return (dynCall_viiiiiiiiijiiii = Module["dynCall_viiiiiiiiijiiii"] = wasmExports["hc"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15);
          };
          dynCall_j = Module["dynCall_j"] = function (a0) {
            return (dynCall_j = Module["dynCall_j"] = wasmExports["ic"])(a0);
          };
          dynCall_iiiiij = Module["dynCall_iiiiij"] = function (a0, a1, a2, a3, a4, a5, a6) {
            return (dynCall_iiiiij = Module["dynCall_iiiiij"] = wasmExports["jc"])(a0, a1, a2, a3, a4, a5, a6);
          };
          dynCall_jiiii = Module["dynCall_jiiii"] = function (a0, a1, a2, a3, a4) {
            return (dynCall_jiiii = Module["dynCall_jiiii"] = wasmExports["kc"])(a0, a1, a2, a3, a4);
          };
          dynCall_viiiiiiji = Module["dynCall_viiiiiiji"] = function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
            return (dynCall_viiiiiiji = Module["dynCall_viiiiiiji"] = wasmExports["lc"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
          };
          Module["callMain"] = callMain;
          Module["cwrap"] = cwrap;
          Module["stringToNewUTF8"] = stringToNewUTF8;
          Module["FS"] = FS;
          dependenciesFulfilled = function runCaller() {
            if (!calledRun) run();
            if (!calledRun) dependenciesFulfilled = runCaller;
          };
          if (Module["preInit"]) {
            if (typeof Module["preInit"] == "function") Module["preInit"] = [Module["preInit"]];
            while (Module["preInit"].length > 0) {
              Module["preInit"].pop()();
            }
          }
          shouldRunNow = false;
          if (Module["noInitialRun"]) shouldRunNow = false;
          run();
          moduleRtn = readyPromise;
          return _context.abrupt("return", moduleRtn);
        case 322:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
}();

module.exports = createRevive;
