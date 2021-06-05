---
title: "48.부분집합 구하기 - DFS"
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
자연수  N이  주어지면  1부터  N까지의  원소를  갖는  집합의  부분집합을  모두  출력하는  프로그램을  작성하세요


### 🔹 입력설명
첫  번째  줄에  자연수  N(1<=N<=10)이  주어집니다

### 🔹 출력 설명
첫  번째  줄부터  각  줄에  하나씩  부분집합을  아래와  출력예제와  같은  순서로  출력한다. 단  공집합은  출력하지  않습니다

### 🔹 입력예제 1
3

### 🔹 출력 예제 1
1  2  3  

1  2  

1  3

1

2  3

2

3



----

##  📌 풀이

![image](https://user-images.githubusercontent.com/28912774/120875709-2f34b500-c5e8-11eb-98a7-3132b0e7ad9c.png)


![image](https://user-images.githubusercontent.com/28912774/120875712-322fa580-c5e8-11eb-8a5c-f51ec585ae5f.png)


```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(n) {
      let answer= [];
      let ch = Array.from({length: n + 1}, () => 0); // check arr 생성 길이가 4인 모두가 0이 된거임
      function DFS(v) {
        if(v === n + 1) { // DFS 탐색 종료 될때
          let tmp = ""; 
          for(let i = 1; i <=n; i++) { // n 만큼 반복해서
            if(ch[i] === 1) tmp += i + " "; // ch arr 에서 1이 포함된경우 tmp 의 누적
          }
          if(tmp.length > 0) answer.push(tmp.trim()); // 공란을 제외한 tmp 를 빈칸을 없애서 answer 에 push 
        }
        else {
          ch[v] = 1; // ch arr에 1을 포함시킨 경우
          DFS(v + 1);
          ch[v] = 0; // ch arr에 1을 포함시키지 않은경우
          DFS(v + 1);
        }
      }
      DFS(1);
      return answer;
    }

    console.log(solution(3));
  </script>
</body>
```
