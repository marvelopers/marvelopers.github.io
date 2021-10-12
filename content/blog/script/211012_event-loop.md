---
title: "이벤트 루프(Event Loop)"
date: 2021-10-12
category: script
tags: [javascript, nodejs, event-loop]
draft: false
layout: post
---

자바스트립트는 이벤트 루프(Event Loop)에 기반한 concurrency model을 가지고 있습니다. 이벤트 루프는 코드 실행, 이벤트 수집 및 처리, 대기 중인 하위작업 실행 등을 담당합니다. 싱글 쓰레드 기반의 자바스크립트는 이벤트 루프를 사용해 비동기 방식으로 동시성을 지원합니다.

#### Event Loop

1. <span>Heap: </span> 메모리 할당이 발생
2. <span>Call Stack</span>실행된 코드의 환경을 저장하는 자료구조, 함수 호출시 call stack에 push
3. <span>Callback Queue </span> 이벤트의 callback 함수 추가
