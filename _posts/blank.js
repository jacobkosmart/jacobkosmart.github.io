// 소수 구하는 함수
function isPrime(num) {
  // 1이거나 1보다 작을 경우 false
  if (num <= 1) return false;
  // 2일경우 true
  if (num === 2) return true;
  // 2부터 시작해서 숫자의 제곱근까지 반복 후, i 로 나눈 나머지가 0일 경우 false
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  // 나머지가 있는 경우는 true 임
  return true;
}

function solution(numbers) {
  // 중복이 허용되지 않는 Set 함수
  let answer = new Set();
  // "" 을 기준으로 숫자 쪼개기
  let nums = numbers.split("");

  function DFS(arr, fixed) {
    // arr 가 1보다 같거나 클 경우
    if (arr.length >= 1) {
      for (let i = 0; i < arr.length; i++) {
        // 고정값에 배열의 i번째 요소를 합쳐서 새로운 고정값으로 지정
        const newFixed = fixed + arr[i];
        // arr 얕은복사
        const copyArr = [...arr];
        // newFixed 로 고정한 요소를 배열에서 재거하여, 고정되지 않는 요소들로 배열을 채운다
        copyArr.splice(i, 1);
        // answer 안에 이미 값이 없거나 소수일때 newFixed 값을 answer 에 추가 시킨다
        if (!answer.has(parseInt(newFixed)) && isPrime(parseInt(newFixed))) {
          answer.add(parseInt(newFixed));
        }
        // 고정되지 않는 요소들을 담긴 배열과, 새로운 고정값을 인수로 보내서 제귀 탐색 진행
        DFS(copyArr, newFixed);
      }
    }
  }
  DFS(nums, "");
  return answer.size;
}

let numbers = "011";

console.log(solution(numbers));
