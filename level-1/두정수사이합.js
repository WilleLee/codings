/*
두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

제한 조건
a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
a와 b의 대소관계는 정해져있지 않습니다.
*/

function solution(a, b) {
  let sum = 0;
  const [x, y] = [a, b].sort((a, b) => a - b);
  for (let i = x; i <= y; i++) {
    sum += i;
  }
  return sum;
}
/*
테스트 1 〉	통과 (0.07ms, 30MB)
테스트 2 〉	통과 (0.07ms, 29.9MB)
테스트 3 〉	통과 (0.08ms, 30.1MB)
테스트 4 〉	통과 (24.96ms, 32.5MB)
테스트 5 〉	통과 (16.50ms, 32.5MB)
테스트 6 〉	통과 (14.17ms, 32.7MB)
테스트 7 〉	통과 (8.09ms, 32.5MB)
테스트 8 〉	통과 (11.50ms, 32.6MB)
테스트 9 〉	통과 (9.01ms, 32.6MB)
테스트 10 〉	통과 (4.83ms, 32.6MB)
테스트 11 〉	통과 (0.16ms, 29.9MB)
테스트 12 〉	통과 (0.53ms, 30.1MB)
테스트 13 〉	통과 (0.28ms, 30.1MB)
테스트 14 〉	통과 (0.09ms, 29.8MB)
테스트 15 〉	통과 (0.11ms, 29.9MB)
테스트 16 〉	통과 (0.11ms, 29.8MB)
*/

function solution(a, b) {
  let sum = 0;
  if (a === b) {
    return a;
  }
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    sum += i;
  }
  return sum;
}

/*
테스트 1 〉	통과 (0.04ms, 30.1MB)
테스트 2 〉	통과 (0.05ms, 30.2MB)
테스트 3 〉	통과 (0.05ms, 29.9MB)
테스트 4 〉	통과 (23.08ms, 32.8MB)
테스트 5 〉	통과 (16.65ms, 32.8MB)
테스트 6 〉	통과 (15.10ms, 32.9MB)
테스트 7 〉	통과 (8.21ms, 32.5MB)
테스트 8 〉	통과 (11.65ms, 32.8MB)
테스트 9 〉	통과 (9.16ms, 32.7MB)
테스트 10 〉	통과 (3.72ms, 32.9MB)
테스트 11 〉	통과 (0.25ms, 30MB)
테스트 12 〉	통과 (1.70ms, 32.6MB)
테스트 13 〉	통과 (0.29ms, 29.9MB)
테스트 14 〉	통과 (0.04ms, 30.1MB)
테스트 15 〉	통과 (0.08ms, 30.1MB)
테스트 16 〉	통과 (0.15ms, 30MB)
*/
