function solution(arr) {
  let answer = arr[0];

  for (let i of arr) {
    if (answer > i) {
      answer = i;
    }
  }
  return answer;
}

let arr = [5, 3, 7, 11, 2, 15, 17];
console.log(solution(arr));
