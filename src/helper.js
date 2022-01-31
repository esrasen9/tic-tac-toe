const combinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const winnerIsExist = (board) => {
  for (const combination of combinations) {
    const [i1, i2, i3] = combination;
    if (board[i1]) {
      if (board[i1] === board[i2] && board[i1] === board[i3]) {
        return combination;
      }
    }
  }
  return null;
};
