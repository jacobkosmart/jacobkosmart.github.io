---
title:  "02.보이는 학생 - 1,2차원 배열 탐색"
excerpt: "Algorithm (JS)_Advance"

categories:
  - Algorithm_Advance
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---



# 보이는 학생

##  🔍 문제 
선생님이 N(1<=N<=1000)명의 학생을 일렬로 세웠습니다. 일렬로 서 있는 학생의 키가 앞에
서부터 순서대로 주어질 때, 맨 앞에 서 있는 선생님이 볼 수 있는 학생의 수를 구하는 프로그램을 작성하세요.  
(앞에 서 있는 사람들보다 크면 보이고, 작거나 같으면 보이지 않습니다.)

### 🔹 입력설명
첫 줄에 정수 N이 입력된다. 그 다음줄에 N명의 학생의 키가 앞에서부터 순서대로 주어진다.

### 🔹 출력 설명
선생님이 볼 수 있는 최대학생수를 출력한다.

### 🔹 입력예제 1
8  
130 135 148 140 145 150 150 153

### 🔹 출력 예제 1
5

----

##  📌 풀이
`max` 변수를 설정하고, `i` 값보다 `i` 전에 있는 수중에서 가장 큰 값이 `max`. 그래서 `max < i `가 되면 + 1 `counting`

```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(arr) {
      let answer = 1;
      let max = arr[0];
      for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
          answer++;
          max = arr[i];
        }
      }
      return answer;
    }

    let arr = [130, 135, 148, 140, 145, 150, 150, 153];
    console.log(solution(arr));
  </script>
</body>
```
