import React from 'react';
import "./Board.css";
import Tile from "../tile/Tile";
import {useStateValue} from "../../Context";

const Board = () => {
    const {board} = useStateValue();

    return (
        <div className="board">
            {board.map((t, i) => <Tile id={i} key={i}/>)}
        </div>
    );
}

export default Board;