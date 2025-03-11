import { Dispatch, SetStateAction } from "react";

export interface titleEditor {
    title: string,
    setTitle: Dispatch<SetStateAction<string>>,
}