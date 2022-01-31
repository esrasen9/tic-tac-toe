import {fireEvent, render, screen} from '@testing-library/react';
import Provider from "../../../Context";
import Board from "./Board";

test("Board component have been loaded successfully.", () => {
    render(
        <Provider>
            <Board/>
        </Provider>
    );

    const board = screen.getByTestId("board");
    expect(board).toBeInTheDocument();

    [...Array(9)].forEach((t, i) => {
        const tile = screen.getByTestId(`tile-${i}`);
        expect(tile).toBeInTheDocument();
        expect(tile).toHaveTextContent("");
        expect(tile).toBeEnabled();
        fireEvent.click(tile);
        expect(tile).toHaveClass("active");
        expect(tile).not.toHaveValue("");
    })
})