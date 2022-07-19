function solution(arr) {
  let answer = [];
  for (i of arr) {
    if (i < 100 && answer.length < 7) answer.push(i);
  }
  return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
