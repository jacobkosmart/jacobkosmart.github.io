---
title: "05.프린터 - Stack/Queue (Lv.2)"
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

일반적인 프린터는 인쇄 요청이 들어온 순서대로 인쇄합니다. 그렇기 때문에 중요한 문서가 나중에 인쇄될 수 있습니다. 이런 문제를 보완하기 위해 중요도가 높은 문서를 먼저 인쇄하는 프린터를 개발했습니다. 이 새롭게 개발한 프린터는 아래와 같은 방식으로 인쇄 작업을 수행합니다.

1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다. 2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다. 3. 그렇지 않으면 J를 인쇄합니다.

예를 들어, 4개의 문서(A, B, C, D)가 순서대로 인쇄 대기목록에 있고 중요도가 2 1 3 2 라면 C D A B 순으로 인쇄하게 됩니다.

내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 알고 싶습니다. 위의 예에서 C는 1번째로, A는 3번째로 인쇄됩니다.

현재 대기목록에 있는 문서의 중요도가 순서대로 담긴 배열 priorities와 내가 인쇄를 요청한 문서가 현재 대기목록의 어떤 위치에 있는지를 알려주는 location이 매개변수로 주어질 때, 내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 return 하도록 solution 함수를 작성해주세요.

### 🔸 제한사항

- 현재 대기목록에는 1개 이상 100개 이하의 문서가 있습니다.

- 인쇄 작업의 중요도는 1~9로 표현하며 숫자가 클수록 중요하다는 뜻입니다.

- location은 0 이상 (현재 대기목록에 있는 작업 수 - 1) 이하의 값을 가지며 대기목록의 가장 앞에 있으면 0, 두 번째에 있으면 1로 표현합니다.

### 🔹 입출력 예

![image](https://user-images.githubusercontent.com/28912774/130886370-d0b35062-566c-406a-b092-955a1fb52d6e.png)

예제 #1

문제에 나온 예와 같습니다.

예제 #2

6개의 문서(A, B, C, D, E, F)가 인쇄 대기목록에 있고 중요도가 1 1 9 1 1 1 이므로 C D E F A B 순으로 인쇄합니다.

---

## 📌 풀이

```js
function solution(priorities, location) {
  let answer = 0;

  // location 의 맞는 list 만들기 location 의 숫자만 true 가 되고 다른 value 는 false 가 됨
  let list = priorities.map((t, i) => ({
    target: i === location,
    val: t,
  }));

  // true 일 동안 계속 반복
  while (true) {
    // 첫번 째 숫자 list 에서 꺼내기
    let currentNum = list.shift();
    // list.some 은 array 전체를 탐색하면서 해당 조건의 boolean을 return 함
    if (list.some((t) => t.val > currentNum.val)) {
      // list 의 value 값 중에서 currentNum 보다 큰게 하나라도 있을 경우 (true 조건) list 뒤에다가 현재 번호 push
      list.push(currentNum);
      // 그렇지 않을 겨우 currentNum 가 크거나 같은 경우
    } else {
      // 정답 위치 +1
      answer++;
      // current.target 이 ture 일 경우 while 문 종료 및 answer return
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
