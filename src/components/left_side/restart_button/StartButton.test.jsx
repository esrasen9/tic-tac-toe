import { render, screen} from '@testing-library/react';
import Provider from "../../../Context";
import StartButton from "./StartButton";

test("Restart button have been loaded successfully.",()=>{
    render(
        <Provider>
            <StartButton />
        </Provider>
    );

    const button = screen.getByTestId("restart-btn");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("NEW GAME");
})