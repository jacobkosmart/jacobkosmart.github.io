---
title:  "16.졸업 선물 - 완전탐색(블루투포스)"
excerpt: "Algorithm (JS)_Advance"

categories:
  - Algorithm_Advance
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---

----



# 졸업 선물

##  🔍 문제 
선생님은 올해 졸업하는 반 학생들에게 졸업선물을 주려고 합니다.  
학생들에게 인터넷 쇼핑몰에서 각자 원하는 상품을 골라 그 상품의 가격과 배송비를 제출하라고 했습니다. 선생님이 가지고 있는 예산은 한정되어 있습니다.  
현재 예산으로 최대 몇 명의 학생에게 선물을 사줄 수 있는지 구하는 프로그램을 작성하세요.  
선생님은 상품 하나를 50% 할인해서(반 가격) 살 수 있는 쿠폰을 가지고 있습니다. 배송비는할인에 포함되지 않습니다.  

### 🔹 입력설명
첫 번째 줄에 반 학생수 N(1<=N<=1000)과 예산 M(1<=M<=100,000,000)이 주어진다.  
두 번째 줄부터 N줄에 걸쳐 각 학생들이 받고 싶은 상품의 가격과 배송비가 입력됩니다.
상품가격과 배송비는 각각 100,000을 넘지 않습니다. 상품가격은 짝수로만 입력됩니다.  

### 🔹 출력 설명
첫 번째 줄에 선생님이 현재 예산으로 선물할 수 있는 최대 학생수를 출력합니다.  
선생님 최소한 1개 이상의 상품을 살 수 있는 예산을 가지고 있습니다.  


### 🔹 입력예제 1
5 28  
6 6  
2 2  
4 3  
4 5  
10 3  

### 🔹 출력 예제 1
4 

#### 출력설명
(2, 2), (4, 3), (4, 5)와 (10, 3)를 할인받아 (5, 3)에 사면 비용이 4+7+9+8=28입니다.   

----

##  📌 풀이

![image](https://user-images.githubusercontent.com/28912774/116836506-ba91e380-ac01-11eb-995e-93f053f0f8e7.png)


```html
<body>
  <script>
    function solution(m, product) {
      let answer =0;
      let n = product.length; // 학생수
      product.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1])); // 총 비용으로 위에부터 콜백 함수 사용하여 오른차순 정렬
      for(let i = 0; i < n; i++) {
        let money = m - (product[i][0]/2 + product[i][1]); // 남은예산 = 총 예산 -(쿠폰을 적용한 i번째 0번 index의 상품가격 + 배송비)
        let cnt = 1;
        for(let j = 0; j < n; j++) {
          if(j !== i && (product[j][0] + product[j][1]) > money) break; // 사려는 비용이 예산 보다 클경우에는, 더이상 살 수 없으니까 break 
          if(j !== i && (product[j][0] + product[j][1]) <= money) { // i는 이미 위에서 샀기 때문에 포함 시키면 안됨 , 그리고 살려고 하는 비용이 남은 예산보다 작거나 같아야 됨
            money -= (product[j][0] + product[j][1]); // 남은 금액에서 j번째 금액을 빼고 나머지 예산 return
            cnt ++ ; // 상품을 1개 더 산거임
          }
        }
        answer = Math.max(answer, cnt); // 가장 많이 살 수 있는 경우에 수니까 max 로 걸러줌
      }
      return answer;
    }

    let arr = [
      [6, 6],
      [2, 2],
      [4, 3],
      [4, 5],
      [10, 3]
    ];
    console.log(solution(28, arr));
  </script>
</body>
```
