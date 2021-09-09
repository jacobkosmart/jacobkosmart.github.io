function solution(people, limit) {
  let answer = 0;
  // 무거운 순서대로 내림 차순 정렬
  people = people.sort((a, b) => b - a);

  for (let i = 0, j = people.length - 1; i <= j; i++) {
    // 2명 밖에 탈 수 없기 때문에 가장 많이 탈 수 있는 방법은 가장 무거운 사람과 가장 가벼운 사람이 같이 타는 방법 뿐이라서 i 와 j 마지막 부분 비교해서 그 합이 limit 보다 작게되면 2명 탈 수 있는 경우에 수가 됨
    if (people[i] + people[j] <= limit) {
      // if 조건에 만족할 경우에는 사람을 한명 빼야 되기 때문에 j--
      j--;
    }
    // 무거운 사람부터 1명씩 보트가 필요하니까 보트 count ++
    answer++;
  }
  return answer;
}

let people = [70, 50, 80, 50];
let limit = 100;
console.log(solution(people, limit));
