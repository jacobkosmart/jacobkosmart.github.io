---
title:  "06.격자판 최대합 - 1,2차원 배열 탐색"
excerpt: "Algorithm (JS)_Advance"

categories:
  - Algorithm_Advance
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---


# 격자판 최대합

##  🔍 문제 
5*5 격자판에 아래롸 같이 숫자가 적혀있습니다.  

![image](https://user-images.githubusercontent.com/28912774/116161951-b9f3db80-a72f-11eb-8a70-af6afe908d7c.png)

N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합니다.



### 🔹 입력설명
첫 줄에 자연수 N이 주어진다.(1<=N<=50)  
두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는다.  

### 🔹 출력 설명
최대합을 출력합니다.

### 🔹 입력예제 1
5  
10 13 10 12 15  
12 39 30 23 11  
11 25 50 53 15  
19 27 29 37 27  
19 13 30 13 19  

### 🔹 출력 예제 1
155


----

##  📌 풀이
행 탐색, 열 탐색은 이중 for 문으로 함.  
![Page1](https://user-images.githubusercontent.com/28912774/116169496-c1bb7c00-a73f-11eb-9ba7-c62d37954a6f.jpg)  

![Page2](https://user-images.githubusercontent.com/28912774/116169538-d9930000-a73f-11eb-8784-fb76a61758bf.jpg)  



```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(arr) {
      let answer = Number.MIN_SAFE_INTEGER; 
      let n = arr.length
      let sum1 = sum2 = 0;
      for (let i = 0; i < n; i++){
        sum1 = sum2 =0; // sum1 = sum 2 = 0; j for문이 돌기전에 초기화를 해줘야 함
        for (let j = 0; j < n; j++) {
          sum1 += arr[i][j]; // 행의 합
          sum2 += arr[j][i]; // 열의 합
        }
        answer = Math.max(answer, sum1, sum2) // 행, 열의 합 중에 최대값
      }
      //대각선 합 구하기
      sum1 = sum2 = 0; 
      for (let i = 0; i < n; i++) {
        sum1 += arr[i][i]; // 11시에서 5시 방향 대각선의 합
        sum2 += arr[i][n-i-1]; // 1시에서 7시 방향 대각선의 합
      }
      answer = Math.max(answer, sum1, sum2) // 행,열 최대값과 비교해서 최종 최대값 return
      return answer;
    }
    let arr = [
      [10, 13, 10, 12, 15],
      [12, 39, 30, 23, 11],
      [11, 25, 50, 53, 15],
      [19, 27, 29, 37, 27],
      [19, 13, 30, 13, 19]
    ];
    console.log(solution(arr));
  </script>
</body>
```
