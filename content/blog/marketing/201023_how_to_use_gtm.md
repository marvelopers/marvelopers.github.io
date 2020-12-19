---
title: "React에서 GTM 스니펫 삽입하는 함수"
date: 2020-10-23
category: marketing
tags: [ga, gtm, GTM태그 삽입]
draft: false
layout: post
---

구글 공식 페이지에서 제공하는 가이드에 따르면, GTM 스니펫 코드를 홈페이지 <header> 영역에 추가하면 된다.
하지만, 홈페이지가 리액트를 사용해 구축되었을 경우 위와 같은 방법은 사용할 수 없다.

리액트에서 GTM 스니펫 코드를 삽입하는 기능의 함수는 다음과 같다. 

```
const Snippets = {
  tags: function (id) {

    if (!id) { console.log('GTM Id is required') }

    const iframe = `
      <iframe src="https://www.googletagmanager.com/ns.html?id=${id}&gtm_cookies_win=x"
        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>`

    const script = `
      (function(w,d,s,l,i){w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
        f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${id}');`

    return {
      iframe,
      script,
    }
  }
}
```