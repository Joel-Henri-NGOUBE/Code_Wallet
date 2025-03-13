import { Dispatch, SetStateAction } from "react";

export interface FragmentModal{
    viewClick: boolean,
    setViewClick: Dispatch<SetStateAction<boolean>>
    code: string,
}