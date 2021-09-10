function solution(n, computers) {
  var answer = 0;
  // 방문체크를 위한 arr 생성
  let visited = Array.from({ length: n }, () => false);

  // 재귀함수
  function DFS(start) {
    // 재귀 시작할때 true 로 바꿈
    visited[start] = true;

    for (let i = 0; i < n; i++) {
      // 방문하지 않았고, 연결되어 있다면
      if (!visited[i] && computers[start][i] === 1) {
        // 재귀 계속 탐색
        DFS(i);
      }
    }
  }

  // 컴퓨터 갯수만큼 탐색
  for (let j = 0; j < n; j++) {
    // 방문을 하지 안았다고 하면
    if (!visited[j]) {
      // 제귀함수 시작
      DFS(j);
      // 네트워크 개수 추가
      answer++;
    }
  }
  return answer;
}

let computers = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];

let n = 3;
console.log(solution(n, computers));
