---
title: "21.연속 부분수열 2 - 투 포인터"
excerpt: "Algorithm (JS)_Advance"

categories:
  - Algorithm_Advance
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---

---

# 연속 부분수열 2

##  🔍 문제 
N개의 수로 이루어진 수열이 주어집니다.  
이 수열에서 연속부분수열의 합이 특정숫자 M이하가 되는 경우가 몇 번 있는지 구하는 프로그램을 작성하세요.  
만약 N=5, M=5이고 수열이 다음과 같다면  
1 3 1 2 3합이 5이하가 되는 연속부분수열은 {1}, {3}, {1}, {2}, {3}, {1, 3}, {3, 1}, {1, 2}, {2, 3}, {1, 3, 1}로 총 10가지입니다


### 🔹 입력설명
첫째 줄에 N(1≤N≤100,000), M(1≤M≤100,000,000)이 주어진다.  
수열의 원소값은 1,000을 넘지 않는 자연수이다

### 🔹 출력 설명
첫째 줄에 경우의 수를 출력한다

### 🔹 입력예제 1
5 5   
1 3 1 2 3 

### 🔹 출력 예제 1
10


----

##  📌 풀이

![파일_000](https://user-images.githubusercontent.com/28912774/117392183-846ba100-af2c-11eb-9e3c-13c107c9c845.png)

![ㅈ2](https://user-images.githubusercontent.com/28912774/117393399-09f05080-af2f-11eb-801e-231d452810f1.png)



```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(m, arr) {
      let answer=0, lt=0, sum=0;
      for(let rt=0; rt<arr.length; rt++) {
        sum += arr[rt];
        while(sum > m) { // sum이 크게 되면
          sum -= arr[lt++];
        }
        answer += (rt-lt+1); // m 이하가 되는 갯수를 구하는것       
      } 
      return answer;
    }
    let a = [1, 3, 1, 2, 3];
    console.log(solution(5, a));
  </script>
</body>
```
