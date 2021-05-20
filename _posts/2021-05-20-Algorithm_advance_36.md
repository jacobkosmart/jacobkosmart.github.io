---
title: "36.삽입 정렬 - 정렬"
excerpt: "Algorithm (JS)_Advance"

categories:
  - Algorithm_Advance
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---

---



# 삽입 정렬

## 🔍 문제

N개이 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요.

정렬하는 방법은 삽입정렬입니다

### 🔹 입력설명

첫 번째 줄에 자연수 N(1<=N<=100)이 주어집니다.

두 번째 줄에 N개의 자연수가 공백을 사이에 두고 입력됩니다. 각 자연수는 정수형 범위 안에 있습니다

### 🔹 출력 설명

오름차순으로 정렬된 수열을 출력합니다.

### 🔹 입력예제 1

6 

11 7 5 6 10 9

### 🔹 출력 예제 1

5 6 7 9 10 11

---

## 📌 풀이

![11](https://user-images.githubusercontent.com/28912774/118904256-7702dd80-b954-11eb-9553-2c0f99955c73.jpg)


![22](https://user-images.githubusercontent.com/28912774/118904258-779b7400-b954-11eb-9495-a81d7fd4b31d.jpg)



1. 삽입정렬로 풀이

```html
 <head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(arr) {
      let answer = arr;
      for(let i = 0; i < arr.length; i++) {
        let tmp = arr[i], j; // for loop j 문에 하게 되면  scope 범위가 벗어나기 때문에 for loop (j) 시작하기 전에 변수 선언
        for(j = i - 1; j >= 0; j--) { // i 이전부터 0까지 j도는데 뒤로 도니까 j--
          if(arr[j] > tmp) arr[j+1] = arr[j]; // arr[j] 가 tmp 값도다 크면 j 뒤에 값에 복사하면 서 쭉 진행
          else break; // false 일때, arr[j] 가 tmp 보다 작을 경우엔 for loop 종료 
        }
        arr[j+1] = tmp; // for loop (j) 가 종료 되고 나면 j 뒤에 tmp 값 삽입
      }
      return answer;
    }

    let arr = [11, 7, 5, 6, 10, 9];
    console.log(solution(arr));
  </script>
</body>
```

2. splice() 를 통한 array 삽입

![splice](https://user-images.githubusercontent.com/28912774/118901333-f5a84c80-b94d-11eb-84ea-3195eae7b25e.png)

```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(arr) {
      let answer = []; // 빈 arr 선언
      answer.push(arr[0]); // 0번 index 의 값 arr 에 push 
      for (let i = 1; i < arr.length; i++) {  //  1번 index 부터 탐색
        for (let j = 0; j < answer.length; j++) { // 0번 index 부터 i를 따라감 answer 의 크기 까지
          if (arr[i] < answer[j]) { // i value 가 j의 answer 값보다 작을경우
            answer.splice(j, 0, arr[i]); // splice(j번째 인덱스에 앞쪽에, 0은 삽입, arr[i]의 값을 삽입)
            break; // 그리고나서 for loop 종료
          }
        }
      }
      return answer;
    }

    let arr = [11, 7, 5, 6, 10, 9];
    console.log(solution(arr));
  </script>
</body>
```

