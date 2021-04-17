---
title:  "Algorithm (JS) - 02.삼각형 판별하기"
excerpt: "Algorithm (JS)_Basic"

categories:
  - Algorithm_Basic
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---

# 삼각형 판별하기

##  🔍 문제 
길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있
으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.

### 🔹 입력설명
첫 번째 줄에 100이하의 서로 다른 A, B, C 막대의 길이가 주어진다.

### 🔹 출력 설명
첫 번째 줄에 “YES", "NO"를 출력한다.

### 🔹 입력예제 1
6 7 11

### 🔹 출력 예제 1
YES

### 🔹 입력예제 1
13 33 17

### 🔹 출력 예제 1
NO

----

##  📌 풀이
삼각형이 되려면, 가장 긴막대의 수(길이)가 2,3번째 짧은 막대 두개의 합이 가장 긴막대보다 커야 삼각형이 성립이됨.  
세개의 수를 비교해서 max 값을 찾음 sum - max 는 짧은 길이의 수가 됨

```html
<html>
    <head>
        <meta charset="UTF-8">
        <title>출력결과</title>
    </head>
    <body>
        <script>
            function solution(a, b, c){
                let answer ='YES';
                let max;
                let sum = a + b + c;

                if (a > b) max= a;
                else max = b;
                if (c > max) max = c;
                if ((sum - max) <= max) answer = "NO"

                return answer;
            }

            console.log(solution(6, 7, 11));
        </script>
    </body>
</html>
```

---

👉 [다른 Algorithm (JS)](https://jacobkosmart.github.io/categories/Algorithm_Basic) 으로 이동 

---