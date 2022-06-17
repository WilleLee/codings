/*
수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.
*/

//my sol
function solution(answers) {
  const caseOne = [1, 2, 3, 4, 5],
    caseTwo = [2, 1, 2, 3, 2, 4, 2, 5],
    caseThree = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    scores = [0, 0, 0],
    result = [];
  for (let i = 0; i < answers.length; i++) {
    if (caseOne.length < answers.length) {
      caseOne.push(caseOne[i]);
    }
    if (caseTwo.length < answers.length) {
      caseTwo.push(caseTwo[i]);
    }
    if (caseThree.length < answers.length) {
      caseThree.push(caseThree[i]);
    }
  }
  for (let i = 0; i < answers.length; i++) {
    if (caseOne[i] === answers[i]) scores[0]++;
    if (caseTwo[i] === answers[i]) scores[1]++;
    if (caseThree[i] === answers[i]) scores[2]++;
  }
  const maxScore = Math.max(...scores);
  scores.map((score, i) => {
    if (score === maxScore) {
      result.push(i + 1);
    }
  });
  return result.sort((a, b) => a - b);
}

//using filter method and better calculation with leftover
function solution2(answers) {
  const caseOne = [1, 2, 3, 4, 5],
    caseTwo = [2, 1, 2, 3, 2, 4, 2, 5],
    caseThree = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const scoreOne = answers.filter(
    (answer, i) => answer === caseOne[i % caseOne.length]
  ).length;
  const scoreTwo = answers.filter(
    (answer, i) => answer === caseTwo[i % caseTwo.length]
  ).length;
  const scoreThree = answers.filter(
    (answer, i) => answer === caseThree[i % caseThree.length]
  ).length;
  const scores = [scoreOne, scoreTwo, scoreThree];
  const maxScore = Math.max(...scores);
  const result = [];
  scores.map((score, i) => {
    if (score === maxScore) result.push(i + 1);
  });
  return result.sort((a, b) => a - b);
}
