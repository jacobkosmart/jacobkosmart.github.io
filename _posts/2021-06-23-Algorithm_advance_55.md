---
title: "55.í©í ë¦¬ì¼"
excerpt: "Algorithm (JS)_Advance"

categories:
  - Algorithm_Advance
tags:
  - [Algorithm, JavaScript]

toc: true
toc_sticky: true
---

---



##  ð ë¬¸ì  
ìì°ì  Nì  ìë ¥íë©´  N!ê°ì  êµ¬íì¸ì.

N!  =  n*(n-1)*(n-2)*.....*2*1ìëë¤. 

ë§ì½  N=5ë¼ë©´  5!=5*4*3*2*1=120ìëë¤.


### ð¹ ìë ¥ì¤ëª
ì²«ì§¸  ì¤ì  ìì°ì  N(3<=n<=10)ì´  ìë ¥ë©ëë¤

### ð¹ ì¶ë ¥ ì¤ëª
ì²«ì§¸  ì¤ì  Ní©í ë¦¬ì¼  ê°ì  ì¶ë ¥í©ëë¤

### ð¹ ìë ¥ìì  1
5

### ð¹ ì¶ë ¥ ìì  1
120


----

##  ð íì´

![image](https://user-images.githubusercontent.com/28912774/123042524-ed05d300-d431-11eb-81e9-6f370bb8f21d.png)


```html
<head>
  <meta charset="UTF-8">
  <title>ì¶ë ¥ê²°ê³¼</title>
</head>

<body>
  <script>
    function solution(n) {
      let answer; 
      function DFS(n) {
        if(n === 1) return 1;
        else return n * DFS(n -1);
      }
      answer= DFS(n);
      return answer;
    }

    console.log(solution(5));
  </script>
</body>
```
