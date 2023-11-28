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
})({"js/2023-11-09.js":[function(require,module,exports) {
'use strict';

document.addEventListener('DOMContentLoaded', function () {
  // --- 위로 삭제 금지~ ---

  // 16. 이벤트 활용
  // - 어떤 이벤트를 어떻게 사용할지를 먼저 기획해야 한다.
  // - 서버와 연동해서 사용하려면 node.js를 사용해야 한다.
  // - node.js 자체가 서버는 아니다.
  // - 여러분은 결국 next.js를 사용할 수밖에 없을 것이다.
  // - next.js는 react의 프레임워크이다.

  // 16-1 이벤트 모델
  // - 이벤트를 연결하는 방법
  // - addEvevtListener() -> 사용하는 것을 표준 이벤트 모델
  // - onKeyup 등의 이벤트를 사용하는 것을 고전 이벤트 모델
  // - on으로 시작하는 속성을 HTML 요소에 사용하는 형식 즉 인라인 이벤트 모델 

  // 16-2 키보드 이벤트 
  // - 키보드의 값을 입력 받아 그 결과를 숫자로 반환
  // - keydown : 키가 눌릴 때, 누르고 있을 때, 입력할 때
  // - keyup : 키보드에서 키가 떨어질 때(많이 사용)
  // - keypress : 키가 입력될 때, 아시아권 문자(조합 문자) 입력시 오류

  // const h1El = document.querySelector('h1');
  // const textArea = document.querySelector('textarea');

  // textArea.addEventListener('keypress', (event) => {
  //     console.log(event);
  //     console.log(event.keypress);

  //     const length = textArea.value.length;
  //     h1El.textContent = `입력된 글자 수: ${length}`;
  // });

  // code -> 입력한 키
  // keyCode -> 입력한 키를 나타내는 숫자 
  // altKey
  // ctrlKey
  // shiftKey

  // function print(event) {
  //     let output = '';
  //     output += `alt : ${event.altKey}<br/>`;
  //     output += `ctrl : ${event.ctrlKey}<br/>`;
  //     output += `shift : ${event.shiftKey}<br/>`;
  //     output += `code : ${typeof(event.code) !== 'undefined' ? event.code : event.keyCode}`;
  // }

  // document.addEventListener('keydown', print);
  // document.addEventListener('keyup', print);

  // 키로 특정 문자열 출력
  // - 이처럼 키보드 이벤트를 처리할 때는 switch문을 활용하는 경우가 많다.

  // const h1Star = document.querySelector('.star');
  // h1Star.style.position = 'absolute';

  // let [x, y] = [0,0];
  // const block = 20;
  // const print = () => {
  //     h1Star.style.left = `${x * block}px`;
  //     h1Star.style.top = `${y * block}px`;
  // }
  // print();

  // // 별을 이동시키는 기능
  // const [left, up, right, down] = [37,38,39,40];
  // document.body.addEventListener('keydown', (event) => {
  //     console.log(event.keyCode);

  //     switch (event.keyCode) {
  //         case left : x -= 1;
  //         break;

  //         case left : y -= 1;
  //         break;

  //         case left : x += 1;
  //         break;

  //         case left : y += 1;
  //         break;
  //     }
  //     print();
  // })

  // 16-3. 글자 입력 양식 이벤트
  // html -> input, button, textarea, select...

  // 입력 양식을 활용해서 inch를 cm단위로 변환하는 프로그램

  // const inputEl = document.querySelector('input')
  // const btnEl = document.querySelector('button')
  // const spanEl = document.querySelector('span')

  // console.log(inputEl, btnEl, spanEl);

  // btnEl.addEventListener('click', () => {
  //     const inch = Number(inputEl.value);

  //     if (isNaN(inch)) {
  //         spanEl.textContent = '숫자를 입력해주세요!';
  //         return; 
  //     }

  //     const cm = inch * 2.54;
  //     spanEl.textContent = `${cm}cm이빈다`
  //     spanEl.style = 'color : red; font-size : 20px';
  // });

  // // 이메일 형식 유효성 검사
  // const emailEl = document.querySelector('.text');
  // const stateEl = document.querySelector('.state');

  // console.log(emailEl, stateEl)

  // const isEmail = (value) => {
  //     return (value.indexOf('@') > 1) && (value.split('@')[1].indexOf('.' > 1));
  // }

  // emailEl.addEventListener('keyup', function(event) {
  //     const value = event.currentTarget.value;
  //     const value1 = this.value;
  //     console.log(value1);

  //     if (isEmail(value)) {
  //         stateEl.textContent = `이메일 형식입니다. ${value}`;
  //     } else {
  //         stateEl.textContent = `이메일 형식이 아닙니다. ${value}`;

  //     }
  // })

  // 드롭다운 목록 활용(select)
  // 

  // const selectEl = document.querySelector('select');
  // const spanEl = document.querySelector('span');

  // console.log(selectEl, spanEl);

  // selectEl.addEventListener('change', (event) => {
  //     const optionEl = event.currentTarget.options;
  //     console.log(optionEl);
  //     const index = event.currentTarget.options.selectedindex;
  //     console.log(index);

  //     spanEl.textContent = optionEl[index].textContent;
  // });

  // 드롭다운 여러 개의 목록 선택 (select)
  // selectEl.addEventListener('change', (event) => {
  //     const optionEl = event.currentTarget.options;
  //     const list = [];
  // })

  // // 선택이 반복되는 작업
  // for (const option of optionEl) {

  //     if(option.selected) {
  //         list.push(option.textContent);
  //     }
  // }
  // spanEl.textContent = list.join(',');

  // cm를 여러 개의 단위로 변환하는 프로그램
  // mm, m, 

  // let nowNumber = 0;
  // let editNumber = 10;

  // const selectEl = document.querySelector('select');
  // const inputEl = document.querySelector('[type=text]');
  // const spanEl = document.querySelector('p span');

  // console.log(selectEl, inputEl, spanEl);

  // const calculate = () => {
  //     spanEl.textContent = (nowNumber * editNumber).toFixed(2);
  // };

  // selectEl.addEventListener('change', (e) => {
  //     // event.target은 부모로부터 이벤트가 위임되어 발생하는 자식의 위치, 내가 선택한 요소 
  //     // currentTarget은 이벤트가 부착된 요소

  //     const optionEl = e.currentTarget.options;
  //     const idx = e.currentTarget.options.selectedIndex;

  //     // 항목을 선택 -> value값을 추출
  //     editNumber = Number(optionEl[idx].value);
  //     calculate();

  //     inputEl.addEventListener('keyup', (e) => {
  //         nowNumber = Number(e.currentTarget.value);
  //         calculate();
  //     })
  // })

  // let [timer, timeId]  = [0, 0];
  // const h1El = document.querySelector('h1');
  // const chkEl = document.querySelector('input');

  // chkEl.addEventListener('change', (event) => {
  //     // console.log(event);
  //     if(event.currentTarget.checked) {
  //         console.log('checked!!');
  //         // 체크상태
  //         timeId = setInterval(() => {
  //             timer += 1;
  //             h1El.textContent = `${timer}초`
  //         }, 1000)
  //     } else {
  //         console.log('is not checked!!');
  //         clearInterval(timeId);
  //     }
  // })

  // const spanYear = document.querySelector('address span');
  // spanYear.textContent = new Date().getFullYear();

  // class student {
  //     constructor(name, age) {
  //         this.name = name;
  //         this.age = age;
  //         this.methods = () => {
  //             console.log(this.name, this.age);
  //         }
  //     }
  // }

  // const output = document.querySelector('#output');
  // const radios = document.querySelectorAll('[name=get]');
  // console.log(output, radios);

  // radios.forEach((radio) => {
  //     radio.addEventListener('change', (event) => {
  //         const current = event.currentTarget;
  //         if (current.checked) {
  //             output.textContent = `좋아하는 애완동물은? ${current.value}`; 
  //         }
  //     })
  // });

  // const imgs = document.querySelectorAll('img');
  // console.log(imgs);

  // imgs.forEach((img) => {
  //     img.addEventListener('contextmenu', (event) => {
  //         event.preventDefault();
  //     });
  // });

  // const aTag = document.querySelector('a');
  // aTag.addEventListener('click', (event) => {
  //     event.preventDefault();
  //     this.location.href = 'http://naver.com';
  // })

  // let state = false;
  // const checkBox = document.querySelector('[type=checkbox]');
  // console.log(checkBox);

  // checkBox.addEventListener('change', (event) => {
  //     state = event.currentTarget.checked;
  //     console.log(state);
  // });

  // const link = document.querySelector('a');
  // link.addEventListener('click', (e) => {
  //     if(state) {
  //         e.preventDefault();
  //     }
  // });

  // sessionStorage
  // localStorage
  // - 웹 브라우저에서 기본적으로 제공하는 객체
  // - 사용데이터를 저장
  // - localStorage.getItem(키) : 저장된 값 추출, 없으면 undefined
  // - localStorage.setItem(키, 값) : 값을 저장
  // - localStorage.removItem(키) : 특정 키의 값을 제거
  // - localStorage.clear() : 저장된 모든 값 제거

  // const pEl = document.querySelector('p');
  // const inputEl = document.querySelector('input');
  // const btnEl = document.querySelector('button');

  // const savedValue = localStorage.getItem('input');

  // if (savedValue) {
  //     inputEl.value = savedValue;
  //     pEl.textContent = `이전 실행 때의 마지막 값 : ${savedValue}`;
  // }

  // inputEl.addEventListener('keyup', (event) => {
  //     const value = event.currentTarget.value;

  //     localStorage.setItem('input', value);
  // });

  // btnEl.addEventListener('click', () => {
  //     localStorage.clear();
  //     inputEl.value = '';
  // }); 

  // ---- 면접 때 자주 물어보는 것 ----
  // 1. 변수 호이스팅, TDZ (Temporal Dead Zone)
  // 변수 선언 var, let, const 
  // - 선언 단계 -> 초기화 -> 할당

  // 1-2 변수 활용
  // - 한 번 선언한 변수는 다시 선언할 수 있다? 
  // let과 const는 못 함. var는 가능함.

  // - 선언하기 이전에 호출 가능하다? 가능.

  // {
  //     console.log(number);
  //     var number = 50;

  //     console.log(number2);
  //     let number2 = 100;

  //     console.log(number3);
  //     const number3 = 100;
  // }

  // - 호이스팅 : 스코프 내부에서 변수 선언은 최상위에 선언된 것처럼 실행(TDZ)

  // - let도 호이스팅이 된다. 
  // {
  // let age = 100;
  // function test(){
  //     console.log(age);
  //     let age = 50;
  //     }
  // }
  // test();

  // const test2 = function() {
  //     console.log('hahaha!!!');
  // }

  // 1-3 스코프
  // - var : 함수 스코프
  // - let, const : 블록 스코프 
  // if, for, forEach, while...

  // 2. 생성자 함수
  // 2-1 객체 리터럴과 생성자 함수
  // - 객체의 정의는 객체 리터럴과 생성자 함수로 정의
  // - 일반적으로 객체는 블록을 사용한다.
  // - 생성자 함수는 new 연산자를 사용
  // - 생성자 함수의 첫 글자는 대문자로 사용
  // - 생성자 함수 내부에 this 키워드를 사용

  // 3. Object methods와 Computed property
  // 3-1 Computed property
  // - 객체 내부에서 키 대신 변수 내에 할당된 값으로 대체
  // - 연산된 결과를 키로 지정하여 사용도 가능

  // let a = 'firstName';

  // let obj = {
  //     name : 'Gilldong',
  //     [a] : 'Mallsoon',
  //     [3 + 6] : 'Soonhe'
  // }
  // console.log(obj);

  // - 어떤 내용이 키로 들어올지 모르는 상황
  // function makeObject(key, value) {
  //     return {
  //         [key] : value
  //     }
  // };

  // const object = makeObject('familyName', 'Hong');

  // console.log(obj);

  // const nameObject = makeObject('familyName', 'Hong');
  // console.log(nameObject);

  // const nameObject1 = makeObject('familyName', 'Kim');
  // console.log(nameObject1);

  // 3-2 Object methods
  // 3-2-1 Object.assign()
  // - 객체를 복제하여 사용하고자 할 때
  // - 객체의 원본은 훼손하지 않는다.

  // const newObject = nameObject;

  // console.log(newObject);
  // newObject.address = 'Seoul';
  // console.log(newObject);
  // console.log(nameObject);

  // const newObj = Object.assign({}, nameObject);
  // console.log(newObj);
  // newObj.lastName = 'Gilldong'
  // console.log(newObject);

  // const newNameObject = Object.assign({gender : 'm'}, nameObject, nameObject1);

  // console.log(newNameObject);

  // 3-2-2 Object.keys();
  // - 객체의 키를 배열로 반환
  var objArray = Object.keys(newNameObject);
  console.log(objArray);

  // 3-2-3 Object.values()
  // - 객체의 값을 배열로 반환

  var objArrayValues = Object.values(newNameObject);
  console.log(objArrayValues);

  // 3-2-4 Object.entries()
  // - 객체의 키와 값을 배열로 반환

  var objectArrayKeyValues = Object.entries(newNameObject);
  console.log(objectArrayKeyValues[0][0][0]);

  // 3-2-5 Object.fromEntries()
  // - 배열을 객체의 키와 값으로 반환

  var arrayObject = Object.fromEntries(objectArrayKeyValues);
  console.log(arrayObject);
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50408" + '/');
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/2023-11-09.js"], null)
//# sourceMappingURL=/2023-11-09.26580843.js.map