'use strict';

// document.addEventListener('DOMContentLoaded', function(){

// const str = 'Hello Javascript!!!';
// const array = ['🍔','🍟','🌭','🍿','🍖','🍙','🍚','🍜'];

// const resultStr = str.split('').reverse().join('');
// const resultArray = array.slice
// console.log(resultStr);
// console.log(resultArray);

    // const data = [
    //     {name : 'kim', age : 30, address : 'daejeon'},
    //     {name : 'hong', age : 50, address : 'daejeon'},
    //     {name : 'gill', age : 25, address : 'daejeon'},
    //     {name : 'kang', age : 38, address : 'daejeon'}
    // ];

    // for(let i = 0; i < data.length; i++) {
    //     console.log(data[i].name);
    // };

    // for(let i in data) {
    //     console.log(data[i].name);
    // };

    // // for(let ageData of data) {
    // //     console.log(ageData);
    // // };

    // data.forEach((nameList) => {
    //     console.log(nameList);
    // });

    // const ulEl = document.createElement('ul');
    // const liEl = document.createElement('li');

    // data.map((name) => {
    //     liEl.textContent += name.name;
    //     ulEl.innerHTML += 
    // })
    // console.log(liEl);



// document.addEventListener('DOMContentLoaded', function(){
    // 15-9 이벤트 설정하기
    // - 모든 문서 객체는 생성, 클릭, 마우스를 위에 올리거나 할때
    // - addEventListener()
    // - 이벤트 리스너, 이벤트 핸들러

    // h1 요소 안에 있는 텍스트를 버튼을 클릭할 때 마다
    // 카운트를 적용하려면?

        // let count = 0;
        // const counter = document.querySelector('.counter');
        // const btnCounter = document.querySelector('.btnCounter');
        // console.log(counter, btnCounter);

        // btnCounter.addEventListener('click', () => {
        //     count++;
        //     console.log(count);
        //     counter.textContent = count;
        // });

        // function clickHandler() {
        //     let count = 0;
        //     const counter = document.querySelector('.counter');
        //     count++;
        //     console.log(count)
        //     counter.textContent = count;
        // }

        // window.addEventListener('scroll', () => {
        //     const scrollResult = window.scrollY;
        //     console.log(scrollResult);

        //     const divBox = document.querySelector('div');

        //     if(scrollResult > 500) {
        //         divBox.style.backgroundColor = 'yellow';
        //         divBox.style.left = '800px'
        //     }
        // })

// });

window.addEventListener('mousemove', (event) => {
    console.log(event);
    const box = document.querySelector('.box');
    const leftPosition = event.clientX;
    const topPosition = event.clientY;
    
})