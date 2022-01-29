import React from 'react';

const OrderPlayer = () => {
    return (
        <div className="order-player">
            <div className="player-x player-x-active">
                <span>
                    Player X
                </span>
            </div>
            <div className="player-o">
                <span>
                    Player O
                </span>
            </div>
        </div>
    );
}

export default OrderPlayer;