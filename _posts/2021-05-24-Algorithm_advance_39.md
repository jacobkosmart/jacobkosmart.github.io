---
title: "39.좌표 정렬"
excerpt: "Algorithm (JS)_Advance"

categories:
  - Algorithm_Advance
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---

---



##  🔍 문제 
N개의 평면상의 좌표(x, y)가 주어지면 모든 좌표를 오름차순으로 정렬하는 프로그램을 작성하세요.   

정렬기준은 먼저 x값의 의해서 정렬하고, x값이 같을 경우 y값에 의해 정렬합니다. 

정렬하는 방법은 선택정렬입니다


### 🔹 입력설명
첫째 줄에 좌표의 개수인 N(3<=N<=100,000)이 주어집니다.  

두 번째 줄부터 N개의 좌표가 x, y 순으로 주어집니다. x, y값은 양수만 입력됩니다.

### 🔹 출력 설명
N개의 좌표를 정렬하여 출력하세요

### 🔹 입력예제 1
5

2 7

1 3

1 2

2 5

3 6

### 🔹 출력 예제 1
1 2

1 3

2 5

2 7

3 6




----

##  📌 풀이

- 나중에 그리디나 응용문제에 좌표정렬 방법은 아래 코드와 같이 사용 하면 됩니다.

```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(arr) {
      let answer = arr; // arr 얕은 복사
      arr.sort((a, b) => {
        if(a[0] === b[0]) return a[1] - b[1]; // 0번 째 index 끼리 같을 경우 1번째 (y축) 끼리 비교해서 오름차순 정렬 
        else return a[0] - b[0]; // 0번 index 가 다른 경우는 0번째(x축) 끼리 비교해서 오름차순 정렬해줌
      })
      return answer;
    }

    let arr = [
      [2, 7],
      [1, 3],
      [1, 2],
      [2, 5],
      [3, 6]
    ];
    console.log(solution(arr));
  </script>
</body>
```
