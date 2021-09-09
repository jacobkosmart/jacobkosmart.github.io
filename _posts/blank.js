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
