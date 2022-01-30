import React from 'react';
import "./Left.css";
import StartButton from "./StartButton";
import Header from "./Header";
import EndMessage from "./EndMessage";
import {useStateValue} from "../../Context";

const Left = () => {
    const {endGame}= useStateValue();
    return (
        <div className="left">
            <Header/>
            {endGame && <EndMessage />}
            <StartButton/>
        </div>
    );
}

export default Left;