---
title: "64.이진트리 넓이우선탐색 - BFS "
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

아래 그림과 같은 이진트리를 넓이 우선 탐색해 보세요.

![image](https://user-images.githubusercontent.com/28912774/124864876-a220b980-dff4-11eb-82ea-2f652c535840.png)




----

##  📌 풀이

![image](https://user-images.githubusercontent.com/28912774/124868929-7c4ae300-dffb-11eb-9ff8-46dcca992f0b.png)
![image](https://user-images.githubusercontent.com/28912774/124868938-7ead3d00-dffb-11eb-9e2e-ba4d47eacf71.png)
![image](https://user-images.githubusercontent.com/28912774/124868949-810f9700-dffb-11eb-90e8-427ba99c968b.png)


```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution() {
      let answer = "";
      let queue = [];
      queue.push(1); // queue 에 1번 node 넣기
      while(queue.length) { // queue 의 길이가 0일 때 while 문 종료
        let v = queue.shift(); //  v 는 queue 의 가장 앞에 있는 node 1 꺼내는것 
        answer += v + " "; // 꺼내지는 node 를 answer 에 누적 시킴
        for(let nv of [v * 2, v * 2 + 1]) { // node 에서 이진트리 검색으로 시작
          if(nv > 7 ) continue; // continue 는 nv 가 7 보다 크게 되면 push 안하고 for loop 돈다는 것임
          queue.push(nv)
        } 
      }
      return answer;
    }

    console.log(solution());
  </script>
</body>

```
