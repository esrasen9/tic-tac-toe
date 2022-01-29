import React, {createContext, useContext, useMemo, useState} from "react";
export const Context = createContext(null);

const Provider = ({children}) => {
    const [board, setBoard] = useState(new Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState("X");

    const store = useMemo(() => ({
        board,
        setBoard,
        currentPlayer,
        setCurrentPlayer,
    }), [board, currentPlayer]);

    return (
        <Context.Provider value={store}>
            {children}
        </Context.Provider>)
}

export default Provider;
export const useStateValue = () => useContext(Context);