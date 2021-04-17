---
title:  "Algorithm (JS) - 04.1부터 N까지의 합"
excerpt: "Algorithm (JS)_Basic"

categories:
  - Algorithm_Basic
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---


# 1부터 N까지의 합

##  🔍 문제 
자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.

### 🔹 입력설명
첫 번째 줄에 20이하의 자연수 N이 입력된다..

### 🔹 출력 설명
첫 번째 줄에 1부터 N까지의 합을 출력한다.

### 🔹 입력예제 1
6

### 🔹 출력 예제 1
21

### 🔹 입력예제 1
10

### 🔹 출력 예제 1
55

----

##  📌 풀이
1부터 for 문을 통해서 순차적으로 더해줌


```html
<html>
  <head>
    <meta charset="UTF-8">
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(n){
        let answer = 0;
        for (let i = 1; i <= n; i++) {
          answer += i;
        }  
        return answer;
      }
      console.log(solution(6));
    </script>
  </body>
</html>
```

---

👉 [다른 Algorithm (JS)](https://jacobkosmart.github.io/categories/Algorithm_Basic) 으로 이동 

---