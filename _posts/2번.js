function solution(n, k) {
  let answer = 0;

  let stack = [];

  // 소수판별 함수
  function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  // k진수로 일괄 변환
  let num = n.toString(k);
  let primeNum = [];

  stack.push(num[0]);

  for (let i = 1; i < num.length; i++) {
    stack.push(num[i]);
    let tmp = stack.join(" ");
    // console.log(tmp);
    if (isPrime(parseInt(tmp))) {
      primeNum.push(...stack);
      stack = [];
    }
  }

  console.log(primeNum);
  return (answer = primeNum.length + 1);
}

let n = 437674;
let k = 3;
console.log(solution(n, k));
