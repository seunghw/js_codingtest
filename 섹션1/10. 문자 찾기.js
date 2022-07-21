function solution(s, t) {
  let result = 0;

  for (i of s) {
    if (i === t) {
      result++;
    }
  }

  return result;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));

// // function solution(s, t) {
// // 특이한 정답
// let answer=s.split(t).length;
// return answer-1;
// // }

// // let str = "COMPUTERPROGRAMMING";
// // console.log(solution(str, "R"));
