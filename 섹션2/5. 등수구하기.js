function solution(arr) {
  let answer = Array.from({ length: arr.length }, () => 1);

  for (let i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (arr[j] > arr[i]) answer[i]++;
    }
  }

  return answer;
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));
