---
title:  "01_세 수 중 최솟값"
excerpt: "Algorithm (JS)_01_Basic"

categories:
  - algotithm_basic
tags:
  - [Algorithm, JavaScript]
---

# 세 수 중 최솟값

##  🔍 문제 
100 이하의 자연수 A,B,C를 입력 받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하세요. (정렬을 사용하면 안됩니다)

### 🔹 입력설명
첫 번째 줄이 100이하의 세 자연수가 입력된다

### 🔹 출력 설명
첫 번째 줄의 가장 작은 수를 출력한다.

### 🔹 입력예제 1
6 5 11

### 🔹 출력 예제 1
5

----

##  📌 풀이
`if, else` 문을 통해 먼저 `a` 와 `b`를 비교하여 최솟값을 구한 다음  
그 비교한 값을 c와 한번더 비교해서 `answer` 출력

```html
<html>
    <head>
        <meta charset="UTF-8">
        <title>출력결과</title>
    </head>
    <body>
        <script>
            function solution(a, b, c){
                let answer;
                if (a < b) answer = a;
                else answer = b;
                if (c < answer) answer = c;

                return answer;
            }

            console.log(solution(6, 5, 11));
        </script>
    </body>
</html>
```