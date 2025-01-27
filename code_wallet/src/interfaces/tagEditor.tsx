import { Dispatch, SetStateAction } from "react";
import { ModalsVisibility } from "../types/modalsVisibility";

export interface tagEditor {
    tagValue: string,
    setTagValue: Dispatch<SetStateAction<string>>,
    // currentTagIndex: number | null,
    // setCurrentTagIndex: Dispatch<SetStateAction<number | null>>,
    modalsVisibility: ModalsVisibility,
    setModalsVisibility: Dispatch<SetStateAction<ModalsVisibility>>
}
