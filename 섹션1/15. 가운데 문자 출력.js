// function solution(s) { // 내풀이
//   let answer;
let mid = Math.floor(s.length / 2);
//   if (s === s.toLowerCase()) {
//     if (s.length % 2 === 0) {
//       answer = s[mid - 1] + s[mid];
//     } else {
//       answer = s[mid];
//     }
//   }

//   return answer;
// }
// console.log(solution("studytudy"));

function solution(s) {
  let answer;
  let mid = Math.floor(s.length / 2);
  if (s.length % 2 === 1) answer = s.substring(mid, mid + 1);
  else answer = s.substring(mid - 1, mid + 1);
  //if(s.length%2===1) answer=s.substr(mid, 1);
  //else answer=s.substr(mid-1, 2);
  return answer;
}
console.log(solution("studytudy"));

//substring(시작인덱스, 종료인덱스)

//substring은 시작인덱스부터 종료인덱스 전!!!!까지 추출함

// ex) let a = "study"  a.substring(2,3) = u
// ex) let a = "study"  a.substring(2,4) = ud

//substr(시작인덱스, 갯수)

// substr은 시작인덱스부터 갯수만큼 추출함

// ex) let a = "study" substr(2,1) = u
// ex) let a = "study" substr(2,3) = udy
