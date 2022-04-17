개발자가 생각해야 할
프론트엔드 =클리이언트 사이드

- 브라우저 • 모던, 레거시, → 벤더 프리픽스
- o-bor s
  -ms
  -Moz
- WebKit

서비스워커

HTML의 dom 이라 불리는 운서 객체 모델은 페이지와 프로그랑 을 연결하는 기본적인 구조와 않은 관련이 있음으로
CSS → 취약한 이유. → 모두전역범위, 스타일선부 자식요소에 상속. 우선순위에 따라 우열어있음. 확장성이 부족함

설계의 필요성..
품질, 비용, 일정
가능한 비그를 포항하지 않도록 개발하고 쉽게 수정할 수 있도록 하는 것이중요. → 안정성과 유지보수성
제대로 설계한다는 것은 코르의 수명을 늘리는 것과 관계있어. 제품의 내구력향상에 크케기여

리액트
Declarative 선언적, component -based 킹포넌트기반,

상태 U 는 철저하게 관리하며, 확장성도 지니고, 최대한 재사용성까지 갖누는 컴포넌트 설계방법. → 컴포넌트 기반 설계는 웹프는트엔드의 표순사양으로 확상

Nodes. → v8.jaraschipt engine 에서 동작.
모듈방식. 기본적인 기능을 코어오률로 가지면서 서드파티 오률도 동작하게 할수있음..
Nom 설치옵션: 핸드폰 갤러리 사진장조

바벨
@ babel/ cli → cli 본체, @ babel / preset-env → ecma 지원환경에 따른 플러그인 설정 프리셋패키지
O babelrc: 트랜스파일 설정을 기술한파일 p.68

Render 렌더링이 옥석인 메서드, 몇번이든 호출가능. 가능한 한 부작용이 없는 순수항수

UNIX 철학

웹팩.

Webpack is a module bundle. Its main purpose is to bundle. JavaScript. Files for usage in a browser, yet it is also capable of transit owning. Binding, or packing just about any resuouse or asset.
웹팩은 오듈빈들러. 주된목적은 브라우저에서 사용할수 있는 javascirt 파일을 벌들하는 것이지만, 이뿐안 아니다. 다양한 리소스나 에셋을변환, 번들링, 패키징 할수 있습니다.

• 웹팩에서는 다양한 종류의 파일을 모듈로 다루기위해 로더를 장치로 두었습니다. 로더가 존새와서 유연성이 크게 향상되었습니다.

Babel-loader.@batel/preset-env, Basel F core @batelpeset-reatt.
로더는 읽어들인 오률파일에 작용하지만, 플러그인은 번드파일에 작용합니다.

서비 사이드 렌더링

클라이언트 방식으로 처리된 index.html 의 경우 브라우저는 다음과같이 비어있는 HTML 태Xe bundles 파일을 받고 실행을 통해 화면에 내용물을 채우게됩니다.
서비사이드 렌더링의 경우, 브라우저는 이이 him 처리가 끝난 상태의 데이터를 받게됩니다.
Window 객체나 document 개체는 브리우저 에서 실행 되어야 접근할 수 있는 전역적인 것. 이를 직접 상조하는 조직이 있다면 구연방법을 변경해야 하나

구체적으로 프론트엔드가 다루는 데이터: 퐁
