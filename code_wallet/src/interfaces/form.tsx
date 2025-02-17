import { Dispatch, SetStateAction } from "react";
import { codeEditor } from "./codeEditor";
import { titleEditor } from "./titleEditor";

export interface IForm extends titleEditor, codeEditor{
    title: string,
    setTitle: Dispatch<SetStateAction<string>>,
    fragments: {
        id: string;
        title: string;
        code: string;
        tags: {
            id: number;
            name: string;
        }[];
    }[],
    setFragments: Dispatch<SetStateAction<{
        id: string;
        title: string;
        code: string;
        tags: {
            id: number;
            name: string;
        }[];
    }[]>>
    tags: {id: number, name: string}[],
    otherTags: {id: number, name: string}[],
    areOtherTagsVisible: boolean,
    setAreOtherTagsVisible: Dispatch<SetStateAction<boolean>>,
    code: string,
    setCode: Dispatch<SetStateAction<string>>
}