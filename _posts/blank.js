// function solution(answers) {
//   let answer = [];

//   let p1 = [1, 2, 3, 4, 5];
//   let p2 = [2, 1, 2, 3, 2, 4, 2, 5];
//   let p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

//   let p1C = answers.filter((a, i) => a === p1[i % p1.length]).length;
//   let p2C = answers.filter((a, i) => a === p2[i % p2.length]).length;
//   let p3C = answers.filter((a, i) => a === p3[i % p3.length]).length;
//   let max = Math.max(p1C, p2C, p3C);

//   if (p1C === max) answer.push(1);
//   if (p2C === max) answer.push(2);
//   if (p3C === max) answer.push(3);

//   return answer;
// }

// let answers = [1, 3, 2, 4, 2];
// console.log(solution(answers));

function solution(answers) {
  let answer = [];
  // user array 화 하기
  let user = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  // user 수에 맞게 포인트 점수 0으로 초기화
  let point = Array.from({ length: user.length }, () => 0);

  // console.log(point);

  // 각 user 별 answer 와의 값 비교 i % 각 유저의 길이의 값의 나머지를 맞음 그리고 point 에 1점 추가
  for (let i = 0; i < answers.length; i++) {
    if (user[0][i % user[0].length] === answers[i]) {
      point[0]++;
    }
    if (user[1][i % user[1].length] === answers[i]) {
      point[1]++;
    }
    if (user[2][i % user[2].length] === answers[i]) {
      point[2]++;
    }
  }

  // console.log(point);

  // arr 에서 max 값 구하기 spread 문법 사용
  let max = Math.max(...point);
  // console.log(max);

  //  max 값과 point 값이 같을 경우 answer 에 번호 입력 (동점 일경우 오름차순 정렬해야되기 때문에 push 로 순차적으로 넣음)
  for (let i = 0; i < 3; i++) {
    if (point[i] === max) answer.push(i + 1);
  }
  return answer;
}

let answers = [1, 3, 2, 4, 2];
console.log(solution(answers));
