function solution(n, costs) {
  let answer = 0;
  // num 은 간선의 갯수
  let num = 0;

  // isVisited, isBridge 가 check 될 수 있게 각 크기에 맞게 falsely arr 생성
  let isVisited = Array.from({ length: n }, () => false);
  let isBridge = Array.from({ length: costs.length }, () => false);

  // 비용이 가장 작은 순서로 올림차순 정렬
  costs.sort((a, b) => a[2] - b[2]);

  // 처음에는 가장 비용이 작은 간선의 비용을 무조건 input 한다
  isVisited[costs[0][0]] = true;
  isVisited[costs[0][1]] = true;
  isBridge[0] = true;
  answer += costs[0][2];
  num++;

  // 간선의 개수가 노드의 개수 - 1 을 만족할때까지 while loop
  while (num < n - 1) {
    // 처음꺼 비용은 넣었으니 i = 1 부터 시작
    for (let i = 1; i < costs.length; i++) {
      // costs 의 각 구조분해 할당
      const [start, end, cost] = costs[i];
      // 다리가 건설되어 있지 않고 한쪽 노드만 방문한 경우를 찾기
      if (
        !isBridge[i] &&
        ((!isVisited[start] && isVisited[end]) ||
          (isVisited[start] && !isVisited[end]))
      ) {
        // 간선 추가 하고, 비용을 누적, 방문한것 start 와 end 지점 과 node 연결된거 true 하고 break
        num++;
        answer += cost;
        isVisited[start] = true;
        isVisited[end] = true;
        isBridge[i] = true;
        break;
      }
      console.log(isVisited);
    }
  }
  return answer;
}

let costs = [
  [0, 1, 1],
  [0, 2, 2],
  [1, 2, 5],
  [1, 3, 1],
  [2, 3, 8],
];
let n = 4;
console.log(solution(n, costs));
