---
title: "14.구명보트 - Greedy (Lv.2)"
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

무인도에 갇힌 사람들을 구명보트를 이용하여 구출하려고 합니다. 구명보트는 작아서 한 번에 최대 2명씩 밖에 탈 수 없고, 무게 제한도 있습니다.

예를 들어, 사람들의 몸무게가 [70kg, 50kg, 80kg, 50kg]이고 구명보트의 무게 제한이 100kg이라면 2번째 사람과 4번째 사람은 같이 탈 수 있지만 1번째 사람과 3번째 사람의 무게의 합은 150kg이므로 구명보트의 무게 제한을 초과하여 같이 탈 수 없습니다.

구명보트를 최대한 적게 사용하여 모든 사람을 구출하려고 합니다.

사람들의 몸무게를 담은 배열 people과 구명보트의 무게 제한 limit가 매개변수로 주어질 때, 모든 사람을 구출하기 위해 필요한 구명보트 개수의 최솟값을 return 하도록 solution 함수를 작성해주세요.

### 🔸 제한사항

- 무인도에 갇힌 사람은 1명 이상 50,000명 이하입니다.

- 각 사람의 몸무게는 40kg 이상 240kg 이하입니다.

- 구명보트의 무게 제한은 40kg 이상 240kg 이하입니다.

- 구명보트의 무게 제한은 항상 사람들의 몸무게 중 최댓값보다 크게 주어지므로 사람들을 구출할 수 없는 경우는 없습니다.

### 🔹 입출력 예

| people           | limit | return |
| ---------------- | ----- | ------ |
| [70, 50, 80, 50] | 100   | 3      |
| [70, 80, 50]     | 100   | 3      |

---

## 📌 풀이

- 구명보트에 최대 2명씩 밖에 탈 수 없기 때문에 가장 많이 탈 수 있는 방법은 가장 무거운 사람과 가장 가벼운 사람이 타는 방법 뿐입니다.

- people 을 무게 순으로 내림차순 정렬 시킨후

- 가장 무거운 사람과 가장 가벼운 사람의 무게 합이 무게 제한 보다 낮으면 두 사람이 빠지고 구명보트 갯수를 추가하고, 그렇지 않으면 가장 무거운 사람부터 빠지고 구명 보트 개수 추가 함

- 총 필요한 구명보트 수를 return

```js
function solution(people, limit) {
  let answer = 0;
  // 무거운 순서대로 내림 차순 정렬
  people = people.sort((a, b) => b - a);

  for (let i = 0, j = people.length - 1; i <= j; i++) {
    // 2명 밖에 탈 수 없기 때문에 가장 많이 탈 수 있는 방법은 가장 무거운 사람과 가장 가벼운 사람이 같이 타는 방법 뿐이라서 i 와 j 마지막 부분 비교해서 그 합이 limit 보다 작게되면 2명 탈 수 있는 경우에 수가 됨
    if (people[i] + people[j] <= limit) {
      // if 조건에 만족할 경우에는 사람을 한명 빼야 되기 때문에 j--
      j--;
    }
    // 무거운 사람부터 1명씩 보트가 필요하니까 보트 count ++
    answer++;
  }
  return answer;
}

let people = [70, 50, 80, 50];
let limit = 100;
console.log(solution(people, limit));
```

## Reference

[https://programmers.co.kr/learn/courses/30/lessons/42885](https://programmers.co.kr/learn/courses/30/lessons/42885)
