---
title:  "Algorithm (JS) - 16.중복 문자 제거"
excerpt: "Algorithm (JS)_Basic"

categories:
  - Algorithm_Basic
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---

# 중복 문자 제거

##  🔍 문제 
소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램을 작성하세요.  
제거된 문자열의 각 문자는 원래 문자열의 순서를 유지합니다.

### 🔹 입력설명
첫 줄에 문자열이 입력된다.

### 🔹 출력 설명
첫 줄에 중복문자가 제거된 문자열을 출력합니다.

### 🔹 입력예제 1
ksekkset

### 🔹 출력 예제 1
kset

----

##  📌 풀이
`indexOf('g')`-> 'good' 이라는 string 에서 'g'가 몇번째 index에 있는지 찾아주는 함수 (중복된 경우, 첫번째 발견된것을 출력함)  
`indexOf('g', 1)` -> 1번 index이후로 부터 g라는 string이 몇번째 index에 있는지 찾아달라는거임.   
`indexOf()` 로 발견하지 못한 string은 -1 로 출력됨.  
`for loop`으로 문자열 탐색한다음에 `s.indexOf(s[i])`로 검색된 중복된 index를 제거해서 return



```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(s) {
      let = answer = "";
      for (let i = 0; i < s.length; i++) { //for (변수(시작), 조건(범위), 결과값(1씩 증가))
        if(s.indexOf(s[i]) === i) answer += s[i]; // indexOf() 시작점 부터 검색된 index 가 처음 index와 같은 경우에 answer 출력
      }
      return answer;
    }
    console.log(solution("ksekkset"));
  </script>
</body>
```


- 이전문제 응용 (indexOf()를 사용해서 k문자가 몇개인지 카운트 하기) 


```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(s) {
      let answer = 0;
      let pos =s.indexOf('k'); // k 문자의의 위치 index 검색
      while (pos !== -1){ // while loop 에서 pos 가 검색이 될때, (-1 이 아닐 경우)
        answer++; // answer count 증가
        pos = s.indexOf('k', pos + 1); //찾은 k 번째 다음부터 다시 검색
      } // 더이상 못찾으면 pos 가 -1 이 되서 false 됨 -> break
      return answer;
    }
    console.log(solution("ksekkset"));
  </script>
</body>
```
