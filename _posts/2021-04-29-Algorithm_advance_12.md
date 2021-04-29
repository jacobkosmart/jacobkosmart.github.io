---
title:  "12.문자열 압축 - 문자열 탐색"
excerpt: "Algorithm (JS)_Advance"

categories:
  - Algorithm_Advance
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---



# 문자열 압축

##  🔍 문제 
알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우 반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시오.   
단 반복횟수가 1인 경우 생략합니다.


### 🔹 입력설명
첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.

### 🔹 출력 설명
첫 줄에 압축된 문자열을 출력한다.

### 🔹 입력예제 1
KKHSSSSSSSE

### 🔹 출력 예제 1
K2HS7E


----

##  📌 풀이
![image](https://user-images.githubusercontent.com/28912774/116490197-b730ec00-a8d1-11eb-9821-8c5741a6bf72.png)


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
      let cnt = 1;
      let n = s.length;
      s= s + " "; // 맨 뒤에 빈 문자열 추가 (비교를 해야 되기 때문에)
      for(let i = 0; i < n-1; i++) { // n-1 은 index 가 알파벳 구간(추가한 맨 뒤 빈 문자열은 제외해야되기때문에)
        if (s[i] === s[i + 1]) cnt ++; // 뒤에거랑 비교 했을때, 같을경우에는 cnt 1씩 증가
        else {
          answer += s[i] // 다를 경우에는 answer에 그 범위 바로 return
          if(cnt > 1) answer += String(cnt) // 1 이상의 숫자만 나와야 되고, answer 의 형식이 str 이니까 int 에서 str 로 형변환
          cnt = 1;
        }
      }
      return answer;
    }

    let str = "KKHSSSSSSSE";
    console.log(solution(str));
  </script>
</body>

</html>
```
