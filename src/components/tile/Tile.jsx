import React, {useEffect, useState} from 'react';
import "./Tile.css";
import {useStateValue} from "../../Context";

const Tile = ({id}) => {
    const {currentPlayer, setCurrentPlayer, board, setBoard, winnerIsExist} = useStateValue();
    const [value, setValue] = useState();

    useEffect(() => {
        setValue(board[id])
    }, [board, id]);

    const handleAttack = () => {
        let winner = winnerIsExist();
        if (value) {
            return;
        }
        if (!winner) {
            setBoard([...board.map((b, i) => (i === id) ? currentPlayer : b)])
            setValue(currentPlayer);
            setCurrentPlayer((currentPlayer === "X") ? "O" : "X");
        }
    }

    return (
        <div className={`tile ${(value) ? "active" : ""}`} onClick={handleAttack}>
            {value}
        </div>
    );
}

export default Tile;