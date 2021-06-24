# 조합의  경우수 (메모이제이션) 

##  🔍 문제 

![image](https://user-images.githubusercontent.com/28912774/123179396-46b6dd80-d4c4-11eb-9de3-6e710479d81f.png)

로  계산합니다.  하지만  여러분은  이  공식을  쓰지않고  다음  공식을  사용하여 재귀를  이용해  조합수를  구해주는  프로그램을  작성하세요

![image](https://user-images.githubusercontent.com/28912774/123179423-546c6300-d4c4-11eb-9769-06cecd2b8d46.png)

### 🔹 입력설명
첫째  줄에  자연수  n(3<=n<=33)과  r(0<=r<=n)이  입력됩니다

### 🔹 출력 설명
첫째  줄에  조합수를  출력합니다

### 🔹 입력예제 1
5 3

### 🔹 출력 예제 1
10


### 🔹 입력예제 2
33 19

### 🔹 출력 예제 2
81880920


----

##  📌 풀이

![image](https://user-images.githubusercontent.com/28912774/123186052-4b828e00-d4d2-11eb-8f3a-3466e017ca78.png)
![image](https://user-images.githubusercontent.com/28912774/123186060-4e7d7e80-d4d2-11eb-9d74-5b308cb20622.png)
![image](https://user-images.githubusercontent.com/28912774/123186067-51786f00-d4d2-11eb-92c7-2d3aa677d976.png)
![image](https://user-images.githubusercontent.com/28912774/123186073-54735f80-d4d2-11eb-9e46-82d23034f8f2.png)


```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(n, r) {
      let answer;
      // 문제에서 제시한 최대 입력값인 33이니까  여유있게 행의 크기가 35개, 열의 크기가 35인 dynamic arr 생성해서 그안에 0으로 채운것 생성
      let dy = Array.from(Array(35), () => Array(35).fill(0)); 
      function DFS(n, r) {
        if(dy[n][r] > 0) return dy[n][r]; // 재귀가 돌때 dy 안에 값이 있는경우에는 재귀 돌지 말고 dy 안에 있는 값을 retun 해줌
        if(n === r || r === 0) return 1; // 재귀 종료 설정 
        else return dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r); // 결과값을 memoization 하기 위해서 dy arr 에 값을 저장함
      }
      answer = DFS(n, r);
      return answer;
    }

    console.log(solution(33, 19));
  </script>
</body>
```
