---
title: "08.H-index - ์ ๋ ฌ (Lv.2)"
excerpt: "Programmers"

categories:
  - programmers
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---

---

## ๐ ๋ฌธ์ 

H-Index๋ ๊ณผํ์์ ์์ฐ์ฑ๊ณผ ์ํฅ๋ ฅ์ ๋ํ๋ด๋ ์งํ์๋๋ค. ์ด๋ ๊ณผํ์์ H-Index๋ฅผ ๋ํ๋ด๋ ๊ฐ์ธ h๋ฅผ ๊ตฌํ๋ ค๊ณ  ํฉ๋๋ค. ์ํค๋ฐฑ๊ณผ1์ ๋ฐ๋ฅด๋ฉด, H-Index๋ ๋ค์๊ณผ ๊ฐ์ด ๊ตฌํฉ๋๋ค.

์ด๋ค ๊ณผํ์๊ฐ ๋ฐํํ ๋ผ๋ฌธ nํธ ์ค, h๋ฒ ์ด์ ์ธ์ฉ๋ ๋ผ๋ฌธ์ด hํธ ์ด์์ด๊ณ  ๋๋จธ์ง ๋ผ๋ฌธ์ด h๋ฒ ์ดํ ์ธ์ฉ๋์๋ค๋ฉด h์ ์ต๋๊ฐ์ด ์ด ๊ณผํ์์ H-Index์๋๋ค.

์ด๋ค ๊ณผํ์๊ฐ ๋ฐํํ ๋ผ๋ฌธ์ ์ธ์ฉ ํ์๋ฅผ ๋ด์ ๋ฐฐ์ด citations๊ฐ ๋งค๊ฐ๋ณ์๋ก ์ฃผ์ด์ง ๋, ์ด ๊ณผํ์์ H-Index๋ฅผ return ํ๋๋ก solution ํจ์๋ฅผ ์์ฑํด์ฃผ์ธ์.

### ๐ธ ์ ํ์ฌํญ

- ๊ณผํ์๊ฐ ๋ฐํํ ๋ผ๋ฌธ์ ์๋ 1ํธ ์ด์ 1,000ํธ ์ดํ์๋๋ค.

- ๋ผ๋ฌธ๋ณ ์ธ์ฉ ํ์๋ 0ํ ์ด์ 10,000ํ ์ดํ์๋๋ค.

### ๐น ์์ถ๋ ฅ ์

| citations       | return |
| --------------- | ------ |
| [3, 0, 6, 1, 5] | "3"    |

---

## ๐ ํ์ด

```js
function solution(citations) {
  // citations ๋ด๋ฆผ์ฐจ์ ์ ๋ ฌ
  let sorting = citations.sort((a, b) => b - a);
  console.log(sorting);

  let index = 0;
  // index ๊ฐ citations ๊ธธ์ด ๋ณด๋ค ์๊ฑฐ๋ ๊ฐ์๋ ๊น์ง ๋ฐ๋ณต
  while (index <= citations.length) {
    // index ๊ฐ 1์ฉ ์ฆ๊ฐํ๊ณ  citations ๋ฐ๋ณต ๊น์ง ํ์
    if (index + 1 <= citations[index]) {
      // true ์ผ๊ฒฝ์ฐ index ++
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
