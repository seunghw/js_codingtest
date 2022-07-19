function solution(s) {
  let result = [];
  for (i of s) {
    if (i == "A") {
      result.push("#");
    } else {
      result.push(i);
    }
  }
  return result.join("");
}

let str = "BANANA";
console.log(solution(str));
