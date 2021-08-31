---
title: "05.프린터 - Stack/Queue (Lv.2)"
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

트럭 여러 대가 강을 가로지르는 일차선 다리를 정해진 순으로 건너려 합니다. 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다. 다리에는 트럭이 최대 bridge_length대 올라갈 수 있으며, 다리는 weight 이하까지의 무게를 견딜 수 있습니다. 단, 다리에 완전히 오르지 않은 트럭의 무게는 무시합니다.

예를 들어, 트럭 2대가 올라갈 수 있고 무게를 10kg까지 견디는 다리가 있습니다. 무게가 [7, 4, 5, 6]kg인 트럭이 순서대로 최단 시간 안에 다리를 건너려면 다음과 같이 건너야 합니다.

![image](https://user-images.githubusercontent.com/28912774/131057754-57d52b14-4e8e-4fdd-a080-f45b785d8093.png)

따라서, 모든 트럭이 다리를 지나려면 최소 8초가 걸립니다.

solution 함수의 매개변수로 다리에 올라갈 수 있는 트럭 수 bridge_length, 다리가 견딜 수 있는 무게 weight, 트럭 별 무게 truck_weights가 주어집니다. 이때 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 return 하도록 solution 함수를 완성하세요.

### 🔸 제한사항

- bridge_length는 1 이상 10,000 이하입니다.

- weight는 1 이상 10,000 이하입니다.

- truck_weights의 길이는 1 이상 10,000 이하입니다.

- 모든 트럭의 무게는 1 이상 weight 이하입니다.

### 🔹 입출력 예

![image](https://user-images.githubusercontent.com/28912774/131057824-50c3f8fb-14a5-4f2d-8094-4f5978dcde04.png)

---

## 📌 풀이

```js
function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  // bridge_length 길이에 맞는 arr 생성 (초기값 0)
  let bridge = Array.from({ length: bridge_length }, () => 0);

  // bridge.length 가 있는 곳 까지 while 문 반복
  while (bridge.length) {
    // bridge 앞 부분 없앨때 마다 1초씩 증가
    bridge.shift();
    answer++;

    // truck_weights 의 값이 있는 경우에만
    if (truck_weights.length) {
      // 현재 bridge 에 있는 값 더하기
      let sum = bridge.reduce((acc, val) => acc + val, 0);
      // 만약 sum + truck_weights 부분의 합이 다리의 무게와 같거나 작을 경우
      if (sum + truck_weights[0] <= weight) {
        // truck_weights 에서 값을 빼서 bridge 에 push
        bridge.push(truck_weights.shift());
      } else {
        // 무게가 클 경우에는 초과되기때문에 더이상 추가 트럭을 못올려 놓기 때문에 bridge 에 0 으로 초기화
        bridge.push(0);
      }
    }
  }
  return answer;
}

let bridge_length = 2;
let weight = 10;
let truck_weights = [7, 4, 5, 6];

console.log(solution(bridge_length, weight, truck_weights));
```

변경 테스트

## Reference

[https://programmers.co.kr/learn/courses/30/lessons/42583](https://programmers.co.kr/learn/courses/30/lessons/42583)
