---
title: "40.회의실 배정 - 그리디"
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
한 개의 회의실이 있는데 이를 사용하고자 하는 n개의 회의들에 대하여 회의실 사용표를 만들려고 한다. 각 회의에 대해 시작시간과 끝나는 시간이 주어져 있고, 각 회의가 겹치지 않게 하면서 회의실을 사용할 수 있는 최대수의 회의를 찾아라. 단, 회의는 한번 시작하면 중간에 중단될 수 없으며 한 회의가 끝나는 것과 동시에 다음 회의가 시작될 수 있다


### 🔹 입력설명
첫째 줄에 회의의 수 n(1<=n<=100,000)이 주어진다. 둘째 줄부터 n+1 줄까지 각 회의의 정보가 주어지는데 이것은 공백을 사이에 두고 회의의 시작시간과 끝나는 시간이 주어진다.회의의 시작시간과 끝나는 시간의 조건은 (시작시간 <= 끝나는 시간)입니다.
 
### 🔹 출력 설명
첫째 줄에 최대 사용할 수 있는 회의 수를 출력하여라. 

### 🔹 입력예제 1
5  

1 4

2 3

3 5

4 6 

5 7

### 🔹 출력 예제 1
3

#### 예제설명

(2, 3), (3, 5), (5, 7)이 회의실을 이용할 수 있다.

### 🔹 입력예제 2
3

3 3

1 3

2 3

### 🔹 출력 예제 2
2



----

##  📌 풀이

![11](https://user-images.githubusercontent.com/28912774/119430569-fbd26a80-bd4b-11eb-8de0-dfb98a861a31.jpg)


![22](https://user-images.githubusercontent.com/28912774/119430570-fc6b0100-bd4b-11eb-8977-b72031225ca9.jpg)


![33](https://user-images.githubusercontent.com/28912774/119430572-fd9c2e00-bd4b-11eb-9e89-124e09185449.jpg)

```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(meeting) {
      let answer= 0;
      meeting.sort((a, b) => {
        if(a[1] === b[1]) return a[0] - b[0]; // 뒷자리 숫자(끝나는 시간이 같을경우) 는 앞자리 숫자로 오름차순으로 정렬함
        else return a[1] - b[1] // 뒷 자리 숫자가 다를경우는 끝나는 시간으로 오름차순 정렬
      })
      let et = 0; // endtime 초기화
      for(let x of meeting) {
        if(x[0] >= et) { // 처음 회의시간 과 >= et 끝나는 시간 0보다 클경우
          answer++; // 회의 가능 숫자 + 1 추가
          et = x[1]; // 첫번째 회의가 끝나는 시간이 end time 이 됨
        }
      }
      return answer;
    }

    let arr = [
      [1, 4],
      [2, 3],
      [3, 5],
      [4, 6],
      [5, 7]
    ];
    console.log(solution(arr));
  </script>
</body>
```

