import { fireEvent, render, screen } from "@testing-library/react";
// import { describe, it } from "vitest";
// import expect
import '@testing-library/jest-dom';

// import userEvent from "@testing-library/user-event";
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
        // userEvent.click(bt)
        // userEvent.setup()

        // let content = await screen.findByText("count is 1")
        // screen.

        // expect(content).tobe

        // userEvent.click(bt)
        fireEvent.change(textarea, {
            target: {
                value: "Bonjour"
            }
        })

        const content = await screen.findByDisplayValue("Bonjour")

        expect(content).toBeInTheDocument()
        expect(content).toBeVisible()
        // screen.debug()
    })
})