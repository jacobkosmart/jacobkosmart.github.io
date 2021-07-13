---
title: "68.계단오르기 - Dynamic Programming"
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
철수는 계단을 오를 때 한 번에 한 계단 또는 두 계단씩 올라간다. 

만약 총 4계단을 오른다면 그 방법의 수는 

1+1+1+1,  1+1+2,   1+2+1,   2+1+1,   2+2 로 5가지이다. 

그렇다면 총 N계단일 때 철수가 올라갈 수 있는 방법의 수는 몇 가지인가?


![image](https://user-images.githubusercontent.com/28912774/125372149-5dfb3380-e3bd-11eb-8bcb-1e24df3b331b.png)



### 🔹 입력설명
첫째 줄은 계단의 개수인 자연수 N(3≤N≤45)이 주어집니다.

### 🔹 출력 설명
첫 번째 줄에 올라가는 방법의 수를 출력합니다

### 🔹 입력예제 1
7

### 🔹 출력 예제 1
21


----

##  📌 풀이

![image](https://user-images.githubusercontent.com/28912774/125374198-7c632e00-e3c1-11eb-8927-b4e8bcfb9341.png)
![image](https://user-images.githubusercontent.com/28912774/125374201-7ec58800-e3c1-11eb-9abb-c91b35d8caba.png)
![image](https://user-images.githubusercontent.com/28912774/125374206-81c07880-e3c1-11eb-9dd7-cbda1d19ca81.png)


```js
function solution(n) {
  let answer = 0;
  let dy = Array.from({ length: n + 1 }, () => 0); // dynamic arr 생성 (길이는 n 까지니까 n + 1 , 모두 일단 0으로 초기화 시켜 줌)
  dy[1] = 1; // 직관적으로 알수 있는 부분은 값을 넣어 줌
  dy[2] = 2;
  for (let i = 3; i <= n; i++) {
    dy[i] = dy[i - 2] + dy[i - 1]; // 관계 식을 만들어서 사용하면 쉽게 구할 수 있음
  }
  answer = dy[n];
  return answer;
}

console.log(solution(7));
```
