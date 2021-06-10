---
title: "50.바둑이 승차 - DFS"
excerpt: "Algorithm (JS)_Advance"

categories:
  - Algorithm_Advance
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---

---



## 🔍 문제

철수는 그의 바둑이들을 데리고 시장에 가려고 한다.

그런데 그의 트럭은 C킬로그램 넘게 태울수가 없다.

철수는 C를 넘지 않으면서 그의 바둑이들을 가장 무겁게 태우고 싶다.

N마리의 바둑이와 각 바둑이의 무게 W가 주어지면, 철수가 트럭에 태울 수 있는 가장 무거운 무게를 구하는 프로그램을 작성하세요

### 🔹 입력설명

첫 번째 줄에 자연수 C(1<=C<=100,000,000)와 N(1<=N<=30)이 주어집니다.

둘째 줄부터 N마리 바둑이의 무게가 주어진다

### 🔹 출력 설명

첫 번째 줄에 가장 무거운 무게를 출력한다.

### 🔹 입력예제 1

259 5

81

58

42

33

61

### 🔹 출력 예제 1

242

---

## 📌 풀이

![image](https://user-images.githubusercontent.com/28912774/121445520-97124380-c9cc-11eb-9eb1-4a40dcbbdb33.png)



```html
<head>
  <meta charset="UTF-8" />
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(c, arr) {
      let answer = Number.MIN_SAFE_INTEGER;
      let n = arr.length;

      function DFS(l, sum) {
        if (sum > c) return; // c 트럭의 무게에 sum 을 넘어가서 초과 하면 return 해서 재귀함수 종료 시킴
        if (l === n) {
          answer = Math.max(answer, sum); // answer 와 sum 의 최대값을 비교해서 answer 로 변환
        } else {
          DFS(l + 1, sum + arr[l]); // 하나씩 level 증가 할때, 처음 수가 포함될 경우 arr 값을 누적
          DFS(l + 1, sum); // 하나씩 증가, 처음 수가 포함되지 않은 경우의 수
        }
      }
      DFS(0, 0);
      return answer;
    }
    let arr = [81, 58, 42, 33, 61];
    console.log(solution(259, arr));
  </script>
</body>
```
