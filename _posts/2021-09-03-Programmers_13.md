---
title: "13.큰 수 만들기 - Greedy (Lv.2)"
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

어떤 숫자에서 k개의 수를 제거했을 때 얻을 수 있는 가장 큰 숫자를 구하려 합니다.

예를 들어, 숫자 1924에서 수 두 개를 제거하면 [19, 12, 14, 92, 94, 24] 를 만들 수 있습니다. 이 중 가장 큰 숫자는 94 입니다.

문자열 형식으로 숫자 number와 제거할 수의 개수 k가 solution 함수의 매개변수로 주어집니다. number에서 k 개의 수를 제거했을 때 만들 수 있는 수 중 가장 큰 숫자를 문자열 형태로 return 하도록 solution 함수를 완성하세요.

### 🔸 제한사항

- number는 1자리 이상, 1,000,000자리 이하인 숫자입니다.

- k는 1 이상 number의 자릿수 미만인 자연수입니다.

### 🔹 입출력 예

| number       | k   | return   |
| ------------ | --- | -------- |
| "1924"       | 2   | "94"     |
| "1231234"    | 3   | "3234"   |
| "4177252841" | 4   | "775841" |

---

## 📌 풀이

- 스택을 이용한 방법

만약에

```js
function solution(number, k) {
  let stack = [];
  let answer = "";

  // number 탐색 시작
  for (let i = 0; i < number.length; i++) {
    // loop 돌때 마다 number 를 임시로 el 지정
    let el = number[i];

    //  stack의 값과 비교해서 stack 에 가장 위에 있는 숫자와 비교 할때 클 경우 그 숫자를 pop
    while (k > 0 && stack[stack.length - 1] < el) {
      stack.pop();
      k--;
    }
    // el 이 stack 에 있는 값보다 크기 때문에 stack 에 push
    stack.push(el);
  }

  // k 자리수만큼 잘라서 stack 에서 글자 꺼내기
  stack.splice(stack.length - k, k);
  // stack 에서 꺼낸 숫자를 join 으로 합치기
  answer = stack.join("");
  return answer;
}

let number = "1231234";
let k = 3;
console.log(solution(number, k));
```

## Reference

[https://programmers.co.kr/learn/courses/30/lessons/42883](https://programmers.co.kr/learn/courses/30/lessons/42883)
