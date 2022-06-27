/*
에라토스테네스의 채와 Set을 이용
*/
const solution = function (n) {
  const set = new Set();
  for (let i = 1; i <= n; i += 2) {
    set.add(i);
  }
  set.delete(1);
  set.delete(2);
  for (let i = 3; i <= Math.sqrt(n); i++) {
    if (set.has(i)) {
      for (let j = i * 2; j <= n; j += i) {
        set.delete(j); // 앞선 수의 배수를 모두 제거한다!
      }
    }
  }
  return set.size;
};
/*
테스트 1 〉	통과 (0.05ms, 30.1MB)
테스트 2 〉	통과 (0.12ms, 29.9MB)
테스트 3 〉	통과 (0.13ms, 29.9MB)
테스트 4 〉	통과 (0.15ms, 30.2MB)
테스트 5 〉	통과 (0.12ms, 30.1MB)
테스트 6 〉	통과 (1.01ms, 30.4MB)
테스트 7 〉	통과 (0.33ms, 30MB)
테스트 8 〉	통과 (0.67ms, 30.1MB)
테스트 9 〉	통과 (1.78ms, 30.3MB)
테스트 10 〉	통과 (57.94ms, 45.7MB)
테스트 11 〉	통과 (140.49ms, 57.3MB)
테스트 12 〉	통과 (47.67ms, 45.7MB)
효율성  테스트
테스트 1 〉	통과 (157.12ms, 57.3MB)
테스트 2 〉	통과 (174.29ms, 57.3MB)
테스트 3 〉	통과 (173.94ms, 57.2MB)
테스트 4 〉	통과 (145.68ms, 57.3MB)
*/

const solution_ = function (n) {
  let answer = 0;
  const arr = new Array(n + 1).fill(true);
  const sqrt = Math.sqrt(n);
  for (let i = 2; i <= sqrt; i++) {
    if (!arr[i]) continue;

    for (let j = i * i; j <= n; j += i) {
      arr[j] = false;
    }
  }
  for (let i = 2; i <= n; i++) {
    if (arr[i]) answer++;
  }
  return answer;
};

/*
테스트 1 〉	통과 (0.05ms, 29.9MB)
테스트 2 〉	통과 (0.10ms, 30.1MB)
테스트 3 〉	통과 (0.12ms, 30.2MB)
테스트 4 〉	통과 (0.12ms, 30.1MB)
테스트 5 〉	통과 (0.11ms, 30.2MB)
테스트 6 〉	통과 (0.69ms, 30.1MB)
테스트 7 〉	통과 (0.21ms, 30MB)
테스트 8 〉	통과 (0.46ms, 30.1MB)
테스트 9 〉	통과 (0.76ms, 30.1MB)
테스트 10 〉	통과 (11.75ms, 35MB)
테스트 11 〉	통과 (21.10ms, 39.4MB)
테스트 12 〉	통과 (9.72ms, 35.1MB)
효율성  테스트
테스트 1 〉	통과 (18.94ms, 39.5MB)
테스트 2 〉	통과 (18.29ms, 39.6MB)
테스트 3 〉	통과 (17.78ms, 39.8MB)
테스트 4 〉	통과 (18.71ms, 39.6MB)
*/
