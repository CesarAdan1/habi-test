import React from "react";
import { render } from "@testing-library/react";
import ViewContainer from "../ViewContainer";
import FormContainer from "../FormContainer";
import { exportAllDeclaration } from "@babel/types";

const component = {
    child: FormContainer
}

const mockChild = jest.fn();

jest.mock("../FormContainer", () => (props) => {
    mockChild(props);
    return <mock-child />
})

test("If parent component is pass children", () => {
    render(<ViewContainer children="children" />)
    expect(mockChild).toHaveBeenCalledWith(
        expect.objectContaining({
            children: "children"
        })
    )
});

test("If ViewContainer is not passed children", () => {
    render(<ViewContainer />);
    expect(mockChild).not.toHaveBeenCalled()
})