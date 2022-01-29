import React from 'react';
import {useStateValue} from "../../Context";

const StartButton = () => {
    const {board, setBoard, setCurrentPlayer} = useStateValue();
    const restartGame = () => {
        setBoard([...board.fill(null)])
        setCurrentPlayer("X");
    }
    return (
        <button onClick={restartGame} className="restart-btn">
            NEW GAME
        </button>
    );
}

export default StartButton;