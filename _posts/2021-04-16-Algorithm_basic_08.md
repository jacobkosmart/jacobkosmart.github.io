---
title:  "Algorithm (JS) - 08.일곱 난쟁이"
excerpt: "Algorithm (JS)_Basic"

categories:
  - Algorithm_Basic
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---

# 일곱 난쟁이

##  🔍 문제 
왕비를 피해 일곱 난쟁이들과 함께 평화롭게 생활하고 있던 백설공주에게 위기가 찾아왔다.


일과를 마치고 돌아온 난쟁이가 일곱 명이 아닌 아홉 명이었던 것이다.


아홉 명의 난쟁이는 모두 자신이 "백설 공주와 일곱 난쟁이"의 주인공이라고 주장했다.

뛰어난수학적 직관력을 가지고 있던 백설공주는, 다행스럽게도 일곱 난쟁이의 키의 합이 100이 됨을기억해 냈다.


아홉 난쟁이의 키가 주어졌을 때, 백설공주를 도와 일곱 난쟁이를 찾는 프로그램을 작성하시오.

### 🔹 입력설명
아홉 개의 줄에 걸쳐 난쟁이들의 키가 주어진다. 주어지는 키는 100을 넘지 않는 자연수이며, 아홉 난쟁이의 키는 모두 다르며, 가능한 정답이 여러 가지인 경우에는 아무거나 출력한다.

### 🔹 출력 설명
입력된 순서대로 일곱 난쟁이의 키를 출력한다.

### 🔹 입력예제 1
20 7 23 19 10 15 25 8 13

### 🔹 출력 예제 1
20 7 23 19 10 8 13

> 출처 : 한국정보올림피아드
----

##  📌 풀이
2명의 가짜 난쟁이를 찾아 내야됨.    
Array 에서 2개씩 추출 arr[i], arr[j] 해서 계속 반복해서 2개씩 더해줘서 
9개의 총 합에서 2개 추출한 값의 합과 마이너스를 했을때, 그 2개가 가짜 난쟁이가 되는것임.  
splice 를 사용해서 array 에서  arr[i], arr[j] 를 제거함.  
`(pseudo) totalSum - (arr[i] + arr[j]) === 100  
splice(arr[t], arr[j])`

```js
function solution(arr) {
  let answer = arr; // 얕은 복사 했기 때문에 answer = arr 는 같게 나옴
  //reduce array에서 하나씩 더해가는것 함수, 하나씩 돌면서 a는 고정, b가 하나씩 들어가면서 sum 해줌, 0부터 시작.
  let sum = arr.reduce((a, b) => a + b, 0); 
  for (let i = 0; i < (arr.length - 1); i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        arr.splice(j, 1); // splice()는 array 에서 삭제(빼는거임) 
        arr.splice(i, 1); // 근데 i부터 지우게 되면 index가 뒤에서부터 한개씩 당겨 지기 때문에 뒷에있는 j부터 지워야지 순서가 밀리지 않음
      }
    }
  }
  return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
```

---

👉 [다른 Algorithm (JS)](https://jacobkosmart.github.io/categories/Algorithm_Basic) 으로 이동 

---
