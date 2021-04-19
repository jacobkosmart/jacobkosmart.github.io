---
title:  "Algorithm (JS) - 10.문자 찾기"
excerpt: "Algorithm (JS)_Basic"

categories:
  - Algorithm_Basic
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---

# 문자 찾기

##  🔍 문제 
한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개
존재하는지 알아내는 프로그램을 작성하세요.
문자열의 길이는 100을 넘지 않습니다.

### 🔹 입력설명
첫 줄에 문자열이 주어지고, 두 번째 줄에 문자가 주어진다.

### 🔹 출력 설명
첫 줄에 해당 문자의 개수를 출력한다.

### 🔹 입력예제 1
COMPUTERPROGRAMMING
R

### 🔹 출력 예제 1
3

----

##  📌 풀이
첫번째 풀이 - 직접 찾는 방법 `let x of s` 하나씩 검색해서 해당 문자열에 해당되는 `str`을 찾는다. 
두번째 풀이 - 내장함수 사용: `split()`

- 첫번째 풀이
```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(s, t) {
      let answer = 0;
      for (let x of s) {
        if (x === t) answer++;
      }
      return answer;
    }
    let str = "COMPUTERPROGRAMMING";
    console.log(solution(str, 'R'));
  </script>
</body>
```

```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(s, t) {
      let answer = s.split(t).length; // R 기준의 구분자 기준으로 통해서 나눠지는것  split() 
      return answer - 1; // R을 기준으로 4개가 나눠지니까 한개를 빼줘야 함.
    }
    let str = "COMPUTERPROGRAMMING";
    console.log(solution(str, 'R'));
  </script>
</body>
```


