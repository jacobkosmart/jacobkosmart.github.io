---
title: "55.팩토리얼"
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
자연수  N을  입력하면  N!값을  구하세요.

N!  =  n*(n-1)*(n-2)*.....*2*1입니다. 

만약  N=5라면  5!=5*4*3*2*1=120입니다.


### 🔹 입력설명
첫째  줄에  자연수  N(3<=n<=10)이  입력됩니다

### 🔹 출력 설명
첫째  줄에  N팩토리얼  값을  출력합니다

### 🔹 입력예제 1
5

### 🔹 출력 예제 1
120


----

##  📌 풀이

![image](https://user-images.githubusercontent.com/28912774/123042524-ed05d300-d431-11eb-81e9-6f370bb8f21d.png)


```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(n) {
      let answer; 
      function DFS(n) {
        if(n === 1) return 1;
        else return n * DFS(n -1);
      }
      answer= DFS(n);
      return answer;
    }

    console.log(solution(5));
  </script>
</body>
```
