function solution(str) {
  str = str.toUpperCase().replace(/[A-Z]/g, "");
  return Number(str);
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));
