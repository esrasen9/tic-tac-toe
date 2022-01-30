import React from 'react';
import Player from "./Player";

const OrderPlayer = () => {
    return (
        <div className="order-player">
            <Player player="x"/>
            <Player player="o"/>
        </div>
    );
}

export default OrderPlayer;