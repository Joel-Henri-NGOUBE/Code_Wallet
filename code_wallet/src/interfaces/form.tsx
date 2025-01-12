import { Dispatch, SetStateAction } from "react";
import { codeEditor } from "./codeEditor";
import { titleEditor } from "./titleEditor";

export interface IForm extends titleEditor, codeEditor{
    title: string,
    setTitle: Dispatch<SetStateAction<string>>,
    tags: string[],
    code: string,
    setCode: Dispatch<SetStateAction<string>>
}