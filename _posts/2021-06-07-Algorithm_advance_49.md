---
title: "49.합이 같은 부분집합 - DFS"
excerpt: "Algorithm (JS)_Advance"

categories:
  - Algorithm_Advance
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---

---


## 🔍 문제

N개의 원소로 구성된 자연수 집합이 주어지면, 이 집합을 두 개의 부분집합으로 나누었을 때 두 부분집합의 원소의 합이 서로 같은 경우가 존재하면 “YES"를 출력하고, 그렇지 않으면 ”NO"를 출력하는 프로그램을 작성하세요.

둘로 나뉘는 두 부분집합은 서로소 집합이며, 두 부분집합을 합하면 입력으로 주어진 원래의 집합이 되어 합니다.

예를 들어 {1, 3, 5, 6, 7, 10}이 입력되면 {1, 3, 5, 7} = {6, 10} 으로 두 부분집합의 합이 16으로 같은 경우가 존재하는 것을 알 수 있다

### 🔹 입력설명

첫 번째 줄에 자연수 N(1<=N<=10)이 주어집니다.

두 번째 줄에 집합의 원소 N개가 주어진다. 각 원소는 중복되지 않으며, 그 크기는 1,000,000이하입니다

### 🔹 출력 설명

첫 번째 줄에 “YES" 또는 ”NO"를 출력한

### 🔹 입력예제 1

6

1 3 5 6 7 10

### 🔹 출력 예제 1

YES

출처 : 아마존 인터뷰

---

## 📌 풀이

![image](https://user-images.githubusercontent.com/28912774/121015201-ad09e380-c7d5-11eb-8b85-5e448ab6b238.png)


![image](https://user-images.githubusercontent.com/28912774/121015211-b004d400-c7d5-11eb-88fd-df652163e55a.png)



```html
<head>
  <meta charset="UTF-8" />
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(arr) {
      let answer = "NO",
        flag = 0; // flag 를 일단 거짓 0으로 설정
      let total = arr.reduce((a, b) => a + b, 0); // arr의 총 합계
      let n = arr.length;

      function DFS(l, sum) {
        if (flag) return; // flag 가 참일 경우 (1) 일때 재귀 함수 종료 선언
        if (l === n) {
          if ((total - sum) === sum) { // index 가 arr 의 마지막까지 왔을때 D(6, sum) 일때  DFS 종료 선언 -> true
            answer = "YES"; // 만약 총 합에서 선택된 값의 합에서 뺀거와 arr 의 나머지 값의 합과 같을 경우는 YES 로 return
            flag = 1; // yes 가 나왔기 때문에 재귀함수가 다 돌 필요 없이 flag = 1 설정 해줘서 멈추게 함
          }
        } else {
          DFS(l + 1, sum + arr[l]); // 만약 arr 값을 선택 사용 할 경우는 다음 level 로 이동하면서 sum 을 누적시킴
          DFS(l + 1, sum); // 만약 arr 값을 선택 사용하지 않을 경우는 다음 level 로 이동하는데 sum에 값을 안더하고 그냥 넘김
        }
      }
      DFS(0, 0);
      return answer;
    }
    let arr = [1, 3, 5, 6, 7, 10];
    console.log(solution(arr));
  </script>
</body>
```
