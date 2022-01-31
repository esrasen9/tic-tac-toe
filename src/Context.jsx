import React, {
  createContext, useContext, useMemo, useState,
} from 'react';

export const Context = createContext(null);

function Provider({ children }) {
  const [board, setBoard] = useState(new Array(9).fill(null));
  const [nextPlayer, setNextPlayer] = useState('x');
  const [winnerComb, setWinnerComb] = useState();
  const [endGame, setEndGame] = useState(false);

  const store = useMemo(() => ({
    board,
    setBoard,
    nextPlayer,
    setNextPlayer,
    winnerComb,
    setWinnerComb,
    endGame,
    setEndGame,
  }), [board, nextPlayer, winnerComb, endGame]);

  return (
    <Context.Provider value={store}>
      {children}
    </Context.Provider>
  );
}

export default Provider;
export const useStateValue = () => useContext(Context);
