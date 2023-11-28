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
})({"js/2023-11-16.js":[function(require,module,exports) {
'use strict';

document.addEventListener('DOMContentLoaded', function () {
  //  // 4. 심볼 (Symbol)
  //  // 4-1 property key
  //  // - 키와 값은 문자형이나 숫자형으로 지정이 가능
  //  // - 접근할 때도 문자열로 접근이 가능

  //  const obj = {
  //     1 : '1입니다',
  //     false : '거짓'
  //  }

  //  console.log(Object.keys(obj));

  //  // 4-2 Symbol
  //  // - 유일한 식별자로 지정할 때 사용
  //  // - 동일한 값이 반환되지 않는다.
  //  // - 선언할 때마다 다른 값으로 반환

  //  const a = Symbol();
  //  const b = Symbol();
  //  console.log(a,b);
  //  console.log(a===b);

  //  // - 심볼은 유일한 값이 보장된다.
  //  // - 참조 문자열을 넣어도 심볼에는 영향을 미치지 않는다.
  //  // - 내부에 문자열은 참조값, 설명글
  //  const aa = symbol('event');
  //  const bb = symbol('event');

  //  console.log(aa, bb)
  //  console.log(aa==bb)
  //  console.log(aa===bb)

  //  // 4-2-1 Symbol을 객체의 키로 사용
  //  // - object methods -> keys, values, entries, fromEntries
  //  // - Symbol은 건너 뛰고 저장
  //  const id = Symbol('id')
  //  const object = {
  //     name : 'Mike',
  //     age : 25,
  //     [id] : 'myid'
  //  }

  //  console.log(object);
  //  console.log(Object.keys(object));

  // // 4-2-2 전역 Symbol
  // // - Symbol은 같은 이름이라 하더라도 전혀 다른 객체이다.
  // // - Symbol.for() 하나를 생성한 뒤 키를 통해 같은 심볼을 공유
  // // - 이름이 같으면 같은 객체로 지정할 때가 있다.
  // // - 하나의 심볼만 보장 받을 수 있다. 없으면 만들고 있으면 가져오기 때문

  // const id1 = Symbol.for('id');
  // const id2 = Symbol.for('id');

  // console.log(id1 === id2);

  // // 숨겨진 심볼을 보려면
  // console.clear();
  // console.log(object);
  // console.log(Object.getOwnPropertySymbols(object));

  // 5. Number와 Math
  // 5-1 toStriong()
  // - 숫자와 수학에 대한 자료형
  // - 10진수 -> 2진수, 8진수, 16진수 반환

  // const num = 10;
  // console.log(num.toString(16));

  // 5-6 소수점 자릿수 표현
  // - 요구사항 : 소수점 둘째자리까지 표현(셋째 자리 반올림)
  // let userfloat = 30.12345;
  // let convert = Math.round((userfloat*100)/100);

  // console.log(convert);

  // 5-6 ?
  // - NaN인지 여부를 판단할 때 사용

  // let number = Number('x')

  // 문자열을 숫자로 반환

  var num1 = '10px';
  var num2 = 'ff3';
  console.log(parseInt(num1));
  console.log(parseInt(num2));
  console.log(parseInt(num2, 16));

  // 5-8 parseFloat()
  // - parseInt와 동일하지만 부동소수점으로 반환

  var num3 = '10.55%';
  var num4 = 'f5.55';
  console.log(parseFloat(num3));
  console.log(parseFloat(num4));

  // 5-9 Math.random()
  // - 0 ~ 1 까지의 무작위 숫자를 생성

  console.log(Math.random());
  console.log(Math.random());
  console.log(Math.random());
  console.log(Math.random());
  console.log(Math.random());
  console.log(Math.random());

  // - 1부터 100까지의 임의 숫자를 출력
  var result = Math.floor(Math.random() * 100) + 1;

  // 5-10 Math.max(), Math.min()
  // - 최대값, 최소값

  var result2 = Math.max(1, 4, 50, 100, -500);
  var result3 = Math.min(1, 4, 50, 100, -500);
  console.log(result2, result3);
  window.addEventListener('resize', function (e) {
    console.log(window.innerHeight);
    console.log(window.outerHeight);
  });

  // 5-11 기타 메소드

  console.log(Math.abs(-1)); // 절대값
  console.log(Math.pow(2, 10)); // 거듭제곱값
  console.log(Math.sqrt(16)); // 루트 값
});
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51482" + '/');
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
      });

      // Enable HMR for CSS by default.
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
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/2023-11-16.js"], null)
//# sourceMappingURL=/2023-11-16.9569a6d9.js.map