'use strict';

document.addEventListener('DOMContentLoaded', function() {

// class
// - 객체를 효율적이고 안전하게 만들기 위해 만들어진 문법

const students = [];
students.push(
    {
    이름 : '구름',
    국어 : 87,
    영어 : 98,
    수학 : 88,
    과학 : 90
    });

students.push(
    {
    이름 : '별이',
    국어 : 92,
    영어 : 98,
    수학 : 96,
    과학 : 90
    });

students.push(
    {
    이름 : '겨울',
    국어 : 87,
    영어 : 98,
    수학 : 88,
    과학 : 90
    });

students.push(
    {
    이름 : '바다',
    국어 : 87,
    영어 : 98,
    수학 : 88,
    과학 : 90
    });

    console.log(JSON.stringify(students, null, 2));

    //출력 -> 단순한 연산을 통해 결과 반환
    let output = '이름\t총점\t평균\n';
    for(const s of students) {
        const sum = s.국어 + s.영어 + s.수학 + s.과학;
        const average = sum / 4;
        output += `${s.이름}\t${sum}\t${average}\n`;
    };

    console.group(output);

    // 객체를 처리하는 함수
    function getSumOf(student) {
        return student.국어 + student.영어 + student.수학 + student.과학
    };

    function getAverageOf(student) {
        return getSumOf(student) / 4
    };

    for(const s of students) {
        output += `${s.이름}\t${getSumOf(s)}점\t${getAverageOf(s)}점}`
    }
    console.log(output);
    
    //메소드로 추가 구성
    for(const student of students) {
        student.getSum = function() {
            return this.국어 + this.영어 + this.수학 + this.과학
        }
        student.getAverage = function() {
            return this.getSum() / 4
        }
    }

    for (const s of students) {
        output += `${s.이름}\n${s.getSum()}점\t${s.getAverage()}점\n`
    }
    console.log(output);


    // 생성자 함수
    function createStudent(이름, 국어, 영어, 수학, 과학) {
        this.국어 = 국어;
        return {
            // 속성을 선언
            이름 : 이름,
            국어 : 국어,
            영어 : 영어,
            수학 : 수학,
            과학 : 과학,

            // 메소드
            getSum() {
                return this.국어 + this.영어 + this.수학 + this.과학
            },
            getAverage() {
                return this.getSum() / 4
            },
            toString() {
                return `${this.이름}\t${this.getSum()}점\t${this.getAverage()}점\n`
            }
        }
    };

    const studentList = [];

    studentList.push(createStudent
        (
        '구름',
        87,
        98,
        88,
        90
        ));
    
    studentList.push(createStudent
        (
        '별이',
        92,
        98,
        96,
        90
        ));
    
    studentList.push(createStudent
        (
        '겨울',
        87,
        98,
        88,
        90
        ));
    
    studentList.push(createStudent
        (
        '바다',
        87,
        98,
        88,
        90
        ));

        


});



