---
title: "Redux-Saga"
date: 2020-12-22
category: react
tags: [redux, Redux-Saga]
draft: false
layout: post
---

## Redux-Saga

saga는 action에 대한 listener역할을 한다. 미들웨어로 action에서 store 상태 변경 프로세스 중간에 비동기 로직을 관리한다.

### 사용목적
사이드 이팩트를 더 쉽게 관리하고 효과적으로 실행하며, 더 쉽게 테스트하고 에러를 처리할 수 있게 만들어준다.
- action=>saga => action=>reducer


