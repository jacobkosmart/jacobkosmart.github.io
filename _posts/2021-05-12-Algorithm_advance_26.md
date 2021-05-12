---
title: "26.올바른 괄호 - Stack"
excerpt: "Algorithm (JS)_Advance"

categories:
  - Algorithm_Advance
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---

---

# 올바른 괄호

##  🔍 문제 
괄호가 입력되면 올바른 괄호이면 “YES", 올바르지 않으면 ”NO"를 출력합니다.  

(())() 이것은 괄호의 쌍이 올바르게 위치하는 거지만, (()()))은 올바른 괄호가 아니다.


### 🔹 입력설명
첫 번째 줄에 괄호 문자열이 입력됩니다. 문자열의 최대 길이는 30이다. 

### 🔹 출력 설명
첫 번째 줄에 YES, NO를 출력한다

### 🔹 입력예제 1
(()(()))(()

### 🔹 출력 예제 1
NO


----

##  📌 풀이

![11](https://user-images.githubusercontent.com/28912774/117900222-b8b3d880-b303-11eb-9335-6f43de6b23a0.jpg)

![22](https://user-images.githubusercontent.com/28912774/117900225-ba7d9c00-b303-11eb-9f44-bfb0d1a320e5.jpg)

![33](https://user-images.githubusercontent.com/28912774/117900229-bc475f80-b303-11eb-9a50-292d65911798.jpg)


```html

<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(s) {
      let answer = "YES"
      let stack = [];
      for(let x of s) { 
        if(x === '(') stack.push(x); // x 가 ( 일때는 stack 에 push 넣음
        else { // 아닐경우 ) 괄호 일경우
          if(stack.length === 0) return "NO" // 뺄려고 했는데 stack 이 비어 있으면 바로 No return
          stack.pop(); // stack 에서 최근에 더한 ( 를 빼줌
        }
      }
      if(stack.length > 0) return "NO"; // ( 가 많은 상황 -> for loop 를 다 끝나도 stack 에 뭔가 남아 있으면 No return
      return answer;
    }

    let a = "(()(()))(()";
    console.log(solution(a));
  </script>
</body>
```
