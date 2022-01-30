import React from 'react';
import Board from "./board/Board";
import "./Right.css";
import OrderPlayer from "./player/OrderPlayer";

const Right = () => {
    return (
        <div className="right">
            <OrderPlayer/>
            <Board/>
        </div>
    );
}

export default Right;