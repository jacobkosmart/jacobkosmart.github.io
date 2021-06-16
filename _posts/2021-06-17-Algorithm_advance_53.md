---
title: "53.동전교환 - DFS"
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
다음과  같이  여러  단위의  동전들이  주어져  있을때  거스름돈을  가장  적은  수의  동전으로  교환해주려면  어떻게  주면  되는가?


각  단위의  동전은  무한정  쓸  수  있다


### 🔹 입력설명
첫  번째  줄에는  동전의  종류개수  N(1<=N<=12)이  주어진다.  

두  번째  줄에는  N개의  동전의  종류가  주어지고,  그  다음줄에  거슬러  줄  금액  M(1<=M<=500)이  주어진다. 

각  동전의  종류는  100원을  넘지  않는다

### 🔹 출력 설명
첫  번째  줄에  거슬러  줄  동전의  최소개수를  출력한다

### 🔹 입력예제 1
3
 
1 2 5

15

### 🔹 출력 예제 1
3


----

##  📌 풀이

![image](https://user-images.githubusercontent.com/28912774/122305639-3477f500-cf42-11eb-9f12-0b20a596cf24.png)


```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(m, arr) {
      let answer = Number.MAX_SAFE_INTEGER;
      let n = arr.length;

      function DFS(l, sum) {
        if (sum > m)
      return; // 무한으로 도는것을 방지 하기위해서 왜냐면 sum === m 을 건너 뛰어서 조건이 안맞을때, 계속 for loop 가 돌 수 있기 때문에 sum 이 m 보다 크게 될 경우에 break 를 걸어줘야 함
        if (l >= answer) return; // 경우에 수를 줄이는것 l 보다 answer 가 크거나 같게 되면 실행되지 않고 if 문 빠져나가는것
        if (sum === m) {
          answer = Math.min(answer, l)
        } else {
          for (let i = 0; i < n; i++) {
            DFS(l + 1, sum + arr[i]);
          }
        }
      }
      DFS(0, 0);
      return answer;
    }

    let arr = [1, 2, 5];
    console.log(solution(15, arr));
  </script>
</body>
```
