function solution(numbers, target) {
  let answer = 0;

  function DFS(index, sum) {
    if (index === numbers.length) {
      if (sum === target) {
        answer++;
      }
      return;
    } else {
      DFS(index + 1, sum + numbers[index]);
      DFS(index + 1, sum - numbers[index]);
    }
  }

  DFS(0, 0);

  return answer;
}

let numbers = [1, 1, 1, 1, 1, 1, 1];
let target = 3;
console.log(solution(numbers, target));
