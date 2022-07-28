function solution(s, t) {
  let data = 10000;
  let answer = [data];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) {
      data = 0;
      answer[i] = data;
    } else {
      data++;
      answer[i] = data;
    }
  }

  for (let j = s.length - 1; j >= 0; j--) {
    if (s[j] === t) {
      data = 0;
    } else {
      data++;
    }

    if (answer[j] > data) {
      answer[j] = data;
    }
  }

  return answer;

  //   let answer=[];  //답지 정답
  //   let p=1000;
  //   for(let x of s){
  //       if(x===t){
  //           p=0;
  //           answer.push(p);
  //       }
  //       else{
  //           p++;
  //           answer.push(p);
  //       }
  //   }
  //   p=1000;
  //   for(let i=s.length-1; i>=0; i--){
  //       if(s[i]===t) p=0;
  //       else{
  //           p++;
  //           answer[i]=Math.min(answer[i], p);
  //       }
  //   }
  //   return answer;
}

let str = "teachermode";
console.log(solution(str, "e"));
