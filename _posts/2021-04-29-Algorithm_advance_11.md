---
title:  "11.가장 짧은 문자거리 - 문자열 탐색"
excerpt: "Algorithm (JS)_Advance"

categories:
  - Algorithm_Advance
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---


# 가장 짧은 문자거리

##  🔍 문제 
한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출력하는 프로그램을 작성하세요.


### 🔹 입력설명
첫 번째 줄에  문자열 s와 문자 t가 주어진다. 문자열과 문자는 소문자로만 주어집니다.  
문자열의 길이는 100을 넘지 않는다.  

### 🔹 출력 설명
첫 번째 줄에 각 문자열 s의 각 문자가 문자 t와 떨어진 거리를 순서대로 출력한다.

### 🔹 입력예제 1
teachermode e

### 🔹 출력 예제 1
1 0 1 2 1 0 1 2 2 1 0


----

##  📌 풀이

![image](https://user-images.githubusercontent.com/28912774/116487884-ff4d1000-a8cb-11eb-8220-c6e078809ae5.png)



```html
<html>

<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(s, t) {
      let answer = [];
      let p = 100; // 임의의 최대값 설정
      // 오른쪽 방향으로의 for 문 탐색
      for(let x of s) {
        if(x === t) {
          p = 0;
          answer.push(p); //t 를 만나면 0 으로 초기화 하는것임
        } else {
          p++;
          answer.push(p);
        }
      }
      p = 100; // p의 다시 초기화
      // 왼쪽 방향으로의 for 문 탐색
      for(let i = s.length -1; i >= 0; i--) { // (맨마지막 index 설정; i가 0이 될때까지; i가 하나씩 줄어듬) -> 그러면 방향이 왼쪽으로 for문임
        if(s[i] === t) p = 0; // 같은때는 그냥 p 만 초기화, push는 이미 오른쪽 방향일때 했기 때문에 그냥 초기화만 해줌 (또 push 하면 최종 값에서 0이 늘어남)
        else {
          p++; // p가 1씩 증가함
          answer[i] = Math.min(answer[i], p) // 오른쪽 for문과 비교해서 최소값이 되는것만 return 함
        }
      }
      return answer;
    }

    let str = "teachermode";
    console.log(solution(str, 'e'));
  </script>
</body>

</html>
```
