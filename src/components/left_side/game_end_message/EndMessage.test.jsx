import {render, screen} from '@testing-library/react';
import EndMessage from "./EndMessage";
import Provider from "../../../Context";

test("End message have been loaded successfully.", () => {
    render(
        <Provider>
            <EndMessage/>
        </Provider>
    );

    const gameResult = screen.getByTestId("game-result-container");
    expect(gameResult).toBeInTheDocument();
    const message = screen.getByTestId("game-result-message");
    expect(message).toBeInTheDocument();
})