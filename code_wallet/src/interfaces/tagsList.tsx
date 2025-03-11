import { Dispatch, SetStateAction } from "react";
import { ModalsVisibility } from "../types/modalsVisibility";
import { ITag } from "./tag";

export interface tagsList {
    tags: ITag[],
    setTagValue: Dispatch<SetStateAction<ITag>>
    modalsVisibility: ModalsVisibility,
    setModalsVisibility: Dispatch<SetStateAction<ModalsVisibility>>
}