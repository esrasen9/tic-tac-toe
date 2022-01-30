import React from 'react';
import {useStateValue} from "../../../Context";

const Player = ({player}) =>  {
    const {nextPlayer} = useStateValue();
    const name = `player-${player}`;
    return (
        <div className={`${name} ${(nextPlayer === player) ? `player-${player}-active` : ""}`}>
            <span>{name.toUpperCase()}</span>
        </div>
    );
}

export default Player;