---
title: "31.공주 구하기 - Queue"
excerpt: "Algorithm (JS)_Advance"

categories:
  - Algorithm_Advance
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---

---

# 공주 구하기

## 🔍 문제

정보 왕국의 이웃 나라 외동딸 공주가 숲속의 괴물에게 잡혀갔습니다.

정보 왕국에는 왕자가 N명이 있는데 서로 공주를 구하러 가겠다고 합니다. 정보왕국의 왕은 다음과 같은 방법으로 공주를 구하러 갈 왕자를 결정하기로 했습니다.

왕은 왕자들을 나이 순으로 1번부터 N번까지 차례로 번호를 매긴다. 그리고 1번 왕자부터 N번 왕자까지 순서대로 시계 방향으로 돌아가며 동그랗게 앉게 한다.

그리고 1번 왕자부터 시계방향으로 돌아가며 1부터 시작하여 번호를 외치게 한다. 한 왕자가 K(특정숫자)를 외치면 그 왕자는 공주를 구하러 가는데서 제외되고 원 밖으로 나오게 된다.

그리고 다음 왕자부터 다시 1부터 시작하여 번호를 외친다.

이렇게 해서 마지막까지 남은 왕자가 공주를 구하러 갈 수 있다

![image](https://user-images.githubusercontent.com/28912774/118415417-29346e00-b6e5-11eb-8510-a9e264e65b4a.png)

예를 들어 총 8명의 왕자가 있고, 3을 외친 왕자가 제외된다고 하자. 처음에는 3번 왕자가 3을 외쳐 제외된다.

이어 6, 1, 5, 2, 8, 4번 왕자가 차례대로 제외되고 마지막까지 남게 된 7번 왕자에게 공주를 구하러갑니다.

N과 K가 주어질 때 공주를 구하러 갈 왕자의 번호를 출력하는 프로그램을 작성하시오

### 🔹 입력설명

첫 줄에 자연수 N(5<=N<=1,000)과 K(2<=K<=9)가 주어진다

### 🔹 출력 설명

첫 줄에 마지막 남은 왕자의 번호를 출력합니다

### 🔹 입력예제 1

8 3

### 🔹 출력 예제 1

7

---

## 📌 풀이

- `Array.from()` 을 사용하여 숫자가 주어질때 array 만들기

```js
//  8번 이 주어 질때 , n = 8 임

let queue = Array.from({ length: n }, (v, i) => i + 1);
console.log(queue);

// 길이가 n 크기 유사 배열 객체 생성 후 value, index 설정 후 콜백 함수 에서 value 값이 i 는 0 이니까 i+1 해서 1부터 8싸지의 array를 생성
```

![image](https://user-images.githubusercontent.com/28912774/118416935-eececf00-b6ec-11eb-9eab-84cb622f3a39.png)

- `Array.shift()` 알아두기..

  - `.shift()` 는 array 에서 첫번째를 지우는것이 shift 입니다.

![image](https://user-images.githubusercontent.com/28912774/118417335-9bf61700-b6ee-11eb-82d2-08aad87d06ea.png)

![11](https://user-images.githubusercontent.com/28912774/118417884-13c54100-b6f1-11eb-9b57-291692ec6694.jpg)

![22](https://user-images.githubusercontent.com/28912774/118417885-14f66e00-b6f1-11eb-8751-a9181919c1ac.jpg)

```html
<body>
  <script>
    function solution(n, k) {
      let answer;
      let queue = Array.from({ length: n }, (v, i) => i + 1); // 길이가 n 크기 유사 배열 객체 생성 후 value, index 설정 후 콜백 함수 에서 value 값이 i 는 0 이니까 i+1 해서 1부터 8싸지의 array를 생성
      while (queue.length) {
        // queue 의 length 가 있을 때까지 가 ture 즉, 1개 남을 때까지 while loop 이 된다고 보면됨
        for (let i = 0; i < k - 1; i++) queue.push(queue.shift()); // 1번째 value 값을 shift(기존 array 에서 지운다음) 에 뒤에다 push 해주는것 을 k-1 번째 까지 반복(1번왕자, 2번 왕자)
        queue.shift(); // k 번째 (3번 왕자는 그냥 array 에서 제외되는 것임)
        if (queue.length === 1) answer = queue.shift(); // array에 1개 값이 남을때 그 남은 값을 answer 로 return
      }
      return answer;
    }

    console.log(solution(8, 3));
  </script>
</body>
```
