---
title: "54.순열 구하기 - 순열"
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
10이하의  N개의  자연수가  주어지면  이  중   M개를  뽑아  일렬로  나열하는  방법을  모두  출력합니다.


### 🔹 입력설명
첫  번째  줄에  자연수  N(3<=N<=10)과  M(2<=M<=N)  이  주어집니다.

두  번째  줄에  N개의  자연수가  오름차순으로  주어집니다

### 🔹 출력 설명
첫  번째  줄에  결과를  출력합니다.  맨  마지막  총  경우의  수를  출력합니다.

출력순서는  사전순으로  오름차순으로  출력합니다

### 🔹 입력예제 1
3 2

3 6 9 

### 🔹 출력 예제 1
3 6

3 9

6 3

6 9

9 3

9 6

6


----

##  📌 풀이

![image](https://user-images.githubusercontent.com/28912774/122692215-b5026280-d26e-11eb-9ce1-b2d681ea5fcd.png)


```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(m, arr) {
      let answer = [];
      n = arr.length;
      let ch = Array.from({
        length: n
      }, () => 0);
      let tmp = Array.from({
        length: m
      }, () => 0);

      function DFS(l) {
        if (l === m) {
          answer.push(tmp.slice()); // answer 에 깊은 복사 
        } else {
          for (let i = 0; i < n; i++) {
            if (ch[i] === 0) { // 순열의 전형적인 구조임 거의 외우다 시피 읽혀야 함. ch 에 0으로 비어있을 경우
              ch[i] = 1; // 1로 바꿔주고
              tmp[l] = arr[i] // tmp arr 에다가 arr 의 value 값을 넣어줌
              DFS(l + 1); // 1단계 level 증가
              ch[i] = 0; // 다시 check arr 0으로 초기화시킴
            }
          }
        }
      }
      DFS(0);
      return answer;
    }

    let arr = [3, 6, 9];
    console.log(solution(2, arr));
  </script>
</body>

```
