import { Dispatch, SetStateAction } from "react";

export interface tagsPerFragment {
    tagsPerFragment: IFragment[],
    setTagsPerFragment: Dispatch<SetStateAction<IFragment[]>>
}