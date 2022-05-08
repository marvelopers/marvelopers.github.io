---
title: "about react"
date: 2021-01-10
category: react
tags: [react, Redux-Saga]
draft: false
layout: post
---

### react

페이스북에서 개발하고 관리하는 UI 라이브러리입니다. UI 기능만을 제공하고 있어 전역상태관리, 라우팅, 빌드 시스템 등은 별도의 구축이 필요합니다. 렌더링 성능을 위해 가상돔을 사용합니다.

리액트는 **변경된 상태값을 기준으로 UI를 자동으로 업데이트** 해줍니다. 가상돔은 렌더과 커밋 단계를 거쳐 UI를 업데이트 합니다. 렌더 단계에서 이전 UI 상태를 기반으로 변경 필요한 최소 집합을 계산하고 이를 커밋합니다.
함수형 프로그래밍을 적극적으로 사용하는 리액트는 **순수함수와 불변변수**를 사용합니다.

- render는 순수함수로 state가 변하지 않는다면 항상 같은 값을 반환합니다.
- state는 불변변수로 관리하며 상태값을 수정할 때는 *새로운 객체*를 생성합니다.

### 리액트에서 바벨과 웹팩, CRA

- 바벨 : jsx문법으로 작성된 코드를 createElement 함수를 호출하는 코드로 변환해줍니다.
- 웹팩 : js로 만든 프로그램을 배포하기 좋은 형태로 묶어주는 도구입니다. ESM(ES6의 모듈시스템), commonJS를 모두 지원합니다.

CRA(create-react-app)을 사용하면 별도의 설정없이 바벨과 웹팩을 사용할 수 있습니다. 바벨과 웹팩에 대한 이해도가 낮다면 CRA로 프로젝트를 생성하는 것이 안전합니다.

```sh
cra
 ├─ README.md
 ├─ node_modules
 ├─ package.json :
 ├─ public
 │     ├─ favicon.ico
 │     └─ index.html
 └─ src
       ├─ App.css
       ├─ App.js
       ├─ App.test.js : jest 기반의 테스트 프레임워크
       ├─ index.css
       ├─ index.js
       ├─ logo.svg
       └─ serviceWorker.js
```
