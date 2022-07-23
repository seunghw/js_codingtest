function solution(s) {
  return s.reduce((acc, cur) => {
    if (acc.length > cur.length) {
      return acc;
    } else {
      return cur;
    }
  });
}
let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
