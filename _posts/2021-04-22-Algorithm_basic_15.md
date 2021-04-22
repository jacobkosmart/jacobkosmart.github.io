---
title:  "Algorithm (JS) - 15.가운데 문자 출력"
excerpt: "Algorithm (JS)_Basic"

categories:
  - Algorithm_Basic
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---

# 가운데 문자 출력

##  🔍 문제 
소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세요.    
단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.

### 🔹 입력설명
첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.  

### 🔹 출력 설명
첫 줄에 가운데 문자를 출력합니다.

### 🔹 입력예제 1
study

### 🔹 출력 예제 1
u

### 🔹 입력예제 2
good

### 🔹 출력 예제 2
oo
----

##  📌 풀이
`Math.floor()` -> 몫을 구해주는 내장함수 `floor` 는 소숫점 무시하고 내림을 함  
substring() -> string을 추출하는 함수
substring(시작구간index, 끝나는구간index + 1) -> 글자가 홀수 일때..  
substring(시작구간index - 1, 끝나는구간index + 1) -> 글자가 짝수 일때..   
substr(시작구간index, 갯수) 
- `substring()` 사용
```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(s) {
      let answer;
      let mid = Math.floor(s.length / 2)  // 가운데 수를 구하기 2로 나눈 몫의 값 변수 할당
      if (s.length % 2 == 1) answer = s.substring(mid, mid +1); // 홀수 일때, substring()
      else answer = s.substring(mid - 1, mid + 1); // 짝수 일대, substring()
      return answer;
    }
    console.log(solution("good"));
  </script>
</body>
```
- `substr()` 사용 -> **이걸 자주사용하기~~**

```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(s) {
      let answer;
      let mid = Math.floor(s.length / 2);
      if (s.length % 2 === 1) answer = s.substr(mid, 1); // 홀수 일때, substr()
      else answer = s.substr(mid - 1, 2); // 짝수 일때, substr()
      return answer;
    }
    console.log(solution("length"));
  </script>
</body>
```

