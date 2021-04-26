---
title:  "01.큰 수 출력하기 - 1,2차원 배열 탐색"
excerpt: "Algorithm (JS)_Advance"

categories:
  - Algorithm_Advance
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---

# 큰 수 출력하기

##  🔍 문제 
N(1<=N<=100)개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작
성하세요.(첫 번째 수는 무조건 출력한다)  

### 🔹 입력설명
첫 줄에 자연수 N이 주어지고, 그 다음 줄에 N개의 정수가 입력된다.

### 🔹 출력 설명
자신의 바로 앞 수보다 큰 수만 한 줄로 출력한다.

### 🔹 입력예제 1
6
7 3 9 5 6 12

### 🔹 출력 예제 1
7 9 6 12

----

##  📌 풀이
첫번째 숫자는 무조건 출력하는거니까 `.push()` 를 사용해서 `return`
그 다음부터는 이전 index 숫자와 비교해서 클경우에 return

```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(arr) {
      let answer = [];
      answer.push(arr[0]);
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) answer.push(arr[i]);
      }
      return answer;
    }

    let arr = [7, 3, 9, 5, 6, 12];
    console.log(solution(arr));
  </script>
</body>
```
