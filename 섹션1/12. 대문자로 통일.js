function solution(s) {
  let answer = [];

  for (i of s) {
    if (i !== i.toUpperCase()) {
      answer.push(i.toUpperCase());
    } else {
      answer.push(i);
    }
  }

  return answer.join("");
}

let str = "ItisTimeToStudy";
console.log(solution(str));
