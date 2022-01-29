import React from 'react';
import {useStateValue} from "../../Context";

const OrderPlayer = () => {
    const {currentPlayer} = useStateValue();
    return (
        <div className="order-player">
            <div className={`player-x ${(currentPlayer === "X") ? "player-x-active" : ""}`}>
                <span>
                    Player X
                </span>
            </div>
            <div className={`player-o ${(currentPlayer === "O") ? "player-o-active" : ""}`}>
                <span>
                    Player O
                </span>
            </div>
        </div>
    );
}

export default OrderPlayer;