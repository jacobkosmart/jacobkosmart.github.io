---
title:  "15.멘토링 - 완전탐색(블루투포스)"
excerpt: "Algorithm (JS)_Advance"

categories:
  - Algorithm_Advance
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---

----


# 멘토링
- 블루투포스 대표적인 문제 형태임.  


##  🔍 문제 
현수네 반 선생님은 반 학생들의 수학점수를 향상시키기 위해 멘토링 시스템을 만들려고 합니다.   
멘토링은 멘토(도와주는 학생)와 멘티(도움을 받는 학생)가 한 짝이 되어 멘토가 멘티의수학공부를 도와주는 것입니다.  
선생님은 M번의 수학테스트 등수를 가지고 멘토와 멘티를 정합니다.  
만약 A학생이 멘토이고, B학생이 멘티가 되는 짝이 되었다면, A학생은 M번의 수학테스트에서모두 B학생보다 등수가 앞서야 합니다.  
M번의 수학성적이 주어지면 멘토와 멘티가 되는 짝을 만들 수 있는 경우가 총 몇 가지 인지 출력하는 프로그램을 작성하세요.



### 🔹 입력설명
첫 번째 줄에 반 학생 수 N(1<=N<=20)과 M(1<=M<=10)이 주어진다.  
두 번째 줄부터 M개의 줄에 걸쳐 수학테스트 결과가 학생번호로 주어진다.   
학생번호가 제일앞에서부터 1등, 2등, ...N등 순으로 표현된다.  
만약 한 줄에 N=4이고, 테스트 결과가 3 4 1 2로 입력되었다면 3번 학생이 1등, 4번 학생이 2등, 1번 학생이 3등, 2번 학생이 4등을 의미합니다.  

### 🔹 출력 설명
첫 번째 줄에 짝을 만들 수 있는 총 경우를 출력합니다.


### 🔹 입력예제 1
4 3   
3 4 1 2  
4 3 2 1   
3 1 4 2   

### 🔹 출력 예제 1
3  
(3, 1), (3, 2), (4, 2)와 같이 3가지 경우의 (멘토, 멘티) 짝을 만들 수 있다.  
풀이에선 추가로 tmp 값 변수를 설정해서 결과 값을 같이 확인 하였습니다.

----

##  📌 풀이
![image](https://user-images.githubusercontent.com/28912774/116833866-87962280-abf6-11eb-875a-f76dd0374402.png)

![image](https://user-images.githubusercontent.com/28912774/116833878-92e94e00-abf6-11eb-8ed2-808260363738.png)


```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(test) {
      let answer = 0, tmp = []; // 답은 멘토 맨티가 몇번 될 수 있냐의 횟수임, tmp 는 정답이 되는 경우의 수 출력
      m = test.length; // 테스트 횟수 -> 3이 됨 
      n = test[0].length // 학생 수 -> 4가 됨
      // 4중 for 문 시작
      for(let i = 1; i <= n; i++) { // i (멘토자리)1번 학생부터 n번 학생까지 for loop
        for(let j = 1; j <= n; j++) { // j (멘티자리) 1번 학생부터 n번 
          let cnt = 0; // count 0 초기화
          for(let k = 0; k < m; k++) { // 테스트 케이스 case loop
            let pi = pj =0; // 결과 등수
            for(let s = 0; s < n; s++) { // 학생수 케이스 case loop
              if(test[k][s] === i) pi = s; // i 번째 학생의 등수
              if(test[k][s] === j) pj = s; // j 번째 학생의 등수
            }
            if(pi < pj) cnt ++; // i 가 맨토가 되려면 등수 pi 등수 값이 j 의 결과갑 pj 등수 값보다 작아야 함
          }
          if(cnt === m) { // 모든 테스트 조건이 cnt 값 이랑 같아야 됨, 즉 결과값 = 총 테스트에서 조건이 통과 되는 경우에만 return
            tmp.push([i, j]) // 추가로 결과 값 출력
            answer ++;
          } 
        }
      }
      console.log(tmp)
      return answer;
    }
    let arr = [
      [3, 4, 1, 2],
      [4, 3, 2, 1],
      [3, 1, 4, 2]
    ];
    console.log(solution(arr));
  </script>
</body>
```

![image](https://user-images.githubusercontent.com/28912774/116833810-39811f00-abf6-11eb-9ef9-2aa2f350237a.png)

