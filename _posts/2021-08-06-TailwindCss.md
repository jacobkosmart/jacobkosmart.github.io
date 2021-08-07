---
title: "Tailwind CSS"
excerpt: "Tailwind CSS"

categories:
  - UI

toc: true
toc_sticky: true
last_modified_at:
---

---

## 1.설치

- 일반 npm 설치 참조

  > [Tailwind CSS installation](https://tailwindcss.com/docs/installation){:target="\_blank"}

### RCA (react-create-app) 에서 설치

#### 1.Create react app 설치

#### 2.Install Tailwind via yarn

```bash
$ yarn add -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```

#### 3.Install and configure CARCO

```bash
$ yarn add @craco/craco
```

```json
<!-- in package.json -->
<!-- 스크립트 부분 바꿔주기 -->
"scripts": {
  "start": "craco start",
  "build": "craco build",
  "test": "craco test",
  "eject": "react-scripts eject"
  },
```

Create `craco.config.js` in root 경로 에다가 tailwindcss and autoprefixer as PostCSS plugins 등록하기

```js
// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};
```

#### 4. Create tailwindcss configuration 파일 만들기

`tailwind.config.js` root 경로에 만들기

```bash
$ npx tailwindcss-cli@latest init
```

```js
// in tailwind.config.js
// react 에 맞는 초기값 설정

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```

#### 5.Tailwind in project css

```css
/* in src/index.css */
/* tailwind component 넣기 */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 2.Background Color

> https://tailwindcss.com/docs/background-color

## 3.@apply

- `index.css` 에서 자주 쓰이는 css (예 btn ) 등을 preset 에 저장한 다음에 재사용할 수 있음

```css
.btn {
  @apply font-bold py-2 px-4 rounded;
}

.btn-blue {
  @apply bg-blue-500 text-white;
}

.btn-blue:hover {
  @apply bg-blue-400;
}
```

```js
// button 제작
<button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">Find Friends</button>

// apply 사용해서 똑같은 버튼 만들기
<button className="btn btn-blue">Find Group</button>
```

## 4.Spacing (padding, margin, space between)

> padding : https://tailwindcss.com/docs/padding

숫자단위의 4 가 1rem 기준임

- pt-4 : padding-top : 1rem

![image](https://user-images.githubusercontent.com/28912774/128462138-139e5b4e-7d75-4a12-8299-fc8250501c25.png)

![image](https://user-images.githubusercontent.com/28912774/128462236-4d499990-db04-43dd-aa27-f3c5136f0cce.png)

![image](https://user-images.githubusercontent.com/28912774/128462276-29565bb5-3bee-431f-8ca0-55fb8cf61e56.png)

![image](https://user-images.githubusercontent.com/28912774/128462344-30b1b75f-c2e8-4d0e-b32f-c605c9c40202.png)

> margin : https://tailwindcss.com/docs/margin

![image](https://user-images.githubusercontent.com/28912774/128462502-6ffe37d4-250a-473c-995f-ded8c995b2dc.png)

![image](https://user-images.githubusercontent.com/28912774/128462551-10342fa2-1538-4dcd-8631-7ba01ac5c1e9.png)

![image](https://user-images.githubusercontent.com/28912774/128462569-a1f4bfd0-90fb-4cb3-86b5-c5232d58f92f.png)

![image](https://user-images.githubusercontent.com/28912774/128462603-94b213d5-49fe-4490-93c7-94b05a94de58.png)

![image](https://user-images.githubusercontent.com/28912774/128462624-d2da7c62-0302-4c76-bff0-77b49de20c6e.png)

> space between : https://tailwindcss.com/docs/space

![image](https://user-images.githubusercontent.com/28912774/128463720-561adb16-e1e1-4b6b-97fb-d704201852d2.png)

![image](https://user-images.githubusercontent.com/28912774/128463750-b1a64622-1524-4401-b4e8-dc22069cde3f.png)

## 5.Sizing (Width, Height)

> Width: https://tailwindcss.com/docs/width

![image](https://user-images.githubusercontent.com/28912774/128463932-d7a4de2e-6c40-4403-97ee-bca02962afb7.png)

![image](https://user-images.githubusercontent.com/28912774/128463975-d0cbfd99-24bd-4098-814c-20fcf20b92ff.png)

![image](https://user-images.githubusercontent.com/28912774/128464108-17ed0543-c21c-4ab2-a0f6-be270f4666f1.png)

```js
<div class="flex ...">
  <div class="w-1/2 ... ">w-1/2</div>
  <div class="w-1/2 ... ">w-1/2</div>
</div>
<div class="flex ...">
  <div class="w-2/5 ...">w-2/5</div>
  <div class="w-3/5 ...">w-3/5</div>
</div>
<div class="flex ...">
  <div class="w-1/3 ...">w-1/3</div>
  <div class="w-2/3 ...">w-2/3</div>
</div>
<div class="flex ...">
  <div class="w-1/4 ...">w-1/4</div>
  <div class="w-3/4 ...">w-3/4</div>
</div>
<div class="flex ...">
  <div class="w-1/5 ...">w-1/5</div>
  <div class="w-4/5 ...">w-4/5</div>
</div>
<div class="flex ...">
  <div class="w-1/6 ...">w-1/6</div>
  <div class="w-5/6 ...">w-5/6</div>
</div>
<div class="w-full ...">w-full</div>
```

> Height : https://tailwindcss.com/docs/height

## 6.Flexbox

> Flex Direction : https://tailwindcss.com/docs/flex-direction

> Flex Wrap : https://tailwindcss.com/docs/flex-wrap

🔶 🔷 📌 🔑

## Reference

- Tailwind CSS official site - [https://tailwindcss.com/](https://tailwindcss.com/){:target="\_blank"}
