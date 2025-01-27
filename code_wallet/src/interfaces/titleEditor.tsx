import { Dispatch, SetStateAction } from "react";
import { ModalsVisibility } from "../types/modalsVisibility";

export interface titleEditor {
    title: string,
    setTitle: Dispatch<SetStateAction<string>>,
}