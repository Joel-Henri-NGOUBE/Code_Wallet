import { Dispatch, SetStateAction } from "react";
import { ModalsVisibility } from "../types/modalsVisibility";

export interface tagsList {
    tags: string[],
    setTags: Dispatch<SetStateAction<string[]>>,
    tagValue: string,
    setTagValue: Dispatch<SetStateAction<string>>
    modalsVisibility: ModalsVisibility,
    setModalsVisibility: Dispatch<SetStateAction<ModalsVisibility>>
}