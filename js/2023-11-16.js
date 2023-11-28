'use strict';

document.addEventListener('DOMContentLoaded', function() {

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


const num1 = '10px';
const num2 = 'ff3';

console.log(parseInt(num1));
console.log(parseInt(num2));
console.log(parseInt(num2, 16));

// 5-8 parseFloat()
// - parseInt와 동일하지만 부동소수점으로 반환

const num3 = '10.55%';
const num4 = 'f5.55';
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
const result = Math.floor(Math.random() * 100) + 1;


// 5-10 Math.max(), Math.min()
// - 최대값, 최소값

const result2 = Math.max(1,4,50,100,-500);
const result3 = Math.min(1,4,50,100,-500);

console.log(result2, result3);

window.addEventListener('resize', (e) => {
    console.log(window.innerHeight);
    console.log(window.outerHeight);
})


// 5-11 기타 메소드

console.log(Math.abs(-1)); // 절대값
console.log(Math.pow(2, 10)); // 거듭제곱값
console.log(Math.sqrt(16)); // 루트 값


});



