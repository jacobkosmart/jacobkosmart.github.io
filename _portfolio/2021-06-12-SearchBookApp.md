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


[![btn](https://user-images.githubusercontent.com/28912774/118504277-55440380-b766-11eb-8730-3d6978b073c4.png)](https://book.jacobko.info/){:target="_blank"}


# π» 1.νλ‘μ νΈ μκ°

## β¨οΈ μ¬μ©κΈ°μ  λ° μΈμ΄

- Vue.JS
- Vuex
- Vue Router
- SCSS
- BootStrap
- Netlify serverless
- Kakao Open API

## β° κ°λ° κΈ°κ°

2021-05-29 ~ 2021-06-12


# π 2.νλ‘μ νΈ λ΄μ©

## μ£Όμ κΈ°λ₯

- μ± μ λͺ©μ κ²μ νμ¬ μ± νμ§, κΈμ΄μ΄, μΆκ°μΌ, μΆνμ¬, μ κ°, isbn, μμΈν λμμ λ³΄ λ§ν¬ νμ΄μ§λ₯Ό μ κ³΅

- κ²μμ νλ²μ μ΅λ 50κ° λμ κΉμ§ κ°λ₯, κ²μ νν°λ accuracy (μ νλ), latest (μ΅μ ) μμλ³λ‘ κ²μ 

- Fully responsive design (λλ°μ΄μ€ ν΄μλμ λ°λΌ λ°μν λμμΈ) 

- μμΈν λμμ λ³΄ λ²νΌ ν΄λ¦­ μ, μΈλΆμ λ€μ μ¬μ΄νΈμ λΆ κ²μ νμ΄μ§λ‘ μλ λ§ν¬ 


{% include gallery %}



# 3. App Structure 

![appStructure1](/assets/images/port/SearchBook/AppStructure.jpg)


![appStructure2](/assets/images/port/SearchBook/networkServerless.jpg)


## βοΈ 4.μκ°

### μ΄λ €μ λ μ 

SPA κΈ°λ°μ vue.js λ‘ λ§λ  μ²«λ²μ§Έ νλ‘μ νΈ μλλ€. λ°°μΈμ λ λ§κ³ , μ¬λ¬κ°μ component μμ±νκ³ , κ·Έκ²λ€μ μλ‘ μ°κ²° (vue router), μ€μ μνκ΄λ¦¬ (vuex) λ₯Ό μ¬μ©νλ©΄μ ν¨μ¨μ μΌλ‘ νλ‘μ νΈλ₯Ό κ΄λ¦¬ νκΈ°κΉμ§ μ΄λ €μ΄ μ λ€μ΄ λ§μμ΅λλ€.

νΉν axios λ₯Ό ν΅ν api μ λ³΄λ₯Ό κ°μ Έμ€λ κ³Όμ μμ error κ° κΈ°μ μ΄ μ΅μμΉκ° μμμ μ΄λ €μμ΄ μμμ΅λλ€. 


### κ·Ήλ³΅κ³Όμ 

Vue.js , vuex, vue router, axios official page λ± κ³΅μλ¬Έμλ₯Ό μ€μ¬μΌλ‘ κΈ°μ μ λ§μ΄ μ΅νμΌλ©°, Googling, stack overflow μ κ²μμ ν΅ν΄ problem solving ν΄ λκ°μ΅λλ€. μλ‘ μ»μ μ λ³΄, μλ£λ Jacob's Devlog μ κΈ°λ‘νλ©° μ λ¦¬νμμ΅λλ€.


### κ°μ μ 

- λΉκ΅μ  λλ¦° μ΅μ λ‘λ© μλ : webpack bunding νλ κ³Όμ μ μ΄κΈ° runtime μ΄ λ§μ΄ μμλ¨ 

    - Lazy loding, λΈλΌμ°μ  μΊμ± μ μ μ©νμ¬ λ‘λ©μλ κ°μ  νμ

- App testing κ³Όμ  νμ : μΆν λ¨μ νμ€νΈ, E2E νμ€νΈλ₯Ό ν΅ν΄ App μ λ°μ μΈ tesing μ§ν μμ 

- Sever sider lendering (SSR) νμ : NUXT λ‘ κ°λ°νκ²½μ λ³κ²½μμΌ κ²μμ μ΅μ ν λ μ μλ νκ²½ μ‘°μ± (Optimized SEO) 


## 4.Code

- [Github](https://github.com/jacobkosmart/12.June.21_SearchBookApp_VueJS){:target="_blank"}

- [Book Search App λ°λ‘κ°κΈ°..](https://book.jacobko.info/#/){:target="_blank"}


