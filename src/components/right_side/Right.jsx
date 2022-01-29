import React from 'react';
import Board from "../board/Board";
import "./Right.css";
import OrderPlayer from "./OrderPlayer";

const Right = () => {
    return (
        <div className="right">
            <OrderPlayer/>
            <Board/>
        </div>
    );
}

export default Right;