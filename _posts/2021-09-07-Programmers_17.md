---
title: "17.νκ²λλ² - DFS/BFS (Lv.2)"
excerpt: "Programmers"

categories:
  - programmers
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---

---

## π λ¬Έμ 

nκ°μ μμ΄ μλ μ μκ° μμ΅λλ€. μ΄ μλ₯Ό μ μ ν λνκ±°λ λΉΌμ νκ² λλ²λ₯Ό λ§λ€λ €κ³  ν©λλ€. μλ₯Ό λ€μ΄ [1, 1, 1, 1, 1]λ‘ μ«μ 3μ λ§λ€λ €λ©΄ λ€μ λ€μ― λ°©λ²μ μΈ μ μμ΅λλ€.

```
-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3
```

μ¬μ©ν  μ μλ μ«μκ° λ΄κΈ΄ λ°°μ΄ numbers, νκ² λλ² targetμ΄ λ§€κ°λ³μλ‘ μ£Όμ΄μ§ λ μ«μλ₯Ό μ μ ν λνκ³  λΉΌμ νκ² λλ²λ₯Ό λ§λλ λ°©λ²μ μλ₯Ό return νλλ‘ solution ν¨μλ₯Ό μμ±ν΄μ£ΌμΈμ.

### πΈ μ νμ¬ν­

- μ£Όμ΄μ§λ μ«μμ κ°μλ 2κ° μ΄μ 20κ° μ΄νμλλ€.

- κ° μ«μλ 1 μ΄μ 50 μ΄νμΈ μμ°μμλλ€.

- νκ² λλ²λ 1 μ΄μ 1000 μ΄νμΈ μμ°μμλλ€.

### πΉ μμΆλ ₯ μ

| numbers         | target | return |
| --------------- | ------ | ------ |
| [1, 1, 1, 1, 1] | 3      | 5      |

---

## π νμ΄

```js
function solution(numbers, target) {
  let answer = 0;

  // DFS νμ ν¨μ
  function DFS(level, sum) {
    //  level νμμ΄ numbers μ κΈΈμ΄ λ§νΌ νμ νμλ μ κ·ν¨μ μ’λ£
    if (level === numbers.length) {
      // ν©κ³μ target μ΄ κ°μ κ²½μ°μ answer++
      if (sum === target) {
        answer++;
      }
      return;
    } else {
      // DFS μΆκ° λ λ²¨μ΄ μ¦κ°ν λ λ§λ€ sum μ λμ 
      DFS(level + 1, sum + numbers[level]);
      // DFS μΆκ° λ λ²¨μ΄ μ¦κ°ν λ λ§λ€ sum μμ λΉΌκΈ°
      DFS(level + 1, sum - numbers[level]);
    }
  }

  DFS(0, 0);

  return answer;
}

let numbers = [1, 1, 1, 1, 1, 1, 1];
let target = 3;
console.log(solution(numbers, target));
```

## Reference

[https://programmers.co.kr/learn/courses/30/lessons/43165](https://programmers.co.kr/learn/courses/30/lessons/43165)
