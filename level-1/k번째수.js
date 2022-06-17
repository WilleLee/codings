/*
배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.
command 예 : [[2, 5, 3], [4, 4, 1], [1, 7, 3]]
*/

// 1st trial
function solution(array, commands) {
  const answer = [];
  commands.map((command) => {
    answer.push(
      array.slice(command[0] - 1, command[1]).sort((a, b) => a - b)[
        command[2] - 1
      ]
    );
  });
  return answer;
}

//2nd trial
function solution2(array, commands) {
  return commands.map((comm) => {
    return array.slice(comm[0] - 1, comm[1]).sort((a, b) => a - b)[comm[2] - 1];
  });
}
// 코드는 간단하지만 commands의 기존 값을 변경하는 리스크 가짐.
