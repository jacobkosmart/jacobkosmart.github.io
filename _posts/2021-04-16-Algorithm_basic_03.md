---
title:  "Algorithm (JS) - 03.연필 개수"
excerpt: "Algorithm (JS)_Basic"

categories:
  - Algorithm_Basic
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---

# 연필 개수

##  🔍 문제 
연필 1 다스는 12자루입니다. 학생 1인당 연필을 1자루씩 나누어 준다고 할 때 N명이 학생수
를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램을 작성하세요.

### 🔹 입력설명
첫 번째 줄에 1000 이하의 자연수 N이 입력된다.

### 🔹 출력 설명
첫 번째 줄에 필요한 다스 수를 출력합니다.

### 🔹 입력예제 1
25

### 🔹 출력 예제 1
3

### 🔹 입력예제 1
178

### 🔹 출력 예제 1
15

----

##  📌 풀이
n 개를 12로 나눠서 몫을 구해주고 나머지가 나오면 나머지도 +1 다시 해주어서 나머지 학생도 연필을 1자루씩 줄 수 있음  
Math 함수에서 ceil 올림계산자, 예)2.344 -> 3  
[자세한 Math 함수](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

- 소수점 관련 Math
  - `Math.floor()`: 내림
  - `Math.round()`: 반올림
  - `Math.ceil()`: 올림
  - `Math.sqrt(16)`: 제곱근 (4)

```html
<html>
    <head>
        <meta charset="UTF-8">
        <title>출력결과</title>
    </head>
    <body>
        <script>
            function solution(n){
                let answer;
                answer = Math.ceil( n / 12)
                return answer;
            }
            console.log(solution(25));
        </script>
    </body>
</html>
```