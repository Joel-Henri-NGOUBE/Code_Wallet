import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import { BrowserRouter } from "react-router-dom";
import Info from "./Info";

describe("New Fragments component", () => {
    it("should contain all titles", async () => {
        
        render(
            <BrowserRouter>
                <Info />
            </BrowserRouter>
        )

        const presentation = await screen.findByText("Presentation of functionnalities")
        const devInfo = await screen.findByText("Information on the developer")
        const dataManagement = await screen.findByText("Information on the legal framework for data management")

        expect(presentation).toBeInTheDocument()
        expect(devInfo).toBeInTheDocument()
        expect(dataManagement).toBeInTheDocument()
    })
})