import { Dispatch, SetStateAction } from "react"
import { ModalsVisibility } from "../types/modalsVisibility"
import { ITag } from "./tag"

export interface IModalsVisibility{
    tagValue: ITag,
    setTagValue: Dispatch<SetStateAction<ITag>>,
    modalsVisibility: ModalsVisibility
    setModalsVisibility:  Dispatch<SetStateAction<ModalsVisibility>>
}

// export interface Title extends IModalsVisibility{
    
// }