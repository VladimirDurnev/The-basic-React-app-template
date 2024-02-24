import {render, screen} from "@testing-library/react";

import "@testing-library/jest-dom";
import {ListItem} from "./ListItem";

const obj = {
    id: 1,
    title: `sunt aut facere repellat provident 
    occaecati excepturi optio reprehenderit`,
    body: `quia et suscipit suscipit recusandae consequuntur expedita
    et cum reprehenderit molestiae ut ut quas totam nostrum 
    rerum est autem sunt rem eveniet architecto`,
};

describe("List Item", () => {
    test("get id", () => {
        render(<ListItem {...obj}></ListItem>);
        expect(screen.getByText(/1/)).toBeInTheDocument();
    });
    test("get title", () => {
        render(<ListItem {...obj}></ListItem>);
        expect(screen.getByText(new RegExp(obj.title))).toBeInTheDocument();
    });
    test("get body", () => {
        render(<ListItem {...obj}></ListItem>);
        expect(screen.getByText(new RegExp(obj.body))).toBeInTheDocument();
    });

    test("active selector css on body", () => {
        render(<ListItem {...obj}></ListItem>);
        expect(screen.getByText(new RegExp(obj.body))).toHaveClass("active");
    });
});
