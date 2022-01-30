import React, {useEffect, useState} from 'react';
import "./Tile.css";
import {useStateValue} from "../../../Context";
import {winnerIsExist} from "../../../helper";

const Tile = ({idx}) => {
    const {nextPlayer, setNextPlayer, board, setBoard,winnerComb, setWinnerComb, setEndGame} = useStateValue();
    const [value, setValue] = useState();

    useEffect(() => {
        setValue(board[idx]);
        setWinnerComb(winnerIsExist(board));
        if(winnerComb || !board.includes(null) ){
            setEndGame(true);
        }
    }, [board, idx, setEndGame, setWinnerComb, winnerComb]);

    const handleAttack = () => {
        if (!winnerComb && !value) {
            setBoard([...board.map((b, i) => (i === idx) ? nextPlayer : b)])
            setValue(nextPlayer);
            setNextPlayer((nextPlayer === "x") ? "o" : "x");
        }
    }

    return (
        <div data-testid={`tile-${idx}`} className={`tile ${(value || winnerComb) ? "active" : ""}`} onClick={handleAttack}>
            {value}
        </div>
    );
}

export default Tile;