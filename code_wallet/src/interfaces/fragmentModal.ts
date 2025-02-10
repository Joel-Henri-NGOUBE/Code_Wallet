import { Dispatch, SetStateAction } from "react";

export interface FragmentModal{
    codeSample: string,
    viewClick: boolean,
    setViewClick: Dispatch<SetStateAction<boolean>>
    code: string,
    setCode: Dispatch<SetStateAction<string>>,
}