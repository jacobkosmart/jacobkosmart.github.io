---
title:  "14.뒤집은 소수 - 완전탐색(블루투포스)"
excerpt: "Algorithm (JS)_Advance"

categories:
  - Algorithm_Advance
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---


# 뒤집은 소수

##  🔍 문제 
N개의 자연수가 입력되면 각 자연수를 뒤집은 후 그 뒤집은 수가 소수이면 그 소수를 출력하는 프로그램을 작성하세요.   
예를 들어 32를 뒤집으면 23이고, 23은 소수이다.   
그러면 23을 출력한다.   
단 910를 뒤집으면 19로 숫자화 해야 한다.   
첫 자리부터의 연속된 0은 무시한다.  


### 🔹 입력설명
첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다.  
각 자연수의 크기는 100,000를 넘지 않는다.

### 🔹 출력 설명
첫 줄에 뒤집은 소수를 출력합니다. 출력순서는 입력된 순서대로 출력합니다.

### 🔹 입력예제 1
9  
32 55 62 20 250 370 200 30 100

### 🔹 출력 예제 1
23 2 73 2 3 


----

##  📌 풀이

![image](https://user-images.githubusercontent.com/28912774/116640676-18c28a80-a9a6-11eb-8b18-5e5b3068c754.png)


![image](https://user-images.githubusercontent.com/28912774/116640749-37c11c80-a9a6-11eb-921d-0ac82d6a2536.png)


![image](https://user-images.githubusercontent.com/28912774/116640771-41e31b00-a9a6-11eb-9efb-3a9663f637a8.png)


1. 수학적으로 풀이 방법

```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    // 소수 구하는 함수 - 약수 가 1하고 자신 밖에 없는 수를 -> 소수 (prime number) 라고 함
    function isPrime(num) {
      if (num === 1) return false; // 1은 소수가 아니니까 false return
      for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
        if (num % i === 0) return false; // num 을 i 로 나눈 나머지가 0 일경우에는 소수가 아니기 때문에 false
      }
      return true;
    }
    function solution(arr) {
      let answer = [];
      for (let x of arr) {
        let res = 0;
        while (x) {
          let t = x % 10; // x 를 10 으로 나눈 나머지가 t
          res = res * 10 + t // res 에 10을 곱하고 t 를 더하면 나머지 값이 처음수가 됨
          x = parseInt(x / 10); // 처음 t 값을 제외하고 나머지 숫자가 남음 -> while loop 를 돌면서 숫자가 reverse 됨
        }
        if (isPrime(res)) answer.push(res);
      }
      return answer;
    }

    let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
    console.log(solution(arr));
  </script>
</body>
```

2. `split()`, `reverse()`, `join()` 등 내장 함수 사용 풀이

```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    // 소수 구하는 함수 - 약수 가 1하고 자신 밖에 없는 수를 -> 소수 (prime number) 라고 함
    function isPrime(num) {
      if (num === 1) return false;
      for (let i = 2; i >= parseInt(Math.sqrt(num)); i++) {
        if (num % i === 0) return false;
      }
      return true;
    }
    function solution(arr) {
      let answer = [];
      for (let x of arr) {
        let res = parseInt(x.toString().split('').reverse().join(''));  // 문자를 뒤집기 str 화 쪼개고 뒤집고, 다시 합치고
        if (isPrime(res)) answer.push(res)
      }
      return answer;
    }

    let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
    console.log(solution(arr));
  </script>
</body>
```
