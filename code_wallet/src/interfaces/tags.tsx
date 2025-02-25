import { Dispatch, SetStateAction } from "react";
import { tagsList } from "./tagsList";
import { tagsPerFragment } from "./tagsPerFragmentList";
import { ModalsVisibility } from "../types/modalsVisibility";
import { IFragment } from "./fragment";

export interface Tags extends tagsList, tagsPerFragment{
    tags: {id: number, name: string}[],
    setTags: Dispatch<SetStateAction<{id: number, name: string}[]>>,
    tagValue: string,
    setTagValue: Dispatch<SetStateAction<string>>,
    // currentTagIndex: number | null,
    // setCurrentTagIndex: Dispatch<SetStateAction<number | null>>
    fragments: IFragment[],
    setFragments: Dispatch<SetStateAction<IFragment[]>>,
    modalsVisibility: ModalsVisibility,
    setModalsVisibility: Dispatch<SetStateAction<ModalsVisibility>>
}