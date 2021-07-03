---
title: "62.경로 탐색 - 인접리스트(노드개수가 많을 때) -  그래프, DFS "
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

![image](https://user-images.githubusercontent.com/28912774/124338319-1e289500-dbe2-11eb-9053-2cf105b9baf6.png)




### 🔹 입력설명
첫째 줄에는 정점의 수 N(1<=N<=20)와 간선의 수 M가 주어진다.

그 다음부터 M줄에 걸쳐 연결정보가 주어진다.

### 🔹 출력 설명
총 가지수를 출력한다.

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

![image](https://user-images.githubusercontent.com/28912774/124340118-df004100-dbed-11eb-9cb5-5f23b1619370.png)

```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(n, arr) {
      let answer = 0;
      let graph = Array.from(Array(n + 1), () => Array()); // 행은 node 의 개수 + 1 개 만큼 하고 열은 그냥 빈 자리로 남겨둠
      let ch = Array.from({length : n + 1}, () => 0);
      let path = [];
      for(let [a, b] of arr) {
        graph[a].push(b) // 인접 리스트가 됨
      }
      function DFS(v) {
        if (v === n) {
          answer ++;
          console.log(path)
        }
        else {
          for(let i = 0; i <= graph[v].length; i++) { // 그래프 행의 길이만큼 for loop 돌면 됨
            if(ch[graph[v][i]] === 0) {
              ch[graph[v][i]] = 1;
              path.push(graph[v][i]);
              DFS(graph[v][i]);
              ch[graph[v][i]] = 0;
              path.pop();
            }
          }
        }
      }
      path[0] = 1;
      ch[1] = 1;
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
```
