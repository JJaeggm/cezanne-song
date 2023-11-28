'use strict';

document.addEventListener('DOMContentLoaded', function() {

    {
    const fruits = ['apple', 'orange', 'banana'];

    const result = fruits.join('');

    console.log(result);
    }
    

    // 문자열을 배열로 반환

    // {
    //     const foods = '🍕,🍔,🍟,🌭,🍿';

    //     const result = foods.split(',').join('');

    //     console.log(result);
    // }

    // 배열을 역순으로 처리

    // {
    //     const foods = '🍕,🍔,🍟,🌭,🍿';
    //     const result = foods.split(',').join('').split(' ').reverse();

    //     console.log(result);

    // }

    // 배열에서 첫 번째와 두 번째를 제외한 나머지 배열로 반환
    {
        const foods = '🍕,🍔,🍟,🌭,🍿';
        const result = foods.slice(2);
        console.log(result);
    }

    {
        const array1 = ['🍕,🍔,🍟,🌭,🍿'];
        const array2 = ['🚗', '🚓', '🚕', '🛺', '🚙']

        const result = array1.concat(array2);

        console.log(result);
    }

    // 두 개의 배열을 하나의 배열로 반환
    {
        const array1 = ['🍕,🍔,🍟,🌭,🍿'];
        const array2 = ['🚗', '🚓', '🚕', '🛺', '🚙']
        const array3 = ['🚗', '🚓', '🚕', '🛺', '🚙']

        const result = array1.concat(array2, array3);

        console.log(result);
    }

    // class
    {
    class Student {
        constructor(name, age, enrolled, score) {
            this.name = name;
            this.age = age;
            this.enrolled = enrolled;
            this.score = score;
        }
    }
    const students = [
        new Student('A', 29, true, 45),
        new Student('B', 28, false, 80),
        new Student('C', 30, true, 90),
        new Student('D', 40, false, 66),
        new Student('E', 18, true, 88),
    ];

    
    console.log(students);


    {
        // 처음 발견 된 90점인 학생
        const result = students.find(student => student.score === 90);
        // 90점인 학생이 여러명일 때
        //const result = students.filter(student => student.score === 90);
        console.log(result);
    }

    // 수업에 등록한 학생만 배열로 반환
    {
        const result = students.filter(student => student.enrolled)
        console.log(result);
    }

    // 점수만 배열로 반환
    {
        const result = students
        .map(student => student.score)
        .sort((a, b) => a - b);
        console.log(result);
    }

    // 모든 학생들의 평균 점수를 구하자

    {
        
    }

    }


});



