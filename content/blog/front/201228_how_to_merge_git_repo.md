---
title: "git repository merge"
date: 2020-12-28
category: front
tags: [ git, repositories, merge ]
draft: false
layout: post
---

처음 git를 사용하면서 어떤 기준으로 repository를 만들어야 하는지 몰라 새로운 책을 보기 시작하거나 기존의 repository와 성격이 조금만 다르면 새로운 repository를 만들었다. 

그렇게 1년 정도 git을 사용하고나니 안에 무슨 내용이 담겨 있는지 파악하지 못하는 repository가 많아졌다.

더 이상 사용하지 않거나 내용이 중첩되는 repositories를 정리하려고 git 저장소 병합하는 방법에 대해 알아보았다.

## how to merge git repositories

이 방법은 저장소의 수정 이력까지 함께 가져오고 싶은 경우에 사용하면 된다.

순수하게 코드만 필요하고 수정이력이 필요하지 않다면, git를 병합하는 것보다는 코드를 옮기는 것이 간단하다.

```
$cd ~/git/project01

$git remote add project02
$git fetch project02
$git merge --allow-unrelated-histories project02/master
$git remote remove project2
$git commit -m 'Merge project2 into project1'
$git push
```

## 주의 : 파일 경로 설정

병합 시 conflict이 나지 않도록, 작업 전repository 내부 파일 이름을 확인하고 중복되는 이름은 수정해야 한다.

