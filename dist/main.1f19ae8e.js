// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"main.js":[function(require,module,exports) {
var string = "/*\n* \u4E00\u8D77\u7528CSS\u753B\u4E2A\u718A\u672C\u718A\u5427\uFF0C\u5148\u505A\u4E00\u4E9B\u51C6\u5907\u5DE5\u4F5C\uFF0C\u5982\u9700\u8282\u7701\u65F6\u95F4\u8BF7\u6309\u53F3\u4FA7\u52A0\u901F\u952E\n*/\n*{\n  box-sizing:border-box;\n  margin:0;\n  padding:0;\n  outline:none;\n}\n*::before,\n*::after{\n  box-sizing:border-box;\n}\n#html{\n  background:#f1c1c5; \n}\n#kumamon{\n  position:relative;\n}\n/*\n * \u6B63\u5F0F\u5F00\u59CB\uFF0C\u9996\u5148\uFF0C\u9700\u8981\u753B\u4E00\u4E2A\u4E0D\u90A3\u4E48\u5F3A\u58EE\u7684\u9ED1\u718A\u8EAB\u4F53\n */\n.body{\n  position:absolute;\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  left:50%;\n  transform:translateX(-50%);\n  margin-top:80px;\n  width:320px;\n  height:240px;\n  border-radius:60% 60% 0 0;\n  background:black;\n}\n/*\n * \u63A5\u4E0B\u6765\uFF0C\u5B89\u4E0A\u4E24\u4E2A\u8033\u6735\n */\n.ear{\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  position:absolute;\n  height:80px;\n  width:80px;\n  left:50%;\n  margin-left:-40px;\n  border-radius:50%;\n  background:black;\n  top:-10px;\n}\n.ear .inner{\n  height:50px;\n  width:50px;\n  border-radius:50%;\n  background:white;\n}\n.ear.left{\n  transform:translateX(-140px);\n}\n.ear.right {\n  transform:translateX(140px);\n}\n/*\n * \u8001\u7237\u7237\u540C\u6B3E\u7709\u6BDB\uFF0C\u5B89\u6392\n */\n.eyebrow{\n  position:absolute;\n  top:20px;\n  width:36px;\n  height:36px;\n  left:50%;\n  margin-left:-18px;\n  background:white;\n  border-radius:50%;\n}\n.base,.minus{\n  position:absolute;\n  border-radius:50%;\n}\n.base{\n  top:0;\n  width:36px;\n  height:36px;\n  background:white;\n}\n.minus{\n  top:6px;\n  width:40px;\n  height:40px;\n  background:black;\n  left:50%;\n  margin-left:-20px;\n}\n.eyebrow.left{\n  transform:translateX(-60px);\n}\n.eyebrow.right{\n  transform:translateX(60px);\n}\n/*\n * \u4E4C\u6E9C\u6E9C\u7684\u9ED1\u773C\u73E0 \u548C\u4F60\u7684\u7B11\u8138\n */\n.eye{\n  position:absolute;\n  width:64px;\n  height:64px;\n  left:50%;\n  margin-left:-32px;\n  border-radius:50%;\n  background:white;\n  top:50px;\n}\n.pulp{\n  position:absolute;\n  top:50%;\n  left:50%;\n  transform:translate(-50%, -50%);\n  width:10px;\n  height:40px;\n  background-color:black;\n  border-radius:5px/12px;\n  animation:blink 1s infinite;\n}\n.eye.left{\n  transform:translateX(-64px);\n}\n.eye.right{\n  transform:translateX(64px);\n}\n/*\n * \u600E\u4E48\u4E5F\u96BE\u5FD8\u8BB0\u4F60 \u5BB9\u989C\u7684\u8F6C\u53D8\uFF0C\u9F3B\u5B50\u548C\u5634\u4E00\u8D77\u8F6C\u53D8\u5566\n */\n.nosemouth{\n  position:absolute;\n  left:50%;\n  transform:translateX(-50%);\n  top:120px;\n  width:160px;\n  height:120px;\n  border-radius:80px/60px;\n  background-color:white;\n}\t\n.nose{\n  position:absolute;\n  left:50%;\n  transform:translateX(-50%);\n  top:5px;\n  width:50px;\n  height:36px;\n  border-radius:50px/24px 24px 48px 48px;\n  background-color:black;\n}\n.mouth{\n  position:absolute;\n  left:50%;\n  transform:translateX(-50%);\n  top:50px;\n  width:120px;\n  height:30px;\n  border-radius:70px/10px 10px 30px 30px;\n  background-color:black;\n}\n/*\n* \u6700\u540E\u4E0A\u4E2A\u816E\u7EA2\uFF0C\u8FD9\u53EA\u4E11\u4E11\u7684\u718A\u672C\u718A\u9001\u7ED9\u4F60\n*/\t\t\n.cheek{\n  position:absolute;\n  top:50%;\n  width:100px;\n  height:100px;\n  left:50%;\n  margin-left:-50px;;\n  border-radius:50%;\n  background: #ef2b2d;\n}\n.cheek.left{\n  transform:translateX(-138px);\n}\n.cheek.right{\n  transform:translateX(138px);\n}\n@keyframes blink {\n  35%{\n    height:24px;\n  }\n  50%{\n    height:.5px;\t\t\n  }\n  65%{\n    height:24px;\n  }\n}\n";
var player = {
  n: 1,
  id: undefined,
  time: 100,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  init: function init() {
    player.ui.demo.innerText = string.substring(0, player.n);
    player.ui.demo2.innerHTML = string.substring(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > string.length) {
      window.clearInterval(player.id);
      return;
    }

    player.ui.demo.innerText = string.substring(0, player.n);
    player.ui.demo2.innerHTML = string.substring(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{}],"C:/Users/admin/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "65027" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/admin/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map