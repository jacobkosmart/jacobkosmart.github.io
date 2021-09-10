---
title: "18.네트워크 - DFS/BFS (Lv.3)"
excerpt: "Programmers"

categories:
  - programmers
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---

---

## 🔍 문제

네트워크란 컴퓨터 상호 간에 정보를 교환할 수 있도록 연결된 형태를 의미합니다. 예를 들어, 컴퓨터 A와 컴퓨터 B가 직접적으로 연결되어있고, 컴퓨터 B와 컴퓨터 C가 직접적으로 연결되어 있을 때 컴퓨터 A와 컴퓨터 C도 간접적으로 연결되어 정보를 교환할 수 있습니다. 따라서 컴퓨터 A, B, C는 모두 같은 네트워크 상에 있다고 할 수 있습니다.

컴퓨터의 개수 n, 연결에 대한 정보가 담긴 2차원 배열 computers가 매개변수로 주어질 때, 네트워크의 개수를 return 하도록 solution 함수를 작성하시오.

### 🔸 제한사항

- 컴퓨터의 개수 n은 1 이상 200 이하인 자연수입니다.

- 각 컴퓨터는 0부터 n-1인 정수로 표현합니다.

- i번 컴퓨터와 j번 컴퓨터가 연결되어 있으면 computers[i][j]를 1로 표현합니다.

- computer[i][i]는 항상 1입니다.

### 🔹 입출력 예

| n   | computer                          | return |
| --- | --------------------------------- | ------ |
| 3   | [[1, 1, 0], [1, 1, 0], [0, 0, 1]] | 2      |
| 3   | [[1, 1, 0], [1, 1, 1], [0, 1, 1]] | 1      |

예제 #1
아래와 같이 2개의 네트워크가 있습니다.

![image](https://grepp-programmers.s3.amazonaws.com/files/ybm/5b61d6ca97/cc1e7816-b6d7-4649-98e0-e95ea2007fd7.png)

예제 #2
아래와 같이 1개의 네트워크가 있습니다.

![image](https://grepp-programmers.s3.amazonaws.com/files/ybm/7554746da2/edb61632-59f4-4799-9154-de9ca98c9e55.png)

---

## 📌 풀이

```js
function solution(n, computers) {
  var answer = 0;
  // 방문체크를 위한 arr 생성
  let visited = Array.from({ length: n }, () => false);

  // 재귀함수
  function DFS(start) {
    // 재귀 시작할때 true 로 바꿈
    visited[start] = true;

    for (let i = 0; i < n; i++) {
      // 방문하지 않았고, 연결되어 있다면
      if (!visited[i] && computers[start][i] === 1) {
        // 재귀 계속 탐색
        DFS(i);
      }
    }
  }

  // 컴퓨터 갯수만큼 탐색
  for (let j = 0; j < n; j++) {
    // 방문을 하지 안았다고 하면
    if (!visited[j]) {
      // 제귀함수 시작
      DFS(j);
      // 네트워크 개수 추가
      answer++;
    }
  }
  return answer;
}

let computers = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];

let n = 3;
console.log(solution(n, computers));
```

## Reference

[https://programmers.co.kr/learn/courses/30/lessons/43162](https://programmers.co.kr/learn/courses/30/lessons/43162)
