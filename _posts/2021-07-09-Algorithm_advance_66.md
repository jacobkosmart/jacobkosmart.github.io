---
title: "66.섬나라 아일랜드 - DFS"
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
N*N의  섬나라  아일랜드의  지도가  격자판의  정보로  주어집니다.  

각  섬은  1로  표시되어  상하좌우와  대각선으로  연결되어  있으며,  0은  바다입니다.  

섬나라  아일랜드에  몇  개의  섬이  있는지 구하는 프로그램을 작성하세요


![image](https://user-images.githubusercontent.com/28912774/125146286-fe541c80-e15f-11eb-89e0-22c2128096a6.png)


만약 위와 같다면


### 🔹 입력설명
첫 번째 줄에 자연수 N(3<=N<=20)이 주어집니다.

두 번째 줄부터 격자판 정보가 주어진다

### 🔹 출력 설명
첫 번째 줄에 섬의 개수를 출력한다.

### 🔹 입력예제 1
7

1 1 0 0 0 1 0

0 1 1 0 1 1 0

0 1 0 0 0 0 0

0 0 0 1 0 1 1

1 1 0 1 1 0 0

1 0 0 0 1 0 0

1 0 1 0 1 0 0

### 🔹 출력 예제 1
5

----

##  📌 풀이

![image](https://user-images.githubusercontent.com/28912774/125147958-e97c8680-e169-11eb-989d-17adda2cbccc.png)

```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(board) {
      let answer = 0;
      let n = board.length;
      let dx = [-1, -1, 0, 1, 1, 1, 0, -1]; // x축으로 상하좌우대각선 방향 8방향 시계방향이동 arr
      let dy = [0, 1, 1, 1, 0, -1, -1, -1]; // y축으로 상하좌우대각선 방향 8방향 시계방향이동 arr

      function DFS(x, y) { // 출발지점이 넘어오면 재귀 탐색 시작
        board[x][y] = 0; // 이동하기 전에 탐색된 곳 0으로 초기화 해야 다시 돌아 오지 않음
        for(let k = 0; k < 8; k++) { // 8 방향으로 탐색 시작
          let nx = x + dx[k];
          let ny = y + dy[k];
          if(nx >=0 && nx < n && ny >= 0 && ny < n &&  board[nx][ny] === 1) { // box 경계선 설정 및 다음 탐색 지점이 땅일 경우에만 탐색
            DFS(nx, ny); // 다음 땅의 지점 재귀 탐색 근데 나중에 다 탐색하고 8방향에 땅이 없는경우에는 if 문이 false 가 되기 때문에 재귀 자동 종료
          }
        }
      }
      // 2차원 배열 탐색 시작
      for(let i = 0; i < n; i++) { 
        for(let j = 0; j < n; j++ ) {
          if(board[i][j] === 1) { // 탐색 중에 섬을 발견 했을 경우
            answer++; // 섬을 하나 발견 한거기 때문에 answer에 1누적
            DFS(i, j);
          }
        }
      }
      return answer;
    }
    let arr = [
      [1, 1, 0, 0, 0, 1, 0],
      [0, 1, 1, 0, 1, 1, 0],
      [0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 1, 1],
      [1, 1, 0, 1, 1, 0, 0],
      [1, 0, 0, 0, 1, 0, 0],
      [1, 0, 1, 0, 1, 0, 0]
    ];

    console.log(solution(arr));
  </script>
</body>
```
