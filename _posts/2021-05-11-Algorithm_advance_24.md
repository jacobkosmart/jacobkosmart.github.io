---
title: "24.아나그램 - Hash"
excerpt: "Algorithm (JS)_Advance"

categories:
  - Algorithm_Advance
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---

---


# 아나그램 (Hash)

##  🔍 문제 
Anagram이란 두 문자열이 알파벳의 나열 순서를 다르지만 그 구성이 일치하면 두 단어는 아나그램이라고 합니다.  

예를 들면 AbaAeCe 와 baeeACA 는 알파벳을 나열 순서는  다르지만 그 구성을 살펴보면 A(2), a(1), b(1), C(1), e(2)로  알파벳과 그 개수가 모두 일치합니다.  

즉 어느 한 단어를 재 배열하면 상대편 단어가 될 수 있는 것을 아나그램이라 합니다.  

길이가 같은 두 개의 단어가 주어지면 두 단어가 아나그램인지 판별하는 프로그램을 작성하세요. 

아나그램 판별시 대소문자가 구분됩니다


### 🔹 입력설명
첫 줄에 첫 번째 단어가 입력되고, 두 번째 줄에 두 번째 단어가 입력됩니다.   

단어의 길이는 100을 넘지 않습니다

### 🔹 출력 설명
두 단어가 아나그램이면 “YES"를 출력하고, 아니면 ”NO"를 출력합니다

### 🔹 입력예제 1
AbaAeCe  

baeeACA

### 🔹 출력 예제 1
YES

### 🔹 입력예제 2
abaCC

Caaab

### 🔹 출력 예제 2
NO

----

##  📌 풀이

![11](https://user-images.githubusercontent.com/28912774/117741092-8d19eb00-b23c-11eb-84bf-3f37371d6dea.jpg)


![22](https://user-images.githubusercontent.com/28912774/117741098-90ad7200-b23c-11eb-8c5c-1d6bfc2b0832.jpg)


```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(str1, str2) {
      let answer = "YES";
      let sH = new Map();
      for (let x of str1) { // str 탐색 후, hash 값 만들기 (key, value)
        if (sH.has(x)) sH.set(x, sH.get(x) + 1);
        else sH.set(x, 1);
      }
      for (let x of str2) {
        if(!sH.has(x) || sH.get(x) === 0) return "NO"; // str 2 에 str 1 의 key 값이 없을 땐 No return, 또는 다 상쇄 시켰는데 str1 의 key 값이 0 이여도 return NO 
        else sH.set(x, sH.get(x) - 1) // -1 씩 빼줘서 상쇄 시키는 것임
      }
      return answer;
    }

    let a = "abaCC";
    let b = "Caaab";
    console.log(solution(a, b));
  </script>
</body>
```
