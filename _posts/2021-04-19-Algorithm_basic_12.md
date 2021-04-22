---
title:  "Algorithm (JS) - 12.대문자로 통일"
excerpt: "Algorithm (JS)_Basic"

categories:
  - Algorithm_Basic
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---

# 대문자로 통일

##  🔍 문제 
대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자로 모두 통일하여 문자열을 출력 하는 프로그램을 작성하세요.

### 🔹 입력설명
첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.

### 🔹 출력 설명
첫 줄에 대문자로 통일된 문자열이 출력된다.

### 🔹 입력예제 1
ItisTimeToStudy

### 🔹 출력 예제 1
ITISTIMETOSTUDY

----

##  📌 풀이
첫번째 방식은 대문자는 그대로 두고, 소문자를 찾아서 대문자로 바꿔 주는 방식  
두번째 방식은 `ASCII code` 숫자로 변환 해서 대문자는 65 ~ 90 즉, A~Z의 범위임 , 소문자는 97 ~ 122임.  
소문자 구간을 찾고 -32 해주면 대문자 부분의 수로 변경 (반대인 대문자 -> 소문자로 하려면  +32 해주면 됨)  
`charCodeAt()` -> `string` 을 `ASCII code` 로 변환  
`String.fromCharCode()` -> `ASCII code` 을 `string` 으로 변환


- 일반적인 풀이


```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(s) {
      let answer = "";
      for (let x of s) {
        if (x === x.toLowerCase()) answer += x.toUpperCase();
        else answer += x;
      }
      return answer;
    }

    let str = "ItisTimeToStudy";
    console.log(solution(str));
  </script>
</body>
```

- 2번째 풀이  ASCII code로 풀이


```html
<html>

<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(s) {
      let answer = "";
      for (let x of s) {
        let num = x.charCodeAt();
        if (num >= 97 && num <= 122) answer += String.fromCharCode(num -32);
        else answer += x;
      }
      return answer;
    }

    let str = "ItisTimeToStudy";
    console.log(solution(str));
  </script>
</body>

</html>
```

