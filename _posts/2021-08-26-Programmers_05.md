---
title: "05.νλ¦°ν° - Stack/Queue (Lv.2)"
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

μΌλ°μ μΈ νλ¦°ν°λ μΈμ μμ²­μ΄ λ€μ΄μ¨ μμλλ‘ μΈμν©λλ€. κ·Έλ κΈ° λλ¬Έμ μ€μν λ¬Έμκ° λμ€μ μΈμλ  μ μμ΅λλ€. μ΄λ° λ¬Έμ λ₯Ό λ³΄μνκΈ° μν΄ μ€μλκ° λμ λ¬Έμλ₯Ό λ¨Όμ  μΈμνλ νλ¦°ν°λ₯Ό κ°λ°νμ΅λλ€. μ΄ μλ‘­κ² κ°λ°ν νλ¦°ν°λ μλμ κ°μ λ°©μμΌλ‘ μΈμ μμμ μνν©λλ€.

1. μΈμ λκΈ°λͺ©λ‘μ κ°μ₯ μμ μλ λ¬Έμ(J)λ₯Ό λκΈ°λͺ©λ‘μμ κΊΌλλλ€. 2. λλ¨Έμ§ μΈμ λκΈ°λͺ©λ‘μμ Jλ³΄λ€ μ€μλκ° λμ λ¬Έμκ° ν κ°λΌλ μ‘΄μ¬νλ©΄ Jλ₯Ό λκΈ°λͺ©λ‘μ κ°μ₯ λ§μ§λ§μ λ£μ΅λλ€. 3. κ·Έλ μ§ μμΌλ©΄ Jλ₯Ό μΈμν©λλ€.

μλ₯Ό λ€μ΄, 4κ°μ λ¬Έμ(A, B, C, D)κ° μμλλ‘ μΈμ λκΈ°λͺ©λ‘μ μκ³  μ€μλκ° 2 1 3 2 λΌλ©΄ C D A B μμΌλ‘ μΈμνκ² λ©λλ€.

λ΄κ° μΈμλ₯Ό μμ²­ν λ¬Έμκ° λͺ λ²μ§Έλ‘ μΈμλλμ§ μκ³  μΆμ΅λλ€. μμ μμμ Cλ 1λ²μ§Έλ‘, Aλ 3λ²μ§Έλ‘ μΈμλ©λλ€.

νμ¬ λκΈ°λͺ©λ‘μ μλ λ¬Έμμ μ€μλκ° μμλλ‘ λ΄κΈ΄ λ°°μ΄ prioritiesμ λ΄κ° μΈμλ₯Ό μμ²­ν λ¬Έμκ° νμ¬ λκΈ°λͺ©λ‘μ μ΄λ€ μμΉμ μλμ§λ₯Ό μλ €μ£Όλ locationμ΄ λ§€κ°λ³μλ‘ μ£Όμ΄μ§ λ, λ΄κ° μΈμλ₯Ό μμ²­ν λ¬Έμκ° λͺ λ²μ§Έλ‘ μΈμλλμ§ return νλλ‘ solution ν¨μλ₯Ό μμ±ν΄μ£ΌμΈμ.

### πΈ μ νμ¬ν­

- νμ¬ λκΈ°λͺ©λ‘μλ 1κ° μ΄μ 100κ° μ΄νμ λ¬Έμκ° μμ΅λλ€.

- μΈμ μμμ μ€μλλ 1~9λ‘ νννλ©° μ«μκ° ν΄μλ‘ μ€μνλ€λ λ»μλλ€.

- locationμ 0 μ΄μ (νμ¬ λκΈ°λͺ©λ‘μ μλ μμ μ - 1) μ΄νμ κ°μ κ°μ§λ©° λκΈ°λͺ©λ‘μ κ°μ₯ μμ μμΌλ©΄ 0, λ λ²μ§Έμ μμΌλ©΄ 1λ‘ ννν©λλ€.

### πΉ μμΆλ ₯ μ

![image](https://user-images.githubusercontent.com/28912774/130886370-d0b35062-566c-406a-b092-955a1fb52d6e.png)

μμ  #1

λ¬Έμ μ λμ¨ μμ κ°μ΅λλ€.

μμ  #2

6κ°μ λ¬Έμ(A, B, C, D, E, F)κ° μΈμ λκΈ°λͺ©λ‘μ μκ³  μ€μλκ° 1 1 9 1 1 1 μ΄λ―λ‘ C D E F A B μμΌλ‘ μΈμν©λλ€.

---

## π νμ΄

```js
function solution(priorities, location) {
  let answer = 0;

  // location μ λ§λ list λ§λ€κΈ° location μ μ«μλ§ true κ° λκ³  λ€λ₯Έ value λ false κ° λ¨
  let list = priorities.map((t, i) => ({
    target: i === location,
    val: t,
  }));

  // true μΌ λμ κ³μ λ°λ³΅
  while (true) {
    // μ²«λ² μ§Έ μ«μ list μμ κΊΌλ΄κΈ°
    let currentNum = list.shift();
    // list.some μ array μ μ²΄λ₯Ό νμνλ©΄μ ν΄λΉ μ‘°κ±΄μ booleanμ return ν¨
    if (list.some((t) => t.val > currentNum.val)) {
      // list μ value κ° μ€μμ currentNum λ³΄λ€ ν°κ² νλλΌλ μμ κ²½μ° (true μ‘°κ±΄) list λ€μλ€κ° νμ¬ λ²νΈ push
      list.push(currentNum);
      // κ·Έλ μ§ μμ κ²¨μ° currentNum κ° ν¬κ±°λ κ°μ κ²½μ°
    } else {
      // μ λ΅ μμΉ +1
      answer++;
      // current.target μ΄ ture μΌ κ²½μ° while λ¬Έ μ’λ£ λ° answer return
      if (currentNum.target) return answer;
    }
  }
}

let priorities = [2, 1, 3, 2];
let location = 2;

console.log(solution(priorities, location));
```

## Reference

[https://programmers.co.kr/learn/courses/30/lessons/42587](https://programmers.co.kr/learn/courses/30/lessons/42587)
