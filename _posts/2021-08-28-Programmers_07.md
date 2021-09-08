---
title: "07.가장큰수 - 정렬 (Lv.2)"
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

0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.

예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.

0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.

### 🔸 제한사항

- numbers의 길이는 1 이상 100,000 이하입니다.

- numbers의 원소는 0 이상 1,000 이하입니다.

- 정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.

### 🔹 입출력 예

| numbers           | return    |
| ----------------- | --------- |
| [6, 10, 2]        | "6210"    |
| [3, 30, 34, 5, 9] | "9534330" |

---

## 📌 풀이

```js
function solution(num) {
  // number 를 map 을 사용해서 string 화 하기
  let strings = num.map((a) => a + "");
  console.log(strings);

  // 내림차순 정렬한 후, "" 기준으로 합치기
  let answer = strings.sort((a, b) => b + a - (a + b)).join("");
  console.log(answer);

  // 만약 0일 경우에  0 을 리턴 방어코드로 [0,0,0,0] 이 값으로 되면 "0000" 이 되니까 0으로 return
  return answer[0] === "0" ? "0" : answer;
}

let num = [6, 10, 2];
console.log(solution(num));
```

## Reference

[https://programmers.co.kr/learn/courses/30/lessons/42746](https://programmers.co.kr/learn/courses/30/lessons/42746)
