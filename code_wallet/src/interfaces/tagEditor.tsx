import { Dispatch, SetStateAction } from "react";
import { ModalsVisibility } from "../types/modalsVisibility";
import { ITag } from "./tag";
import { IFragment } from "./fragment";

export interface tagEditor {
    tagValue: ITag,
    setTagValue: Dispatch<SetStateAction<ITag>>,
    setTags: Dispatch<SetStateAction<ITag[]>>
    modalsVisibility: ModalsVisibility,
    setModalsVisibility: Dispatch<SetStateAction<ModalsVisibility>>,
    setFragments: Dispatch<SetStateAction<IFragment[]>>
}
