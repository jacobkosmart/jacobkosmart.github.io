---
title:  "07.봉우리 - 1,2차원 배열 탐색"
excerpt: "Algorithm (JS)_Advance"

categories:
  - Algorithm_Advance
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---


# 봉우리

##  🔍 문제 
지도 정보가 N*N 격자판에 주어집니다. 각 격자에는 그 지역의 높이가 쓰여있습니다. 각 격자
판의 숫자 중 자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역입니다. 봉우리 지역이 몇 개있는 지 알아내는 프로그램을 작성하세요.   
격자의 가장자리는 0으로 초기화 되었다고 가정한다.   
만약 N=5 이고, 격자판의 숫자가 다음과 같다면 봉우리의 개수는 10개입니다.  

![image](https://user-images.githubusercontent.com/28912774/116320583-76fb3c00-a7f3-11eb-8f3f-08ceec7b821b.png)


### 🔹 입력설명
첫 줄에 자연수 N이 주어진다.(1<=N<=50)   
두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는다.


### 🔹 출력 설명
봉우리의 개수를 출력하세요.

### 🔹 입력예제 1

5  
5 3 7 2 3  
3 7 1 6 1  
7 2 5 3 4  
4 3 6 4 1  
8 7 3 5 2  

### 🔹 출력 예제 1
10


----

##  📌 풀이
4방향 탐색 문제
![노트 2021  4  27](https://user-images.githubusercontent.com/28912774/116326272-ff330e80-a7fe-11eb-8fc5-6abcc21a4d95.jpg)

```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(arr) {
      let answer = 0;
      let n = arr.length;
      let dx = [-1, 0, 1, 0]; // (행) 12시, 3시, 6시, 9시 방향을 가리키는 배열
      let dy = [0, 1, 0, -1]; // (행) 12시, 3시, 6시, 9시 방향을 가리키는 배열
      for (let i = 0; i < n; i++) { 
        for (let j = 0; j < n; j++) {
          let flag = 1; // 일단 flag (봉우리가 true 임을 설정)
          for (let k = 0; k < 4; k++) { // 4방향 탐색 for 문
            let nx = i + dx[k]; // 각방향의 index 설정 (행)
            let ny = j + dy[k]; // 각방향의 index 설정 (열)
            // 가장자리랑 비교하면 무조건 크기 때문에 범위설정 && 각 4방향과 비교해서 큰 값이 1개라도 있으면,
            if (nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] >= arr[i][j]) {
              flag = 0; // flag 가 false 처리 
              break // false 가 되면 바로 for 문 탈출
            }
          }
          if(flag) answer ++ // flag 가 true 일 경우 count +1 증가
        }
      }
      return answer;
    }
    let arr = [
      [5, 3, 7, 2, 3],
      [3, 7, 1, 6, 1],
      [7, 2, 5, 3, 4],
      [4, 3, 6, 4, 1],
      [8, 7, 3, 5, 2]
    ];
    console.log(solution(arr));
  </script>
</body>
```
