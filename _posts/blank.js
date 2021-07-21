// forEach, map, filter, reduce


// reduce 작동 원리 함수
// return 한 값이 자기자신한테로 넘어 오는것
const reduce = (predicate, value) => {
  let result = value;
  for (let i = 0; i < a.length; i++) {
    result = predicate(result, a[i]); // result 에 result 자신을 넘기고, 뒤에는 value 값을 넘김
  }
  return result;
} 


let a = [10, 11, 12, 13, 14, 15]

let answer = a.reduce((acc, v) => { // 첫번째 인수는 누적된것, 두번째가 value 로 들어옴
  return acc + v; 
})


console.log(answer)
