function solution(arr) {
  let answer = [];
  let min = 1000;
  let result = 0;

  for (let i of arr) {
    if (i % 2 == 1) {
      result += i;
      if (min > i) {
        min = i;
      }
    }
  }

  answer.push(result);
  answer.push(min);

  return answer;
}

arr = [12, 77, 38, 41, 53, 92, 65];
console.log(solution(arr));
