'use strict';

document.addEventListener('DOMContentLoaded', function() {

    // class 생성
    // - class <클래스 이름> {}
    // - 클래스는 대문자로 시작
    // - 클래스로 생성한 객체를 인스턴스, 객체
    // - 데이터를 생성할 때는 new 클래스 명


    // 클래스를 선언
    class Student {
        
    }
    // 학생을 선언
    const student = new Student();

    // 학생 리스트를 선언
    const students = [
        new student(),
        new student(),
        new student(),
        new student(),
    ]

    // 생성자 
    // - 객체를 생성할 때 호출되는 함수
    class Student2 {
        constructor() {

        }
    }

    // 생성자 함수에 속성을 추가
    class Student3 {
        constructor(이름, 국어, 영어, 수학, 과학) {
            this.이름 = 이름;
            this.국어 = 국어;
            this.영어 = 영어;
            this.수학 = 수학;
            this.과학 = 과학;
        }
        getSum() {
            return this.국어 + this.영어 + this.수학 + this.과학
        }
        getAverage() {
            return this.getSum() / 4
        }
        toString() {
            
        }
    };
    
    const studentList = [];
    studentList.push(new Student3('구름', 87, 98, 88, 90));
    studentList.push(new Student3('별이', 92, 98, 96, 88));
    studentList.push(new Student3('겨울', 76, 96, 94, 86));
    studentList.push(new Student3('바다', 98, 52, 98, 92));

    console.log(studentList);

    let output = '이름\t총점\t평균\n';
    for(const s of studentList) {
        output += s.toString();
    }
    console.log(output);

    // 클래스의 고급(상속)
    class Rectangle {
        constructor(width, height) {
            this.width = width;
            this.height = height;
        }
    }

    // 사각형의 둘레를 구하는 메소드
    getPerimeter() {
        return 2 * (this.width + this.height)
    }

    // 사각형의 넓이를 구하는 메소드
    getArea() {
        return this.width * this.height;
    }

    const rectangle = new Rectangle(10,20);

    console.log('사각형의 둘레', +reactangle.getPerimeter());
    console.log('사각형의 넓이', +reactangle.getArea());
    

    // 정사각형 클래스
    class Square {
        constructor(length) {
            this.length = length;

        }

        // 정사각형의 둘레를 구하는 메소드
        getPerimeter() {
            return 4 * this.length;
        }
        // 정사각형의 넓이를 구하는 메소드
        getArea() {
            return this.length * thes.length;
        }
    };

    const square = new Square(10);
    console.log('정사각형의 둘레 : ' +square.getPerimeter());
    console.log('정사각형의 넓이 : ' +square.getArea());

    

});



