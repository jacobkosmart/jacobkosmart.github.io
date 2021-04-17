---
title:  "Algorithm (JS) - 06.홀수"
excerpt: "Algorithm (JS)_Basic"

categories:
  - Algorithm_Basic
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---

# 홀수

##  🔍 문제 
7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들
중 최소값을 찾는 프로그램을 작성하세요.

예를 들어, 7개의 자연수 12, 77, 38, 41, 53, 92, 85가 주어지면 이들 중 홀수는 77, 41, 53,85이므로 그 합은

77 + 41 + 53 + 85 = 256 

이 되고,

41 < 53 < 77 < 85

이므로 홀수들 중 최소값은 41이 된다.

### 🔹 입력설명
첫 번째 줄에 자연수 7개가 주어진다. 주어지는 자연수는 100보다 작다. 홀수가 한 개 이상반드시 존재한다.

### 🔹 출력 설명
첫째 줄에 홀수들의 합을 출력하고, 둘째 줄에 홀수들 중 최소값을 출력한다.

### 🔹 입력예제 1
12 77 38 41 53 92 85

### 🔹 출력 예제 1
256
41

----

##  📌 풀이
`for (let x of arr)` 변수 `x` 가 `arr`를 돌면서 객체를 반복해서 출력해줌.  
홀수를 구하기위해 x를 2로 나누어 나머지가 1이면 홀수  
합과 최솟값 `push` 해서 결과값 출력

반복문 사용
```html
<html>

<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(arr) {
      let answer = [];
      let sum = 0, min = Number.MAX_SAFE_INTEGER;
      for (let x of arr) {
        if (x % 2 === 1) {
          sum += x
          if (x < min) min = x;
        }
      }
      answer.push(sum);
      answer.push(min);
      return answer
    }
    arr = [12, 77, 38, 41, 53, 92, 85];
    console.log(solution(arr));
  </script>
</body>

</html>
```
