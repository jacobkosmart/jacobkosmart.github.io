---
title:  "Algorithm (JS) - 11.대문자 찾기"
excerpt: "Algorithm (JS)_Basic"

categories:
  - Algorithm_Basic
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---

# 대문자 찾기

##  🔍 문제 
한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램
을 작성하세요.

### 🔹 입력설명
첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.

### 🔹 출력 설명
첫 줄에 대문자의 개수를 출력한다.

### 🔹 입력예제 1
KoreaTimeGood

### 🔹 출력 예제 1
3

----

##  📌 풀이
.toUpperCase() 대문자 찾는 method  
.charCodeAt() ASCII code 로 바꿔주는것 ( * ASCII code에서 대문자는 65 ~ 90 즉, A~Z의 범위임 , 소문자는 97 ~ 122)는 알아 놓자!

- 일반적인 풀이
```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(s) {
      let answer = 0;
      for (let x of s) {
        if (x === x.toUpperCase()) answer++;
      }
      return answer;
    }

    let str = "KoreaTimeGood";
    console.log(solution(str));
  </script>
</body>
```

- ASCII code 
```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    // ASCII code에서 대문자는 65 ~ 90 즉, A~Z의 범위임 , 소문자는 97 ~ 122)는 알아 놓자!
    function solution(s) {
      let answer = 0;
      for (let x of s) {
      let num = x.charCodeAt();
      if (num >= 65 && num <= 90) answer++;
      }
      return answer;
    }

    let str = "KoreaTimeGood";
    console.log(solution(str));
  </script>
</body>
```
