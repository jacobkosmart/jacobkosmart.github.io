---
title: "25.모든 아나그램 찾기 - Hash, twoPointer, slidingWindow"
excerpt: "Algorithm (JS)_Advance"

categories:
  - Algorithm_Advance
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---

---


# 모든 아나그램 찾기(hash, twoPointer, slidingWindow)

##  🔍 문제 
S문자열에서  T문자열과  아나그램이  되는  S의  부분문자열의  개수를  구하는  프로그램을  작성하세요.   

아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다


### 🔹 입력설명
첫 줄에 첫 번째 S문자열이 입력되고, 두 번째 줄에 T문자열이 입력됩니다.   

S문자열의 길이는 10,000을 넘지 않으며, T문자열은 S문자열보다 길이가 작거나 같습니다


### 🔹 출력 설명
S단어에 T문자열과 아나그램이 되는 부분문자열의 개수를 출력합니다

### 🔹 입력예제 1
bacaAacba  

abc

### 🔹 출력 예제 1
3

출력설명:  {bac},  {acb},  {cba}  3개의  부분문자열이  "abc"문자열과  아나그램입니다

----

##  📌 풀이


![11](https://user-images.githubusercontent.com/28912774/117747361-028bb880-b249-11eb-89c1-8fccf1e1c619.jpg)


![22](https://user-images.githubusercontent.com/28912774/117747368-061f3f80-b249-11eb-8dd3-497f4d917183.jpg)


```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function compareMaps(map1, map2) { // 먼저 sH 와 tH의 사이즈를 비교
      if (map1.size !== map2.size) return false; // 만약 sH 와 tH 의 사이즈가 다를 경우에 는 바로 false return
      // 사이즈가 이제 같으면 sH 와 tH 값이 같은지 비교 시작
      for (let [key, val] of map1) {
        // map 2 에 key 값이 있는지 보는거, tH 에 sH의 key 값이 없으면 false return 또는 key 는 있는 데 value 값이 서로 다르면 또 false 해줘야 함 tH 의 value 값과 sH 의 value 값이 서로 같지 않을 때, return false;
        if (!map2.has(key) || map2.get(key) !== val) return false;  
      }
      return true; // 위의 조건들을 다 통과하면 true return 
    }

    function solution(s, t) {
      let answer = 0;
      let tH = new Map();
      let sH = new Map();
      for(let x of t) { // tH hash Map Counting
        if(tH.has(x)) tH.set(x, tH.get(x) + 1);
        else tH.set(x, 1);
      }
      let len = t.length - 1 // 하나 적게 해서 sH 의 sliding window 가 투포인터 설정 전에 하나 빼고 먼저 탐색 할수 있게 범위 설정
      for (let i=0; i<len; i++) { // i 로 for 문 도는 거니까 s[i] 헷갈리지 않게 잘 넣기
        if(sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
        else sH.set(s[i], 1);
      }
      // sliding window 그리고 two pointer 로 돌기
      let lt = 0
      for (let rt=len; rt<s.length; rt++) { // 나머지 하나 뺀것을 추가 하기
        if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
        else sH.set(s[rt], 1); 
        if(compareMaps(sH, tH)) answer++; // 추가 하면 바로 비교 하기 두개를 비교했는데 같으면 answer cnt ++
        sH.set(s[lt], sH.get(s[lt]) - 1) // 비교 했으니까 lt 부분을 빼줘야 함
        if(sH.get(s[lt]) === 0) sH.delete(s[lt]); // 빼줬는데 만약 lt의 value 값이 0 이면 delete 해줘야 함
        lt++; // lt  증가 해주고 다시 for loop 시작 
      }
      return answer;
    }
    let a = "bacaAacba";
    let b = "abc";
    console.log(solution(a, b));
  </script>
</body>
```
