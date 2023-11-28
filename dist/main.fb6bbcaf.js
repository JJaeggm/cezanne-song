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
})({"js/main.js":[function(require,module,exports) {
'use strict';

document.addEventListener('DOMContentLoaded', function () {
  // 15. 문서 객체 모델
  // - 넓은 의미 : 브라우저가 HTML 페이지를 인식하는 방식
  // - 좁은 의미 : document 객체와 관련된 객체의 집합
  // - 문서 객체 모델을 상요하면 HTML 페이지에 태그를 추가, 수정, 제거

  // 15-1 문서 객체 모델 조작하기
  // - 문서 객체를 조합해서 만드는 전체적인 형태
  // - 문서 객체를 조작하는 작업은 매우 복잡하다.
  // - jquery와 같은 라이브러리를 사용하면 조금 쉬워진다.
  // - react와 같은 프레임워크를 사용하면 좀 더 수월해진다.

  // 15-1-1 DOMContentLoaded 이벤트
  // - 주의 : 오탈자가 있더라도 오류를 나타내지 않는다. (스크립트 실행 X)
  // - HTML 문서는 위에서 아래로 순차적으로 실행
  // - innerHTML 태그는 HTML 코드를 자바스크립트로 조작할 수 있다.
  // - 문서를 다 읽고 난 후 스크립트를 실행한다.

  // document.addEventListener('DOMContentLoaded', function(){
  //     const h1 = (text) => `<h1>${text}</h1>`;
  //     document.body.innerHTML = h1El('1번째 실행함수');

  //     // --------------

  //     function h1Test(text) {
  //         const inText = `<h1>${text}</h1>`
  //         return inText;
  //     }
  //     document.body. innerHTML += h1Test('DOMContentLoaded 이벤트 발생');

  // });

  // // 15-2 문서 객체 가져오기
  // // - document.body 코드를 사용하면 body 요소를 읽어 들일 수 있다.
  // // - 이외에도 HTML 문서에는 head, title 요소 등 많은 요소가 있다.

  // document.addEventListener(`DOMContentLoaded`, function(){
  //     console.log(document.body);
  //     console.log(document.head);
  //     console.log(document.title);

  // ES6 이전 버전

  //     // - body 안의 요소에 접근하려면
  //     const idEl = document.getElementById('box');
  //     const classEls = document.getElementsByClassName('inBox');
  //     const tagEls = document.getElementsByTagName('h1');
  //     const nameAttr = document.getElementsByName('id');

  //     console.log(idEl);
  //     console.log(classEls);
  //     console.log(tagEls);
  //     console.log(nameAttr);

  //     idEl.style.backgroundColor = 'orange';
  //     classEls[0].style.color = 'orange';
  //     tagEls[0].style.backgroundColor = 'orange';
  //     nameAttr[0].style.backgroundColor = 'red';

  // ES6 이후 문법

  //     const ulEl = document.querySelector('ul');
  //     const liEls = ulEl. querySelectorAll('li');
  //     const liElsAll = document.querySelectorAll('ul li');

  //     console.log(ulEl);
  //     console.log(liEls);
  //     console.log(liElsAll);

  //     ulEl.style = 'border : 1px solid blue; color : red;'
  //     liEls[0].style.backgroundColor = 'royalblue';

  //     // liEls 요소 전체 글자색을 blue로 변경

  //     for (let i = 0; i < liEls.length; i++) {
  //         liEls[i].style.color = 'blue';
  //     }

  //     for(let i in liEls) {
  //         liEls[i].style.color = 'red';
  //     }

  //     Array.forEach(list => {
  //         list.addEventListener('mouseEnter', (){})

  //     });
  // });

  //  javascript에서 id명을 직접 연결해서 사용할 수 있다.
  // 그러나 이렇게 사용하는 것은 지양한다.

  // document.addEventListener('DOMContentLoaded', function(){

  //     //15-3 글자 조작하기
  //     // - innerHTML : 입력된 문자열을 HTML형식으로 적용
  //     // - textContent : 입력된 문자열을 그대로 문자로 적용

  // });

  // {
  //     const box1 = document.getElementById('box1');
  //     const box2 = document.querySelector('#box2');
  //     const header = document.querySelector('.header');

  //     console.log(box1, box2, header);

  //     box1.innerHTML = `<h1 style="color : royalblue;">Hello Element!!</h1>`
  //     box2.textContent = `<h1 style="color : royalblue;">Hello Element!!</h1>`

  //     const title = 'Hello Javascript!!';

  //     header.innerHTML += `
  //         <div class="inner">
  //             <h1 style="
  //                 width: 300px;
  //                 line-height: 100px;
  //                 text-align: center;
  //                 ">
  //             </h1>
  //         <div class="nav" style="
  //             width: 800px;
  //             float: left;
  //             ">
  //         </div>
  //             <h1><a href="#">${title}</a></h1>
  //             <div class="nav">
  //                 <ul class="gnb">
  //                     <li><a href="#">menu1</a></li>
  //                     <li><a href="#">menu2</a></li>
  //                     <li><a href="#">menu3</a></li>
  //                     <li><a href="#">menu4</a></li>
  //                 </ul>
  //             </div>
  //         </div>

  //     `

  // }

  // 15-4 속성 조작하기
  // - 문서 객체의 속성을 조작할 때 사용
  // - setAttribute : 속성을 추가
  // - getattribute : 속성을 추출

  // {
  //     const listImg = document.querySelectorAll('.rect');
  //     console.log(listImg);

  //     const data = listImg[0].getAttribute('src');
  //     console.log(data);

  //     // for(let i = 0; i < listImg.length; i++) {
  //     //     listImg[i].setAttribute('src','https://picsum.photos/200/300');
  //     // }

  //     listImg.forEach((rect, index) => {
  //         const widthImg = (index + 1) * 100;
  //         const src = `https://picsum.photos/${widthImg}/300`;
  //         rect.src = src;
  //     });

  // }

  // {
  //     const google = document.querySelector('a');
  //     google.addEventListner('click', function(event){
  //         event.preventDefault();
  //         google.href = "http://google.com";
  //     });

  // }

  // 15-5 스타일 조작하기
  // - 문서 객체 스타일을 조작할 때 사용
  // - style 속성 사용
  // - css 속성을 그대로 사용
  // - 단 "-"은 사용할 수 없다.

  // {
  // const h1El = document.getElementsByTagName('h1');
  // console.log(h1El);

  // h1EL[0].style.color = 'orange';
  // h1IL[0].style.borderTopWidth = '1px';
  // h1IL[0].style.borderTopStyle = 'solid';
  // h1IL[0].style.borderTopColor = 'orange';

  // h1EL[0].style = 'background-color : royalblue, font-size : 50px'; color : "#fff";

  // - 25개 태그를 사용하여 검은색으로 흰색으로 변화되는 그라데이션을 표현해보세요.

  // const divEls = docoument.getElementsByTagName('div');

  // const divEls = docoument.querySelectorAll('div');

  // divEls.forEach( (div, idx) => {
  //     // console.log(div, idx, ele);
  //     const val = idx * 10;
  //     div.style.height = '10px';
  //     div.style.backgroundColor = `rgb(${val}, ${val}, ${val})`;
  //     });

  // 15-6 문서 객체 생성하기
  // - 지금까지 문서 객체를 읽어들여 조작하는 방법을 사용했음.
  // - 앞으로는 문서 객체를 생성하는 방법 -> document.createElement() 메소드
  // - 주의: 객체를 생성했다고 해서 끝나는 것이 아니다.
  // - 어디에 추가할지 정해야 한다. -> (요소).appendChild()

  // const h3El = document.createElement('h3');
  // h3El.textContent = 'Hello Insert Element!!';

  // console.log(h3El);

  // 15-7 문서 객체 이동하기
  // - 문서 객체의 이동에는 appendChild() 메소드를 사용
  // - 문서 객체의 부모는 언제나 하나여야 한다. 
  // - 예로 1초마다 요소가 이동하는 코드를 작성

  // const divFirst = document.querySelector('#first');
  // const divSecond = document.querySelector('#second');
  // const newH1El = document.createElement('h1');
  // newH1El.textContent = '이동하는 h1 태그';

  // newH1El.style.color = 'royalblue';

  // const toFirst = () => {
  //     divFirst.appendChild(newH1El);
  //     setTimeout(toSecond, 3000);
  // };
  // const toSecond = () => {
  //     divSecond.appendChild(newH1El);
  //     setTimeout(toFirst, 10000);
  // };

  // toFirst();

  // 15-8 문서 객체 제거
  // - removeChild() 메소드
  // - parentNode.removeChild()

  // const clear = document.querySelector('#clear');
  // const h1 = clear.querySelector('h1');

  // setTimeout( () => {
  //     clear.removeChild(h1);
  //     h1.parentNode.removeChild(h1)

  // }, 3000); 

  // 15-9 문서 객체 또다른 예제
  // setTimeout (할 일, 시간);
  // 동작은 지정한 시간이 되면 할 일 실행
  // 할 일 = function()
  // 3초
  // 실제로 할 일 = 실행할 동작

  // ---------------------------------------
  // 서버 만들기 맛보기

  // const timer = setTimeout(function() {
  //     console.log(`Hello!!!`);
  // }, 3000);

  // clearTimeout(timer);

  // if(true) {

  // } else {

  // }

  // const setInterval    = setInterval(function() {
  //     console.log(`Hello!!!`);
  // }, 3000);

  // clearTimeout(timer);

  // 

  //----------------------------------------

  // 꼭 알고 있어야 하는 명령어들, 기능들....
  //  false를 나타내는 것 -> 0, 'empty', null, undefined, NaN
  //  for, 추가된 내용 -> for in, for of, forEach
  //  array, object -> 데이터
  // function()
  // arrow function();

  // if(!0) {
  //     alert('true');
  // } else {
  //     alert('false');
  // }

  var str = 'Hello Javascript!!!';
  var array = ['🍔', '🍟', '🌭', '🍿', '🍖', '🍙', '🍚', '🍜'];
  var resultStr = str.split('').reverse().join('');
  var resultArray = array.slice;
  console.log(resultStr);
  console.log(resultArray);
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50229" + '/');
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map