---
title: "16.단속카메라 - Greedy (Lv.3)"
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

고속도로를 이동하는 모든 차량이 고속도로를 이용하면서 단속용 카메라를 한 번은 만나도록 카메라를 설치하려고 합니다.

고속도로를 이동하는 차량의 경로 routes가 매개변수로 주어질 때, 모든 차량이 한 번은 단속용 카메라를 만나도록 하려면 최소 몇 대의 카메라를 설치해야 하는지를 return 하도록 solution 함수를 완성하세요.

### 🔸 제한사항

- 차량의 대수는 1대 이상 10,000대 이하입니다.

- routes에는 차량의 이동 경로가 포함되어 있으며 routes[i][0]에는 i번째 차량이 고속도로에 진입한 지점, routes[i][1]에는 i번째 차량이 고속도로에서 나간 지점이 적혀 있습니다.

- 차량의 진입/진출 지점에 카메라가 설치되어 있어도 카메라를 만난것으로 간주합니다.

- 차량의 진입 지점, 진출 지점은 -30,000 이상 30,000 이하입니다.

### 🔹 입출력 예

| routes                                   | return |
| ---------------------------------------- | ------ |
| [[-20,15], [-14,-5], [-18,-13], [-5,-3]] | 2      |

-5 지점에 카메라를 설치하면 두 번째, 네 번째 차량이 카메라를 만납니다.

-15 지점에 카메라를 설치하면 첫 번째, 세 번째 차량이 카메라를 만납니다.

---

## 📌 풀이

```js
function solution(routes) {
  let answer = 0;
  // 카메라 설치 지점을 임의의 최소값으로 설정함
  let camera = Number.MIN_SAFE_INTEGER;
  // 차량의 경로의 나가는 지점을 기준으로 오름차순 정렬
  routes.sort((a, b) => a[1] - b[1]);

  console.log(routes);
  // route 탐색
  for (let i = 0; i < routes.length; i++) {
    // 만약 설치한 카메라의 위치가 차량 진입지점 보다 전에 있으면 다음 카메라를 그 차량의 진출 지점으로 정해 줍니다
    if (camera < routes[i][0]) {
      answer++;
      camera = routes[i][1];
    }
  }
  return answer;
}

let routes = [
  [-20, 15],
  [-14, -5],
  [-18, -13],
  [-5, -3],
];
console.log(solution(routes));
```

## Reference

[https://programmers.co.kr/learn/courses/30/lessons/42884](https://programmers.co.kr/learn/courses/30/lessons/42884)
