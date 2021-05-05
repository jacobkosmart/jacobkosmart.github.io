---
title:  "18.두 배열 합치기 - 투 포인터"
excerpt: "Algorithm (JS)_Advance"

categories:
  - Algorithm_Advance
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---

----

# 두 배열 합치기

##  🔍 문제 
오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력하는 프로그램
을 작성하세요.


### 🔹 입력설명
첫 번째 줄에 첫 번째 배열의 크기 N(1<=N<=100)이 주어집니다.  
두 번째 줄에 N개의 배열 원소가 오름차순으로 주어집니다.  
세 번째 줄에 두 번째 배열의 크기 M(1<=M<=100)이 주어집니다.  
네 번째 줄에 M개의 배열 원소가 오름차순으로 주어집니다.  
각 리스트의 원소는 int형 변수의 크기를 넘지 않습니다.  

### 🔹 출력 설명
오름차순으로 정렬된 배열을 출력합니다.

### 🔹 입력예제 1
3
1 3 5
5    
2 3 6 7 9

### 🔹 출력 예제 1
1 2 3 3 5 6 7 9


----

##  📌 풀이

- 합친다음에 sort() 함수 사용해도 되지만 -> 시간복잡도에서 투포인터가 빠르기 때문에 two pointer altorithm 을 사용해서 풀이.


[투포인터 자세히 알아보기..](https://taesung1993.tistory.com/12)

![image](https://user-images.githubusercontent.com/28912774/117087465-7a11a180-ad8a-11eb-8cd4-b9139c29d2a1.png)

![image](https://user-images.githubusercontent.com/28912774/117087482-885fbd80-ad8a-11eb-85d1-d3028edf49fc.png)

```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(arr1, arr2) {
      let answer = [];
      let n = arr1.length;
      let m = arr2.length;
      let p1 = p2 = 0; // 투포인터 초기화
      while(p1<n && p2<m) { // arr 둘중 하나 아무거나 비교가 끝나게 되면 false 되서 while 문 break (그래서 && 를 사용함) 
        if(arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]); // p1이 가리키고 있는 값을 push 하고 그 다음에 p1을 ++ 해주는 것임 (후치연산)
        else answer.push(arr2[p2++]); // arr2 가 작을때는 p2의 값 push 후에 ++
      }
      while(p1<n) answer.push(arr1[p1++]); // 위에 while 문 돌고 p1이 남게 되면 나머지 남은 값 push 
      while(p2<m) answer.push(arr2[p2++]); // 위에 while 문 돌고 p2이 남게 되면 나머지 남은 값 push 
      return answer;
    }
    let a = [1, 3, 5];
    let b = [2, 3, 6, 7, 9];
    console.log(solution(a, b));
  </script>
</body>
```
