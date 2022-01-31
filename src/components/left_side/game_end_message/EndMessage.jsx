import React from 'react';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';
import { useStateValue } from '../../../Context';

function EndMessage() {
  const { winnerComb, nextPlayer } = useStateValue();
  const { width, height } = useWindowSize();
  let text;
  if (!winnerComb) {
    text = 'Tie Game';
  } else {
    text = (nextPlayer === 'x') ? 'Player O Won!' : 'Player X Won!';
  }
  return (
    <div className="game-result-container" data-testid="game-result-container">
      <h1 className="game-result-message" data-testid="game-result-message">{text}</h1>
      {
          winnerComb && (
          <Confetti
            data-testid="confetti-animation"
            width={width}
            height={height}
          />
          )
      }
    </div>
  );
}

export default EndMessage;
