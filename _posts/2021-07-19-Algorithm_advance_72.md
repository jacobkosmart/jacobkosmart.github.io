---
title: "71.최대점수 구하기 (냅색 알고리즘) - Dynamic Programming"
excerpt: "Algorithm (JS)_Advance"

categories:
  - Algorithm_Advance
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---

---

# 최대점수 구하기 (냅색 알고리즘) - Dynamic Programming

##  🔍 문제 
이번 정보올림피아드대회에서 좋은 성적을 내기 위하여 현수는 선생님이 주신 N개의 문제를 풀려고 합니다. 

각 문제는 그것을 풀었을 때 얻는 점수와 푸는데 걸리는 시간이 주어지게 됩니다. 

제한시간 M안에 N개의 문제 중 최대점수를 얻을 수 있도록 해야 합 니다. 

(해당문제는 해당시간이 걸리면 푸는 걸로 간주한다, 한 유형당 한개만 풀 수 있습니다)


### 🔹 입력설명
첫 번째 줄에 문제의 개수N(1<=N<=20)과 제한 시간 M(10<=M<=300)이 주어집니다. 두 번째 줄부터 N줄에 걸쳐 문제를 풀었을 때의 점수와 푸는데 걸리는 시간이 주어집니다.

### 🔹 출력 설명
첫 번째 줄에 제한 시간안에 얻을 수 있는 최대 점수를 출력합니다.

### 🔹 입력예제 1
5 20

10 5

25 12

15 8

6 3

7 4

### 🔹 출력 예제 1
41


----

##  📌 풀이

![image](https://user-images.githubusercontent.com/28912774/126085505-6abafc91-4df8-4aa4-b31b-89a36ce7f8a7.png)
![image](https://user-images.githubusercontent.com/28912774/126085508-d83d402f-e43a-4462-8286-64a71b8e36b6.png)
![image](https://user-images.githubusercontent.com/28912774/126085511-f7ca3376-81a1-41de-a180-ed279ec31f05.png)


```js
function solution(m, arr) {
  let answer = 0;
  let dy = Array.from({ length: m + 1 }, () => 0);
  for (let i = 0; i < arr.length; i++) {
    let ps = arr[i][0]; // problem score 2차원 배열이 넘어 오기 때문에 앞에꺼 지정해줌
    let pt = arr[i][1]; // problem time 걸린는 시간
    for (let j = m; j >= pt; j--) {
      dy[j] = Math.max(dy[j], dy[j - pt] + ps); // dy에서 최대값 넣기임
    }
  }
  answer = dy[m];
  return answer;
}
let arr=[[10, 5], [25, 12], [15, 8], [6, 3], [7, 4]];
console.log(solution(20, arr));
```
