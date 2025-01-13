import { useEffect } from "react"
import Eye from "../../../assets/Eye.svg"
import Remove from "../../../assets/remove.svg"

export default function Fragment({index, fragment, click}: {index: number, fragment: IFragment, click: boolean[]}){
    
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

    return(
        click[1] ? (<div className="fragment" key={index}>
                <div className="top-background">
                    <div className="top">
                        <div className="icons">
                            <img src={Eye} alt="eye" />
                            <img src={Remove} alt="remove" width={20}/>
                        </div>
                        <span className="fragment-title">{fragment.title}</span>
                    </div>
                </div>
                <div className="bottom">
                    <div className="tags">
                    {fragment.tags.map((tag, index) => <span key={index} className="tag">{tag}</span>)}
                    </div>
                </div>
            </div>) :
        (<div className="fragment2" key={index}>
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
                
            </div>)     
    )
}