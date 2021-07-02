---
title: "61.경로 탐색 (노드개수가 적을 때) -  그래프, DFS "
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
방향그래프가  주어지면  1번  정점에서  N번 정점으로  가는  모든  경로의 가지  수를  출력하는  프로그램을 작성하세요. 

아래 그래프에서 1번 정점에서 5번 정점으로 가는 가지 수는

![image](https://user-images.githubusercontent.com/28912774/124201289-a17ab580-db12-11eb-9212-801b1b6010de.png)



### 🔹 입력설명
첫째 줄에는 정점의 수 N(1<=N<=20)와 간선의 수 M가 주어진다. 

그 다음부터 M줄에 걸쳐 연결정보가 주어진다

### 🔹 출력 설명
총 가지수를 출력한다

### 🔹 입력예제 1
5 9

1 2 

1 3

1 4 

2 1 

2 3 

2 5 

3 4 

4 2 

4 5

### 🔹 출력 예제 1
6


----

##  📌 풀이

![image](https://user-images.githubusercontent.com/28912774/124203668-346a1e80-db18-11eb-83ed-dd095a372374.png)

```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(n, arr) {
      let answer = 0;
      let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0)); // 인접화를 위한 2차열 배열 생성 1번 index 번호 부터 사용하기 때문에 n + 1 개의 행, 열의 2차월 배열을 만듬
      let ch = Array.from({length: n + 1}, () => 0); // 노드를 방문 했냐 안햇냐를 check 하기 위한 배열 생성
      let path = [];
      for (let [a, b] of arr) { // arr 탐색를 값 1개 씩 탐색하는것
        console.log(a, b)
        graph[a][b] = 1 // 방향 그래프에서 graph arr 에 1로 체크 거는것 : 입력 받은 가지의 수를 
      }

      function DFS(v) {
        if(v === n ) {
          answer++;
          console.log(path);
        } 
        else {
          for(let i = 1; i <= n; i++) {
            if(graph[v][i] === 1 && ch[i] === 0) { // graph 배열에 1로 체크 되어 있고, check arr 에 0으로 체크 되어 있을경우(이거는 한번도 안간경우)
              ch[i] = 1; // 한번 왔다고 ch 걸어 줘야 되고
              path.push(i) // path 출력을 위해서 path arr 이 push 해줌
              DFS(i); // 다시 재귀로 다음 번호로 for loop 돌어서 v === n 까지의 경로를 탐색
              ch[i] = 0; // 탐색 종료 후, back 을 하기 전에 check 된것을 다시 0 으로 초기화 하고 back 해줘야 함
              path.pop() // check 를 풀었으니까 path 에서도 저장된 값 pop 해서 빼내야 됨
            }
          }
        }
      }
      path.push(1)
      ch[1] = 1; // DFS 돌기 전에 check arr 에 1은 방문했다고 check 를 걸어 줘야 재귀 돌때 다시 1로 돌아 오지 않음
      DFS(1);
      return answer;
    }

    let arr = [
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 1],
      [2, 3],
      [2, 5],
      [3, 4],
      [4, 2],
      [4, 5]
    ];
    console.log(solution(5, arr));
  </script>
</body>

```
