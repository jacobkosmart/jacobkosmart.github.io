---
title: "Semantic tag 정리"
excerpt: "HTML"

categories:
  - UI

toc: true
toc_sticky: true
last_modified_at:
---

---

Semantic 이라는 단어는 의미적인 의미로 Semantic tag 를 사용하는 것은 각 tag 에 의미 있는 tag 를 사용하는것인데 왜 사용해야 되는건지 에 대한 이유 임

# Semantic tag 를 사용해야하는 이유

## 1.검색엔진 최적화 (SEO)

검색 엔진이 검색을 수행할 때 html 내에 있는 태그들을 분석한다.
이 때 그 태그들의 의미가 분명하다면 (예를 들면 header, section, article, footer 등)
검색 엔진 입장에서는 이게 데이터인지 아닌지 구분하기가 쉬워진다.

예를 들어 h1 태그가 하나씩은 반드시 들어가 있는게 좋다.

`<h1>` 태그는 헤드라인을 의미하고, 또 일반적으로 페이지의 내용 중 주제를 파악하기 위해 검색 엔진이 <h1>태그를 확인하기 때문이다.

## 2.웹 접근성

웹 접근성은 장애인이나 노인 분들이 비장애인과 같이 웹 사이트에 접근하여 이해할 수 있도록 하는 것을 의미하는데
이 때 스크린 리더라는 프로그램을 사용하게 된다. 이 때 시맨틱 태그를 사용하는 것이 스크린 리더의 활용에 좋다고 한다.

## 3. 유지보수 & 코드 가독성

![div](https://user-images.githubusercontent.com/28912774/126854217-761bd982-8c9e-4b6f-988b-f6d7e21c7473.png)

딱 봤을 때 특정 부분이 어떤 의미를 가진 부분인지 알아볼 수 있다면 유지보수 할 때도 편하고 코드를 읽을 때도 편한 것은 당연하다.

---

# 시멘틱 태그 목록

## 1.`<header>`

- 주로 페이지 맨 위에 삽입. 사이트 전체의 제목 부분이 될 수도 있고, 본문의 제목 부분이 될 수도 있다.

- form 태그를 사용한 검색 창을 넣거나 nav 태그를 사용해서 메뉴들을 넣기도 한다.

## 2.`<nav>`

- 같은 사이트 안의 문서나 다른 사이트로 연결하는 링크를 나타낸다.

- Footer에 있는 링크 모음 부분에도 사용된다.

## 3.`<section>`

- 논리적으로 연관성이 있는 요소들을 분리할 때 사용한다.

- 주제별 컨텐츠를 묶을 때 사용

## 4.`<article>`

- 웹 상의 실제 내용들.

- article 태그 부분을 떼어내 독립적으로 배포하거나 재사용하더라도 완전히 하나의 콘텐츠여야 한다.

- 한 페이지에 하나만 존재하는게 이상적

## 5.`<aside>`

- 본문 내용 외에 주변에 표시되는 기타 내용들

- 필수 요소가 아니기 때문에 광고나 링크 모음 등 메인 내용에 영향을 미치지 않는 것들을 넣을 때 사용

## 6.`<footer>`

- 사이트 제작자의 연락처 정보와 저작권 정보를 표시

## 7.`<address>`

- 웹 페이지 또는 피드백을 위한 연락처 정보

- 웹 사이트와 관련된 우편 주소, 이메일 같은 것들. copyright도

![image](https://user-images.githubusercontent.com/28912774/126854362-8b10bfb0-93fc-4b1c-9008-e2938b04e89a.png)

🔶 🔷 📌 🔑

## Reference

- HTML Semantic Elements - [https://www.w3schools.com/html/html5_semantic_elements.asp](https://www.w3schools.com/html/html5_semantic_elements.asp){:target="\_blank"}

- Dream coding - [https://www.youtube.com/watch?v=OoA70D2TE0A&list=PLv2d7VI9OotQ1F92Jp9Ce7ovHEsuRQB3Y&index=6](https://www.youtube.com/watch?v=OoA70D2TE0A&list=PLv2d7VI9OotQ1F92Jp9Ce7ovHEsuRQB3Y&index=6)
