function solution(number, k) {
  let stack = [];
  let answer = "";

  // number 탐색 시작
  for (let i = 0; i < number.length; i++) {
    // loop 돌때 마다 number 를 임시로 el 지정
    let el = number[i];

    //  stack의 값과 비교해서 stack 에 가장 위에 있는 숫자와 비교 할때 클 경우 그 숫자를 pop
    while (k > 0 && stack[stack.length - 1] < el) {
      stack.pop();
      k--;
    }
    // el 이 stack 에 있는 값보다 크기 때문에 stack 에 push
    stack.push(el);
  }

  // k 자리수만큼 잘라서 stack 에서 글자 꺼내기
  stack.splice(stack.length - k, k);
  // stack 에서 꺼낸 숫자를 join 으로 합치기
  answer = stack.join("");
  return answer;
}

let number = "1231234";
let k = 3;
console.log(solution(number, k));
