import { Dispatch, SetStateAction } from "react";
import { ModalsVisibility } from "../types/modalsVisibility";

export interface tagsPerFragment {
    tagsPerFragment: IFragment[],
    setTagsPerFragment: Dispatch<SetStateAction<IFragment[]>>,
    tagValue: string,
    setTagValue: Dispatch<SetStateAction<string>>
    modalsVisibility: ModalsVisibility,
    setModalsVisibility: Dispatch<SetStateAction<ModalsVisibility>>
}