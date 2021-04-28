---
title:  "09.유효한 팰린드롬 - 문자열 탐색"
excerpt: "Algorithm (JS)_Advance"

categories:
  - Algorithm_Advance
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---


# 유효한 팰린드롬

##  🔍 문제 
앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 팰린드롬이라고 합니다.  
문자열이 입력되면 해당 문자열이 팰린드롬이면 "YES", 아니면 “NO"를 출력하는 프로그램을작성하세요.  
단 회문을 검사할 때 알파벳만 가지고 회문을 검사하며, 대소문자를 구분하지 않습니다.  
알파벳 이외의 문자들의 무시합니다.


### 🔹 입력설명
첫 줄에 정수 길이 100을 넘지 않는 공백이 없는 문자열이 주어집니다.  

### 🔹 출력 설명
첫 번째 줄에 팰린드롬인지의 결과를 YES 또는 NO로 출력합니다.  

### 🔹 입력예제 1
found7, time: study; Yduts; emit, 7Dnuof 

### 🔹 출력 예제 1
YES


----

##  📌 풀이
숫자나, 기호가 들어오면 다 제거하고, 순수하게 알파벳만 가지고만 비교하라는 것입니다.
중요포인트 `replace()` 를 통해서 알파벳이 아닌 부분은 빈 문자열 '' 으로 `return`


```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(s) {
      let answer = "YES";
      s = s.toLowerCase().replace(/[^a-z]/g, ''); // 정규표현식 a부터 z 까지 아닌것을 global 속성 즉, 전체부분을 찾아서 빈 문자열로 남기는것
      if(s.split('').reverse().join('') !== s) return "NO"
      return answer;
    }

    let str = "found7, time: study; Yduts; emit, 7Dnuof";
    console.log(solution(str));
  </script>
</body>
```
