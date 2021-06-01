---
title: "45.재귀함수 - 중요"
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
자연수  N이  입력되면  재귀함수를  이용하여  1부터  N까지를  출력하는  프로그램을  작성하세요


### 🔹 입력설명
첫  번째  줄은  정수  N(3<=N<=10)이  입력된다

### 🔹 출력 설명
첫째  줄에  출력한다.

### 🔹 입력예제 1
3

### 🔹 출력 예제 1
1 2 3


----

##  📌 풀이

![11](https://user-images.githubusercontent.com/28912774/120259005-0fdb1680-c2ce-11eb-8806-7779dacedf60.jpg)

![22](https://user-images.githubusercontent.com/28912774/120259007-110c4380-c2ce-11eb-89ff-02f4407f98de.jpg)

![33](https://user-images.githubusercontent.com/28912774/120259010-123d7080-c2ce-11eb-906c-ba4800f1329f.jpg)



```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(n) {
      function DFS(l) { // 재귀함수 시작 (매개변수는 l) -> 자기 자신을 호출하는것을 제귀함수 라고 함 
        if(l === 0) return; // DFS(0) 이 되면 return, 함수를 종료 시킴 
        else {
          DFS(l - 1); // 1개씩 감소
          console.log(l) 
        }
      }
      DFS(n) // DFS 함수 실행
    }

    solution(3);
  </script>
</body>
```
