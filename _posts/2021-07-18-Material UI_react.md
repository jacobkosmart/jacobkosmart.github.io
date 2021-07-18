---
title: "Material UI for react"
excerpt: "Material UI"

categories:
  - UI

toc: true
toc_sticky: true
last_modified_at:
---

---



## 1.설치

> [Material UI official site](https://material-ui.com/){:target="\_blank"}


```bash
$ yarn add @material-ui/core
```

## 2.Button

> [Materail UI Button](https://material-ui.com/components/buttons/){:target="\_blank"}



  - button 에 variant 설정후에 색 설정 클릭 시 alert 메세지창 뜨기
```jsx
// in App.js

// import Button
import Button from '@material-ui/core/Button';


function App() {
  return (
    <div className="App">
      <Button 
      variant="contained" 
      color="secondary" 
      onClick={() => alert('hello')}>
      Hello world!
      </Button>
    </div>
  )
}
```

- 링크 버튼 만들기 

```jsx
function App() {
  return (
    <div className="App">
      <Button 
      href="https://naver.com"
      variant="contained" 
      color="secondary">
      Hello world!
      </Button>
    </div>
  )
}
```

- 버튼 사이즈 조정

```jsx
function App() {
  return (
    <div className="App">
      <Button 
      size="small" // medium, large 있음
      variant="contained" 
      color="secondary">
      Hello world!
      </Button>
    </div>
  )
}
```

- disable 버튼 (클릭이 안되게끔 만들기)

```jsx
function App() {
  return (
    <div className="App">
      <Button 
      size="small" 
      disabled
      variant="contained" 
      color="secondary">
      Hello world!
      </Button>
    </div>
  )
}
```

- 버튼에 개별적인 css 적용하기 (폰트사이즈 20 적용하기)

```jsx
function App() {
  return (
    <div className="App">
      <Button 
      size="small"
      style={{
        fontSize: 20
      }}
      disabled
      variant="contained" 
      color="secondary">
      Hello world!
      </Button>
    </div>
  )
}
```


- 버튼에 icon 추가 하기

    - icon material 설치

    ```bash
    $ yarn add @material-ui/icons
    ```


```jsx
// import saveIcon 

import SaveIcon from '@material-ui/icons/Save';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button
          startIcon={<SaveIcon />} // 버튼 시작지점에 아이콘 넣기
          endIcon={<SaveIcon />} // 버큰 끝나는 지점에 아이콘 넣기
          size="large"
          variant="contained"
          color="secondary">
          Hello world!
        </Button>
      </header>
    </div>
  );
}
```

- 버튼 그룹 만들기 (공통되는 사항이 있으면 그룹핑해주는것)

```jsx
// import ButtonGroup
import { ButtonGroup } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonGroup variant="contained" color="primary" size="large">
          <Button
            startIcon={<SaveIcon />}>
              Save
          </Button>
          <Button
            startIcon={<DeleteIcon />}>
              Discard
          </Button>
        </ButtonGroup>
      </header>
    </div>
  );
}
```
![image](https://user-images.githubusercontent.com/28912774/126060546-785f10a0-e1f4-4334-9fc4-112b45c5f43a.png)


## 3.CheckBox






🔶 🔷 📌 🔑

## Reference

- Material UI official site - [https://material-ui.com](https://material-ui.com){:target="\_blank"}

