---
title:  "02.Variable"
excerpt: "Algorithm (JS)_Basic"

categories:
  - JavaScript
tags:
  - [Algorithm, JavaScript, basic]

toc: true
toc_sticky: true
last_modified_at: 
---

# 중복 단어 제거

##  🔍 문제 
N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하는 프로그램을 작성하세요.
출력하는 문자열은 원래의 입력순서를 유지합니다.

### 🔹 입력설명
첫 줄에 자연수 N이 주어진다.(3<=N<=30)
두 번째 줄부터 N개의 문자열이 주어진다. 문자열의 길이는 100을 넘지 않습니다.

### 🔹 출력 설명
첫 줄부터 중복이 제거된 문자열을 차례로 출력한다.

### 🔹 입력예제 1
5
good
time
good
time
student

### 🔹 출력 예제 1
good
time
student

----

##  📌 풀이
filter(value, index) -> 어떠한 조건에 만족되는것만 return 해주는 함수

```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(s) {
      let answer;
      answer = s.filter((v, i) => { // filter(value, index) - 조건에 맞는것만 return 하는것
        if (s.indexOf(v) === i) return v; // indexOf(v) 와 index 번호가 같은것만 출력함. -> 중복되는것 출력 안됨
      });
      return answer;
    }
    let str = ["good", "time", "good", "time", "student"];
    console.log(solution(str));
  </script>
</body>
```
