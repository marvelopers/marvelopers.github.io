---
title: "redux-toolkit"
date: 2020-12-11
category: react
tags: [redux, redux-toolkit ]
draft: false
layout: post
---

## about redux-toolkit

1. 목적 : 스토어 설정, 상태에 포함된 내용, 리듀서 빌드 방법 등을 처리하는 것
2. 탄생 배경 : Redux store의 복잡함, 많은 패키지 추가 구성을 원함, 보일러플레이트 지원을 요구함
3. Redux Toolkit을 사용해야 하는 이유 : 더 쉽고 빠르게 코드를 작성할 수 있다. 유지보수하기 쉽게 만들어준다.

#### 포함된 항목
Redux Toolkit
configureStore() : reducer를 자동으로 결합
createReducer() : switch문 대신에 자동으로 immer library를 사용
createAction() : action creator 제공
createSlice() : 자동 감속 기능의 세트, 슬라이스 이름, 초기 상태 값을 받아들이고 액션 제작자와 작업 유형 슬라이스 감속기를 생성한다.

### 키워드 
Simple (스토어 설정, 리듀서 생성, immer 업데이트 로직 ), Opinionated (), Powerful (불변 업데이트 로직을 작성하고 전체 상태 슬라이드를 자동으로 생성) , Effective (적은 코드로 더 많은 작업을 수행)
