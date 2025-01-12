import { Dispatch, SetStateAction } from "react";

export interface codeEditor {
    code: string,
    setCode: Dispatch<SetStateAction<string>>
}