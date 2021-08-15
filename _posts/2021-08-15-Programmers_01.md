---
title: "01.완주하지 못한 선수 - Hash (Lv.1)"
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

수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

### 🔸 제한사항

- 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.

- completion의 길이는 participant의 길이보다 1 작습니다.

- 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.

- 참가자 중에는 동명이인이 있을 수 있습니다.

### 🔹 입출력 예

![image](https://user-images.githubusercontent.com/28912774/129476644-107f9511-fde3-4613-80e0-8e0d3bd0c478.png)

---

## 📌 풀이

2중 for 문으로 검색 시 참가자 수가 많을 수록 시간 초과에 걸리기 때문에, `sort()` 후에 for loop 한번 돌때 동일한게 없을 경우 그 값을 return

```js
function solution(participant, completion) {
  let answer = "";
  // sort string
  participant.sort();
  completion.sort();
  // 일치하지 않은 부분을 return
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return (answer = participant[i]);
    }
  }
  return answer;
}
```

![image](https://user-images.githubusercontent.com/28912774/129476779-b9ee8f2e-e3f7-40e8-aa81-8d995644a905.png)
![image](https://user-images.githubusercontent.com/28912774/129476784-112794e6-e5b1-4a4c-afcd-a7a9c322eace.png)

## Reference

https://programmers.co.kr/learn/courses/30/lessons/42576?language=javascript
