---
title:  "08.회문 문자열 - 문자열 탐색"
excerpt: "Algorithm (JS)_Advance"

categories:
  - Algorithm_Advance
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---


# 회문 문자열

##  🔍 문제 
앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다.  
문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES", 회문 문자열이 아니면 “NO"를 출력하는 프로그램을 작성하세요.  
단 회문을 검사할 때 대소문자를 구분하지 않습니다.   


### 🔹 입력설명
첫 줄에 정수 길이 100을 넘지 않는 공백이 없는 문자열이 주어집니다.  

### 🔹 출력 설명
첫 번째 줄에 회문 문자열인지의 결과를 YES 또는 NO로 출력합니다.

### 🔹 입력예제 1
gooG

### 🔹 출력 예제 1
YES


----

##  📌 풀이
먼저 대소문자 구분하지 않기 때문에, string 자체를 대,소문자 하나로 통일해줍니다.  
1. for 문이 돌면서 같은지 탐색하는 방법  
2. split 에서 reverse 함수 사용해서 탐색 하는 방법  
![image](https://user-images.githubusercontent.com/28912774/116328169-5fc44a80-a803-11eb-86c4-44deb8009149.png)


- 1번 방법 (for 문 검색)     


```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(s) {
      let answer = "YES";
      s = s.toLowerCase(); // str을 소문자로 통일
      let n = s.length;
      for (let i =0; i < Math.floor(n/2); i++) { // n 이 홀수 일때도 있으니 Math.floor 내림 사용
        if (s[i] !== s[n-i-1]) return "NO" // i 가 0일때 가장 마지막 index 와 비교해야되기 때문에 전체길이 - 현재 index - 1 로 설정 그 다음 부터는 하나씩 앞당겨짐
      }
      return answer;
    }

    let str = "goooG";
    console.log(solution(str));
  </script>
</body>
```    



- 2번 방법 (split, reverse 사용해서 검색)  


```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(s) {
      let answer = "YES";
      s = s.toLowerCase();
      if (s.split("").reverse().join("") !== s) return "NO"; // str 을 하나씩 나누고, 뒤집어서, 다시 합치고 원래 str 과 비교해서 같지 않으면 NO retrun
      return answer;
    }

    let str = "gooG";
    console.log(solution(str));
  </script>
</body>
```