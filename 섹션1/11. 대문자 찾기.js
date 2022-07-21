function solution(s) {
  let answer = 0;
  for (x of s) {
    if (x === x.toUpperCase()) answer++; // 내가작성한 코드
    // let num = x.charCodeAt(); // 독특한 해답 아스키.  charCodeAt 활용
    // if (num >= 65 && num <= 90) answer++; //
  }
  return answer;
}

let str = "KoreaTimeGood";
console.log(solution(str));
