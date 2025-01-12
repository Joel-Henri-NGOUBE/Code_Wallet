import Eye from "../../assets/Eye.svg"
import Remove from "../../assets/remove.svg"

export default function Fragment({index, fragment}: {index: number, fragment: IFragment}){
    return(
        <div className="fragment" key={index}>
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
            </div>
    )
}