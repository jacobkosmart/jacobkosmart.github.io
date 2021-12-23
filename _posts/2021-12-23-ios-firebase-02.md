---
title: "Firebase Realtime, Firestore DB"
excerpt: "Firebase in iOS"

categories:
  - firebaseios

toc: true
toc_sticky: true
---

## 🔷 Firebase Realtime Database

> Firebase Realtime Database official docs - https://firebase.google.com/docs/database/ios/start

### 특징

- 비관계형 클라우드 데이터 베이스: NoSQL database 로써, 대량의 data를 대규모로 처리하는데, 점점더 많은 데이터들을 수집하고 활용하고 모바일, 웹 개발에 적합한 DB 타입 입니다

- 보통 json 형태로 저장, 관리 되어 사용되는데, 다른 table db 와 관계를 맺지않고, 단독으로 key, value 식으로 하나의 단일 문서 안에 모든 data 를 담는 형태로 사용됩니다

- 실시간으로 처리됨니다: HTTP 요청이 아닌 동기화 방식임

![image](https://user-images.githubusercontent.com/28912774/147174840-ed5e34af-b028-4d7c-8f56-cc18142954d5.png)

    	- HTTP: 보통 db와 통신할때 사용하는데 HTTP API (REST API) 값을 서버에 요청이 발생할때 server 를 거쳐서  database 의 data를 받게 됨

    	- Firebase: realtime db 는 observer 와 snapshot 을 제공하는 SDK 는 클라이언트와 직접 동기화 합니다. realtime db 와 연결된 모든 기기에서 거의 동시에 서버의 변경사항을 실시간으로 반영할 수 있습니다

- 오프라인: 로컬에 저장후 네트워크 연결시 동기화
  app 이 오프라인 일때도, 액션에 대한 변경사항을 저장해 주었다가 app 이 다시 네트워크에 연결되었을때, update 하는 기능을 제공 합니다

- 서버 없이 DB와 client 를 직접 액세스 합니다. app 에서 직접 접근하기 위해서 server 가 없어도 db에 직접 연결합니다. 데이터를 read, write 할때 보안 규칙을 위해서 데이터베이스에 대한 접근에 대한 보안, 데이터 검증을 제공하기 때문에 안전하게 db 관리를 할 수 있습니다

## 🔷 Firebase Cloud Firestore

- realtime db 와 같이 비관계형 클라우드 데이터베이스 형태입니다

- realtime db 와의 차이점은

## 🔷 Firebase / Firebase Authentication

> For more Details Code - https://github.com/jacobkosmart/fireAuth-iOS-practice

---

🔶 🔷 📌 🔑 👉

## 🗃 Reference

firebaseAuth-iOS-practice code - [https://github.com/jacobkosmart/fireAuth-iOS-practice.git](https://github.com/jacobkosmart/fireAuth-iOS-practice.git)

firebase documentation - [https://firebase.google.com/docs/auth/ios/start](https://firebase.google.com/docs/auth/ios/start)

How to Sign in to Your iOS App with Email/Password Using Firebase Authentication - [https://medium.com/firebase-developers/ios-firebase-authentication-sdk-email-and-password-login-6a3bb27e0536](https://medium.com/firebase-developers/ios-firebase-authentication-sdk-email-and-password-login-6a3bb27e0536)

fastcampus - [https://fastcampus.co.kr/dev_online_iosappfinal](https://fastcampus.co.kr/dev_online_iosappfinal)
