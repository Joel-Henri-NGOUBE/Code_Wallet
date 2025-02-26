import { Dispatch, SetStateAction } from "react";
import { ModalsVisibility } from "../types/modalsVisibility";
import { IFragment } from "./fragment";
import { ITag } from "./tag";

export interface tagsPerFragment {
    fragments: IFragment[],
    setFragments: Dispatch<SetStateAction<IFragment[]>>,
    tags: ITag[],
    tagValue: ITag,
    setTagValue: Dispatch<SetStateAction<ITag>>
    modalsVisibility: ModalsVisibility,
    setModalsVisibility: Dispatch<SetStateAction<ModalsVisibility>>
}