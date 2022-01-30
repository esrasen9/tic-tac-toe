import React from 'react';
import {useStateValue} from "../../../Context";

const StartButton = () => {
    const {board, setBoard, setNextPlayer, setWinnerComb, setEndGame} = useStateValue();
    const restartGame = () => {
        setBoard([...board.fill(null)])
        setNextPlayer("x");
        setWinnerComb(null);
        setEndGame(false);
    }
    return (
        <button className="restart-btn"
                onClick={restartGame}
                data-testid="restart-btn">
            NEW GAME
        </button>
    );
}

export default StartButton;