// import { Link } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";
import Fragment from "./Fragment/fragment";
import { IFragment } from "../../interfaces/fragment";
import { ITag } from "../../interfaces/tag";

interface FragmentsProp{
    tags: ITag[],
    fragments: IFragment[],
    setFragments: Dispatch<SetStateAction<IFragment[]>>,
    click: boolean[],
    // setModalValues: Dispatch<SetStateAction<IFragment>>,
    setViewClick: Dispatch<SetStateAction<boolean>>,
    code: string,
    setCode: Dispatch<SetStateAction<string>>
}

export default function FragmentsComponent({tags, fragments, setFragments, click, setViewClick, code, setCode}: FragmentsProp){
    return(
        fragments.length 
        ? (click[1] ?
            (<div className="fragments">
                {fragments.map((fragment, index) => <Fragment tags={tags} index={index} fragment={fragment} setFragments={setFragments} click={click} setViewClick={setViewClick} code={code} setCode={setCode}/>)}
            </div>) :
            (<div className="fragments2">
                {fragments.map((fragment, index) => <Fragment tags={tags} index={index} fragment={fragment} setFragments={setFragments} click={click} setViewClick={setViewClick} code={code} setCode={setCode}/>)}
            </div>))
        : <p>No fragment yet</p>
    )
}