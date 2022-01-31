import React from 'react';
import Board from './board/Board';
import './Right.css';
import OrderPlayer from './player/OrderPlayer';

function Right() {
  return (
    <div className="right" data-testid="right">
      <OrderPlayer />
      <Board />
    </div>
  );
}

export default Right;
