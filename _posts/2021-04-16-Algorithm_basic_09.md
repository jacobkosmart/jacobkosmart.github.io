---
title:  "Algorithm (JS) - 09.A를 #으로"
excerpt: "Algorithm (JS)_Basic"

categories:
  - Algorithm_Basic
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---

# A를 #으로 

##  🔍 문제 
대문자로 이루어진 영어단어가 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력하는
프로그램을 작성하세요.

### 🔹 입력설명
첫 번째 줄에 문자열이 입력된다.

### 🔹 출력 설명
첫 번째 줄에 바뀐 단어를 출력한다.

### 🔹 입력예제 1
BANANA

### 🔹 출력 예제 1
B#N#N#

> 출처 : 한국정보올림피아드
----

##  📌 풀이
단순 문자열 탐색 문제임.  
`A`를 ->` #` 으로 변환 하는데, 2가지 방법이 있음. 
1. 반복문 통해서 A를 뽑아내서, `'#'`으로 바꿔 주기
2. `replace` 함수, 정규표현식을 통해서 탐색 (2번 째 방법을 권장)

- 반복문 활용
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
        if (x === 'A') answer+='#';
        else answer+=x;
      }
      return answer;
    }

    let str = "BANANA";
    console.log(solution(str));
  </script>
</body>

</html>
```

- `replace()`, 정규표현식 
```html
<html>

<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(s) {
      let answer=s; // string은 값만 복사 되는것임. array 처럼 주소 참조가 아닌것임. 
      answer = answer.replace(/A/g, '#'); // 글로벌 g를 넣어서 다 적용되게 해야함 
      return answer;
    }
    let str = "BANANA";
    console.log(solution(str));
  </script>
</body>

</html>
```


---

👉 [다른 Algorithm (JS)](https://jacobkosmart.github.io/categories/Algorithm_Basic) 으로 이동 

---