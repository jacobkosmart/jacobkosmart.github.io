---
title: "37.Least Recently Used(카카오 캐시 문제 변형) - 정렬"
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
캐시메모리는 CPU와 주기억장치(DRAM) 사이의 고속의 임시 메모리로서 CPU가 처리할 작업을 저장해 놓았다가 필요할 바로 사용해서 처리속도를 높이는 장치이다.  워낙 비싸고 용량이 작아 효율적으로 사용해야 한다. 철수의 컴퓨터는 캐시메모리 사용 규칙이 LRU 알고리즘을 따른다. LRU 알고리즘은 Least Recently Used 의 약자로 직역하자면 가장 최근에 사용되지 않은 것 정도의 의미를 가지고 있습니다. 캐시에서 작업을 제거할 때 가장 오랫동안 사용하지 않은 것을 제거하겠다는 알고리즘입니다.

만약 캐시의 사이즈가 5이고 작업이 순으로 저장되어 있다면, (맨 앞이 가장 최근에 쓰인 작업이고, 맨 뒤는 가장 오랫동안 쓰이지 않은 작업이다.)  

![image](https://user-images.githubusercontent.com/28912774/118897177-b4f80580-b944-11eb-9c87-73af25dc54c4.png)  



1) Cache Miss : 해야할 작업이 캐시에 없는 상태로 위 상태에서 만약 새로운 작업인 5번 작업을 CPU가 사용한다면 Cache miss가 되고 모든 작업이 뒤로 밀리고 5번작업은 캐시의 맨 앞에 위치한다. (7번 작업은 캐시에서 삭제된다.)  


![image](https://user-images.githubusercontent.com/28912774/118897195-bc1f1380-b944-11eb-90b5-2d0a9c04515f.png)



2) Cache Hit : 해야할 작업이 캐시에 있는 상태로 위 상태에서 만약 3번 작업을 CPU가 사용한다면 Cache Hit가 되고, 63번 앞에 있는 5, 2번 작업은 한 칸 뒤로 밀리고, 3번이 맨 앞으로 위치하게 된다.  


![image](https://user-images.githubusercontent.com/28912774/118897212-c2ad8b00-b944-11eb-9372-b3dbdaa1fdc7.png)  


캐시의 크기가 주어지고, 캐시가 비어있는 상태에서 N개의 작업을 CPU가 차례로 처리한다면 N개의 작업을 처리한 후 캐시메모리의 상태를 가장 최근 사용된 작업부터 차례대로 출력하는 프로그램을 작성하세요  




### 🔹 입력설명
첫 번째 줄에 캐시의 크기인 S(3<=S<=10)와 작업의 개수 N(5<=N<=1,000)이 입력된다.  

두 번째 줄에 N개의 작업번호가 처리순으로 주어진다. 작업번호는 1 ~100 이다.



### 🔹 출력 설명
마지막 작업 후 캐시메모리의 상태를 가장 최근 사용된 작업부터 차례로 출력합니다.  

### 🔹 입력예제 1
5 9  

1 2 3 2 6 2 3 5 7

### 🔹 출력 예제 1
7 5 3 2 6


![image](https://user-images.githubusercontent.com/28912774/118897218-c8a36c00-b944-11eb-9068-5179611cb225.png)  


----

##  📌 풀이


1. 삽입 정렬로 풀이

```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(size, arr) {
      let answer = Array.from({length:size}, () => 0); // answer(cash memory) 를 5개 크기의 0으로 초기화
      for(let x of arr) {
        let pos = -1;
        // hit 인지 아닌지 보는것
        for(let i = 0; i < size; i++) if(x === answer[i]) pos = i; // 만약 answer 에 x 값이 있으면 hit 니까 pos를 hit 부분인 i 로 설정
        if(pos === -1) { // hit 가 아닌경우 miss 난 상황임
          for(let i = size-1; i >= 1; i--) {
          answer[i] = answer[i-1];
          }
        }
        else { // hit 난 상황임
          for(let i = pos; i >= 1; i--) {
          answer[i] = answer[i-1];
          }
        } 
        answer[0] = x;
      }
      return answer;
    }

    let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
    console.log(solution(5, arr));
  </script>
</body>
```

2. 내장함수 unshit(), splice(), pop() 을 사용해서 풀이

![image](https://user-images.githubusercontent.com/28912774/119210409-f7f1de80-bae6-11eb-88ed-b65c1d8ce2ef.png)


![image](https://user-images.githubusercontent.com/28912774/119210426-093aeb00-bae7-11eb-8855-9a7abefc6241.png)


![image](https://user-images.githubusercontent.com/28912774/119210448-148e1680-bae7-11eb-9aa5-406bb14bda73.png)


```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(size, arr) {
      let answer = Array.from({length: size}, () => 0);
      for(let x of arr) {
        let pos = -1;
        for(let i=0; i<size; i++) if(x === answer[i]) pos= i; // hti 인 경우
        if(pos === -1) { // miss 난 상황
        answer.unshift(x); // 맨앞에다가 넣어 주는것 unshift 하고 그전에 있던 숫자들은 한칸씩 밀려가는것. 근데 계속하면 arr 가 계속 커짐
        if(answer.length > size)  answer.pop() // answer 가 size 보다 크면 맨뒤에 있는것을 pop() 해주면 자동으로 저장해줌
        }
        else { // hit 난 상황
          answer.splice(pos, 1); // pos index 의 value 값을 지워 버려라
          answer.unshift(x); // 그다음에 앞에 x 넣어주고 하나씩 밀어버리기
        }
      }
      return answer;
    }
    let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
    console.log(solution(5, arr));
  </script>
</body>
```