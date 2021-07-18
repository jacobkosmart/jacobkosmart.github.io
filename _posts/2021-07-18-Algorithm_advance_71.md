---
title: "71.동전교환 (냅색 알고리즘) - Dynamic Programming"
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
다음과 같이 여러 단위의 동전들이 주어져 있을때 거스름돈을 가장 적은 수의 동전으로 교환해주려면 어떻게 주면 되는가? 

각 단위의 동전은 무한정 쓸 수 있다.


### 🔹 입력설명
첫 번째 줄에는 동전의 종류개수 N(1<=N<=12)이 주어진다. 

두 번째 줄에는 N개의 동전의 종류가 주어지고, 그 다음줄에 거슬러 줄 금액 M(1<=M<=500)이 주어진다. 

각 동전의 종류는 100원을 넘지 않는다

### 🔹 출력 설명   
첫 번째 줄에 거슬러 줄 동전의 최소개수를 출력한다.

### 🔹 입력예제 1
3

1 2 5

15 

### 🔹 출력 예제 1
3


----

##  📌 풀이

![image](https://user-images.githubusercontent.com/28912774/126052196-85c35e5a-4abd-44eb-bcad-22abda9ecc56.png)


```js
function solution(m, coin){  
  let answer = 0;
  let dy = Array.from({ length: m + 1 }, () => 1000); // dy arr 생성 길이가 m+1 에 초기화는 큰값인 1000으로 하기
  dy[0] = 0; // 처음은 동전이 없기 때문에 0으로 초기화
  for (let i = 0; i < coin.length; i++) { // coin 의 길이 만큼 i for 문 시작
    for (let j = coin[i]; j <= m; j++) { // dy arr 에 각 코인으로 들어 오는 수 만큼 for loop 시작
      dy[j]= Math.min(dy[j], dy[j- coin[i]] + 1) // dy arr 에서 최소값을 구함
    }
    console.log(dy)
  }
  answer = dy[m];
  return answer;
  
}

let arr=[1, 2, 5];
console.log(solution(15, arr));

```
