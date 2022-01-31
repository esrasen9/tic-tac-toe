import React from 'react';
import './Board.css';
import nextId from 'react-id-generator';
import Tile from '../tile/Tile';
import { useStateValue } from '../../../Context';

function Board() {
  const { board } = useStateValue();
  return (
    <div className="board" data-testid="board">
      {board.map((t, i) => <Tile idx={i} key={nextId()} />)}
    </div>
  );
}

export default Board;
