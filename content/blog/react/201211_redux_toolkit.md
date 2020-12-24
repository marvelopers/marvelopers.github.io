---
title: "redux-toolkit"
date: 2020-12-11
category: react
tags: [redux, redux-toolkit ]
draft: false
layout: post
---

## about Redux Toolkit

Redux 로직 작성을 위해 공식적으로 권장하는 방법이 Redux Toolkit이다.

1. 목적 : 스토어 설정, 상태에 포함된 내용, 리듀서 빌드 방법 등을 처리하는 것
2. 탄생 배경 : Redux store의 복잡함, 많은 패키지 추가 구성을 원함, 보일러플레이트 지원을 요구함
3. Redux Toolkit을 사용해야 하는 이유 : 더 쉽고 빠르게 코드를 작성할 수 있다. 유지보수하기 쉽게 만들어준다.

### 포함된 항목
Redux Toolkit

### configureStore()
reducer를 자동으로 결합. createStore()를 래핑,

```js
-import { createStore } from "redux";
+import { configureStore } from "@reduxjs/toolkit";

const store = createStore(counter); // Before
const store = configureStore({
  reducer : counter
}) // After
```

### createAction()
action creator 제공

```js
const increment = createAction('INCREMENT')
const decrement = createAction('DECREMENT')

function counter(state = 0, action){
  switch(action.type){
    case increment.type:
      return state + 1;
    case decrement.type:
      return state - 1;
    dafault:
      return state;
  }
}

const store = Redux.createStore(counter)

document.getElementById('increment').addEventListener('click', () => {
  store.dispatch(increment())
})
```

### createReducer()
switch문 대신에 자동으로 immer library를 사용한다. reducer는 초기 상태 값을 제공하고, 현재 액션과 관계없는 상태는 그대로 반환한다.

```js
const increment = createAction('INCREMENT');
const decrement = createAction('DECREMENT');

const counter = createReducer( 0 ,{
  [increment.type]: state => state + 1;
  [decrement.type]: state => state - 1;
})
```

#### createSlice() 
- 자동 감속 기능의 세트, 슬라이스 이름, 초기 상태 값을 받아들이고 액션 제작자와 작업 유형 슬라이스 감속기를 생성한다.

```js
const counterSlice = creatSlice({
  name: 'counter'.
  initialState: 0,
  reducers:{
    increment: state => state + 1,
    decrement: state => state - 1,
  }
})

const store = configureStore({
  reducer : counter
})

document.getElementById('increment').addEventListener('click', () => {
  store.dispatch(increment())
})
```

### 키워드 
Simple (스토어 설정, 리듀서 생성, immer 업데이트 로직 ), Opinionated (), Powerful (불변 업데이트 로직을 작성하고 전체 상태 슬라이드를 자동으로 생성) , Effective (적은 코드로 더 많은 작업을 수행)

### Adding Redux Toolkit to the Project

```js
  npm install @reduxjs/toolkit
  yarn add @reduxjs/toolkit
```