import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("loads ", () => {
    render(<App></App>);

    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect;
});
