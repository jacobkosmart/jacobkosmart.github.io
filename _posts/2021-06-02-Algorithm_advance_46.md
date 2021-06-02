---
title: "46.이진수 출력 - 재귀"
excerpt: "Algorithm (JS)_Advance"

categories:
  - Algorithm_Advance
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---

---


##  🔍 문제 
10진수  N이  입력되면  2진수로  변환하여  출력하는  프로그램을  작성하세요.  

단  재귀함수를  이용해서  출력해야  합니다.


### 🔹 입력설명
첫  번째  줄에  10진수  N(1<=N<=1,000)이  주어집니다.

### 🔹 출력 설명
첫  번째  줄에  이진수를  출력하세요

### 🔹 입력예제 1
11

### 🔹 출력 예제 1
1011


----

##  📌 풀이
 

```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(n) {
      let answer = "";
      function DFS(n) {
        if(n === 0) return; // 재귀 함수가 끝나는 지점 설정 -> n = 0 이 되면 함수 종료
        else {
          DFS(parseInt(n / 2)); // 2로 나눈 몫으로 넘어감
          answer += (n % 2); // answer 에 2로 나눈 나머지 누적  
        }
      }
      DFS(n); // 제귀 함수 DFS(n) 실행
      return answer;
    }

    console.log(solution(11));
  </script>
</body>
```
