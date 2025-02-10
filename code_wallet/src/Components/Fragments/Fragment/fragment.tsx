import { Dispatch, MouseEvent, SetStateAction, useEffect } from "react"
import Eye from "../../../assets/Eye.svg"
import Remove from "../../../assets/remove.svg"
import { Link } from "react-router-dom";

interface FragmentProp{
    index: number,
    fragment: IFragment,
    setFragments: Dispatch<SetStateAction<IFragment[]>>,
    click: boolean[],
    setViewClick: Dispatch<SetStateAction<boolean>>,
    code: string,
    setCode: Dispatch<SetStateAction<string>>
    setModalValues: Dispatch<SetStateAction<IFragment>>
}

export default function Fragment({index, fragment, click, setModalValues, setViewClick, code, setCode, setFragments}: FragmentProp){
    
    useEffect(() => {
        if(!click[1]){
            (document.querySelector("#rows") as HTMLElement).style.backgroundColor = "var(--primary-purple)";
            (document.querySelector("#squares") as HTMLElement).style.backgroundColor = "var(--secondary-gray)";
            (document.querySelector("#rows img") as HTMLImageElement).src = "src/assets/rows-white.svg";
            (document.querySelector("#squares img") as HTMLImageElement).src = "src/assets/squares.svg";

        }
        else{
            (document.querySelector("#rows") as HTMLElement).style.backgroundColor = "var(--secondary-gray)";
            (document.querySelector("#squares") as HTMLElement).style.backgroundColor = "var(--primary-purple)";
            (document.querySelector("#rows img") as HTMLImageElement).src = "src/assets/rows.svg";
            (document.querySelector("#squares img") as HTMLImageElement).src = "src/assets/squares-white.svg";
        }
    }, [click])

    function handleClickEye(e: MouseEvent, fragment: IFragment){
        e.preventDefault()
        if(fragment.code) setCode(fragment.code)
        setViewClick(true)
        setModalValues(fragment)
    }

    function handleClickRemove(e: MouseEvent, fragment: IFragment){
        e.preventDefault()
        setFragments((f: IFragment[]) => f.filter((frag) => frag.id !== fragment.id))
    }

    return(
        click[1] ? (<Link to="newfragments"><div className="fragment" key={index}>
                <div className="top-background">
                    <div className="top">
                        <div className="icons">
                            <img src={Eye} alt="eye" onClick={(e) => handleClickEye(e, fragment)}/>
                            <img src={Remove} alt="remove" width={20} onClick={(e: MouseEvent) => handleClickRemove(e, fragment)}/>
                        </div>
                        <span className="fragment-title">{fragment.title}</span>
                    </div>
                </div>
                <div className="bottom">
                    <div className="tags">
                    {fragment.tags.map((tag, index) => <span key={index} className="tag">{tag}</span>)}
                    </div>
                </div>
            </div></Link>) :
        (<Link to="newfragments"><div className="fragment2" key={index}>
                <div className="left">
                        <span className="fragment-title">{fragment.title}</span>
                </div>
                <div className="right">
                    <div className="tags">
                        {fragment.tags.map((tag, index) => <span key={index} className="tag">{tag}</span>)}
                    </div>
                    <div className="icons">
                        <img src={Eye} alt="eye" width={30}/>
                        <img src={Remove} alt="remove" width={20}/>
                    </div>
                </div>
                
            </div></Link>)     
    )
}