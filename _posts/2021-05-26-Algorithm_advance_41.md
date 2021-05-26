---
title: "41.결혼식 - 그리디"
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
현수는 다음 달에 결혼을 합니다.  

현수는 결혼식 피로연을 장소를 빌려 3일간 쉬지 않고 하려고 합니다.  

피로연에 참석하는 친구들 N명의 참석하는 시간정보를 현수는 친구들에게 미리 요구했습니다.  

각 친구들은 자신이 몇 시에 도착해서 몇 시에 떠날 것인지 현수에게 알려주었습니다.현수는 이 정보를 바탕으로 피로연 장소에 동시에 존재하는 최대 인원수를 구하여 그 인원을 수용할 수 있는 장소를 빌리려고 합니다.  

여러분이 현수를 도와주세요.  

만약 한 친구가 오는 시간 13, 가는시간 15라면 이 친구는 13시 정각에 피로연 장에 존재하는 것이고 15시 정각에는 존재하지 않는다고 가정합니다


### 🔹 입력설명
첫째 줄에 피로연에 참석할 인원수 N(5<=N<=100,000)이 주어집니다.  

두 번째 줄부터 N줄에 걸쳐 각 인원의 오는 시간과 가는 시간이 주어집니다.  

시간은 첫날 0시를 0으로 해서 마지막날 밤 12시를 72로 하는 타임라인으로 오는 시간과 가는 시간이 음이 아닌 정수로 표현됩니다.

### 🔹 출력 설명
첫째 줄에 피로연장에 동시에 존재하는 최대 인원을 출력하세요.

### 🔹 입력예제 1
5  
14 18

12 15

15 20

20 30

5 14

### 🔹 출력 예제 1
2


----

##  📌 풀이

![11](https://user-images.githubusercontent.com/28912774/119586317-64cae880-be07-11eb-9aed-cae18f163ccf.jpg)

![22](https://user-images.githubusercontent.com/28912774/119586323-65fc1580-be07-11eb-8ca2-eb8960a9a5c0.jpg)


![image](https://user-images.githubusercontent.com/28912774/119584710-1c5dfb80-be04-11eb-81d3-6b59e02598f9.png)

```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(times) {
      let answer = Number.MIN_SAFE_INTEGER; // answer 최소값 설정
      let timeLine = []; // 타임라인 빈 arr 선언
      for(let x of times) {
        timeLine.push([x[0], 's']);// 시작시간으로  arr 형태로 push
        timeLine.push([x[1], 'e']); // 떠나는 시간 arr 형태로 push
      }
      timeLine.sort((a, b) => {
        if(a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt(); // 시간이 같은 시간일 경우 뒤에 's' 와 'e' 를 비교해서 ASSICI code 가 먼저 인 e 가 먼저 오게 오름차순 정렬
        else return a[0] - b[0]; // 시간이 다를 경우에는 시간 순서대로 오름 차순 정렬
      });
      let cnt = 0;
      for(let x of timeLine) {
        if(x[1] === 's') cnt ++; // s 일경우에는 cnt +1 누적
        else cnt --; // e 일경우에는 cnt -1 누적
        answer = Math.max(answer, cnt); // answer 와 cnt 2개를 계속 비교해서 최대값을 return 함 
      }
      return answer;
    }

    let arr = [
      [14, 18],
      [12, 15],
      [15, 20],
      [20, 30],
      [5, 14]
    ];
    console.log(solution(arr));
  </script>
</body>
```
