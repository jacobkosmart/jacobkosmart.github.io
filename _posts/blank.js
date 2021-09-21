function solution(id_list, report, k) {
  let answer = [];
  let id_list_num = id_list.map((v, i) => [
    {
      id: i,
      name: v,
      cnt: 0,
    },
  ]);

  let userID = [];
  let selectedID = [];

  let reportSprit = report.map((v) => {
    return v.split(" ");
  });

  for (let i = 0; i < report.length; i++) {
    userID.push(reportSprit[i][0]);
    selectedID.push(reportSprit[i][1]);

    if (selectedID[i] === id_list_num.name) id_list_num.cnt[i]++;
  }

  console.log(id_list_num);
  return answer;
}

let id_list = ["muzi", "frodo", "apeach", "neo"];
let report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
let k = 2;
console.log(solution(id_list, report, k));
