// 내가 작성한 답.

function solution(a, b, c) {
  let data = [a, b, c].sort((a, b) => a - b);

  if (data[2] < data[0] + data[1]) {
    answer = "YES";
  } else answer = "NO";

  return answer;
}

console.log(solution(13, 33, 17));

// 정답

// function solution(a, b, c){
//   let answer="YES", max;
//   let tot=a+b+c;
//   if(a>b) max=a;
//   else max=b;
//   if(c>max) max=c;
//   if(tot-max<=max) answer="NO";
//   return answer;
// }

// console.log(solution(13, 33, 17));
