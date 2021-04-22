---
title:  "14.가장 긴 문자열"
excerpt: "Algorithm (JS)_Basic"

categories:
  - Algorithm_Basic
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---

# 가장 긴 문자열

##  🔍 문제 
N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요.

### 🔹 입력설명
첫 줄에 자연수 N이 주어진다.(3<=N<=30)  
두 번째 줄부터 N개의 문자열이 주어진다. 문자열의 길이는 100을 넘지 않습니다.  
각 문자열의 길이는 서로 다릅니다.  

### 🔹 출력 설명
첫 줄에 가장 긴 문자열을 출력한다.

### 🔹 입력예제 1
5  
teacher  
time  
student  
beautiful  
good

### 🔹 출력 예제 1
beautiful

----

##  📌 풀이
같은 길이의 문자는 들어오지 않음. `length()` 사용  


```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(s) {
      let answer, max = Number.MIN_SAFE_INTEGER;
      for (let x of s) {
        if (x.length > max) {
          max = x.length;
          answer = x;
        }
      }
      return answer;
    } 
    let str = ["teacher", "time", "student", "beautiful", "good"];
    console.log(solution(str));
  </script>
</body>
```


