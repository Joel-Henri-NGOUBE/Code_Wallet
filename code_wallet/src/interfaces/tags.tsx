import { Dispatch, SetStateAction } from "react";
import { tagsList } from "./tagsList";
import { tagsPerFragment } from "./tagsPerFragmentList";
import { ModalsVisibility } from "../types/modalsVisibility";
import { IFragment } from "./fragment";
import { ITag } from "./tag";

export interface Tags extends tagsList, tagsPerFragment{
    tags: ITag[],
    setTagValue: Dispatch<SetStateAction<ITag>>,
    // currentTagIndex: number | null,
    // setCurrentTagIndex: Dispatch<SetStateAction<number | null>>
    fragments: IFragment[],
    modalsVisibility: ModalsVisibility,
    setModalsVisibility: Dispatch<SetStateAction<ModalsVisibility>>
}