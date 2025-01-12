import { Dispatch, SetStateAction } from "react";

export interface tagEditor {
    tagValue: string,
    setTagValue: Dispatch<SetStateAction<string>>
}
