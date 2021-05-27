---
title: "42.이분 검색"
excerpt: "Algorithm (JS)_Advance"

categories:
  - Algorithm_Advance
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---

---



##  🔍 문제 
임의의 N개의 숫자가 입력으로 주어집니다.  

N개의 수를 오름차순으로 정렬한 다음 N개의 수 중 한 개의 수인 M이 주어지면 이분검색으로 M이 정렬된 상태에서 몇 번째에 있는지 구하는 프로그램을 작성하세요.   

단 중복값은 존재하지 않습니다


### 🔹 입력설명
첫 줄에 한 줄에 자연수 N(3<=N<=1,000,000)과 M이 주어집니다.

두 번째 줄에 N개의 수가 공백을 사이에 두고 주어집니다.

### 🔹 출력 설명
첫 줄에 정렬 후 M의 값의 위치 번호를 출력한다.

### 🔹 입력예제 1
8 32

23 87 65 12 57 32 99 81

### 🔹 출력 예제 1
3


----

##  📌 풀이

![11](https://user-images.githubusercontent.com/28912774/119763790-260e5e80-beeb-11eb-8ed7-e79bcb65df79.jpg)

![22](https://user-images.githubusercontent.com/28912774/119763792-26a6f500-beeb-11eb-8b30-7bb608c7bcae.jpg)

![33](https://user-images.githubusercontent.com/28912774/119763794-27d82200-beeb-11eb-8402-362a9f5e2f4c.jpg)


```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(target, arr) {
      let answer;
      arr.sort((a, b) => a - b); // 오름차순 정렬
      let lt = 0, rt = arr.length - 1; // lt 와 rt 는 index 번호 임
      while(lt <= rt) { // lt 가 증가되고, rt 는 감소 하기 때문에, 같이지거나 rt가 커킬때 break 거는것임
        let mid = Math.floor((lt + rt) / 2); // mid 는 가운데 번호 -> 정수형으로 몫만 가질 수 있게 함
        if(arr[mid] === target) { // mid 가 target 이랑 같을 경우
          answer = mid + 1; // answer는 바로 mid + 1 로 return 
          break;
        }
        else if(arr[mid] > target)  rt = mid - 1;// mid 값이 더 클경우,  rt가 mid - 1 로 이동
        else lt = mid + 1 // target 이 더 클 경우에는, lt 가 mid + 1 로 이동
      }
      return answer;
    }

    let arr = [23, 87, 65, 12, 57, 32, 99, 81];
    console.log(solution(32, arr));
  </script>
</body>
```
