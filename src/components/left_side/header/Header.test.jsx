import {render, screen} from '@testing-library/react';
import Provider from "../../../Context";
import Header from "./Header";

test("Header component have been loaded successfully.", () => {
    render(
        <Provider>
            <Header/>
        </Provider>
    );

    const tic = screen.getByTestId("header-text-1");
    expect(tic).toBeInTheDocument();
    expect(tic).toHaveTextContent("Tic");

    const tac = screen.getByTestId("header-text-2");
    expect(tac).toBeInTheDocument();
    expect(tac).toHaveTextContent("Tac");

    const toe = screen.getByTestId("header-text-3");
    expect(toe).toBeInTheDocument();
    expect(toe).toHaveTextContent("Toe!");
})