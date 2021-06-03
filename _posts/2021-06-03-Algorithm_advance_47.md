---
title: "47.이진트리 순회 - DFS (깊이우선탐색)"
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
아래 그림과 같은 이진트리를 전위순회와 후위순회를 연습해보세요.

![image](https://user-images.githubusercontent.com/28912774/120569404-ce26a900-c450-11eb-8be6-c72bae145569.png)


전위순회  출력  :1  2  4  5  3  6  7

중위순회  출력  : 4  2  5  1  6  3  7

후위순회  출력  : 4  5  2  6  7  3  1



----

##  📌 풀이


![11](https://user-images.githubusercontent.com/28912774/120578257-77c16680-c460-11eb-9c66-957f0a988d52.jpg)


![22](https://user-images.githubusercontent.com/28912774/120578259-78f29380-c460-11eb-8c58-eaf568d603b3.jpg)


![33](https://user-images.githubusercontent.com/28912774/120578262-7a23c080-c460-11eb-9f4a-8d202c1cad40.jpg)


- 전위 순회 

```html
<body>
  <script>
    function solution(v) {
      let answer;
      function DFS(v) {
        if(v > 7) return;
        else {
          console.log(v); // 출력을 제일 위에다가 하면 전위 순회가 됨
          DFS(v * 2); // 왼쪽 자식 실행
          DFS(v * 2 + 1); // 오른쪽 자식 실행
        }
      }
      DFS(v);
      return answer;
    }

    console.log(solution(1));
  </script>
</body>
```


- 중위 순회 

```html
<body>
  <script>
    function solution(v) {
      let answer;
      function DFS(v) {
        if(v > 7) return;
        else {
          DFS(v * 2); // 왼쪽 자식 실행
          console.log(v); // 출력 을 중간에 하게 되면 중위순회가 됨
          DFS(v * 2 + 1); // 오른쪽 자식 실행
        }
      }
      DFS(v);
      return answer;
    }

    console.log(solution(1));
  </script>
</body>
```


- 후위 순회 

```html
<body>
  <script>
    function solution(v) {
      let answer;
      function DFS(v) {
        if(v > 7) return;
        else {
          DFS(v * 2); // 왼쪽 자식 실행
          DFS(v * 2 + 1); // 오른쪽 자식 실행
          console.log(v); // 출력을 마지막에 하게 되면 후위순회가 됨
        }
      }
      DFS(v);
      return answer;
    }

    console.log(solution(1));
  </script>
</body>
```