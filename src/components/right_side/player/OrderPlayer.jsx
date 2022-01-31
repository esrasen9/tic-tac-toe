import React from 'react';
import Player from "./Player";

const OrderPlayer = () => {
    return (
        <div data-testid="order-player" className="order-player">
            <Player player="x"/>
            <Player player="o"/>
        </div>
    );
}

export default OrderPlayer;