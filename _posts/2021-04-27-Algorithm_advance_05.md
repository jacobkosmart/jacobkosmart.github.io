---
title:  "05.등수 구하기 - 1,2차원 배열 탐색"
excerpt: "Algorithm (JS)_Advance"

categories:
  - Algorithm_Advance
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---


# 등수구하기

##  🔍 문제 
N(1<=N<=100)명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는
프로그램을 작성하세요.


### 🔹 입력설명
첫 줄에 N(3<=N<=1000)이 입력되고, 두 번째 줄에 국어점수를  의미하는 N개의 정수가 입력된다. 같은 점수가 입력될 경우 높은 등수로 동일 처리한다. 즉 가장 높은 점수가 92점인데92점이 3명 존재하면 1등이 3명이고 그 다음 학생은 4등이 된다.

### 🔹 출력 설명
입력된 순서대로 등수를 출력한다.

### 🔹 입력예제 1
5  
87 89 92 100 76

### 🔹 출력 예제 1
4 3 2 1 5  

----

##  📌 풀이  

![노트 2021  4  27](https://user-images.githubusercontent.com/28912774/116166711-903fb200-a739-11eb-99e8-f7c234c30fac.jpg)

index 가 있는 array 를 만들려면 `answer = Array.from({length:갯수})` 
예)
```js
let n = arr.length;
let answer = Array.from({length:n}); 
// 만약 n 이 5라면 answer는 0~4 번까지 index를 가지고 있는 array를 만들게 되는것임
```
`() => 1` 각 array 값을 1 로 콜백해주는것임  

```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(arr) {
      let n = arr.length;
      let answer = Array.from({length:n}, () => 1);
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          if (arr[j] > arr[i]) answer[i]++
        }
      }
      return answer;
    }

    let arr = [87, 89, 92, 100, 76];
    console.log(solution(arr));
  </script>
</body>
```
