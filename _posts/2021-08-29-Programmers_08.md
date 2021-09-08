---
title: "08.H-index - 정렬 (Lv.2)"
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

H-Index는 과학자의 생산성과 영향력을 나타내는 지표입니다. 어느 과학자의 H-Index를 나타내는 값인 h를 구하려고 합니다. 위키백과1에 따르면, H-Index는 다음과 같이 구합니다.

어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index입니다.

어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때, 이 과학자의 H-Index를 return 하도록 solution 함수를 작성해주세요.

### 🔸 제한사항

- 과학자가 발표한 논문의 수는 1편 이상 1,000편 이하입니다.

- 논문별 인용 횟수는 0회 이상 10,000회 이하입니다.

### 🔹 입출력 예

| citations       | return |
| --------------- | ------ |
| [3, 0, 6, 1, 5] | "3"    |

---

## 📌 풀이

```js
function solution(citations) {
  // citations 내림차순 정렬
  let sorting = citations.sort((a, b) => b - a);
  console.log(sorting);

  let index = 0;
  // index 가 citations 길이 보다 작거나 같은때 까지 반복
  while (index <= citations.length) {
    // index 가 1씩 증가하고 citations 반복 까지 탐색
    if (index + 1 <= citations[index]) {
      // true 일경우 index ++
      index++;
    } else break;
  }
  return index;
}

let citations = [3, 0, 6, 1, 5];
console.log(solution(citations));
```

## Reference

[https://programmers.co.kr/learn/courses/30/lessons/42747](https://programmers.co.kr/learn/courses/30/lessons/42747)
