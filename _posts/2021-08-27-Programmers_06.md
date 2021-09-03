---
title: "06.K번째 수 - 정렬 (Lv.1)"
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

배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

- array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.

- 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.

- 2에서 나온 배열의 3번째 숫자는 5입니다.

배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

### 🔸 제한사항

- array의 길이는 1 이상 100 이하입니다.

- array의 각 원소는 1 이상 100 이하입니다.

- commands의 길이는 1 이상 50 이하입니다.

- commands의 각 원소는 길이가 3입니다.

### 🔹 입출력 예

<img width="465" alt="스크린샷 2021-09-03 오후 2 08 57" src="https://user-images.githubusercontent.com/28912774/131953579-538d6f87-df65-4501-b11a-2ba72924d8b4.png">

[1, 5, 2, 6, 3, 7, 4]를 2번째부터 5번째까지 자른 후 정렬합니다. [2, 3, 5, 6]의 세 번째 숫자는 5입니다.

[1, 5, 2, 6, 3, 7, 4]를 4번째부터 4번째까지 자른 후 정렬합니다. [6]의 첫 번째 숫자는 6입니다.

[1, 5, 2, 6, 3, 7, 4]를 1번째부터 7번째까지 자릅니다. [1, 2, 3, 4, 5, 6, 7]의 세 번째 숫자는 3입니다.

---

## 📌 풀이

```js
// Classic 버전 for loop 를 통한 탐색
function solution(arr, commands) {
  let answer = [];
  // 하나씩 검색 시작
  for (let i = 0; i < commands.length; i++) {
    // slice() 로 선택된 number arr 만들기
    let cuttedArr = arr.slice(commands[i][0] - 1, commands[i][1]);
    // 오름차순 정렬
    cuttedArr.sort((a, b) => a - b);
    // k번째 수를 answer arr 에 push
    answer.push(cuttedArr[commands[i][2] - 1]);
  }
  return answer;
}

let arr = [1, 5, 2, 6, 3, 7, 4];
let commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

console.log(solution(arr, commands));
```

```js
// map 함수, 구조분해할당으로 통한 문제 풀이

function solution(arr, commands) {
  // map 함수로 command 검색 시작
  return commands.map((command) => {
    // command 의 각 요소 구조분해 할당
    const [sPosition, ePosition, position] = command;
    // filter 에서 start index 에서 end index 까지 filter 를 걸고 zero index 이니까 -1 해서 탐색 후 오름차순 정렬
    const newArray = arr
      .filter(
        (value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1
      )
      .sort((a, b) => a - b);

    // k번째 수 찾기
    return newArray[position - 1];
  });
}

let arr = [1, 5, 2, 6, 3, 7, 4];
let commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

console.log(solution(arr, commands));
```

## Reference

[https://programmers.co.kr/learn/courses/30/lessons/42583](https://programmers.co.kr/learn/courses/30/lessons/42583)
