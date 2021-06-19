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


# 💻 1.프로젝트 소개

## ⌨️ 사용기술 및 언어

- Vue.JS
- Vuex
- Vue Router
- SCSS
- BootStrap
- Netlify serverless
- Kakao Open API

## ⏰ 개발 기간

2021-05-29 ~ 2021-06-12


# 🗒 2.프로젝트 내용

## 주요 기능

- 책 제목을 검색 하여 책 표지, 글쓴이, 출간일, 출판사, 정가, isbn, 자세한 도서정보 링크 페이지를 제공

- 검색은 한번에 최대 50개 도서 까지 가능, 검색 필터는 accuracy (정확도), latest (최신) 순서별로 검색 

- Fully responsive design (디바이스 해상도에 따라 반응형 디자인) 

- 자세한 도서정보 버튼 클릭 시, 외부의 다음 사이트의 북 검색 페이지로 자동 링크 


{% include gallery %}



# 3. App Structure 

<img src = "https://github.com/jacobkosmart/12.-June.21_SearchBookApp_VueJS/blob/98fbbde52d92f7ccad9fe2040bd93526cfac6a76/src/assets/App%20Structure.jpg" width ="100%" /> 

<img src = "https://github.com/jacobkosmart/12.-June.21_SearchBookApp_VueJS/blob/c7813705cce16315f26e3f055db54e5c47a3cb88/src/assets/network%20serverless.jpg" width ="100%" /> 

## ✏️ 4.소감

### 어려웠던 점

SPA 기반의 vue.js 로 만든 첫번째 프로젝트 입니다. 배울점도 많고, 여러개의 component 생성하고, 그것들을 서로 연결 (vue router), 중앙 상태관리 (vuex) 를 사용하면서 효율적으로 프로젝트를 관리 하기까지 어려운 점들이 많았습니다.

특히 axios 를 통한 api 정보를 가져오는 과정에서 error 가 기술이 익숙치가 않아서 어려움이 있었습니다. 


### 극복과정

Vue.js , vuex, vue router, axios official page 등 공식문서를 중심으로 기술을 많이 익혔으며, Googling, stack overflow 의 검색을 통해 problem solving 해 나갔습니다. 새로 얻은 정보, 자료는 Jacob's Devlog 에 기록하며 정리하였습니다.


### 개선점

- 비교적 느린 최소 로딩 속도 : webpack bunding 하는 과정에 초기 runtime 이 많이 소요됨 

    - Lazy loding, 브라우저 캐싱 을 적용하여 로딩속도 개선 필요

- App testing 과정 필요 : 추후 단위 테스트, E2E 테스트를 통해 App 전반적인 tesing 진행 예정

- Sever sider lendering (SSR) 필요 : NUXT 로 개발환경을 변경시켜 검색에 최적화 될수 있는 환경 조성 (Optimized SEO) 


## 4.Code

- [Github](https://github.com/jacobkosmart/12.June.21_SearchBookApp_VueJS){:target="\_blank"}

- [Book Search App 바로가기..](https://book.jacobko.info/#/){:target="\_blank"}


