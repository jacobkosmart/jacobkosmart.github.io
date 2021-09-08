---
title: "09.모의고사 - 완전탐색 (Lv.1)"
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

수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

## 🔸 제한사항

- 시험은 최대 10,000 문제로 구성되어있습니다.

- 문제의 정답은 1, 2, 3, 4, 5중 하나입니다.

- 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.

## 🔹 입출력 예

| answers         | return    |
| --------------- | --------- |
| [1, 2, 3, 4, 5] | [ 1 ]     |
| [1, 3, 2, 4, 2] | [1, 2, 3] |

## 🔹 입출력 예 설명

### 입출력 예 # 1

- 수포자 1은 모든 문제를 맞혔습니다.

- 수포자 2는 모든 문제를 틀렸습니다.

- 수포자 3은 모든 문제를 틀렸습니다.

따라서 가장 문제를 많이 맞힌 사람은 수포자 1입니다.

### 입출력 예 # 2

- 모든 사람이 2문제씩을 맞췄습니다.

---

## 📌 풀이

```js
function solution(answers) {
  let answer = [];
  // user array 화 하기
  let user = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  // user 수에 맞게 포인트 점수 0으로 초기화
  let point = Array.from({ length: user.length }, () => 0);

  // console.log(point);

  // 각 user 별 answer 와의 값 비교 i % 각 유저의 길이의 값의 나머지를 맞음 그리고 point 에 1점 추가
  for (let i = 0; i < answers.length; i++) {
    if (user[0][i % user[0].length] === answers[i]) {
      point[0]++;
    }
    if (user[1][i % user[1].length] === answers[i]) {
      point[1]++;
    }
    if (user[2][i % user[2].length] === answers[i]) {
      point[2]++;
    }
  }

  // console.log(point);

  // arr 에서 max 값 구하기 spread 문법 사용
  let max = Math.max(...point);
  // console.log(max);

  //  max 값과 point 값이 같을 경우 answer 에 번호 입력 (동점 일경우 오름차순 정렬해야되기 때문에 push 로 순차적으로 넣음)
  for (let i = 0; i < 3; i++) {
    if (point[i] === max) answer.push(i + 1);
  }
  return answer;
}

let answers = [1, 3, 2, 4, 2];
console.log(solution(answers));
```

## Reference

[https://programmers.co.kr/learn/courses/30/lessons/42840](https://programmers.co.kr/learn/courses/30/lessons/42840)
