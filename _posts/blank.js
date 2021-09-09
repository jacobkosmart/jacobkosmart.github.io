function solution(routes) {
  let answer = 0;
  // 카메라 설치 지점을 임의의 최소값으로 설정함
  let camera = Number.MIN_SAFE_INTEGER;
  // 차량의 경로의 나가는 지점을 기준으로 오름차순 정렬
  routes.sort((a, b) => a[1] - b[1]);

  console.log(routes);
  // route 탐색
  for (let i = 0; i < routes.length; i++) {
    // 만약 설치한 카메라의 위치가 차량 진입지점 보다 전에 있으면 다음 카메라를 그 차량의 진출 지점으로 정해 줍니다
    if (camera < routes[i][0]) {
      answer++;
      camera = routes[i][1];
    }
  }
  return answer;
}

let routes = [
  [-20, 15],
  [-14, -5],
  [-18, -13],
  [-5, -3],
];
console.log(solution(routes));
