import React from 'react';
import "./Left.css";
import StartButton from "./restart_button/StartButton";
import Header from "./header/Header";
import EndMessage from "./game_end_message/EndMessage";
import {useStateValue} from "../../Context";

const Left = () => {
    const {endGame} = useStateValue();
    return (
        <div className="left" data-testid="left">
            <Header/>
            {endGame && <EndMessage/>}
            <StartButton/>
        </div>
    );
}

export default Left;