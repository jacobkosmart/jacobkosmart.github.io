---
title: "44.마구간 정하기 - 결정 알고리즘"
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
N개의 마구간이 수직선상에 있습니다. 각 마구간은 x1, x2, x3, ......, xN의 좌표를 가지며, 마구간간에 좌표가 중복되는 일은 없습니다.  

현수는 C마리의 말을 가지고 있는데, 이 말들은 서로 가까이 있는 것을 좋아하지 않습니다.   

각 마구간에는 한 마리의 말만 넣을 수 있고, 가장 가까운 두 말의 거리가 최대가 되게 말을 마구간에 배치하고 싶습니다. 

C마리의 말을 N개의 마구간에 배치했을 때 가장 가까운 두 말의 거리가 최대가 되는 그 최대값을 출력하는 프로그램을 작성하세요.


### 🔹 입력설명
첫 줄에 자연수 N(3<=N<=200,000)과 C(2<=C<=N)이 공백을 사이에 두고 주어집니다.둘째 줄에 마구간의 좌표 xi(0<=xi<=1,000,000,000)가 차례로 주어집니다.

### 🔹 출력 설명
첫 줄에 가장 가까운 두 말의 최대 거리를 출력하세요.

### 🔹 입력예제 1
5 3  

1 2 8 4 9

### 🔹 출력 예제 1
3


----

##  📌 풀이

![11](https://user-images.githubusercontent.com/28912774/120126536-8e18b980-c1f7-11eb-8726-570b579f0b93.jpg)


![22](https://user-images.githubusercontent.com/28912774/120126537-8f49e680-c1f7-11eb-8fa4-c60c4b4bec4d.jpg)


```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function count(stable, dist) {
      let cnt = 1, ep = stable[0]; // cnt 는 무조건 1개는 되니까 1로 시작하고, end point 경우에는 arr 의 가장 앞에 부분을 설정함
      for(let i=1; i<stable.length; i++) { // i는 1부터 arr 끝까지 검색 시작
        if(stable[i] - ep >= dist) { // stable 좌표에 말을 넣을 수 있느냐 없느냐를 체크 하는것, 가장 가까운 말의 두 거리보다 가까워야 하는것 크거나 같아야지 마구간에다가 말을 배치 할 수 있는것
          cnt++; // 말의 개수 증가 
          ep = stable[i];
        }
      }
      return cnt; 
    }
    function solution(c, stable) {
      let answer;
      stable.sort((a, b) => a - b); // 숫자 오름 차순 정렬
      let lt = 1; 
      let rt = stable[stable.length - 1 ]; // zero base 이니까 -1 해줌
      while(lt <= rt) { // 이분 검색 시작  
        let mid = parseInt((lt + rt) / 2); // mid 값 정하기
        if(count(stable, mid) >= c) { // mid 라는 거리가 가장 가까운 2 말의 거리를 만드는 것, c 마리 이상이 같거나 커야 true 가 됨
          answer = mid;
          lt = mid + 1; // 더 최대인 값을 찾기 위해서 lt 이동
        }
        else rt = mid  - 1;
      }
      return answer;
    }
    let arr = [1, 2, 8, 4, 9];
    console.log(solution(3, arr));
  </script>
</body>
```
