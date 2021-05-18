---
title: "33.선택 정렬 - 정렬"
excerpt: "Algorithm (JS)_Advance"

categories:
  - Algorithm_Advance
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---

---

# 선택 정렬

## 🔍 문제

N개이 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요.정렬하는 방법은 선택정렬입니다

### 🔹 입력설명

첫 번째 줄에 자연수 N(1<=N<=100)이 주어집니다.

두 번째 줄에 N개의 자연수가 공백을 사이에 두고 입력됩니다. 각 자연수는 정수형 범위 안에 있습니다.

### 🔹 출력 설명

오름차순으로 정렬된 수열을 출력합니다.

### 🔹 입력예제 1

6  
13 5 11 7 23 15

### 🔹 출력 예제 1

5 7 11 13 15 23

---

## 📌 풀이

![11](https://user-images.githubusercontent.com/28912774/118571739-b5b06080-b7b9-11eb-9193-54c99b3249d2.jpg)

![22](https://user-images.githubusercontent.com/28912774/118571740-b648f700-b7b9-11eb-9231-4a4f09b71325.jpg)

```html
<head>
  <meta charset="UTF-8" />
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(arr) {
      let answer = arr; // arr 을 얕은 복사
      for (let i = 0; i < arr.length; i++) {
        let idx = i; // 최소값의 위치를 index 를 저장하는 idx
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[j] < arr[idx]) idx = j; // 탐색된 j 값을 idx 값과 비교해서 작으면 최소값이 j 가 되는것
        }
        [arr[i], arr[idx]] = [arr[idx], arr[i]]; // i 값 과 idx 값을 서로 바꿔주는 것
      }
      return answer;
    }

    let arr = [13, 5, 11, 7, 23, 15];
    console.log(solution(arr));
  </script>
</body>
```
