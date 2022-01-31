import {render, screen} from "@testing-library/react";
import Provider from "../../../Context";
import OrderPlayer from "./OrderPlayer";

test("Order player component have been loaded successfully.",()=>{
    render(
        <Provider>
            <OrderPlayer/>
        </Provider>
    );
    const player = screen.getByTestId("order-player");

    expect(player).toBeInTheDocument();
    expect(player.firstChild).toHaveTextContent(/player-x/i);
    expect(player.firstChild).toHaveClass("player-x");
    expect(player.lastChild).toHaveTextContent(/player-o/i);
    expect(player.lastChild).toHaveClass("player-o");
})