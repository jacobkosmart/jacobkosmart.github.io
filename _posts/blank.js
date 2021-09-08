function solution(num) {
  // number 를 map 을 사용해서 string 화 하기
  let strings = num.map((a) => a + "");
  console.log(strings);

  // 내림차순 정렬한 후, "" 기준으로 합치기
  let answer = strings.sort((a, b) => b + a - (a + b)).join("");
  console.log(answer);

  // 만약 0일 경우에  0 을 리턴 방어코드로 [0,0,0,0] 이 값으로 되면 "0000" 이 되니까 0으로 return
  return answer[0] === "0" ? "0" : answer;
}

let num = [6, 10, 2];
console.log(solution(num));
