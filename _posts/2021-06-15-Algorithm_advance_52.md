---
title: "52.중복순열 구하기 - DFS"
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


1부터  N까지  번호가  적힌  구슬이  있습니다.  

이  중  중복을  허락하여  M번을  뽑아  일렬로  나열하는  방법을  모두  출력합니다


### 🔹 입력설명
첫  번째  줄에  자연수  N(3<=N<=10)과  M(2<=M<=N)  이  주어집니다.

### 🔹 출력 설명
첫  번째  줄에  결과를  출력합니다.  맨  마지막  총  경우의  수를  출력합니다.

출력순서는  사전순으로  오름차순으로  출력합니다

### 🔹 입력예제 1
3 2

### 🔹 출력 예제 1
1  1

1  2

1  3

2  1

2  2

2  3

3  1

3  2

3  3

9



----

##  📌 풀이

![image](https://user-images.githubusercontent.com/28912774/121971187-2778cb80-cdb3-11eb-92bc-6a472952c49b.png)

![image](https://user-images.githubusercontent.com/28912774/121971191-2a73bc00-cdb3-11eb-867b-4f98e94f00e8.png)


```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(n, m) {
      let answer = [];
      let tmp = Array.from ({length:m}, () => 0); // 0으로 초기화 된 빈 arr 생성
      function DFS(l) {
        if(l === m) {
          answer.push(tmp.slice()); // 깊은 복사로 slice() 사용해서 tmp push
        }
        else {
          for(let i = 1; i <= n; i++) {
            tmp[l] = i
            DFS(l + 1)
          }
        }
      }
      DFS(0);
      return answer;
    }

    console.log(solution(4, 3));
  </script>
</body>
```
