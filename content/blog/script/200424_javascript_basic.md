---
title: "자바스크립트 기초"
date: 2020-04-24
category: script
tags: [javascript, react, react, react, react]
draft: false
layout: post
---

## 1.JavaScript
객체(object) 기반의 스크립트 언어, 구문은 Java 및 C언어를 기반으로 한다.
대부분의 프로그래밍 언어와 달리 입출력 개념이 없음!! 
객체프로토 타입을 사용한 객체 지향 프로그래밍 + 함수형 프로그래밍 지원.
주로 웹 브라우저에 사용되나, Node.js와 같은 프레임 워크를 사용하면 서버 프로그래밍도 가능
HTML의 내용, 속성, 스타일을 변경할 수 있음.

JS표준 : ECMA(European Computer Manufacuurers Association)
현재 최신 표준 :  ECMAScript 6(2015년 발표)

- HTML : 웹의 내용 작성
- CSS : 웹 디자인
- JS : 웹의 동작 구현

### 1.1 특징 
1. 객체 기반의 스크립트 언어
2. 동적이며, 타입을 명시할 필요가 없는 인터프리터 언어 (컴파일 작업 없이 소스코드 실행 가능)
3. 객체 지향형과 함수현 프로그래밍 둘 다 가능

### JA vs JS

- JAVA : 컴파일 언어 , 타입 명시 , 클래스 기반의 객체 지향 언어
- JavaScript : 인터프리터 언어, 타입명시X, 프로토타입 기반의 객체지향 언어

***

## 2.JavaScript 문법 
- 리터럴(literal) : 직접 표현되는 값 그 자체
숫자 문자열 불리언 리터럴 

- 식별자(identifier) : 변수나 함수의 이름, 영문자, 숫자, _, $만 사용가능. unicode문자셋 사용.

- 키워드(keyword) : 미리 예약된 단어, 식별자로 사용가능.

***

## JavaScript출력

1.window.alert() 메소드
가장 간단하게 데이터를 출력할 수 있는 방법.
브라우저와는 별도의 대화상자를 띄워 데이터를 전달.

```
function alertDialogBox(){
    alert("확인 버튼을 누르면 다음 작업이 가능합니다.");
}
```

2. HTML DOM요소를 이용한  innerHTML 프로퍼티

document객체의 getElementById()나 getElementByTagName()등의 메소드를 통해 HTML 요소를 사용한다.

```
const str = document.getElementById("text");
str.innerHTML = "문장을 변경합니다." 

```

3. decument.write()메소드

document.write()메소드는 웹 페이지가 로딩될 때 실행됨.
웹 페이지에 가장 먼저 데이터를 출력, 테스트나 디버깅을 위해서 사용.

웹 페이지에 모든 내용이 로딩된 후에 document.write()메소드가 실행될 경우, 
페이지 내에 먼저 로딩된 모든 데이터를 지우고 자신의 데이터를 출력함.

```
document.write(4*5);
```

4. console.log()메소드

console.log()메소드는 웹 브라우저의 콘솔을 통해 데이터를 출력.
콘솔화면을 통한 출력의 경우 비교적 자세한 사항이 출력되어, 디버깅하는데 적합.
웹 페이지에 가장 먼저 데이터를 출력, 테스트나 디버깅을 위해서 사용.

```
console.log(4*5);
```

***

## JavaScript 적용방법 

1. 내부 자바스크립트 코드로 적용
```
document.getElementById("text").innerHTML = "여러분을 환영합니다."
```
<head>와 <body> 둘 다 삽입가능하며 동작상의 차이는 없음.


2. 외부 자바스크립트 코드로 적용

.js 확장자를 사용해서 저장. 
적용하고자 하는 모든 페이지에 script 태그를 사용해 외부 자바스크립트 파일을 포함.
HTML코드와 자바스크립트 코드를 읽기도 편해지고 유지보수도 쉬워짐.
웹 브라우저가 파일을 미리 읽어 웹 페이지의 로딩 속도 빨라짐.

```
<head>
    <meta charset="UTF-8">
    <title>JavaScript Apply</title>
    <scritpt src ="/examples/media/ex.js">
</head>
```

***
#### 기본타입
타입 (data type)이란 프로그램에서 다룰 수 있는 값의 종류를 의미.
여러가지 형태의 타입을 미리 정의하여 제공하고 있으며, 이것을 기본 타입이라고 함.
자바스크립트의 기본 타입은 원시 타입과 객체 타입으로 구분.

원시타입 : 숫자(number), 문자열(string), 불리언(boolean), 심볼(symbol), null,undefined

객체 타입 : 객체(Object)는 자바스크립트의 기본 타입, 
여러 프로퍼티나 메소드를 같은 이름으로 묶어놓은 일종의 집합체
- 함수(Function), 배열(Array), 날짜(Date), 정규식(RegExp)    
```
const num = 10;
const myName = "김서현"
const str;  //undefined
```
```
const man = {name : "Mark", age:28 }; //객체의 생성
document.getElementById("result").innerHTML = man.name+"는 "+man.age+"살 입니다."
```

#### 타입변환
자바스크립트의 변수는 타입이 정해져 있지 않아, 같은 변수에 다른 타입의 값을 다시 대입할 수 있음.

묵시적 타입변환(implicit type conversion)
다른 타입의 값이 오면, 자동으로 타입을 변환.
자바스크립트에서 주로 사용되는 변환법.
```
1-"문자열" // NaN 
```

#### 명시적 타입변환(explicit type conversion)
```
Number("10")  //문자열 10을 숫자10으로 명시적 타입변환
```

#### 숫자를 문자로 변환
가장 간단한 방법은  string()함수를 사용하는 것.
null, undefined를 제외하면 toString()메서드를 사용할 수도 있음.

숫자 객체는 문자열로 변환하는 메소드를 별도로 제공함.
1. toExponential() : 정수 부분은 1자리, 소수 부분은 입력받은 수만큼 e표기법을 사용하여 숫자를 문자로 변환.
2. toFixed() : 소수 부분을 입력받은 수만큼 사용하여 숫자를 문자로 변환함.
3. toPrecision() : 입력받은 수만큼 유효 자릿수를 사용하여 숫자를 문자열로 변환함.

#### 불리언 값을 문자열로 변환
```
String(true);
false.toString();
```

#### 날짜를 문자열이나 숫자로 변환
1. getDate() : 일자를 숫자로 반환.
2. getDay() : 요일을 숫자로 반환.
3. getFullYear() : 연도를 4자리 숫자로 반환.
4. getMonth() : 월을 숫자로 반환.
5. getTime() : 1970년 1월 1일부터 현재까지의 시간을 밀리초 단위의 숫자로 반환.
6. getHours() : 시를 숫자로 반환.
7. getMinutes() : 분을 숫자로 반환.
8. getSeconds() : 초를 숫자로 반환. 
9. getMilliseconds() : 밀리초를 숫자로 반환.

#### 문자열을 숫자로 변환
1. perseInt() : 문자열을 파싱하여 정수를 반환.
2. parseFloat() : 파싱하여 부동 소수점 수를 반환. 

#### 불리언을 숫자로 변환
```
Number(true); //1
Number(false); // 0
```

***
연산자
산술연산자
대입연산자
증감연산자
대입연산자
비교연산자
논리연산자
비트연산자
문자열 결합 연산자
삼항연산자
쉼표연사자
delete 연산자
typeof 연산자
instanceof 연산자 : 
void 연산자 : 피연산자로 값의 타입과 상관없이 undefined 값만을 반환. 

***

## 제어문(control flow statements)
조건문
if문
삼항 연산자에 의한 조건문
```
표현식?반환값1:반환값2
```
switch문
반복문
while문
```
```
for문 
```
```
기타 제어문
continue : 루프의 나머지 부분을 건너뛰고, 바로 다음 표현식으로 넘어감.
break : 반복문을 완전히 종료시키고, 다음 실행문으로 이동.

## 배열
element : 배열을 구성하는 각각의 값
index : 값의 위치를 가리키는 숫자

js에서 배열의 특징
1. 배열의 타입이 고정되어 있지 않아, 같은 배열의 element끼리의 타입이 서로 다를 수 있음.
2. 배열 요소의 인덱스가 연속적이지 않아도 되며, 특정 배열 요소가 비어있을 수 있음
3. Array객체로 다뤄짐.

배열의 생성하는 방법은 다음과 같다. 
```
const arr = new Array(element1, element2);
consr arr = Array(element1, element2);
const arr = [element1, element2];
```

배열의 참조 

## arrow 함수 
1. 매개변수가 하나인 경우 () 생략 가능
2. 함수의  body가 한줄이라면, {} return 생략 가능
```

const f1=(name)=>{
    return `Hello, ${name}`;
};
//매개변수가 하나인 경우
const f2 = name => `Hello, ${name}`;
```


# JavaScript

## JavaScript_base
# HTML
# CSS
