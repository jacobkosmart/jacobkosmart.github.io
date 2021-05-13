---
title: "29.후위식 연산(postfix) - Stack"
excerpt: "Algorithm (JS)_Advance"

categories:
  - Algorithm_Advance
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---

---

# 후위식 연산(postfix)

##  🔍 문제 
후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.  

만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12입니다.


### 🔹 입력설명
첫 줄에 후위연산식이 주어집니다. 연산식의 길이는 50을 넘지 않습니다.  

식은 1~9의 숫자와 +, -, *, / 연산자로만 이루어진다.

### 🔹 출력 설명
연산한 결과를 출력합니다.
 
### 🔹 입력예제 1
352+*9-

### 🔹 출력 예제 1
12


----

##  📌 풀이

![11](https://user-images.githubusercontent.com/28912774/118066802-54177d00-b3da-11eb-879a-b6f57b0c548e.jpg)

![22](https://user-images.githubusercontent.com/28912774/118066805-54b01380-b3da-11eb-98d7-892cb7b9cc3f.jpg)



```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(s) {
      let answer;
      let stack = [];
      for(let x of s) {
        if (!isNaN(x)) stack.push(Number(x)); // x 가 숫자일 경우 (!isNaN) x를 계산 할 수 있게 number 로 변환 후, stack 에 push
        else {
          let rt = stack.pop(); // stack 에서 첫번 째 것 pop 한거가 rt -> 꺼내는거 순서가 중요함(빼기, 나누기가 있기 때문에)
          let lt = stack.pop(); // stack 에서 두번 째 것 pop 한거가 lt
          if (x === '+') stack.push(lt + rt); // 연산자 일경우 lt 와 rt 계산 해줌
          else if (x === '-') stack.push(lt - rt);
          else if (x === '*') stack.push(lt * rt);
          else if (x === '/') stack.push(lt / rt);
        }
      }
      answer = stack[0]; // stack 에 남은 값이 answer 가 됨
      return answer;
    }
    let str = "352+*9-";
    console.log(solution(str));
  </script>
</body>
```
