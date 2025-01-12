import { Dispatch, SetStateAction } from "react";
import { tagsList } from "./tagsList";
import { tagsPerFragment } from "./tagsPerFragmentList";

export interface Tags extends tagsList, tagsPerFragment{
    tags: string[],
    setTags: Dispatch<SetStateAction<string[]>>,
    tagsPerFragment: IFragment[],
    setTagsPerFragment: Dispatch<SetStateAction<IFragment[]>>
}