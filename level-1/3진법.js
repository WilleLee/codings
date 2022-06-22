/*
자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.
*/

//my sol
function solution(n) {
  let result = 0;
  const ter = n.toString(3).split("");
  //return ter;
  ter.map((text, i) => {
    result += parseInt(text) * 3 ** i;
  });
  return result;
}

// parseInt function params 활용
function solution2(n) {
  const ter = n.toString(3).split("").reverse().join("");
  return parseInt(ter, 3);
}
