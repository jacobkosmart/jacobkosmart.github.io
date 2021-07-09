---
title: "65.송아지 찾기 - BFS(상태 트리탐색) "
excerpt: "Algorithm (JS)_Advance"

categories:
  - Algorithm_Advance
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---

---

# 송아지 찾기 (BFS: 상태트리탐색)

##  🔍 문제 
현수는 송아지를 잃어버렸다. 다행히 송아지에는 위치추적기가 달려 있다. 

현수의 위치와 송아지의 위치가  수직선상의 좌표 점으로 주어지면 현수는  현재 위치에서 송아지의 위치까지 다음과 같은 방법으로 이동한다. 

송아지는 움직이지 않고 제자리에 있다. 현수는  스카이  콩콩을  타고  가는데  한  번의  점프로  앞으로  1,  뒤로  1,  앞으로  5를  이동할  수 있다.  

최소  몇  번의  점프로  현수가  송아지의  위치까지  갈  수  있는지  구하는  프로그램을  작성하세요.


### 🔹 입력설명
첫 번째 줄에 현수의 위치 S와 송아지의 위치 E가  주어진다.  

직선의  좌표  점은  1부터 10,000까지이다.

### 🔹 출력 설명
점프의 최소횟수를 구한다. 답은 1이상입니다

### 🔹 입력예제 1
5 14

### 🔹 출력 예제 1
3

### 🔹 입력예제 2
8 3

### 🔹 출력 예제 2
5


----

##  📌 풀이


![image](https://user-images.githubusercontent.com/28912774/125010338-495b2a80-e0a1-11eb-877c-b1dda31548fb.png)


![image](https://user-images.githubusercontent.com/28912774/125010347-4d874800-e0a1-11eb-97ff-aa8159e840a8.png)


1. distance arr 를 만들어서 탐색 하는 방법

```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(s, e) {
      let answer = 0;
      let ch = Array.from({ length: 10001 }, () => 0); // check arr 생성 (입력 최대 값이 10000 이기 때문에 length 를 10001 까지 해야됨)
      let dis = Array.from({ length: 10001 }, () => 0); // distance arr 생성
      let queue = []; // 비어있는 queue 생성
      ch[s] = 1; // check arr 의 시작지점을 1로 설정
      queue.push(s); // 출발지점을 queue push
      dis[s] = 0; // 이미 0으로 초기화 되어 있지만, 출발 지점이 level 0 이라고 가리킴
      while(queue.length) { // queue 가 비어 있을때 while 문 종료
        let x = queue.shift(); // 첫 출발 좌표인 s(5) 가 check 배열 나오면서 탐색
        for(let nx of [x - 1, x + 1, x + 5]) { // 3 가닥으로 탐색 시작
          if(nx === e) return dis[x] + 1; // 도착지점에 도착했을때 dis arr 에 있는 x 부분의 값의 + 1 값이 answer 가 되는 것임
          if(nx > 0 && nx <= 10000 && ch[nx] === 0) { // nx 가 0보다 작으면 안되고, 최대값인 10000번 도 넘으면 안되고, check arr 에 nx 값이 있으면 안되고
            ch[nx] = 1; // 다시 돌지 않게 check 1을 걸음
            queue.push(nx); // nx 를 queue 에서 꺼내기
            dis[nx] = dis[x] + 1; // 자기 부모의 값에 1을 더해서 계속 돌아야 하기 때문에 ..
          }
        }
      }
      return answer;
    }

    console.log(solution(8, 3));
  </script>
</body>
```

2. level 을 탐색하는 방법

```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(s, e) {
      let answer = 0;
      let ch = Array.from({ length: 10001 }, () => 0); // check arr 생성
      let queue = []; // 비어있는 queue arr 생성
      queue.push(s); // queue 에 시작 node push
      ch[s] = 1; // check arr 에 push 된 node 1 로 걸어 주기
      let l = 0; // level 단계 0으로 세팅
      while (queue.length) { // queue 길이 만큼 while 문 반복
        let len = queue.length; // queue 길이 변수
        for (let i = 0; i < len; i++) { // for loop queue.length 만큼 반복
          let x = queue.shift(); // queue 에서 x 값 빼기
          for (let nx of [x - 1, x + 1, x + 5]) { // node 아래로 뻗기
            if (nx === e) return l + 1; // nx 가 도착지점에 왔을때 level 에 + 1 더한 값 return 
            if (nx > 0 && nx <= 10000 && ch[nx] === 0) { // nx 가 0 보다 크고, 10000번 보다 작을 경우, 그리고 check arr 에 1 이 아닌경우(한번도 안거쳐 간경우)
              ch[nx] = 1; // 도착했으니까 check arr 에 1 넣어 주고
              queue.push(nx); // nx 를 queue arr 에 넣어주기
            }
          }
        }
        l++; // 반복 될때 마다 level 수 증가 시킴
      }
      return answer;
    }

    console.log(solution(5, 14));
  </script>
</body>
```




