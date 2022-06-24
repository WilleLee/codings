/*
String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.
*/

function solution1(seoul) {
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") return `김서방은 ${i}에 있다`;
  }
}
/*
테스트 1 〉	통과 (0.04ms, 30.2MB)
테스트 2 〉	통과 (0.04ms, 30.2MB)
테스트 3 〉	통과 (0.04ms, 30.2MB)
테스트 4 〉	통과 (0.07ms, 30.1MB)
테스트 5 〉	통과 (0.04ms, 30.1MB)
테스트 6 〉	통과 (0.04ms, 29.7MB)
테스트 7 〉	통과 (0.05ms, 30.1MB)
테스트 8 〉	통과 (0.06ms, 30.2MB)
테스트 9 〉	통과 (0.04ms, 30.1MB)
테스트 10 〉	통과 (0.04ms, 29.7MB)
테스트 11 〉	통과 (0.05ms, 30MB)
테스트 12 〉	통과 (0.05ms, 30MB)
테스트 13 〉	통과 (0.06ms, 30.1MB)
테스트 14 〉	통과 (0.06ms, 30.2MB)
*/

//using indexOf
function solution(seoul) {
  return `김서방은 ${seoul.indexOf("Kim")}에 있다`;
}
//큰 차이는 없으나 몇몇 케이스에서 for문 돌려 return하는 것보다 indexOf로 서칭해 바로 string으로 return하는 게 빠름.
/*
테스트 1 〉	통과 (0.04ms, 30.1MB)
테스트 2 〉	통과 (0.04ms, 29.9MB)
테스트 3 〉	통과 (0.03ms, 30.1MB)
테스트 4 〉	통과 (0.03ms, 30.2MB)
테스트 5 〉	통과 (0.05ms, 30.2MB)
테스트 6 〉	통과 (0.10ms, 30MB)
테스트 7 〉	통과 (0.03ms, 29.8MB)
테스트 8 〉	통과 (0.05ms, 29.8MB)
테스트 9 〉	통과 (0.04ms, 30.1MB)
테스트 10 〉	통과 (0.03ms, 29.9MB)
테스트 11 〉	통과 (0.03ms, 30.4MB)
테스트 12 〉	통과 (0.03ms, 30.3MB)
테스트 13 〉	통과 (0.06ms, 29.9MB)
테스트 14 〉	통과 (0.03ms, 30MB)
*/
