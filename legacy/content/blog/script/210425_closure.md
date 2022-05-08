---
title: "클로저(Closure)"
date: 2021-04-25
category: script
tags: [javascript, Closure, Lexical-scoping]
draft: false
layout: post
---

클로저는 함수를 일급객체로 사용하는 함수형 프로그래밍 언어에서 사용되는 중요한 특성입니다.
closure라는 영어단어는 사전적으로 '닫혀있음', '폐쇄성', '완결성' 등의 의미를 가지고 있습니다.

### 클로저

외부 함수보타 중첩함수가 더 오래 유지되는 경우, 중첩함수는 이미 생명주기가 종료된 외부 함수의 변수를 참조할 수 있습니다. 이를 클로저라고 부릅니다.

```
function makeFunc() {
  var name = "Closure";
  function displayName() {
    alert(name);
  }
  return displayName;
}
makeFunc();
```

#### Lexical-scope

자바스크립트 엔진은 함수가 어디서 호출했는지가 아니라 함수를 어디서 정의했는지에 따라 상위 스코프를 결정합니다. 이를 렉시컬 스코프(정적 스코프)라고 하며, 함수는 내부 슬롯에 자신이 정의된 환경인 상위스코프의 참조를 저장합니다.

#### 클로저를 사용하는 이유

클로저는 특정함수에게만 상태변경을 허용해 상태를 안전하게 변경하고 유지할 수 있게 해줍니다. 자바같은 몇몇 언어들은 메소드를 프라이빗으로 선언할 수 있는 기능을 제공하지만, 자바스크립트는 언어적으로 이러한 기능을 지원하지 않습니다. 클로저를 사용하면 private method와 비슷하게 구현할 수 있습니다.

#### 클로저 해제

식별자에 기본형 데이터인 null이나 undefined 등을 할당해 메모리 해제 코드를 추가하면 식별자 함수 참조를 끊을 수 있습니다.

#### 클로저 활용 사례

1. 콜백 함수 내부에서 외부 데이터를 사용하고자 할 때
2. <span>접근 권한 제어(정보은닉)</span>
   정보 은닉을 통해 모듈간의 결합도를 낮추고 유연성을 높일 수 있습니다. 클로저를 이용해 함수 외부에 제공하고자 하는 정보들만 return하고 내부에서만 사용할 정보들은 return 하지 않으면 접근 권한 제어가 가능합니다.
3. <span>부분 적용 함수 </span>
   디바운스(debounce) : 단 시간내에 중복되는 동일 이벤트가 발생할 경우, 마지막에 발생한 이벤트만 처리하는 것. scroll, wheel, mousemove, resize 등에 적용.

   ```
   const debounce = (eventName, func, wait) => {
    let timeout = null;
    return (event) => {
      let self = this;
      clearTimeout(timeout);
      timeout = setTimeout(func.bind(self, event), wait);
      }
   }
   ```

4. <span>커링 함수 </span>
   여러 개의 인자를 받는 함수를 하나의 인자만 받는 함수로 나눠서 순차적으로 호출될 수 있게 체인 형태로 구성한 것을 말합니다. 한 번에 하나의 인자만 전달합니다.

   ```
   const getInformation = (baseUrl) => {
     return (path) => {
       return (id) => {
         return fetch(`${baseUrl}${path}/${id}`)
       }
     }
   }

   const getInformation = baseUrl => path => id =>  fetch(`${baseUrl}${path}/${id}`)
   ```

   ```
   <!-- Redux Middleware -->

   const logger = store => next => action => {
     return next(action);
   }

   const thunk = store => next => action => {
     return typeof action === function
            ? action(dispatch, store.getState)
            : next(action)
   }
   ```
