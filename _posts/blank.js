const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cheery']


numbers.splice(2, 1) // (index, 몇개를 지울지 선택) // 현재 상태 : [1, 2, 4]
numbers.splice(2, 0) // 지울 아이템이 하나도 없을때, 는 그대로 출력 // 현재상태 : [1, 2, 4]
numbers.splice(2, 0, 999) // zero based 2번 자리 앞에 1~2 번 사이에 999를 집어 넣어라 // 현재상태 : [1, 2, 999, 4]
numbers.splice(2, 1, 99) // 2번째인 3을 지우고, 그자리에 99를 집어 넣어라임.  // 현재 상태 : [1, 2, 99, 4]

console.log(numbers) // [1, 2, 99, 4]

fruits.splice(2, 0, 'orange') 
console.log(fruits) // 지우는것은 없고 orange를 index 2 번 앞에 'orange' 삽입 -> ['Apple', 'Banana', 'Orange', 'Cheery']