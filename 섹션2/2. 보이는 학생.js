// 입력 : 정수 N , N명의 학생의 키.
// 출력 : 최대학생수
// 쌤이 볼 수 있는 사람은 뒷사람보다 키가 큰사람. 앞사람보다 크면 보이고 작거나 같으면 안보이기 때문
// 그렇다면 반복문을 돌려서 앞사람과 뒷사람을 비교하여 크면 카운트 증가.
// 일단 reduce로 쓰면 편할 것 같아서 사용

function solution(arr) {
  let answer = 0;
  for (let i = 1; i < arr.length; i++) {
    console.log(arr[i - 1], arr[i], answer);
    if (arr[i - 1] < arr[i]) {
      answer++;
    }
  }
  return answer;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
