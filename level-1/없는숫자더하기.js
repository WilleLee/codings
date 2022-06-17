/*
0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다.
numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.
*/
const sample = [5, 8, 4, 0, 6, 7, 9];
// my sol
function solution(numbers) {
  let answer = 0;
  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) {
      answer += i;
    }
  }
  return answer;
}

// using reduce method
const reducer = (prev, curr) => prev + curr;
const solution2 = (numbers) => {
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9].reduce(reducer);
  return num - numbers.reduce(reducer);
};
