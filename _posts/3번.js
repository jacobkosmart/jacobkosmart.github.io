function solution(fees, records) {
  let answer = [];

  let Irecords = records.map((v) => {
    return v.split(" ");
  });

  let sortedObj = Irecords.sort((a, b) => a[1] - b[1]);

  let test = console.log(test);

  for (let i = 0; i < records.length; i++) {
    if (sortedObj[i][1] === sortedObj[i + 1][1]);
  }
  console.log(sortedObj);
}

sort;

let fees = [180, 5000, 10, 600];
let records = [
  "05:34 5961 IN",
  "06:00 0000 IN",
  "06:34 0000 OUT",
  "07:59 5961 OUT",
  "07:59 0148 IN",
  "18:59 0000 IN",
  "19:09 0148 OUT",
  "22:59 5961 IN",
  "23:00 5961 OUT",
];
console.log(solution(fees, records));
