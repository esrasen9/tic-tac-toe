import React from 'react';
import "./Board.css";
import Tile from "../tile/Tile";

const Board = () => {
    return (
        <div className="board">
            {[...Array(9)].map((t) => <Tile key={t}/>)}
        </div>
    );
}

export default Board;