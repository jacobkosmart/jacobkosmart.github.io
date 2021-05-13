---
title: "28.크레인 인형뽑기 (카카오 기출) - Stack"
excerpt: "Algorithm (JS)_Advance"

categories:
  - Algorithm_Advance
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---

---


# 크레인 인형뽑기 (카카오 기출)

##  🔍 문제 
게임개발자인 죠르디는 크레인 인형뽑기 기계를 모바일 게임으로 만들려고 합니다.  

죠르디는  게임의  재미를  높이기  위해  화면  구성과  규칙을  다음과  같이  게임  로직에  반영하려고 합니다

![11](https://user-images.githubusercontent.com/28912774/118055727-9ed9ca80-b3c3-11eb-9bed-687426098a00.png)

게임  화면은  1  x  1  크기의  칸들로  이루어진  N  x  N  크기의  정사각  격자이며  위쪽에는  크레인이  있고  오른쪽에는  바구니가  있습니다.  (위  그림은  5  x  5  크기의  예시입니다).  각  격자  칸에는 다양한 인형이 들어 있으며 인형이 없는 칸은 빈칸입니다. 모든 인형은 1 x 1 크기의 격자 한  칸을  차지하며  격자의  가장  아래  칸부터  차곡차곡  쌓여  있습니다.  게임 사용자는 크레인을 좌우로 움직여서  멈춘  위치에서  가장  위에  있는 인형을 집어 올릴 수  있습니다.  집어  올린  인형은  바구니에  쌓이게  되는  데,  이때  바구니의  가장  아래  칸부터  인형이  순서대로  쌓이게  됩니다.  다음  그림은  [1번,  5번,  3번]  위치에서  순서대로  인형을  집어  올려  바구니에  담은  모습입니다.

![22](https://user-images.githubusercontent.com/28912774/118055735-a1d4bb00-b3c3-11eb-961a-8346aa7fac40.png)

만약 같은 모양의 인형 두 개가 바구니에 연속해서 쌓이게 되면 두 인형은 터뜨려지면서 바구니에서  사라지게  됩니다.  위  상태에서  이어서  [5번]  위치에서  인형을  집어  바구니에  쌓으면 같은 모양 인형 두 개가 없어집니다

![33](https://user-images.githubusercontent.com/28912774/118055746-a305e800-b3c3-11eb-8ccd-e41eda0703b0.png)


크레인 작동 시 인형이 집어지지 않는 경우는 없으나 만약 인형이 없는 곳에서 크레인을 작동시키는 경우에는 아무런 일도  일어나지  않습니다. 또한  바구니는  모든  인형이 들어갈 수  있을 만큼 충분히 크다고 가정합니다. (그림에서는 화면표시 제약으로 5칸만으로 표현하였음)

게임 화면의 격자의 상태가 담긴 2차원 배열 board와 인형을 집기 위해 크레인을 작동시킨 위치가 담긴 배열 moves가 매개변수로  주어질  때, 크레인을 모두 작동시킨  후 터트려져 사라진 인형의 개수를 return 하도록 solution 함수를 완성해주세요


**제한사항**

board 배열은 2차원 배열로 크기는 5 x 5 이상 30 x 30 이하입니다.  

board의 각 칸에는 0 이상 100 이하인 정수가 담겨있습니다.  

0은 빈 칸을 나타냅니다.  

1 ~ 100의 각 숫자는 각기 다른 인형의 모양을 의미하며 같은 숫자는 같은 모양의 인형을 나타냅니다.  

moves 배열의 크기는 1 이상 1,000 이하입니다.  

moves 배열 각 원소들의 값은 1 이상이며 board 배열의 가로 크기 이하인 자연수입니다


### 🔹 입력예제 1
[[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]] //board 배열  

[1,5,3,5,1,2,1,4] //moves 배열

### 🔹 출력 예제 1
4


----

##  📌 풀이

![11](https://user-images.githubusercontent.com/28912774/118061939-e9157880-b3d0-11eb-8f8b-def14219a899.jpg)


![22](https://user-images.githubusercontent.com/28912774/118061942-ea46a580-b3d0-11eb-8be7-d26808fb6439.jpg)

> [JS - foreach, for in, for of](https://dydals5678.tistory.com/66)

```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(board, moves) {
      let answer = 0;
      let stack = [];
      moves.forEach(pos => { // 크래인을 하나씩 탐색시작
        for(let i=0; i<board.length; i++) { // i 증가하면서 탐색 시작
          if(board[i][pos-1] !== 0) { // 0 이 아닌것 인형을 만난것
            let tmp = board[i][pos-1]; // 변수 지정 (인형 꺼낸 것임)
            board[i][pos-1] = 0; // 인형을 꺼내면 그자리를 0 으로 만들어서 빈공간 만들기
            if(tmp === stack[stack.length-1]) { // 꺼낸 인형과 stack 에 쌓인 최고 높이 (index 번호) 와 같을 경우
              stack.pop(); // 뽑힌 인형과 같으니까, stack 에서 지워버림 pop
              answer += 2; // 없어진 인형의 갯수 2개 (뽑힌거 + stack에서 지워진거) answer 에 누적
            }
            else stack.push(tmp); // 뽑힌 인형이 stack 에 있는것과 같지 않으니까 그 대로 stack 에 누적 시킴
            break; // for loop 가 먼추게 break 해줘야 한다 (왜냐면, 0 이 아닌 true 인 값인 것을 더 꺼내니까 위 있는 하나만 꺼내기 위해서 for loop break)
          }
        }
      });
      return answer;
    }

    let a = [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1]
    ];

    let b = [1, 5, 3, 5, 1, 2, 1, 4];
    console.log(solution(a, b));
  </script>
</body>
```
