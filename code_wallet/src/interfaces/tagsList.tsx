import { Dispatch, SetStateAction } from "react";

export interface tagsList {
    tags: string[],
    setTags: Dispatch<SetStateAction<string[]>>
}