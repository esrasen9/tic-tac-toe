import {render, screen} from '@testing-library/react';
import Right from "./Right";
import Provider from "../../Context";

test("Right side components have been loaded successfully.", () => {
    render(
        <Provider>
            <Right/>
        </Provider>
    );

    const board = screen.getByTestId("board");
    expect(board).toBeInTheDocument();
    const player = screen.getByTestId("order-player");
    expect(player).toBeInTheDocument();
});