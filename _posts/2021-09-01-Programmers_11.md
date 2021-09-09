---
title: "11.카펫 - 완전탐색 (Lv.2)"
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

Leo는 카펫을 사러 갔다가 아래 그림과 같이 중앙에는 노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.

![image](https://user-images.githubusercontent.com/28912774/132615519-88fb37b6-94ac-44b6-af9e-c0f2f47b8334.png)

Leo는 집으로 돌아와서 아까 본 카펫의 노란색과 갈색으로 색칠된 격자의 개수는 기억했지만, 전체 카펫의 크기는 기억하지 못했습니다.

Leo가 본 카펫에서 갈색 격자의 수 brown, 노란색 격자의 수 yellow가 매개변수로 주어질 때 카펫의 가로, 세로 크기를 순서대로 배열에 담아 return 하도록 solution 함수를 작성해주세요.

### 🔸 제한사항

- 갈색 격자의 수 brown은 8 이상 5,000 이하인 자연수입니다.

- 노란색 격자의 수 yellow는 1 이상 2,000,000 이하인 자연수입니다.

- 카펫의 가로 길이는 세로 길이와 같거나, 세로 길이보다 깁니다.

### 🔹 입출력 예

| brown | yellow | return |
| ----- | ------ | ------ |
| 10    | 2      | [4, 3] |
| 8     | 1      | [3, 4] |
| 24    | 24     | [8, 6] |

---

## 📌 풀이

- 카펫의 최소 높이는 3이라는 점 (위에 그림에서 이해 가능)

- brown 과 yellow 합을 임의의 높이로 나눌때 나오는 높이와 가로의 값을 가지고 (가로 -2) \* (높이 -2) = yellow 라면, 현재 높이, 가로의 길이를 찾는것임 (-2 하는것은 양끝 테두리값은 제외하기 위해서 빼줌)

```js
function solution(brown, yellow) {
  let answer = [];
  let sum = brown + yellow;

  // 카펫의 최소 높이는 3부터 이다. (위 아래 갈색, 가운데 노란색이기 때문에)
  for (let height = 3; height <= brown; height++) {
    // 임의의 높이로 나눌때 나머지가 없을 경우에
    if (sum % height === 0) {
      // 가로길이 설정
      let width = sum / height;

      // 테두리를 제외한 길이를 구해야 하기 때문에 각각 -2 테두리 값을 빼준뒤에 곱함
      // 그 값이 yellow 와 같다면 width, height return
      if ((height - 2) * (width - 2) === yellow) {
        return (answer = [width, height]);
      }
    }
  }
  return answer;
}

let brown = 10;
let yellow = 2;
console.log(solution(brown, yellow));
```

## Reference

[https://programmers.co.kr/learn/courses/30/lessons/42842](https://programmers.co.kr/learn/courses/30/lessons/42842)
