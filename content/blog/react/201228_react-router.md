---
title: "react-router 부가기능 정리"
date: 2020-08-05
category: react
tags: [react-router, history, withRouter]
draft: false
layout: post
---

## history

라우터로 사용된 컴포넌트에 match, location 과 함께 전달되는 props 중 하나로, 이 객체를 통해 컴포넌트 내에 구현하는 메서드에서 라우트 API를 호출 할 수 있다. 



```jsx
import React from 'react';

const history () => {
  const handleGoBack = () => {
    history.goBack();
  }
  const handleGoto = (url) => {
    history.push(url);
  }
  const handleBlock = () => {
    unblock = history.block
  }

  return (
    <>
      <button onClick={handleGoBack()}>home</button>
      <button onClick={handleGoto('/')}>home</button>
    </>
  )
}
```

### withRouter

HOC(higher-order Component)로 라우트를 사용하지 않은 컴포넌트도 match, location, history 객체에 접근 할 수 있게 만들어준다. 컴포넌트를 export 할 때 withRouter 함수로 감싸주면 사용할 수 있다.

```jsx
import React from 'react';
import withRouter from 'react-router-dom';

const  useWithRouter= ({history, match, location}) => {
  return(
    <>
      <h2> withRouter</h2>
    </>
  )
}

export default withRouter(useWithRouter);

```

## Switch

not found 페이지도 구현할 수 있다. 

```jsx
import React from 'react';

const App = ({history, match, location}) => {

  return(
    <>
      <Switch>
          <Route path={"/"} 
            render={(match, location)=><MainPage match={match} history={history} />}
          />
          <Route path={"/blog/:id"} 
            render={(match)=><BlogPage id={match.params.id} history={history}/>}
          />
          <Route path={"/error/"} 
            render={(match, location)=><ErrorPage match={match} />}
          />
          <Route render={(match, location)=><div>잘못된 접근입니다.</div>}
          />
      </Switch>
    </>
  )
}
```

## NavLink
`link`에서 사용하는 경로가 일치하는 경우 스타일 혹은 CS클래스를 적용할 수 있는 컴포넌트다.

```jsx
import React from 'react';
import { NavLink, Route } from 'react-router-dom';

const Nav = () => {
  const activeStyle = {
    font-weight: 700
  };

  return (
    <div>
      <ul>
        <li><NavLink activeStyle={activeStyle} to={"/front"}>Front-end</NavLink></li>  
        <li><NavLink activeStyle={activeStyle} to={"/script"}>JS/TS</NavLink></li>
      </ul>
    </div>
  )
}

```

참고 : 리액트를 다루는 기술