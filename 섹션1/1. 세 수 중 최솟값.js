// 내가 작성한 답

function solution(a, b, c) {
  let answer;

  if (a < b) {
    answer = a;
  } else answer = b;

  if (c < answer) answer = c;

  return answer;
}

console.log(solution(2, 5, 1));

// 정답

function solution(a, b, c) {
  let answer;
  if (a < b) answer = a;
  else answer = b;
  if (c < answer) answer = c;
  return answer;
}

console.log(solution(2, 5, 1));
