import App from "./App";

import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";

test("loads ", () => {
    render(<App></App>);

    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect;
});
