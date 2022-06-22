/*
두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서,
약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.
 */

//my sol
function aliquots(num) {
  const arr = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) arr.push(num);
  }
  return arr.length % 2 === 0 ? true : false;
} // 2. for문 통해 해당 정수의 개수가 짝수면 true, 홀수면 false를 return하는 함수 생성하기

function solution(left, right) {
  const numbers = [];
  for (let cur = left; cur <= right; cur++) {
    numbers.push(cur);
  } // 1. 해당 range의 정수로 이루어진 array 만들기

  return numbers.reduce((prev, curr) => {
    return aliquots(curr) ? prev + curr : prev - curr;
  }, 0); // 3. 2번의 함수를 이용한 reduce 함수로 결과 return
}

// 제곱근이 정수이면 약수의 개수가 홀수!!
function solution2(left, right) {
  let result = 0;
  for (let cur = left; cur <= right; cur++) {
    Number.isInteger(Math.sqrt(cur)) ? (result -= cur) : (result += cur);
  }
  return result;
}
