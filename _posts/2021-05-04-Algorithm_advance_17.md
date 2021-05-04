---
title:  "17.K번째 큰 수 - 완전탐색(블루투포스)"
excerpt: "Algorithm (JS)_Advance"

categories:
  - Algorithm_Advance
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---

----


# K번째 큰 수

##  🔍 문제 
현수는 1부터 100사이의 자연수가 적힌 N장의 카드를 가지고 있습니다. 같은 숫자의 카드가 여러장 있을 수 있습니다.  
현수는 이 중 3장을 뽑아 각 카드에 적힌 수를 합한 값을 기록하려고 합니다.  
3장을 뽑을 수 있는 모든 경우를 기록합니다. 기록한 값 중 K번째로 큰 수를 출력하는 프로그램을 작성하세요.  
만약 큰 수부터 만들어진 수가 25 25 23 23 22 20 19......이고 K값이 3이라면 K번째 큰 값은 22입니다.  



### 🔹 입력설명
첫 줄에 자연수 N(3<=N<=100)과 K(1<=K<=50) 입력되고, 그 다음 줄에 N개의 카드값이 입력된다.  

### 🔹 출력 설명
첫 줄에 K번째 수를 출력합니다. K번째 수는 반드시 존재합니다.


### 🔹 입력예제 1
10 3  
13 15 34 23 45 65 33 11 26 42   

### 🔹 출력 예제 1
143

----

##  📌 풀이
![image](https://user-images.githubusercontent.com/28912774/116966826-f99c6380-aceb-11eb-9cd2-180dfb717005.png)

- [Set() 함수에 대해서 알아두기](https://velog.io/@dolarge/Java-Script-Set-%EA%B3%BC-Map)

- [sort() 내림차순, 올림차순 알아두기](https://fluorite94.tistory.com/220)


```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(n, k, card) {
      let answer;
      let tmp = new  Set(); // set 함수를 객체에 할당하는것
      for(let i=0; i<n; i++ ) {
        for(let j=i+1; j<n; j++) { // i 뒤편 부터 돌아야 조합이 되는것임
          for(let k=j+1; k<n; k++) { // j 뒤편부터 돌기
            tmp.add(card[i] + card[j] + card[k]) // set에  자료를 추가하는 메소드는 add() , 그리고 3개 뽑아 내는 조합임
          }
        }
      }
      let a = Array.from(tmp).sort((a, b) => b - a); // set()에서 는 sort()를 할 수 없기 때문에 배열화 Array.from 한 후에 sort(내림차순) 해 주면 됨
      answer = a[k-1] // k번째 인데, index 상에서는 1개 작은 것이기 때문에 k-1
      return answer;
    }
    let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
    console.log(solution(10, 3, arr));
  </script>
</body>
```
