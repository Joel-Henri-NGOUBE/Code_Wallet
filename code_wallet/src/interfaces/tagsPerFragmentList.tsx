import { Dispatch, SetStateAction } from "react";

export interface tagsPerFragment {
    tagsPerFragment: Fragment[],
    setTagsPerFragment: Dispatch<SetStateAction<Fragment[]>>
}