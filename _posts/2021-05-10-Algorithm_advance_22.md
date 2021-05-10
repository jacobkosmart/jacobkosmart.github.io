---
title: "22.최대 매출 - Slicing Window"
excerpt: "Algorithm (JS)_Advance"

categories:
  - Algorithm_Advance
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---

---


# 최대 매출

##  🔍 문제 
현수의 아빠는 제과점을 운영합니다. 현수 아빠는 현수에게 N일  동안의 매출기록을 주고 연속된 K일 동안의 최대 매출액이 얼마인지 구하라고 했습니다.  

만약 N=10이고 10일 간의 매출기록이 아래와 같습니다. 이때 K=3이면   

12 15 11 20 25 10 20 19 13 15  

연속된 3일간의 최대 매출액은 11+20+25=56만원입니다.  

여러분이 현수를 도와주세요.


### 🔹 입력설명
첫 줄에 N(5<=N<=100,000)과 K(2<=K<=N)가 주어집니다.두 번째 줄에 N개의 숫자열이 주어집니다.  

각 숫자는 500이하의 음이 아닌 정수입니다.

### 🔹 출력 설명
첫 줄에 최대 매출액을 출력합니다.

### 🔹 입력예제 1
10 3  

12 15 11 20 25 10 20 19 13 15

### 🔹 출력 예제 1
56


----

##  📌 풀이 
![11](https://user-images.githubusercontent.com/28912774/117591300-e6b3e400-b16e-11eb-875f-dda5dff2a896.jpg)


![22](https://user-images.githubusercontent.com/28912774/117591302-ea476b00-b16e-11eb-93f7-4d1c7da3b6d4.jpg)



```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(k, arr) {
      let answer, sum = 0;
      for(let i=0; i<k; i++) sum += arr[i] // 첫번째 i=0 부터 i=2까지 3가지 값을 더한 sum return
      answer = sum;
      for(let i=k; i<arr.length; i++) { // i 가 k 번째 3부터 3개씩 쭉 도는 for 문 (sliding window 시작)
        sum += (arr[i] - arr[i-k]) // 이전 sum 에 i 번째 - 3번째 전의 값을 해줘서 sum 으로 다시 return
        answer = Math.max(answer, sum);
      }
      return answer;
    }

    let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
    console.log(solution(3, a));
  </script>
</body>
```
