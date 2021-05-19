---
title: "35.Special sort - 정렬"
excerpt: "Algorithm (JS)_Advance"

categories:
  - Algorithm_Advance
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---

---

# Special Sort (구글 인터뷰)

## 🔍 문제

N개의 정수가 입력되면 당신은 입력된 값을 정렬해야 한다.

음의 정수는 앞쪽에 양의정수는 뒷쪽에 있어야 한다.

또한 양의정수와 음의정수의 순서에는 변함이 없어야 한다

### 🔹 입력설명

첫 번째 줄에 정수 N(5<=N<=100)이 주어지고, 그 다음 줄부터 음수를 포함한 정수가 주어진다. 숫자 0은 입력되지 않는다

### 🔹 출력 설명

정렬된 결과를 출력한다.

### 🔹 입력예제 1

8

1 2 3 -3 -2 5 6 -6

### 🔹 출력 예제 1

-3 -2 -6 1 2 3 5 6

---

## 📌 풀이

![11](https://user-images.githubusercontent.com/28912774/118774507-e0391100-b8c0-11eb-8025-4be266d596e7.jpg)

- 풀이 1: 버블정렬

```html
<head>
  <meta charset="UTF-8" />
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(arr) {
      let answer = arr;
      for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
          if (arr[j] > 0 && arr[j + 1] < 0) {
            // 앞쪽수가 양수고, 뒤쪽수가 음수일 경우
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // 앞에와 뒤에를 바꾸는 것
          }
        }
      }
      return answer;
    }

    let arr = [1, 2, 3, -3, -2, 5, 6, -6];
    console.log(solution(arr));
  </script>
</body>
```

- 풀이 2: for loop 에서 먼저 음수, 양수 선별해서 push 하기

```html
<head>
  <meta charset="UTF-8" />
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(arr) {
      let answer = []; // 새로운 arr 할당
      for (let x of arr) {
        // x 개씩 탐색해서
        if (x < 0) answer.push(x); // 음수일 경우 하나씩 answer 에 push
      }
      for (let x of arr) {
        if (x > 0) answer.push(x); // 나머지 숫자 (양수) answer 에 push
      }
      return answer;
    }

    let arr = [1, 2, 3, -3, -2, 5, 6, -6];
    console.log(solution(arr));
  </script>
</body>
```

5월에는.. 한열형제가 많이 도와줘서 수월하게 했어요. 음.. 이번달은 더 프로페셔널 하신 작가님과 같이 작업 하니...? 더 편하게 작업 할 수 있어서 이번달도 쉽게 가겠네요 ㅎㅎ
