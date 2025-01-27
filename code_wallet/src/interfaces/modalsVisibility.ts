import { Dispatch, SetStateAction } from "react"
import { ModalsVisibility } from "../types/modalsVisibility"

export interface IModalsVisibility{
    tagValue: string,
    setTagValue: Dispatch<SetStateAction<string>>,
    modalsVisibility: ModalsVisibility
    setModalsVisibility:  Dispatch<SetStateAction<ModalsVisibility>>
}

// export interface Title extends IModalsVisibility{
    
// }