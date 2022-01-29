import React, {createContext, useContext, useMemo, useState} from "react";
import {combinations} from "./data";

export const Context = createContext(null);

const Provider = ({children}) => {
    const [board, setBoard] = useState(new Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState("X");

    const winnerIsExist = () => {
        for (const combination of combinations) {
            const [i1, i2, i3] = combination;
            if (board[i1]) {
                if (board[i1] === board[i2] && board[i1] === board[i3]) {
                    return combination;
                }
            }
        }
        return null;
    }

    const store = useMemo(() => ({
        board,
        setBoard,
        currentPlayer,
        setCurrentPlayer,
        winnerIsExist,
    }), [board, currentPlayer, winnerIsExist]);

    return (
        <Context.Provider value={store}>
            {children}
        </Context.Provider>)
}

export default Provider;
export const useStateValue = () => useContext(Context);