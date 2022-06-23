//my sol
const solution = function (n, arr1, arr2) {
  const map1 = [],
    map2 = [],
    combined = [];

  for (let i = 0; i < n; i++) {
    combined.push("");
  }

  for (let i = 0; i < n; i++) {
    const binary1 = arr1[i].toString(2);
    const binary2 = arr2[i].toString(2);
    binary1.length < n
      ? map1.push(binary1.padStart(n, "0"))
      : map1.push(binary1);
    binary2.length < n
      ? map2.push(binary2.padStart(n, "0"))
      : map2.push(binary2);
    for (let j = 0; j < n; j++) {
      parseInt(map1[i][j]) + parseInt(map2[i][j]) === 0
        ? (combined[i] += " ")
        : (combined[i] += "#");
    }
  }
  return combined;
};
/*
테스트 1 〉	통과 (0.12ms, 30.2MB)
테스트 2 〉	통과 (0.20ms, 30MB)
테스트 3 〉	통과 (0.16ms, 30MB)
테스트 4 〉	통과 (0.13ms, 30.2MB)
테스트 5 〉	통과 (0.11ms, 30.1MB)
테스트 6 〉	통과 (0.18ms, 30.1MB)
테스트 7 〉	통과 (0.14ms, 30.1MB)
테스트 8 〉	통과 (0.13ms, 29.7MB)
*/

//using the single vertical bar
const solution2 = function (n, arr1, arr2) {
  return arr1.map((a, i) =>
    (a | arr2[i])
      .toString(2)
      .padStart(n, "0")
      .replace(/0/g, " ")
      .replace(/1/g, "#")
  );
};
