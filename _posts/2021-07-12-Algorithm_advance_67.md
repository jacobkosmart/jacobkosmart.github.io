# 섬나라 아일랜드 - DFS

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

![image](https://user-images.githubusercontent.com/28912774/125214412-fcba5e00-e2f1-11eb-87a8-e41629bd3301.png)


![image](https://user-images.githubusercontent.com/28912774/125214419-0217a880-e2f2-11eb-9fbc-d0ffc511af05.png)

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
      let queue = [];
      let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
      let dy = [0, 1, 1, 1, 0, -1, -1, -1];
      for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) { // 2중 for 문 탐색
          if(board[i][j] === 1) { // 만약 섬을 발견 했으면
            board[i][j] = 0; // 발견한 지점 0 으로 check (다시 안돌아 오게 하려고..)
            queue.push([i, j]); // 출발한 시작점 을 queue push 함
            answer ++; // 섬 탐색하기전에 하나 발견한거니까 answer 에 + 1
            while(queue.length) { // queue 비어있을때 거짓이 때문에 while 문 종료
              let [x, y] = queue.shift(); // queue 에서 꺼내서 x, y 로 할당
              for(let k = 0; k < 8; k++) { // queue 에서 꺼낸 지점으로 부터 8방향 탐색 시작
                let nx = x + dx[k];
                let ny = y + dy[k];
                if(nx >=0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) { // board 안에 지점 및 다음 지점이 섬일경우
                  board[nx][ny] = 0; // 다음지점 먼저 0으로 체크를 걸고
                  queue.push([nx, ny]); // queue 에다가 넣기
                }
              }
            }
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
