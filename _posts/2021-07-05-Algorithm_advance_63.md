---
title: "63.미로 탐색 - DFS "
excerpt: "Algorithm (JS)_Advance"

categories:
  - Algorithm_Advance
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---

---

# 미로 탐색 - DFS

##  🔍 문제 
7*7 격자판  미로를 탈출하는 경로의 가지수를 출력하는 프로그램을 작성하세요.

출발점은 격자의 (1, 1)  좌표이고, 탈출 도착점은 (7, 7)좌표이다.

격자판의  1은 벽이고, 0은 통로이다. 격자판의 움직임은 상하좌우로만 움직인다. 

미로가 다음과 같다

![image](https://user-images.githubusercontent.com/28912774/124402564-fbc28300-dd6b-11eb-8fab-1c9690bccc5a.png)

위의 지도에서 출발점에서 도착점까지 갈 수 있는 방법의 수는 8가지이다

### 🔹 입력설명
7*7 격자판의 정보가 주어집니다.

### 🔹 출력 설명
첫 번째 줄에 경로의 가지수를 출력한다

### 🔹 입력예제 1
0 0 0 0 0 0 0

0 1 1 1 1 1 0

0 0 0 1 0 0 0

1 1 0 1 0 1 1

1 1 0 0 0 0 1

1 1 0 1 1 0 0

1 0 0 0 0 0 0

### 🔹 출력 예제 1
8


----

##  📌 풀이

![image](https://user-images.githubusercontent.com/28912774/124420808-19f3a780-dd9b-11eb-8a04-18777e902137.png)


```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(board) {
      let answer = 0;
      let dx = [-1, 0, 1, 0];
      let dy = [0, 1, 0, -1];
      function DFS(x, y) {
        if(x === 6 && y === 6) answer++; // [6, 6] 도착 했을때 answer 에 cnt ++
        else {
          for(let k = 0; k < 4; k++) {
            let nx = x + dx[k];
            let ny = y + dy[k];
            if(nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6 && board[nx][ny] === 0) { // boarder 가 넘어 가지 않은 범위 또는 board에서 0 일때 4방향으로 이동 탐색 
              board[nx][ny] = 1; // 1로 check 를 걸고 가야지 다시 돌아오지 않음
              DFS(nx, ny); // 좌표 이동
              board[nx][ny] = 0; // 다시 back 할때, 0 으로 다시 check 를 풀어줘야 함
            }
          }
        }
      }
      board[0][0] = 1;
      DFS(0, 0);
      return answer;
    }

    let arr = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [1, 1, 0, 1, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 1],
      [1, 1, 0, 1, 1, 0, 0],
      [1, 0, 0, 0, 0, 0, 0]
    ];

    console.log(solution(arr));
  </script>
</body>
```
