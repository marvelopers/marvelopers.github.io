---
title: "[CSS] GlobalStyle"
date: 2021-12-02
category: front
tags: [frontend, CSS, ResetCSS, styled-components]
draft: false
layout: post
---


## GlobalStyle 

모든 브라우저에서 동일한 화면을 구현하기 위해서는 Reset CSS 작업이 필수적입니다. React 프로젝트에서는 브라우저마다 적용되어 있는 default 스타일을 일괄적으로 reset 시켜주기 위해서 GlobalStyle을 설정합니다. GlobalStyle에는 normalize뿐만 아니라 폰트 등 전역 스타일을 정의합니다. styled-components의 createGlobalStyle를 사용해 아래와 같이 설정하면 됩니다. 


```
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;  
  }

  body {
    overflow-x: hidden;
  }

`
export default GlobalStyle

```

### Mobile을 위한 GlobalStyle 요소

보통 프론트엔드 작업은 PC 환경에서 진행됩니다. 웹뷰 작업을 하더라도 PC 크롬의 모바일 모드에서 작업을 하게되는데요. 컴퓨터에서 작업을 완료하고 모바일 기기에서 화면을 열면 폰트나 스타일이 깨져 있는 경우가 발생하는데요. 이런 경우는 GlobalStyle에 몇가지 요소를 추가해 해결할 수 있습니다. 

특정 브라우저에서만 나타나는 현상들이 많이 때문에 비표준 속성을 사용합니다. 비표준 속성은 벤더 프리픽스를 붙여 사용하면 됩니다. 

```
-webkit /* 크롬, 사파리, 오페라 신버전 */
-moz 100%; /* 파이어폭스 */
-ms /* IE */
```

#### text-size-adjust

일부 모바일 기기나 태블릿에서 폰트 사이즈가 변형되는 현상을 잡아주는 속성입니다. 
none, auto, % 등으로 설정할 수 있습니다.

```
-webkit-text-size-adjust: 100%; 
-moz-text-size-adjust: 100%; 
-ms-text-size-adjust: 100%; 
```

#### text-size-adjust

일부 모바일 기기나 태블릿에서 폰트 사이즈가 변형되는 현상을 잡아주는 속성입니다. 
none, auto, % 등으로 설정할 수 있습니다.

```
-webkit-text-size-adjust: 100%; 
-moz-text-size-adjust: 100%; 
-ms-text-size-adjust: 100%; 
```


#### font-smoothing

폰트 렌더링 시, 텍스트의 가장자리를 부드럽게 만들어주는 앤리 앨리어싱을 사용하는 속성입니다.

```
-webkit-font-smoothing: antialiased;
```
 
#### safe-area

아이폰X 이후 출시 된 기종부터는 노치 영역까지 커버하기 위해 safe-area 속성을 적용합니다.

```
// iOS 11.0 버전
--safe-area-inset-top: constant(safe-area-inset-top);
--safe-area-inset-bottom: constant(safe-area-inset-bottom);

// iOS 11.2 버전 이상
--safe-area-inset-top: env(safe-area-inset-top);
--safe-area-inset-bottom: env(safe-area-inset-bottom);
```