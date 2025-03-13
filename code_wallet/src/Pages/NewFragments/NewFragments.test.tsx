import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import NewFragments from "./NewFragments";
import { BrowserRouter } from "react-router-dom";

describe("New Fragments component", () => {
    it("should change the textarea content", async () => {
        
        render(
            <BrowserRouter>
                <NewFragments />
            </BrowserRouter>
        )

        const textarea = await screen.findByPlaceholderText("Write your code here...")
        fireEvent.change(textarea, {
            target: {
                value: "Bonjour"
            }
        })

        const content = await screen.findByDisplayValue("Bonjour")

        expect(content).toBeInTheDocument()
        expect(content).toBeVisible()
    })
})