---
title:  "13.자릿수의 합 - 완전탐색(블루투포스)"
excerpt: "Algorithm (JS)_Advance"

categories:
  - Algorithm_Advance
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---


# 자릿수의 합

##  🔍 문제 
N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력 하는 프로그램을 작성하세요.  
자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다.   
만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.


### 🔹 입력설명
첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다.  
각 자연수의 크기는 10,000,000를 넘지 않는다.

### 🔹 출력 설명
자릿수의 합이 최대인 자연수를 출력한다.

### 🔹 입력예제 1
7  
128 460 603 40 521 137 123

### 🔹 출력 예제 1
137


----

##  📌 풀이

![image](https://user-images.githubusercontent.com/28912774/116636051-54a42280-a99b-11eb-8ca0-3886dbb15971.png)

![image](https://user-images.githubusercontent.com/28912774/116636095-71d8f100-a99b-11eb-832b-db7efb865b8f.png)



1. 수학적으로 풀이

```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(n, arr ) {
      let answer, max=Number.MIN_SAFE_INTEGER; 
      for (let x of arr) {
        let sum = 0, temp = x;
        while (temp) {
          sum += (temp % 10); // 10으로 나눈 나머지를 sum 에 누적 시킴
          temp = Math.floor(temp / 10); // 10으로 나눈 몫이 남게 됨 (내림 해버리니 소수점 없어 짐)
        }
        if (sum > max) {
          max = sum;
          answer = x; // 원본 x 값이 유지가 되어야 되기 때문에  위에 임시 변수 temp 를 설정해준 것임
        }
        else if (sum === max) { // 만약 자리수의 합이 같은 값이 있는 경우 서로 비교해서 큰 값을 return
          if (x > answer) answer =x; // x 가 answer보다 크게 되면 큰 수로 바꿔 줘야 함
        }
      }
      return answer;
    }

    let arr = [128, 460, 603, 40, 521, 137, 123];
    console.log(solution(7, arr));
  </script>
```  

2. `split(), reduce()` 등의 내장 함수를 사용한 풀이

```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(n, arr ) {
      let answer, max = Number.MIN_SAFE_INTEGER;
      for (let x of arr) {
        let sum = x.toString().split('').reduce((a, b) => a + Number(b), 0); // 각 숫자를 str 로변환 ''기준으로 하나씩 나눠 버림 그리고 reduce를 써서 다 합하는데 str 이니까 number 형변환을 해야 더해짐
        if (sum > max) {
          max = sum;
          answer = x;
        }
        else if (sum === max) {
          if (x > answer) answer = x;
        }
      }
      return answer;
    }

    let arr = [128, 460, 603, 40, 521, 137, 123];
    console.log(solution(7, arr));
  </script>
</body>
```
