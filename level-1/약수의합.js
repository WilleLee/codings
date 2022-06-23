//my sol
const findAliquots = function (num) {
  //약수를 배열로 return
  const result = new Array();
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) result.push(i);
  }
  return result;
};

const calSum = function (nums) {
  //array 값 모두 더하기
  return nums.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
};

const solution = function (n) {
  return calSum(findAliquots(n));
};
/*
테스트 1 〉	통과 (0.11ms, 30MB)
테스트 2 〉	통과 (0.08ms, 29.9MB)
테스트 3 〉	통과 (0.10ms, 30.3MB)
테스트 4 〉	통과 (0.12ms, 30.2MB)
테스트 5 〉	통과 (0.12ms, 30.1MB)
테스트 6 〉	통과 (0.12ms, 30.2MB)
테스트 7 〉	통과 (0.17ms, 30.2MB)
테스트 8 〉	통과 (0.10ms, 30.1MB)
테스트 9 〉	통과 (0.13ms, 30.2MB)
테스트 10 〉	통과 (0.17ms, 30.1MB)
테스트 11 〉	통과 (0.12ms, 30MB)
테스트 12 〉	통과 (0.17ms, 30.2MB)
테스트 13 〉	통과 (0.08ms, 30.2MB)
테스트 14 〉	통과 (0.14ms, 30MB)
테스트 15 〉	통과 (0.14ms, 30MB)
테스트 16 〉	통과 (0.10ms, 30.1MB)
테스트 17 〉	통과 (0.16ms, 29.8MB)
*/

// 하나의 for문에서 약수 발견하고 더하기 수행 ... 훨씬 빠르넹
const solution2 = function (n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (n % 1 === 0) sum += i;
  }
  return sum;
};
/*
테스트 1 〉	통과 (0.05ms, 30.1MB)
테스트 2 〉	통과 (0.04ms, 30.2MB)
테스트 3 〉	통과 (0.06ms, 29.9MB)
테스트 4 〉	통과 (0.05ms, 30MB)
테스트 5 〉	통과 (0.12ms, 29.9MB)
테스트 6 〉	통과 (0.05ms, 30MB)
테스트 7 〉	통과 (0.10ms, 30.1MB)
테스트 8 〉	통과 (0.07ms, 30.2MB)
테스트 9 〉	통과 (0.08ms, 30.2MB)
테스트 10 〉	통과 (0.10ms, 29.8MB)
테스트 11 〉	통과 (0.07ms, 29.9MB)
테스트 12 〉	통과 (0.10ms, 30.2MB)
테스트 13 〉	통과 (0.04ms, 30MB)
테스트 14 〉	통과 (0.08ms, 30.3MB)
테스트 15 〉	통과 (0.12ms, 30.2MB)
테스트 16 〉	통과 (0.03ms, 30.2MB)
테스트 17 〉	통과 (0.11ms, 30MB)
*/
