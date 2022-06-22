// my sol
const orderedBoard = function (arr) {
  const reversed = arr.reverse();
  const returned = new Array();
  for (let i = 0; i < reversed[0].length; i++) {
    returned.push([]);
  }

  for (let i = 0; i < reversed.length; i++) {
    reversed[i].map((a, idx) => {
      if (a > 0) returned[idx].push(a);
    });
  }

  return returned;
};

const solution = function (board, moves) {
  const newBoard = orderedBoard(board);
  //return newBoard;

  const box = [];
  let count = 0;
  for (const move of moves) {
    const lastDropped = box[box.length - 1];
    const popped = newBoard[move - 1].pop();
    if (!lastDropped || (popped && lastDropped !== popped)) {
      box.push(popped);
      continue;
    } else if (popped && lastDropped === popped) {
      box.pop();
      count += 2;
      continue;
    }
  }
  return count;
};
/*
1) if문 조건 설계에서 시간이 오래 걸렸다. 조건문 사용 시 경우의 수에 대해 신중히 고민하는 습관을 가져야겠다.
2) in this case, I needed to rearrange the received array that is "board" to solve the problem, but I think it might be better to find another solution that doesn't require to edit the given array.
 */
