function solution(n, lost, reserve) {
  let answer;
  // 진짜 체육복이 없는 학생들의 번호 filter
  let realLost = lost.filter((v) => !reserve.includes(v));
  // 진짜 체육복을 두개 가지고 있는 학생들의 번호 filter
  let realReserve = reserve.filter((v) => !lost.includes(v));

  // 전체 학생 수에서 체육복이 없고 빌리지도 못한 학생 수 빼기
  answer =
    n -
    realLost.filter((v) => {
      // 체육복이 두개인 학생들 중 차이가 절대값으로 1개거나 없는 학생 수 (앞뒤로 하나씩 이니까 절대값을 사용)
      let noCloths = realReserve.find((a) => Math.abs(v - a) <= 1);
      // 만약 black 가 없을 경우에 체육복을 아무도 갖지 목하기 때문에 바로 return
      if (!noCloths) return true;
      // 그리고 나서 빌려 줬지 때문에 lost 에서 제외 및 reserve 에서도 빌려준 학생 제외 시키기
      realReserve = realReserve.filter((r) => r !== noCloths);
    }).length;

  return answer;
}

let n = 5;
let lost = [2, 4];
let reserve = [3];

console.log(solution(n, lost, reserve));
