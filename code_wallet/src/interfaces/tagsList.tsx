import { Dispatch, SetStateAction } from "react";
import { ModalsVisibility } from "../types/modalsVisibility";

export interface tagsList {
    tags: {id: number, name: string}[],
    setTags: Dispatch<SetStateAction<{id: number, name: string}[]>>,
    tagValue: string,
    setTagValue: Dispatch<SetStateAction<string>>
    modalsVisibility: ModalsVisibility,
    setModalsVisibility: Dispatch<SetStateAction<ModalsVisibility>>
}