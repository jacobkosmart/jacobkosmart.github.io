---
title: "69.돌다리 건너기 - Dynamic Programming"
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

철수는 학교에 가는데 개울을 만났습니다. 

개울은 N개의 돌로 다리를 만들어 놓았습니다.

철수는 돌 다리를 건널 때 한 번에 한 칸 또는 두 칸씩 또는 세 칸씩 건너뛰면서 돌다리를 건널 수 있습니다.  
 
철수가 개울을 건너는 방법은 몇 가지일까요

![image](https://user-images.githubusercontent.com/28912774/125711509-3bc34c79-ee0b-4cac-8e5e-c4ce58c56e69.png)


### 🔹 입력설명
첫째 줄은 돌의 개수인 자연수 N(3≤N≤45)이 주어집니

### 🔹 출력 설명
첫 번째 줄에 개울을 건너는 방법의 수를 출력합니다

### 🔹 입력예제 1
7

### 🔹 출력 예제 1
81


----

##  📌 풀이

![image](https://user-images.githubusercontent.com/28912774/125713085-d3765689-2819-4218-a37d-8e7710ea66af.png)

```js
function solution(n) {
  let answer = 0;
  let dy = Array.from({ length: n + 2 }, () => 0);
  // 세칸씩 이동하기 때문에 처음 출발 지점에서 dy[3] 지점까지 한번에 갈 수 있는 시점도 같이 초기화 해줘야 함!!
  dy[0] = 1;
  dy[1] = 1;
  dy[2] = 2;
  for (let i = 3; i <= n + 1; i++) {
    dy[i] = dy[i - 3] + dy[i - 2] + dy[i - 1]; // 3칸 까지 갈수 있는 경우의 수
  }
  answer = dy[n + 1];
  return answer;
}

console.log(solution(7));
```
