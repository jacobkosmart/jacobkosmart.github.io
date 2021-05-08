---
title: "Web For Lab"
excerpt: "Django를 활용한 웹사이트 개발"
header:
  teaser: /assets/images/port/webforlab/teaser.png
toc: true
toc_sticky: true
# thumbnail : 210 * 140
gallery:
  - url: assets/images/port/webforlab/zip-info.gif
    image_path: assets/images/port/webforlab/th-info.png
    alt: "low quality marker"
  - url: assets/images/port/webforlab/zip-search.gif
    image_path: assets/images/port/webforlab/th-search.png
    alt: "clinvar"
  - url: assets/images/port/webforlab/zip-snp.gif
    image_path: assets/images/port/webforlab/th-snp.png
    alt: "SNPedia"
---
Django를 활용한 웹사이트 개발
## 프로젝트 소개  
### 팀 구성  
 개인 프로젝트
### 사용기술 및 언어    
 Python
 Django
 Mysql
### 개발 기간  
2018-12-21 ~ 19-02-11(공백기 있는 약 10주)


## 프로젝트 내용
### 주요 기능
 - CRUD 게시판(low quality marker, infos)
 - SNPedia 웹사이트 크롤링 데이터를 이용한 검색 및 리포트 제작 기능(snp)
 - clinvar에서 제공하는 vcf파일을 불러와 데이터 가공 후 데이터에 저장 후 검색 기능(search)
 - 공통 기능 : 예시 파일 제공 및 레포트 다운로드 기능
{% include gallery %}

## 어려웠던 점  
솔직히 모르는 게 너무 많았다.  
주로 사용하던 언어가 java여서 python을 공부해야 했고, pandas 모듈에 대해서도 배우는 시간이 소모되었다.  
git을 사용하고자 했으나, 방법을 몰랐다.  
회사에 it부서가 따로 없어서 기술적인 조언을 받기 어려운 상황이었다.  

## 극복과정
python관련한 인프런 강의들을 수강했다.  
그 당시 학교에서 제휴를 맺어 유료강의에 대한 지원이 있었기 때문에
유료강의들을 들으면서 틈틈히 pandas와 python문법에 대해서 공부했다.  
pandas, git, django 다 온라인에서 배웠다.    
들은 강의 목록(강의 이름, 수강률, 강의제공) : 
* 프로그래밍, 데이터 과학을 위한 파이썬 입문 67.59%(인프런)  
* 머신러닝 이론 및 파이썬 실습 78.95%(인프런)  
* 10분만에 배우는 깃헙(github) 기본기 100% (인프런)  
* 나의 첫 Django 앱 만들기 100% (인프런)  
* pandas 팬더스 데이터분석 기초 실습 100% (인프런)  
* 장고걸스 튜토리얼 (Django Girls Tutorial)  

## 회고록
처음에는 정말 막막하고 공부를해야 개발을 할 수 있었기때문에 개발속도가 무척 더뎠다.  
게다가 기본 os가 ubuntu였다.(조금 당황)    
박사님께서 내가 익숙하지 않음에 대한 양해를 해주셔서 다행히 조금의 여유가 있었지만 스스로 시간적인 압박이 있었던 것 같다.(괜찮다곤 하셨지만 빨리해야지 같은..)  
예전엔 stackoverflow에 나오는 답변들은 잘 안보고 기술블로그들을 참고하면서 했다면, 내가 급하기 때문에 영어 자료들을 찾아보는것에 대해 거부감이 사라졌다.  
모르는게 많았기 때문에 구글링의 기술또한 늘은 것 같다.  
맨땅에서 시작하는 기분이었지만 그런 경험 덕분에 "할 수 있을까?"라는 걱정을 잘 안하게 되었다.  
기능 요구사항을 잘못파악하고 진행해서 다시 시작한 적도 있었다. 이 때 학교에서 소프트웨어공학을 괜히 배우는게 아니라는 것을 알게되었다.