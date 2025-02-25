import { Dispatch, SetStateAction } from "react";
import { ModalsVisibility } from "../types/modalsVisibility";
import { IFragment } from "./fragment";

export interface tagsPerFragment {
    fragments: IFragment[],
    setFragments: Dispatch<SetStateAction<IFragment[]>>,
    tagValue: string,
    setTagValue: Dispatch<SetStateAction<string>>
    modalsVisibility: ModalsVisibility,
    setModalsVisibility: Dispatch<SetStateAction<ModalsVisibility>>
}