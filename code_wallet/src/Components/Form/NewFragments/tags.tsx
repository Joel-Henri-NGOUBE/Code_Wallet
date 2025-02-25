import Remove from "../../../assets/remove.svg"
import Plus from "../../../assets/plus.svg"
import { Dispatch, SetStateAction } from "react"
import { ITag } from "../../../interfaces/tag"
import { IFragment } from "../../../interfaces/fragment"
export default function TagsLabel({tags, otherTags, fragments, setFragments, areOtherTagsVisible, setAreOtherTagsVisible}: {tags: ITag[], otherTags: ITag[], areOtherTagsVisible: boolean, setAreOtherTagsVisible: Dispatch<SetStateAction<boolean>>, fragments: IFragment[], setFragments: Dispatch<SetStateAction<IFragment[]>>}){

    function handleClickRemove(id: string, fragments: IFragment[]){
        setFragments((fs) => fs.map((f) => f.id === "1" ? ({...f, tags: tags.filter((t) => t.id !== id)}) : f))
        console.log(fragments)
    }

    function handleClickAdd(id: string, name: string){
        setFragments((fs) => fs.map((f) => f.id === "1" ? ({...f, tags: [...tags, {id: id, name: name}]}) : f))
    }

    return(
        <div className="tags-label">
            <span id="tag"><h2>Tags</h2></span>
            <div className="tags">
                <div className="tags-list">
                {tags.map((tag, index) => <span key={index} className="tag">{tag.name}<img src={Remove} alt="remove" onClick={() => handleClickRemove(tag.id, fragments)}/></span>)}
                </div>
                <button onClick={() => setAreOtherTagsVisible(!areOtherTagsVisible)}>{areOtherTagsVisible ? "- Hide tags" : "+ Add tags"}</button>
                <div className="tags-list" 
                style={areOtherTagsVisible ? {display: "flex"} : {display: "none"}}
                >
                {otherTags.map((tag, index) => <span key={index} className="tag">{tag.name}<img src={Plus} alt="plus" onClick={() => handleClickAdd(tag.id, tag.name)}/></span>)}
                </div>
            </div>
        </div>
    )
}