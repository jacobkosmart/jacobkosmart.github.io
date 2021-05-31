---
title: "43.뮤직 비디오 - 결정 알고리즘"
excerpt: "Algorithm (JS)_Advance"

categories:
  - Algorithm_Advance
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---

---


# 뮤직 비디오 (결정 알고리즘)

##  🔍 문제 
지니레코드에서는  불세출의  가수  조영필의  라이브  동영상을  DVD로  만들어  판매하려  한다.

DVD에는 총 N개의 곡이 들어가는데, DVD에 녹화할 때에는 라이브에서의 순서가 그대로 유지되어야 한다. 순서가 바뀌는 것을 우리의 가수 조영필씨가 매우 싫어한다.

즉, 1번 노래와 5번 노래를 같은 DVD에 녹화하기 위해서는 1번과 5번 사이의 모든 노래도 같은 DVD에 녹화해야 한다. 


또한 한 노래를 쪼개서 두 개의 DVD에 녹화하면 안된다.


지니레코드  입장에서는  이 DVD가 팔릴  것인지  확신할  수 없기  때문에  이 사업에  낭비되는 DVD를 가급적 줄이려고 한다. 

고민 끝에 지니레코드는 M개의 DVD에 모든 동영상을 녹화하기로 하였다. 

이 때 DVD의 크기(녹화 가능한 길이)를 최소로 하려고 한다. 

그리고 M개의 DVD는 모두 같은 크기여야 제조원가가 적게 들기 때문에 꼭 같은 크기로 해야 한다

### 🔹 입력설명
첫째 줄에 자연수 N(1≤N≤1,000), M(1≤M≤N)이 주어진다. 

다음 줄에는 조영필이 라이브에서 부른 순서대로 부른 곡의 길이가 분 단위로(자연수) 주어진다. 

부른 곡의 길이는 10,000분을 넘지 않는다고 가정하자


### 🔹 출력 설명
첫 번째 줄부터 DVD의 최소 용량 크기를 출력하세요

### 🔹 입력예제 1
9 3

1 2 3 4 5 6 7 8 9

### 🔹 출력 예제 1
17

설명 : 3개의 DVD용량이 17분짜리이면 (1, 2, 3, 4, 5) (6, 7), (8, 9) 이렇게 3개의 DVD로 녹음을 할 수 있다. 17분 용량보다 작은 용량으로는 3개의 DVD에 모든 영상을 녹화할 수 없다

----

##  📌 풀이

- 전개 연산자

![image](https://user-images.githubusercontent.com/28912774/119908620-fd8b7080-bf8d-11eb-8156-b7d69e644f22.png)

- arr.reduce()

![image](https://user-images.githubusercontent.com/28912774/119908780-61159e00-bf8e-11eb-9afd-471a48196dc9.png)


![11](https://user-images.githubusercontent.com/28912774/119910088-527cb600-bf91-11eb-9066-b73c3e636002.jpg)

![22](https://user-images.githubusercontent.com/28912774/119910092-53ade300-bf91-11eb-9082-c54ef3e60606.jpg)

![33](https://user-images.githubusercontent.com/28912774/119910094-54467980-bf91-11eb-9c7a-6fc2d2c1d6cc.jpg)




```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function count(songs, capacity) { // 연속으로 저장을 하게 되면 몇장이 필요한지 count 해주는것
      let cnt = 1, sum = 0; // cnt 는 dvd 장수 임 적어도 한장은 필요하기 때문에 1로 초기화
      for(let x of songs) {
        if(sum + x > capacity) { // 1부터 sum 에 누적해서 더해서 capacity (mid) 보다 크게 되면 더이상 dvd 에 저장 할 수 없게 되는 것
          cnt++; //  capacity (mid) 값이 초과 되었을 경우 새로운 dvd 장수 추가  
          sum = x; // 초과된 부분부터 다시 sum 시작
        }
        else sum += x; // capacity 보다 크지 않기 때문에 x 를 누적해서 더해줌
      }
      return cnt;
    }

    function solution(m, songs) {
      let answer; // DVD안에는 songs 노래 순서 대로 해야 되기 때문에 정렬 하면 안됨
      let lt = Math.max(...songs); // 전개 연산자를 사용해서 arr 를 쭉 나열해준다 마치 (songs[0], songs[1] ... songs[8])
      let rt = songs.reduce((a, b) => a + b, 0); // reduce를 사용해서 0부터 하나씩 쭉 더해주는것 -> arr 안에 sum 을 주는것 
      while(lt <= rt) {
        let mid = parseInt((lt + rt) / 2);
        if(count(songs, mid) <= m) {
          answer = mid;
          rt = mid - 1;
        }
        else lt = mid + 1;
      }
      return answer;
    }

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log(solution(3, arr));
  </script>
</body>
```
