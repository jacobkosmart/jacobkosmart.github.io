---
title: "YUMMY"
excerpt: "맛있는 여행의 아름다움, YUMMY"
header:
  teaser: /assets/images/port/folder/teaser.png
toc: true
toc_sticky: true
# thumbnail : 210 * 140
gallery:
  - url: assets/images/port/folder/zip-home.png
    image_path: assets/images/port/folder/th-home.png
    alt: "메인 화면, 프로필 페이지"
  - url: assets/images/port/folder/zip-noti.png
    image_path: assets/images/port/folder/th-noti.png
    alt: "메인 화면, 프로필 페이지"
  - url: assets/images/port/folder/zip-trend.png
    image_path: assets/images/port/folder/th-trend.png
    alt: "메인 화면, 프로필 페이지"
  - url: assets/images/port/folder/zip-write.png
    image_path: assets/images/port/folder/th-write.png
    alt: "메인 화면, 프로필 페이지"
---
맛있는 여행의 아름다움, YUMMY
## 프로젝트 소개  
### 팀 구성  
 4인 팀 프로젝트
### 사용기술 및 언어    
  python 3.7.x  
  Django 3.0.x  
  MYSQL 8.0.x  
  Vue.js + vuetify  
### 개발 기간  
2020-01-20 ~ 2020-02-21(약 5주)


## 프로젝트 내용
### 주요 기능
- 새벽시간에만 글을 작성, 수정, 삭제할 수 있음  
- 텍스트 마이닝, 형태소 분석을 이용한 해쉬태그 추천  
- 날씨api에 따른 글 작성 시 배경화면 변경  
- 팔로우, 팔로워, 게시글 좋아요 기능  
- 해쉬태그 워드클라우드 기능 제공(트렌드)  
- 일정 수 좋아요 받은 게시물은 명예의 전당 등극  
- 알림센터 기능, 메인피드(무한스크롤)  

{% include gallery %}


## 담당
### 역할
front-end
### 구현
- frontend 화면 구성 및 컴포넌트 제작(유저 프로필, 게시글, 댓글, 검색 등) 
- 글 작성 페이지에서 지역 날씨(openweather api)에 따른 배경 변경  
- 알림센터, 워드클라우드, 유저 프로필, 게시글 상세 페이지 등 전체적인 프론트 구성  
- wireframe 제작
### 코드
- api 호출(댓글 작성)  
  comment.vue
{% gist 2fc7a3c84602632d12b22e9ed439d840 %}
  CommentApi.js
{% gist ceae12e841fe7a6a0f766804bf6db2ef %}
vue 코드 하단에 **script** 부분 말고 api들은 따로 분리해서 다시 넘겨주는 방식으로 작성했다.