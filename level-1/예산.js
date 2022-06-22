/*
부서별로 신청한 금액이 들어있는 배열 d와 예산 budget이 매개변수로 주어질 때, 최대 몇 개의 부서에 물품을 지원할 수 있는지 return 하도록 solution 함수를 완성해주세요.
*/

//my sol 1
function solution(d, budget) {
  const sum = d.reduce((prev, curr) => prev + curr, 0);
  const len = d.length;
  const sorted = d.sort((a, b) => a - b);
  let orderedSum = 0;

  if (sum <= budget) return len;

  for (let i = 0; i < len; i++) {
    orderedSum += sorted[i];
    if (orderedSum > budget) return i;
  }
}
/*
테스트 1 〉	통과 (0.17ms, 30.2MB)
테스트 2 〉	통과 (0.06ms, 30.2MB)
테스트 3 〉	통과 (0.06ms, 29.7MB)
테스트 4 〉	통과 (0.11ms, 29.9MB)
테스트 5 〉	통과 (0.13ms, 30MB)
테스트 6 〉	통과 (0.09ms, 30.3MB)
테스트 7 〉	통과 (0.10ms, 29.9MB)
테스트 8 〉	통과 (0.13ms, 30.2MB)
테스트 9 〉	통과 (0.13ms, 30.2MB)
테스트 10 〉	통과 (0.09ms, 30.1MB)
테스트 11 〉	통과 (0.12ms, 30MB)
테스트 12 〉	통과 (0.10ms, 29.9MB)
테스트 13 〉	통과 (0.10ms, 30.2MB)
테스트 14 〉	통과 (0.13ms, 29.9MB)
테스트 15 〉	통과 (0.13ms, 30.3MB)
테스트 16 〉	통과 (0.24ms, 29.8MB)
테스트 17 〉	통과 (0.12ms, 30.3MB)
테스트 18 〉	통과 (0.12ms, 30.1MB)
테스트 19 〉	통과 (0.11ms, 29.9MB)
테스트 20 〉	통과 (0.11ms, 30.1MB)
테스트 21 〉	통과 (0.11ms, 29.9MB)
테스트 22 〉	통과 (0.11ms, 29.9MB)
테스트 23 〉	통과 (0.10ms, 30MB)
 */

// in one line
function solution2(d, budget) {
  return d
    .sort((a, b) => a - b)
    .reduce((count, price) => {
      return count + ((budget -= price) >= 0);
    }, 0);
}
// budget이 let으로 주어져야 하고, budget 값을 변경시킨다는 점에서 사용하진 않을 듯.

// my sol 2
function solution(d, budget) {
  const len = d.length;
  const sorted = d.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum += sorted[i];
    if (sum > budget) return i;
  }
  return len;
}
/*
테스트 1 〉	통과 (0.04ms, 30.1MB)
테스트 2 〉	통과 (0.04ms, 30MB)
테스트 3 〉	통과 (0.05ms, 30.2MB)
테스트 4 〉	통과 (0.06ms, 30.1MB)
테스트 5 〉	통과 (0.06ms, 30.1MB)
테스트 6 〉	통과 (0.05ms, 30.3MB)
테스트 7 〉	통과 (0.12ms, 30.1MB)
테스트 8 〉	통과 (0.11ms, 30.2MB)
테스트 9 〉	통과 (0.08ms, 30.3MB)
테스트 10 〉	통과 (0.08ms, 30.2MB)
테스트 11 〉	통과 (0.08ms, 30MB)
테스트 12 〉	통과 (0.08ms, 29.9MB)
테스트 13 〉	통과 (0.08ms, 30.2MB)
테스트 14 〉	통과 (0.11ms, 30.1MB)
테스트 15 〉	통과 (0.09ms, 30.2MB)
테스트 16 〉	통과 (0.08ms, 30.2MB)
테스트 17 〉	통과 (0.13ms, 30.1MB)
테스트 18 〉	통과 (0.08ms, 30MB)
테스트 19 〉	통과 (0.10ms, 30.2MB)
테스트 20 〉	통과 (0.11ms, 29.9MB)
테스트 21 〉	통과 (0.17ms, 30.2MB)
테스트 22 〉	통과 (0.11ms, 30.3MB)
테스트 23 〉	통과 (0.07ms, 30.2MB)
 */
