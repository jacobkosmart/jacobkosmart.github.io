---
title: "23.학습 회장 - Hash Map"
excerpt: "Algorithm (JS)_Advance"

categories:
  - Algorithm_Advance
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---

---


# 학습 회장 (Hash)

##  🔍 문제  

학급 회장을 뽑는데 후보로 기호 A, B, C, D, E 후보가 등록을 했습니다.  

투표용지에는  반  학생들이  자기가  선택한  후보의  기호(알파벳)가  쓰여져  있으며  선생님은  그 기호를 발표하고 있습니다.  

선생님의  발표가  끝난  후  어떤  기호의  후보가  학급  회장이  되었는지  출력하는  프로그램을  작성하세요.   

반드시 한 명의 학급회장이 선출되도록 투표결과가 나왔다고 가정합니다.


### 🔹 입력설명
첫 줄에는 반 학생수 N(5<=N<=50)이 주어집니다.  

두 번째 줄에 N개의 투표용지에 쓰여져 있던 각 후보의 기호가 선생님이 발표한 순서대로 문자열로 입력됩니다.

### 🔹 출력 설명
학급 회장으로 선택된 기호를 출력합니다.  


### 🔹 입력예제 1
15  

BACBACCACCBDEDE

### 🔹 출력 예제 1
C


----

##  📌 풀이

- Map 의 Method 와 Property 를 잘 알아 둘것 (특히, set, get, has 는 잘 알아 둘것!!)  

[Map, Set, Get 자료구조 사용법..](https://ko.javascript.info/map-set)

![00](https://user-images.githubusercontent.com/28912774/117593621-4e6e2d00-b177-11eb-8198-003227f7e4a3.jpg)

![1-1](https://user-images.githubusercontent.com/28912774/117593664-647bed80-b177-11eb-8e61-f41a64741f72.png)


![1-2](https://user-images.githubusercontent.com/28912774/117593692-65ad1a80-b177-11eb-95e8-70b14d7e4119.png)


![2-1](https://user-images.githubusercontent.com/28912774/117593711-66de4780-b177-11eb-9c6d-a3bbe873667e.png)


![2-2](https://user-images.githubusercontent.com/28912774/117593727-6776de00-b177-11eb-96b7-e89fb82bec24.png)



```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(s) {
      let answer;
      let sH = new Map(); // sH (string Hash) 에 객체 생성자 호출
      for(let x of s) { // string 탐색
        if(sH.has(x)) sH.set(x, sH.get(x)+1) // sH 에 x 라는 문자의 key 가 있는지 물어보는거 존재하면 true, 없으면 false
        // key 값이 있으면 x 란 값을 set 을 하게 되는데 x 에 기존값 get(x) 에 +1 하라는것임
        else sH.set(x, 1); // x값이 없기 때문에 값을 만들고 처음 값을 1 로 하는것 
      }
      let max = Number.MIN_SAFE_INTEGER; // max 값 최소값으로 설정
      for(let [key, val] of sH) { // sH 의 key 값과 value 값을 각각 key val 에 할당
        if(val > max) { // val 값이 max 보다 클 경우
          max = val; // max 값 설정
          answer = key; // 답은 key 값임
        }
      }
      return answer;
    }

    let str = "BACBACCACCBDEDE";
    console.log(solution(str));
  </script>
</body>
```
