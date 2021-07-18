---
title: "Bootstrap v5.0"
excerpt: "Bootstrap"

categories:
  - UI

toc: true
toc_sticky: true
last_modified_at:
---

---

# Bootstrap v5.0

## 1.개요

- CSS 라이버리 중 가장 유명하고 널리 쓰이고 있습니다.

- 2021년 현재 기준 최신 버전 v5.0 가 release 되었습니다. (tree shaking 기능 추가됨)

> 공식 사이트 및 설치 방법 - [https://getbootstrap.com/docs/5.0/getting-started/introduction/](https://getbootstrap.com/docs/5.0/getting-started/introduction/){:target="\_blank"}

- Bootstrap 의 많은 요소들은 동적으로 움직이는 효과도 많기 때문에 JS code 및 Popper library 도 함께 설치 해줘야 합니다.

  - Bundle : JS 의 popper library 도 통합해서 같이 있는 코드

  - Separate : popper library 는 없는 버전 (프로젝트에 이미 설치 되있는 경우 이중 설치 방지)

![스크린샷, 2021-05-15 14-48-47](https://user-images.githubusercontent.com/28912774/118349625-ba440180-b58c-11eb-98bb-205f980a68ba.png)

## 2.버튼과 버튼 그룹

> [button 관련..](https://getbootstrap.com/docs/5.0/components/buttons/){:target="\_blank"}

- Bootstrap 의 가장 자주 쓰이는 버튼 기능 입니다.

- 기존에 CSS를 통해 만들 수 있는 버튼 디자인을 쉽게 할 수 있습니다.

```html
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<div class="btn btn-primary">ABC</div>
```

![image](https://user-images.githubusercontent.com/28912774/118349873-5ae6f100-b58e-11eb-8853-80413f525b22.png)

- 버튼들을 그룹화 시키면 하나의 이어지는 버튼으로 만들수 있습니다.

```html
<div class="btn-group">
  <button type="button" class="btn btn-primary">Primary</button>
  <button type="button" class="btn btn-secondary">Secondary</button>
  <button type="button" class="btn btn-success">Success</button>
  <div class="btn btn-primary">ABC</div>
  <div class="btn btn-outline-primary">ABC</div>
</div>
```

![image](https://user-images.githubusercontent.com/28912774/118349910-971a5180-b58e-11eb-87e7-92c0f566bbed.png)

## 3.드롭다운과 리스트

> [Dropdowns 자세히 보기](https://getbootstrap.com/docs/5.0/components/dropdowns/){:target="\_blank"}

```html
<div class="dropdown">
  <a
    class="btn btn-secondary dropdown-toggle"
    href="#"
    role="button"
    id="dropdownMenuLink"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Dropdown link
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
```

![image](https://user-images.githubusercontent.com/28912774/118350757-756f9900-b593-11eb-8340-99b78aec88d5.png)

> [listgroup 자세히 보기](https://getbootstrap.com/docs/5.0/components/list-group/){:target="\_blank"}

```html
<ul class="list-group">
  <li class="list-group-item list-group-item-action">An item</li>
  <li class="list-group-item list-group-item-action active">A second item</li>
  <li class="list-group-item list-group-item-action">A third item</li>
  <li class="list-group-item list-group-item-action">A fourth item</li>
  <li class="list-group-item list-group-item-action">And a fifth one</li>
</ul>
```

![image](https://user-images.githubusercontent.com/28912774/118351209-8a4d2c00-b595-11eb-9580-c0fbacedd82c.png)

## 4.양식(Forms)

> [Forms 자세히 보기..](https://getbootstrap.com/docs/5.0/forms/overview/){:target="\_blank"}

```html
<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input
      type="email"
      class="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    />
    <div id="emailHelp" class="form-text">
      We'll never share your email with anyone else.
    </div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" />
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

![image](https://user-images.githubusercontent.com/28912774/118352774-3135c600-b59e-11eb-8da3-c32ce28d71cc.png)

## 5.모달(Modal)

- 추가로 창이 열리면서 정보가 보여지는 기능을 말합니다

> [Modal 자세히 보기..](https://getbootstrap.com/docs/5.0/components/modal/){:target="\_blank"}

- Modal 에는 JS 와 DOM 연동하여 다양한 함수를 동적으로 사용할 수 있습니다.

![image](https://user-images.githubusercontent.com/28912774/118358006-c85b4780-b5b7-11eb-8f2e-69b7df59bf78.png)

- 예) modal 창이 열리면서 email input 에 바로 focus 될 수 있도록 만들기

```html
<script defer src="./main.js"></script>

<!-- Button trigger modal -->
<button
  type="button"
  class="btn btn-primary"
  data-bs-toggle="modal"
  data-bs-target="#exampleModal"
>
  Launch demo modal
</button>

<!-- Modal -->
<div
  class="modal fade"
  id="exampleModal"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Email address</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Password</label
            >
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1"
              >Check me out</label
            >
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
          Close
        </button>
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </div>
  </div>
</div>
```

```js
// in main.js
// Modal open 시 마우스가 Email address 에 마우스 커서가 놓이게 focus 하기

const emailInputEl = document.getElementById("exampleInputEmail1");
const modalEl = document.getElementById("exampleModal");

modalEl.addEventListener("shown.bs.modal", function () {
  // modal 이 보여 질때, 콜백 함수실행(email 칸의 ID 값)
  emailInputEl.focus();
});
```

![Peek 2021-05-15 20-01](https://user-images.githubusercontent.com/28912774/118358120-5df6d700-b5b8-11eb-9150-dd57ab4ff6e0.gif)

## 6.툴팁(Tooltips)

> [Tooltips 자세히 보기...](https://getbootstrap.com/docs/5.0/components/tooltips/){:target="\_blank"}

- 버튼을 hover 하게 되면 간단하게 말풍선 처럼 text 를 표시 할 수 있는 기능을 Tooltip 이라고 합니다.

- Tooltips are opt-in for performance reasons, so **you must initialize them yourself** (툴팁은 성능상의 이유로, 사용자가 직접 초기화 해서 사용해야 합니다.)

📌 **Tootip initialize**

```html
<script defer src="./main.js"></script>

<button
  type="button"
  class="btn btn-secondary"
  data-bs-toggle="tooltip"
  data-bs-placement="top"
  title="Tooltip on top"
>
  Tooltip on top
</button>
<button
  type="button"
  class="btn btn-secondary"
  data-bs-toggle="tooltip"
  data-bs-placement="right"
  title="Tooltip on right"
>
  Tooltip on right
</button>
<button
  type="button"
  class="btn btn-secondary"
  data-bs-toggle="tooltip"
  data-bs-placement="bottom"
  title="Tooltip on bottom"
>
  Tooltip on bottom
</button>
<button
  type="button"
  class="btn btn-secondary"
  data-bs-toggle="tooltip"
  data-bs-placement="left"
  title="Tooltip on left"
>
  Tooltip on left
</button>
```

```js
// Tooltip 을 사용하려면 사용자 Project 의 main.js 에 넣어서 초기화를 진행 해야 tooltip 이 정상적으로 작동 됨

var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
```

![Peek 2021-05-15 20-01](https://user-images.githubusercontent.com/28912774/118358488-f3469b00-b5b9-11eb-9b66-46f86b0f0a25.gif)

## 7.Bootstrap npm 환경 실행

- 실제 Project 에서 Bootstrap 을 CDN 방식으로 link 를 통해서 사용하는것은 몇가지 제한사항 그리고 안정적인 구동을 위해서 local 환경 (Node.js) 에 설치해서 대부분 사용합니다.

- 장점: 필요한 부분만 가져 올 수 있어서 메모리 사용 속도 증가, Customizing 해서 사용 할 수 있습니다. (예: 버튼 색상 원하는 색으로 변경 가능)

- Bootstrap 설치

```bash
$ npm install bootstrap
```

- 연결 (import Bootstrap)

```scss
// in main.scss (scss 폴더 안에 있는 main.scss)

@import "../node_modules/bootstrap/scss/bootstrap.scss";
```

```js
// in main.js
import bootstrap from "bootstrap/dist/js/bootstrap.bundle";
```

## 8.테마 색상 커스터마이징

- 설치된 bootstrap 을 통해 버튼의 컬러를 변경 할 수 있습니다.

```scss
// in main.scss
// 색상 customizing 하기 Required import
@import "../node_modules/bootstrap/scss/functions";
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/mixins";

$theme-colors: (
  "primary": $primary,
  "secondary": yellowgreen,
  // secondary 부분만 색상 변경
  "success": $success,
  "info": $info,
  "warning": $warning,
  "danger": $danger,
  "light": $light,
  "dark": $dark,
);

@import "../node_modules/bootstrap/scss/bootstrap";
```

```html
<!-- in index.html -->
<div class="dropdown">
  <button
    class="btn btn-secondary dropdown-toggle"
    type="button"
    id="dropdownMenuButton1"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
```

![image](https://user-images.githubusercontent.com/28912774/118359672-86360400-b5bf-11eb-8571-e1b7699b3ae6.png)

- Spinner 의 색상도 변경 할 수 있습니다.

```html
<!-- 위의 main.scss 에 yellogreeen 으로 secondary 색상을 변경 하였음 -->
<div class="spinner-border text-secondary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
```

![Peek 2021-05-15 20-56](https://user-images.githubusercontent.com/28912774/118359778-065c6980-b5c0-11eb-85fd-fa7db95c5ff6.gif)

## 9.성능 최적화(트리 쉐이킹)

- 프로젝트의 최적화를 위해서 필요한 부분 (사용하는 기능만) 가지고 와서 사용해야 합니다.

### 🔶 예1: Dropdown 최적화 하기

```html
<!-- 현재 3개의 Component 를 사용하고 있음 (dropdown, button, spinner) -->
<div class="dropdown">
  <button
    class="btn btn-secondary dropdown-toggle"
    type="button"
    id="dropdownMenuButton1"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>

<div class="spinner-border text-secondary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
```

```scss
// 색상 customizing 하기 Required import
@import "../node_modules/bootstrap/scss/functions";
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/mixins";

$theme-colors: (
  "primary": $primary,
  "secondary": yellowgreen,
  "success": $success,
  "info": $info,
  "warning": $warning,
  "danger": $danger,
  "light": $light,
  "dark": $dark,
);

// Bootstrap 5.0 최신 버전의 문제로 인해서, 사용되는 개별적 component 만 가지고, 전체적으로 가져오는게 error 를 줄임
// scss 에서는 성능적으로는 큰 차이가 있지는 않음 (style 부분에서만!!)
@import "../node_modules/bootstrap/scss/bootstrap";
```

```js
// Dropdown 부분만 져오기
import Dropdown from "bootstrap/js/dist/dropdown";

// Dropdown 초기화 하기 (from bootstrap officail page)
const dropdownElementList = [].slice.call(
  document.querySelectorAll(".dropdown-toggle")
);
const dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  // return new bootstrap.Dropdown(dropdownToggleEl) 지역 변수이기 때문에 변수 할당에 bootstrap 을 지우고 사용해야 함
  return new Dropdown(dropdownToggleEl); // import 명과 new 변수 명이 같아야 됨
}); // 최종 빌드 하면 error 가 발생 됨 -> (bundle에 기본으로 있는 poper.js 가 없기 때문에 따로 설치 해줘야 함)

// $ npm i @popperjs/core

// bundle 은 bootstrap 에 해당하는 JS 를 모두 가져오는 거라서 runtime 에 큰 영향을 미침 (성능저하)
// import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'
```

- 🔑 정리 하자면...

  - Bootstrap scss 부분은 성능적으로 큰 차이가 없고, 최신버전의 문제 때문에 개별적 component 를 import 하지 않고 전체를 가져와서 사용함

  - JS 는 나중에 build 할때 runtime 에 영향을 크게 미치기 때문에 bundle 상태로 거의 사용되지 않고, 개별적으로 필요한 부분을 가져와서 사용함

  - JS에서 개별적으로 import 할 경우, 초기화를 꼭 진행해야 적용이 됨

  - 개별 사용시, popper.js 에 의존하는 기능이 많기 때문에 별도 npm 설치를 해줘야 작동 됨

  - Bootstrap official JS 부분에서 via JS 에 대한 설명이 따로 없을때는, 초기화를 안해도 사용됨 (예: button, spinner) [자세히보기..](https://getbootstrap.com/docs/5.0/customize/optimize/#lean-javascript){:target="\_blank"}

### 🔷 예2: modal 최적화 하기

```html
<!-- Button trigger modal -->
<button
  type="button"
  class="btn btn-primary"
  data-bs-toggle="modal"
  data-bs-target="#exampleModal"
>
  Launch demo modal
</button>

<!-- Modal -->
<div
  class="modal fade"
  id="exampleModal"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">...</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
```

```js
// Modal 부분만 가져오기
import Modal from "bootstrap/js/dist/modal";

// modal 초기화
new Modal(document.getElementById("exampleModal"), {
  backdrop: "static", // option 인데 modal 선택 될때 뒷 배경을 클릭해도 닫히지 않고 그대로 남아있는 기능 , defalut 'true'는 modal 창 닫힘
});
```

- 🔑 modal 도 마찬가지로 사용하려면 JS 에서 개별 import 해주고, 초기화한 다음에 사용 합니다

🔶 🔷 📌 🔑

## Reference

- Bootstrap Official site - [https://getbootstrap.com/docs/5.0/getting-started/introduction/](https://getbootstrap.com/docs/5.0/getting-started/introduction/){:target="\_blank"}
