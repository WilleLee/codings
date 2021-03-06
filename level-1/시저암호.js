/*
문제 설명
어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다.
문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

제한 조건
공백은 아무리 밀어도 공백입니다.
s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
s의 길이는 8000이하입니다.
n은 1 이상, 25이하인 자연수입니다.
*/

function solution(s, n) {
  const uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowers = "abcdefghijklmnopqrstuvwxyz";
  const texts = [];
  const len = uppers.length;
  for (const char of s) {
    if (char === " ") {
      texts.push(char);
      continue;
    }
    if (uppers.indexOf(char) >= 0) {
      const idx = uppers.indexOf(char);
      idx + n >= len
        ? texts.push(uppers.charAt(idx + n - len))
        : texts.push(uppers.charAt(idx + n));
    } else if (lowers.indexOf(char) >= 0) {
      const idx = lowers.indexOf(char);
      idx + n >= len
        ? texts.push(lowers.charAt(idx + n - len))
        : texts.push(lowers.charAt(idx + n));
    }
  }
  return texts.join("");
}

/*
테스트 1 〉	통과 (0.10ms, 30.1MB)
테스트 2 〉	통과 (0.09ms, 30MB)
테스트 3 〉	통과 (0.12ms, 30.1MB)
테스트 4 〉	통과 (0.14ms, 30.1MB)
테스트 5 〉	통과 (0.09ms, 30MB)
테스트 6 〉	통과 (0.10ms, 30.2MB)
테스트 7 〉	통과 (0.10ms, 29.8MB)
테스트 8 〉	통과 (0.17ms, 29.8MB)
테스트 9 〉	통과 (0.13ms, 30.2MB)
테스트 10 〉	통과 (0.13ms, 30MB)
테스트 11 〉	통과 (0.10ms, 30.1MB)
테스트 12 〉	통과 (0.12ms, 30MB)
테스트 13 〉	통과 (1.61ms, 30.1MB)
*/
