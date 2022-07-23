function solution(s) {
  return s.filter((a, i) => {
    if (s.indexOf(a) === i) return true;
  });
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
