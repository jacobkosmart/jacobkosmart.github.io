---
title: "12.체육복 - Greedy (Lv.1)"
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

점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다. 예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다. 체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.

전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.

### 🔸 제한사항

- 전체 학생의 수는 2명 이상 30명 이하입니다.

- 체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.

- 여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.

- 여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.

- 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는

- 체육복을 빌려줄 수 없습니다.

### 🔹 입출력 예

| n   | lost   | reserve   | return |
| --- | ------ | --------- | ------ |
| 5   | [2, 4] | [1, 3, 5] | 5      |
| 5   | [2, 4] | [3]       | 4      |
| 3   | [3]    | [1]       | 2      |

예제 #1
1번 학생이 2번 학생에게 체육복을 빌려주고, 3번 학생이나 5번 학생이 4번 학생에게 체육복을 빌려주면 학생 5명이 체육수업을 들을 수 있습니다.

예제 #2
3번 학생이 2번 학생이나 4번 학생에게 체육복을 빌려주면 학생 4명이 체육수업을 들을 수 있습니다.

---

## 📌 풀이

```js
function solution(n, lost, reserve) {
  let answer;
  // 진짜 체육복이 없는 학생들의 번호 filter
  let realLost = lost.filter((v) => !reserve.includes(v));
  // 진짜 체육복을 두개 가지고 있는 학생들의 번호 filter
  let realReserve = reserve.filter((v) => !lost.includes(v));

  // 전체 학생 수에서 체육복이 없고 빌리지도 못한 학생 수 빼기
  answer =
    n -
    realLost.filter((v) => {
      // 체육복이 두개인 학생들 중 차이가 절대값으로 1개거나 없는 학생 수 (앞뒤로 하나씩 이니까 절대값을 사용)
      let noCloths = realReserve.find((a) => Math.abs(v - a) <= 1);
      // 만약 black 가 없을 경우에 체육복을 아무도 갖지 목하기 때문에 바로 return
      if (!noCloths) return true;
      // 그리고 나서 빌려 줬지 때문에 lost 에서 제외 및 reserve 에서도 빌려준 학생 제외 시키기
      realReserve = realReserve.filter((r) => r !== noCloths);
    }).length;

  return answer;
}

let n = 5;
let lost = [2, 4];
let reserve = [3];

console.log(solution(n, lost, reserve));
```

## Reference

[https://programmers.co.kr/learn/courses/30/lessons/42862](https://programmers.co.kr/learn/courses/30/lessons/42862)
