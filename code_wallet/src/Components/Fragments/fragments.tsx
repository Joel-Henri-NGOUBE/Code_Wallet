// import { Link } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";
import Fragment from "./Fragment/fragment";

interface FragmentsProp{
    fragments: IFragment[],
    setFragments: Dispatch<SetStateAction<IFragment[]>>,
    click: boolean[],
    setModalValues: Dispatch<SetStateAction<IFragment>>,
    setViewClick: Dispatch<SetStateAction<boolean>>,
    code: string,
    setCode: Dispatch<SetStateAction<string>>
}

export default function FragmentsComponent({fragments, setFragments, click, setModalValues, setViewClick, code, setCode}: FragmentsProp){
    return(
        click[1] ?
        (<div className="fragments">
            {fragments.map((fragment, index) => <Fragment index={index} fragment={fragment} setFragments={setFragments} click={click} setModalValues={setModalValues} setViewClick={setViewClick} code={code} setCode={setCode}/>)}
        </div>) :
        (<div className="fragments2">
            {fragments.map((fragment, index) => <Fragment index={index} fragment={fragment} setFragments={setFragments} click={click} setModalValues={setModalValues} setViewClick={setViewClick} code={code} setCode={setCode}/>)}
        </div>)
    )
}