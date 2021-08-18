---
title: "03.베스트앨범 - Hash (Lv.3)"
excerpt: "Programmers"

categories:
  - programmers
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---

---

## 🔍 문제

스트리밍 사이트에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 합니다. 노래는 고유 번호로 구분하며, 노래를 수록하는 기준은 다음과 같습니다.

속한 노래가 많이 재생된 장르를 먼저 수록합니다.
장르 내에서 많이 재생된 노래를 먼저 수록합니다.
장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.
노래의 장르를 나타내는 문자열 배열 genres와 노래별 재생 횟수를 나타내는 정수 배열 plays가 주어질 때, 베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 return 하도록 solution 함수를 완성하세요.

### 🔸 제한사항

- `genres[i]`는 고유번호가 i인 노래의 장르입니다.

- `plays[i]`는 고유번호가 i인 노래가 재생된 횟수입니다.

- genres와 plays의 길이는 같으며, 이는 1 이상 10,000 이하입니다.

- 장르 종류는 100개 미만입니다.

- 장르에 속한 곡이 하나라면, 하나의 곡만 선택합니다.

- 모든 장르는 재생된 횟수가 다릅니다.

### 🔹 입출력 예

![image](https://user-images.githubusercontent.com/28912774/129901971-15798e1e-7eb9-4c8b-8d9e-fe8e59e8a7aa.png)

classic 장르는 1,450회 재생되었으며, classic 노래는 다음과 같습니다.

고유 번호 3: 800회 재생
고유 번호 0: 500회 재생
고유 번호 2: 150회 재생
pop 장르는 3,100회 재생되었으며, pop 노래는 다음과 같습니다.

고유 번호 4: 2,500회 재생
고유 번호 1: 600회 재생
따라서 pop 장르의 [4, 1]번 노래를 먼저, classic 장르의 [3, 0]번 노래를 그다음에 수록합니다.

---

## 📌 풀이

- Array.find() : 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환

- Array.filter() : 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환

- songs : map() 메서드를 통해 노래들의 리스트를 배열로 저장

- genrePlayCnt : songs 배열을 돌며 동일한 장르에 대해 재생횟수를 모두 더해서 배열로 저장

- genrePlayCnt 배열을 재생횟수를 기준으로 내림차순 정렬

- 정렬된 genrePlayCnt 배열을 돌며 동일한 장르에 대한 노래들을 thisGenreSongs 배열에 저장

- thisGenreSongs 배열을 재생횟수를 기준으로 내림차순 정렬

- thisGenreSongs 배열의 0번째 인덱스의 no 값(노래 번호)을 answer에 push

- thisGenreSongs 배열의 길이가 1보다 큰 경우에는 1번째 인덱스의 no 값(노래 번호)도 answer에 push

```js
function solution(genres, plays) {
  let answer = [];
  let songs = genres.map((genre, index) => {
    return {
      no: index,
      genre: genre,
      play: plays[index],
    };
  });

  // console.log(songs);

  let genrePlayCnt = [];
  songs.forEach((song) => {
    // thisGenre 중
    let thisGenre = genrePlayCnt.find(
      (genrePlay) => genrePlay.genre === song.genre
    );
    // console.log(thisGenre);
    if (!thisGenre) {
      genrePlayCnt.push({
        genre: song.genre,
        play: song.play,
      });
    } else {
      thisGenre.play += song.play;
    }
  });
  console.log(genrePlayCnt);

  genrePlayCnt.sort((a, b) => b.play - a.play);
  console.log(genrePlayCnt);

  genrePlayCnt.forEach((genrePlay) => {
    let thisGenresongs = songs.filter((song) => song.genre === genrePlay.genre);
    // console.log(thisGenresongs);
    thisGenresongs.sort((a, b) => b.play - a.play);
    console.log(thisGenresongs);
    answer.push(thisGenresongs[0].no);
    if (thisGenresongs.length > 1) {
      answer.push(thisGenresongs[1].no);
    }
  });

  return answer;
}
```

## Reference

[https://programmers.co.kr/learn/courses/30/lessons/42579](https://programmers.co.kr/learn/courses/30/lessons/42579)
