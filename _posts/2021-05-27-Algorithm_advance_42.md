---
title: "42.์ด๋ถ ๊ฒ์"
excerpt: "Algorithm (JS)_Advance"

categories:
  - Algorithm_Advance
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---

---



##  ๐ ๋ฌธ์  
์์์ N๊ฐ์ ์ซ์๊ฐ ์๋ ฅ์ผ๋ก ์ฃผ์ด์ง๋๋ค.  

N๊ฐ์ ์๋ฅผ ์ค๋ฆ์ฐจ์์ผ๋ก ์ ๋ ฌํ ๋ค์ N๊ฐ์ ์ ์ค ํ ๊ฐ์ ์์ธ M์ด ์ฃผ์ด์ง๋ฉด ์ด๋ถ๊ฒ์์ผ๋ก M์ด ์ ๋ ฌ๋ ์ํ์์ ๋ช ๋ฒ์งธ์ ์๋์ง ๊ตฌํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์ธ์.   

๋จ ์ค๋ณต๊ฐ์ ์กด์ฌํ์ง ์์ต๋๋ค


### ๐น ์๋ ฅ์ค๋ช
์ฒซ ์ค์ ํ ์ค์ ์์ฐ์ N(3<=N<=1,000,000)๊ณผ M์ด ์ฃผ์ด์ง๋๋ค.

๋ ๋ฒ์งธ ์ค์ N๊ฐ์ ์๊ฐ ๊ณต๋ฐฑ์ ์ฌ์ด์ ๋๊ณ  ์ฃผ์ด์ง๋๋ค.

### ๐น ์ถ๋ ฅ ์ค๋ช
์ฒซ ์ค์ ์ ๋ ฌ ํ M์ ๊ฐ์ ์์น ๋ฒํธ๋ฅผ ์ถ๋ ฅํ๋ค.

### ๐น ์๋ ฅ์์  1
8 32

23 87 65 12 57 32 99 81

### ๐น ์ถ๋ ฅ ์์  1
3


----

##  ๐ ํ์ด

![11](https://user-images.githubusercontent.com/28912774/119763790-260e5e80-beeb-11eb-8ed7-e79bcb65df79.jpg)

![22](https://user-images.githubusercontent.com/28912774/119763792-26a6f500-beeb-11eb-8b30-7bb608c7bcae.jpg)

![33](https://user-images.githubusercontent.com/28912774/119763794-27d82200-beeb-11eb-8402-362a9f5e2f4c.jpg)


```html
<head>
  <meta charset="UTF-8">
  <title>์ถ๋ ฅ๊ฒฐ๊ณผ</title>
</head>

<body>
  <script>
    function solution(target, arr) {
      let answer;
      arr.sort((a, b) => a - b); // ์ค๋ฆ์ฐจ์ ์ ๋ ฌ
      let lt = 0, rt = arr.length - 1; // lt ์ rt ๋ index ๋ฒํธ ์
      while(lt <= rt) { // lt ๊ฐ ์ฆ๊ฐ๋๊ณ , rt ๋ ๊ฐ์ ํ๊ธฐ ๋๋ฌธ์, ๊ฐ์ด์ง๊ฑฐ๋ rt๊ฐ ์ปคํฌ๋ break ๊ฑฐ๋๊ฒ์
        let mid = Math.floor((lt + rt) / 2); // mid ๋ ๊ฐ์ด๋ฐ ๋ฒํธ -> ์ ์ํ์ผ๋ก ๋ชซ๋ง ๊ฐ์ง ์ ์๊ฒ ํจ
        if(arr[mid] === target) { // mid ๊ฐ target ์ด๋ ๊ฐ์ ๊ฒฝ์ฐ
          answer = mid + 1; // answer๋ ๋ฐ๋ก mid + 1 ๋ก return 
          break;
        }
        else if(arr[mid] > target)  rt = mid - 1;// mid ๊ฐ์ด ๋ ํด๊ฒฝ์ฐ,  rt๊ฐ mid - 1 ๋ก ์ด๋
        else lt = mid + 1 // target ์ด ๋ ํด ๊ฒฝ์ฐ์๋, lt ๊ฐ mid + 1 ๋ก ์ด๋
      }
      return answer;
    }

    let arr = [23, 87, 65, 12, 57, 32, 99, 81];
    console.log(solution(32, arr));
  </script>
</body>
```
