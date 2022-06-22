/*
배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 예를 들면,

arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.
배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.
*/

//my sol
function solution(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) newArr.push(arr[i]);
  }
  return newArr;
}
/*
테스트 1 〉	통과 (40.12ms, 76.1MB)
테스트 2 〉	통과 (12.09ms, 76MB)
테스트 3 〉	통과 (12.63ms, 76.1MB)
테스트 4 〉	통과 (35.99ms, 75.6MB)
*/

//using filter method
function solution(arr) {
  return arr.filter((val, idx) => val !== arr[idx + 1]);
}
/*
테스트 1 〉	통과 (57.02ms, 74.5MB)
테스트 2 〉	통과 (50.45ms, 74.8MB)
테스트 3 〉	통과 (43.13ms, 75.7MB)
테스트 4 〉	통과 (44.94ms, 75.8MB)
*/
