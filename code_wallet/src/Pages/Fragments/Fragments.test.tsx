import {  render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import Fragments from "./Fragments";
import { BrowserRouter } from "react-router-dom";

describe("New Fragments component", () => {
    it("should be empty", async () => {
        
        render(
            <BrowserRouter>
                <Fragments />
            </BrowserRouter>
        )

        const text = await screen.findByText("No fragment yet")

        expect(text).toBeInTheDocument()
    })
})