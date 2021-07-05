---
title:  "19.공통원소 구하기 - 투 포인터"
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
A, B 두 개의 집합이 주어지면 두 집합의 공통 원소를 추출하여 오름차순으로 출력하는 프로그램을 작성하세요..


### 🔹 입력설명
첫 번째 줄에 집합 A의 크기 N(1<=N<=30,000)이 주어집니다.  
두 번째 줄에 N개의 원소가 주어집니다. 원소가 중복되어 주어지지 않습니다.  
세 번째 줄에 집합 B의 크기 M(1<=M<=30,000)이 주어집니다.  
네 번째 줄에 M개의 원소가 주어집니다. 원소가 중복되어 주어지지 않습니다.  
각 집합의 원소는 1,000,000,000이하의 자연수입니다.  

### 🔹 출력 설명
두 집합의 공통원소를 오름차순 정렬하여 출력합니다.

### 🔹 입력예제 1
5  
1 3 9 5 2  
5  
3 2 5 7 8  

### 🔹 출력 예제 1
2 3 5


----

##  📌 풀이

![image](https://user-images.githubusercontent.com/28912774/117089226-d2976d80-ad8f-11eb-8789-50f2784aa36c.png)

![image](https://user-images.githubusercontent.com/28912774/117089259-e5aa3d80-ad8f-11eb-9a94-352e4dfab405.png)

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
      let p1 = p2 = 0;
      arr1.sort((a, b) => a - b) // arr1 오름차순 정렬
      arr2.sort((a, b) => a - b) // arr2 오름차순 정렬
      while(p1<n && p2<m) { // 총 탐색 범위 설정
        if(arr1[p1] === arr2[p2]) { // 값이 같을경우에 push 해줌
          answer.push(arr1[p1++]); // p1, p2 값이 동시에 증가
          p2++;
        }
        else if(arr1[p1] < arr2[p2]) p1++; // 같지 않을 경우에는 비교해서 작은값이 ++
        else p2++
      }
      return answer;
    }

    let a = [1, 3, 9, 5, 2];
    let b = [3, 2, 5, 7, 8];
    console.log(solution(a, b));
  </script>
</body>
```
