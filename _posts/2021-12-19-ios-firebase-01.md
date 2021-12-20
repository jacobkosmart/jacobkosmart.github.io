---
title: "Firebase Authentication"
excerpt: "Firebase in iOS"

categories:
  - firebase-ios

toc: true
toc_sticky: true
---

## 🔷 Firebase / Firebase Authentication

### Firebase?

> Firebase official documentation - https://firebase.google.com/docs

![image](https://user-images.githubusercontent.com/28912774/146756206-35f3114a-7fe5-4b25-9d6e-ecfdcb735695.png)

- 사용자 인증(Authentication), 실시간 DB(Cloud Firestore, Realtime Database), push 알림을 원격으로 앱 내의 특정 사용자, 전체 사용자에게 app 표시를 할 수 있는기능(Cloud Messaging) 등을 제공합니다

- 특정 segment 에서 해당되는 사용자를 분류하기(Google Analytics), 분류하는 사용자에게 별도의 메세지, 화면을 보여주는것(A/B Testing, Remote Config), 사용자 행동분석 데이터 수집 (Google Analytics)의 기능을 제공합니다

- Firebase 를 통해서 통합 backend service 를 제공함으로써, 별도의 개발없이 서버리스로 대체해서 DB 환경을 구축 할 수 있습니다.

### Firebase Auth

#### OAuth란?

- 사용자 인증 방식에 대한 업계 표준

- ID/PW 를 노출하지 않고 OAuth를 사용하는 업체의 API 접근 권한을 위임 받음

- 기본 개념

  - **User** Service Provider에 계정을 가지고 있는 사용자

  - **Consumer** Service Provider 의 API(제공 기능)를 사용하려는 서비스 (앱, 웹 등)

  - **Service Provider** OAuth를 사용하여 API 를 제공하는 서비스

  - **Access Token** 인증 완료 후 Service Provider의 제공 기능을 이용할 수 있는 권한을 위임받은 인증 키

- 예시 flow: User 사용자가 기기로 App 에서 google 로 로그인 요청 -> App 에서 Google(Service Provider) 에 request Token 을 요청 -> Google(Service Provider) 가 User에게 권한 위임 확인 요청을 하게 됨(AppName 이 Google 계정에 엑세스 하려고 합니다.) -> User가 권한 위임을 승인함 -> Google(Service Provider) 가 App 에 Access Token(사용자의 email, 이름등 google 이 가지고 있는 사용자의 정보를 포함) 을 보냄 -> App 에서 로그인 완료 승인됩을 유저에 UI에 나타나게 됨

- 위의 역활들을 Firebase 에서 대신 처리 하게 되는것임 (Request Token, Access Token)

#### Firebase Authentication 제공 업체

![image](https://user-images.githubusercontent.com/28912774/146763717-031a7517-f4c0-4b38-839c-ae4b324a1d20.png)

## 🔷 이메일/비밀번호 로그인/로그아웃

## 🔷 Google 로그인/로그아웃

## 🔷 Apple 로그인/로그아웃

![image](https://user-images.githubusercontent.com/28912774/146754729-eab9073e-abb6-4a09-8bf3-cf83b3cba181.png)

- 2020년 이후 앱 심사 정책에 따르면, App 내의 로그인 방식으로 social 방식이 포함되어 있는 경우(예, 페이스북, 카카오, 네이버 등) 반드시 애플개정을 통한 로그인도 App 내에서 제공하게 되는 규정이 있습니다.

- 만약 Google 로그인 기능을 제공하는데, Apple 로그인을 제공하지 않으면 AppStore 에 앱 심사에서 반려되어 앱을 올릴 수 없습니다. 그래서 소셜방식의 로그인을 제공하는 App 일 경우 반드시 Apple 로그인을 제공해야 합니다

> Apple로 로그인에 대한 신규 가이드라인 - https://developer.apple.com/kr/news/?id=09122019b

---

🔶 🔷 📌 🔑 👉

## 🗃 Reference

weatherApp-iOS-practice code - [https://github.com/jacobkosmart/weatherApp-iOS-practice.git](https://github.com/jacobkosmart/weatherApp-iOS-practice.git)

fastcampus - [https://fastcampus.co.kr/dev_online_iosappfinal](https://fastcampus.co.kr/dev_online_iosappfinal)
