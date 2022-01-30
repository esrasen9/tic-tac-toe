import React from 'react';
import "./Board.css";
import Tile from "../tile/Tile";
import {useStateValue} from "../../../Context";

const Board = () => {
    const {board} = useStateValue();
    return (
        <div className="board" data-testid="board">
            {board.map((t, i) => <Tile idx={i} key={i}/>)}
        </div>
    );
}

export default Board;