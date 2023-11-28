'use strict';

document.addEventListener('DOMContentLoaded', function(){

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

const str = 'Hello Javascript!!!';
const array = ['🍔','🍟','🌭','🍿','🍖','🍙','🍚','🍜'];

const resultStr = str.split('').reverse().join('');
const resultArray = array.slice
console.log(resultStr);
console.log(resultArray);




});