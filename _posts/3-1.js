function solution(info, edges) {
  let answer = 0;

  let checked = 0;

  let sortEdge = edges.sort((a, b) => a[0] - b[0]);
  console.log(sortEdge);

  function DFS(start, end, checked) {
    for (let i = 0; i < edges.length; i++) {
      if ((i = 0)) {
        return;
      } else {
      }
    }
  }

  DFS(0, 0, 0);
}
let info = [0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1];
let edges = [
  [0, 1],
  [1, 2],
  [1, 4],
  [0, 8],
  [8, 7],
  [9, 10],
  [9, 11],
  [4, 3],
  [6, 5],
  [4, 6],
  [8, 9],
];
console.log(solution(info, edges));
