import { render, screen} from '@testing-library/react';
import Left from "./Left";
import Provider from "../../Context";


test("The components on the left side have been loaded successfully.",()=>{
    render(
        <Provider>
            <Left />
        </Provider>
    );
    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();

    const restartButton = screen.getByTestId("restart-btn");
    expect(restartButton).toBeInTheDocument();
})