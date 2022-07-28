function solution(s) {
  let answer = "YES";

  s = s.toUpperCase();

  //   if (s.split("").reverse().join("") != s) answer = "NO";  뒤집어서 체크

  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    // 절반까지 돌려서 맨앞과 맨 뒤를 체크
    if (s[i] != s[s.length - i - 1]) return "NO";
  }

  return answer;
}

let str = "goooG";
console.log(solution(str));
