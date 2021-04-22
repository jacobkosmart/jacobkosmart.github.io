---
title:  "05.최솟값 구하기"
excerpt: "Algorithm (JS)_Basic"

categories:
  - Algorithm_Basic
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---

# 최솟값 구하기

##  🔍 문제 
자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.

### 🔹 입력설명
첫 번째 줄에 7개의 수가 주어진다.

### 🔹 출력 설명
첫 번째 줄에 가장 작은 값을 출력한다.

### 🔹 입력예제 1
5 3 7 11 2 15 17

### 🔹 출력 예제 1
2

----

##  📌 풀이
`array` 에 처음 수를 `min으로` 잡는다. `min = arr[0];`  
`index [1]` 부터 차례대로 min 과 비교해가면서 최솟값을 구한다
- 다른풀이 (내장함수 `Math` 사용)
  - `Math` 내장함수는 인자(`argument`)로 넘어가야 한다.
  - `array` 를 전개 연산자 `...aray`를 사용해야함
  - 최댓값은 `Math.max`로 하면됨

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
      let answer, min = arr[0];
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i]
      }
      answer = min;
      return answer;
    }
    let arr = [5, 3, 7, 11, 2, 15, 17];
    console.log(solution(arr));
  </script>
</body>

</html>
```
내장 함수 `Math.min` 사용
```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(arr) {
      let answer = Math.min(...arr);
      return answer;
    }
    let arr = [5, 3, 7, 11, 2, 15, 17];
    console.log(solution(arr));
  </script>
</body>

</html>
```

---

👉 [다른 Algorithm (JS)](https://jacobkosmart.github.io/categories/Algorithm_Basic) 으로 이동 

---