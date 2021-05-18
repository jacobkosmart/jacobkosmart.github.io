---
title: "34.버블 정렬 - 정렬"
excerpt: "Algorithm (JS)_Advance"

categories:
  - Algorithm_Advance
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---

---

# 버블 정렬

## 🔍 문제

N개이 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요.

정렬하는 방법은 버블정렬입니다

### 🔹 입력설명

첫 번째 줄에 자연수 N(1<=N<=100)이 주어집니다.

두 번째 줄에 N개의 자연수가 공백을 사이에 두고 입력됩니다. 각 자연수는 정수형 범위 안에 있습니다

### 🔹 출력 설명

오름차순으로 정렬된 수열을 출력합니다.

### 🔹 입력예제 1

6

13 5 11 7 23 15

### 🔹 출력 예제 1

5 7 11 13 15 23

---

## 📌 풀이

![11](https://user-images.githubusercontent.com/28912774/118575205-dfb95100-b7c0-11eb-85e0-d96088091054.jpg)

![22](https://user-images.githubusercontent.com/28912774/118573650-f316ed00-b7bd-11eb-8faf-c365e349d1fd.jpg)

```html
<script>
  function solution(arr) {
    let answer = arr;
    for (let i = 0; i < arr.length - 1; i++) {
      // j 와 비교하는것이기 때문에 전체 크기의 -1 까지만 돌면 됨
      for (let j = 0; j < arr.length - i - 1; j++) {
        // j는 마지막 값이 정해지기 때문에 j 가 for loop 돌면서 맨 뒤에 있는것은 이미 정해져서 픽스 되었기 때문에 비교 할 필요는 없음
        if (arr[j] > arr[j + 1]) {
          // j for loop 돌면서 뒤에것과 비교 하면서 작으면 앞으로 바꿔줘야함
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // j for loop 돌때마다 바꿔 줘야 하니까 성능상에는 좋지는 않다
        }
      }
    }
    return answer;
  }

  let arr = [13, 5, 11, 7, 23, 15];
  console.log(solution(arr));
</script>
```
