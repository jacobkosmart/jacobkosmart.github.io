---
title: "Book-Search App Projects"
excerpt: "Vue.js 3.0"
header:
  teaser: /assets/images/port/SearchBook/SearchBook_th.png

# thumbnail : 210 * 140
gallery:
  - url: /assets/images/port/SearchBook/fullSize.png
    image_path: /assets/images/port/SearchBook/fullSize_th.png
    alt: "fullSize"
  - url: /assets/images/port/SearchBook/ipad.png
    image_path: /assets/images/port/SearchBook/ipad_th.png
    alt: "ipad"
  - url: /assets/images/port/SearchBook/phone.png
    image_path: /assets/images/port/SearchBook/phone_th.png
    alt: "phone"
---


[![btn](https://user-images.githubusercontent.com/28912774/118504277-55440380-b766-11eb-8730-3d6978b073c4.png)](https://book.jacobko.info/){:target="\_blank"}


<img src = "https://github.com/jacobkosmart/12.-June.21_SearchBookApp_VueJS/blob/98fbbde52d92f7ccad9fe2040bd93526cfac6a76/src/assets/Animation1.gif" width ="50%" /> 
<img src = "https://github.com/jacobkosmart/12.-June.21_SearchBookApp_VueJS/blob/98fbbde52d92f7ccad9fe2040bd93526cfac6a76/src/assets/Animation2.gif" width ="50%" />


# 💻 1.프로젝트 소개

## ⌨️ 사용기술 및 언어

- Vanilla JavaScript
- HTML
- CSS

## ⏰ 개발 기간

2021-05-08 ~ 21-05-28

# 🗒 2.프로젝트 내용

## 주요 기능

### - Countdown

- 현재 시간 부터 올해 남은 시간 까지 날짜, 시간, 분, 초 단위로 나타냄

### - Quiz

- 객관식 5문제를 하나씩 풀어가며 최종으로 몇개를 맞추었는지 스코어 계산 출력

- 처음으로 돌아갈 수 있는 버트 클릭 시, 맨 처음 페이지로 돌아감

### - Random Recipe

- Mobile frame 에 맞게 app 제작

- The meal API 비동기 연결하여 random recipe 출력

- 좋아요 버튼을 누르면 favorite meals 에 추가

- recipe 클릭 시, 상세 정보 출력 (youtube, ingredients, details)

- 검색창에 (예: rice) 입력 시, 해당되는 recipe 검색됨


{% include gallery %}

## ✏️ 3.소감

### 어려웠던 점

JavaScript 의 알아야 할점들이 많았습니다. 비록 간단한 App 이지만, library의 도움없이 Vanilla JS 로만 만들었기 때문에 많은 function 을 작성하는것에서 어려웠습니다. 물론 참조되는 유용한 자료들 덕분에 할 수 있었습니다.

특히, Random Recipe App 을 만들때 API, Json, async 등 다루면서 앞으로 배워야될 점들이 많다고 느겼습니다.

SPA 기반 project 로 넘어가기 전에 좀더 JS 에 집중하여 기본을 다질 수 있는 projects 이었던거 같습니다.

### 극복과정

유튜브 체널 (Florin Pop) 의 Tutorial 영상을 주로 참조하여 code 를 작성하였으나, 기술 블로그나, MDN 문서를 통해 보다 자세하고 기본적인 JS 를 기록하며, 또한 많은 CSS 관련 자료 내용을 검색하여 Jacob's Devlog 에 기록하며 배워 갔습니다.


### 개선점

좀더 Deep dive JS 할 수 있게 MDN 문서나 기타 검색 자료들을 잘 정리해서 위해 사용된 code 내용의 기능들을 숙지 할 수 있도록 계속 복습 하기.

- 수정 및 업데이트 사항

  - Countdown APP: 반응형 페이지, 기준이 되는 new year를 변경할 수 있는 버튼 및 추가 페이지 업데이트

  - Quiz APP: 틀린 문제가 어떤것인지 답안 페이지 추가, 문제 결과를 공유 할 수 있는 버튼(예: 카카오로 공유하기) 생성하기

  - Random Recipe: 반응속도 개선, IOS 기반 기기(아이폰, 아이패드) 에서 잘 작동되지 않는 부분 bug fix

## 4.Code

- [Countdown APP 바로가기..](https://github.com/jacobkosmart/8.May.21_Countdown_Vanilla-JS){:target="\_blank"}

- [Quiz APP 바로가기..](https://github.com/jacobkosmart/24.May.21_QuizApp_Vanilla-JS){:target="\_blank"}

- [Random Recipe 바로가기..](https://github.com/jacobkosmart/28.May.21_randomRecipe_Vanilla-JS){:target="\_blank"}


