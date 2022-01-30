import React from 'react';
import {useStateValue} from "../../Context";
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'

const EndMessage = () => {
    const {winnerComb, nextPlayer} = useStateValue();
    const { width, height } = useWindowSize();
    let text;
    if(!winnerComb){
        text = "Tie Game"
    }
    else {
        text = (nextPlayer==="x") ? "Player O Won!" : "Player X Won!";
    }
    return (
        <div>
            <h1 className="end-game-message">{text}</h1>
            <Confetti
                width={width}
                height={height}
            />
        </div>
    );
}

export default EndMessage;