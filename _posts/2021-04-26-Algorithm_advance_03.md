---
title:  "03.가위 바위 보 - 1,2차원 배열 탐색"
excerpt: "Algorithm (JS)_Advance"

categories:
  - Algorithm_Advance
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---

# 가위 바위 보

##  🔍 문제 
A, B 두 사람이 가위바위보 게임을 합니다. 총 N번의 게임을 하여 A가 이기면 A를 출력하고, B가 이기면 B를 출력합니다. 비길 경우에는 D를 출력합니다.   

가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보로 정하겠습니다.  

예를 들어 N=5이면
![image](https://user-images.githubusercontent.com/28912774/116014748-cdd90800-a671-11eb-86b6-39b1d25ac7bd.png)


두 사람의 각 회의 가위, 바위, 보 정보가 주어지면 각 회를 누가 이겼는지 출력하는 프로그램을 작성하세요.

### 🔹 입력설명
첫 번째 줄에 게임 횟수인 자연수 N(1<=N<=100)이 주어집니다.  
두 번째 줄에는 A가 낸 가위, 바위, 보 정보가 N개 주어집니다.  
세 번째 줄에는 B가 낸 가위, 바위, 보 정보가 N개 주어집니다.  

### 🔹 출력 설명
각 줄에 각 회의 승자를 출력합니다. 비겼을 경우는 D를 출력합니다.

### 🔹 입력예제 1
5  
2 3 3 1 3  
1 1 2 2 3  

### 🔹 출력 예제 1
A  
B  
A  
B  
D  

----

##  📌 풀이
`Array` 2개를 각각` a, b` 라고 할때, `a[i], b[i]` 를 비교 하면서 `a`에 `1, 2, 3` 일 경우 `b` 에` 3, 1, 2 `일경우` A`가 이기는거고 나머지는 `B`가 이기게` return` , 비교 숫자가 같은경우는 `D return`
- 경우를 따질때는 기준을 어느것으로 잡고 할 것인가를 먼저 잘 파악해야 한다

```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(a, b) {
      let answer = "";
      for (let i = 0; i < a.length; i++) {
        if (a[i] === b[i]) answer += "D";
        else if (a[i] === 1 && b[i] === 3 ) answer += "A";
        else if (a[i] === 2 && b[i] === 1 ) answer += "A";
        else if (a[i] === 3 && b[i] === 2 ) answer += "A";
        else answer += "B";
      }
      return answer;
    }

    let a = [2, 3, 3, 1, 3];
    let b = [1, 1, 2, 2, 3];
    console.log(solution(a, b));
  </script>
</body>
```
