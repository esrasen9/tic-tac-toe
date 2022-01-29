import React from 'react';
import "./Left.css";
import StartButton from "./StartButton";

const Left = () => {
    return (
        <div className="left">
            <div className="header">
                <p className="header-text">X</p>
                <p className="header-text">O</p>
                <p className="header-text">T</p>
                <p className="header-text">O</p>
            </div>
            <StartButton/>
        </div>
    );
}

export default Left;