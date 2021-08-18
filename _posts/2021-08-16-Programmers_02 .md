---
title: "02.위장 - Hash (Lv.2)"
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

스파이들은 매일 다른 옷을 조합하여 입어 자신을 위장합니다.

예를 들어 스파이가 가진 옷이 아래와 같고 오늘 스파이가 동그란 안경, 긴 코트, 파란색 티셔츠를 입었다면 다음날은 청바지를 추가로 입거나 동그란 안경 대신 검정 선글라스를 착용하거나 해야 합니다.

![image](https://user-images.githubusercontent.com/28912774/129573450-9ccc2b32-4471-403a-8611-842df4e3e79c.png)

스파이가 가진 의상들이 담긴 2차원 배열 clothes가 주어질 때 서로 다른 옷의 조합의 수를 return 하도록 solution 함수를 작성해주세요.

### 🔸 제한사항

- clothes의 각 행은 [의상의 이름, 의상의 종류]로 이루어져 있습니다.

- 스파이가 가진 의상의 수는 1개 이상 30개 이하입니다.

- 같은 이름을 가진 의상은 존재하지 않습니다.

- clothes의 모든 원소는 문자열로 이루어져 있습니다.

- 모든 문자열의 길이는 1 이상 20 이하인 자연수이고 알파벳 소문자 또는 ’\_’ 로만 이루어져 있습니다.

- 스파이는 하루에 최소 한 개의 의상은 입습니다.

### 🔹 입출력 예

![image](https://user-images.githubusercontent.com/28912774/129573759-cdc55abf-6dc9-4bbf-969a-1378df104d2a.png)

---

## 📌 풀이

- Hash 맵을 통해서 중복된 값의 value 값을 구한다음에 착용 할 수 있는 경우의 수를 구해 줍니다.

- 경우의 수는

  1.(headgear의 수 + 1) 1을 더 해주는 이유는 headgear를 착용하지 않을 수도 있기 때문입니다.

  2.(eyewear의 수 + 1 ) 1을 더 해주는 이유는 eyewear를 착용하지 않을 수도 있기 때문입니다.

  3.두 수는 각각 독립적이기 때문에 1번 2번의 수를 곱하고 - 1 (모두 안입는 경우는 존재하지 않으므로)

```js
function solution(cloths) {
  let answer = 0;
  // 초기값 1
  let sum = 1;
  let n = cloths.length;
  // hash map 생성
  let sH = new Map();
  // hash 맵 저장 (has, set, get)
  for (let i = 0; i < n; i++) {
    let sum = 0;
    if (sH.has(cloths[i][1])) sH.set(cloths[i][1], sH.get(cloths[i][1]) + 1);
    else sH.set(cloths[i][1], 1);
  }
  // Hash map 에서 value 값만 추출
  for (let val of sH.values()) {
    sum *= val + 1;
  }
  answer = sum - 1;
  return answer;
}
```

## Reference

[https://programmers.co.kr/learn/courses/30/lessons/42578](https://programmers.co.kr/learn/courses/30/lessons/42578)
