import { Dispatch, SetStateAction } from "react";
import { codeEditor } from "./codeEditor";
import { titleEditor } from "./titleEditor";
import { IFragment } from "./fragment";
import { ITag } from "./tag";

export interface IForm extends titleEditor, codeEditor{
    title: string,
    setTitle: Dispatch<SetStateAction<string>>,
    fragments: IFragment[],
    setFragments: Dispatch<SetStateAction<IFragment[]>>
    tags: ITag[],
    otherTags: ITag[],
    areOtherTagsVisible: boolean,
    setAreOtherTagsVisible: Dispatch<SetStateAction<boolean>>,
    code: string,
    setCode: Dispatch<SetStateAction<string>>,
    setFragmentTags: Dispatch<SetStateAction<ITag[]>>
}