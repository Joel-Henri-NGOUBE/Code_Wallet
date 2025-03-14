import Remove from "../../../assets/remove.svg"
import Plus from "../../../assets/plus.svg"
import { Dispatch, SetStateAction } from "react"
import { ITag } from "../../../interfaces/tag"
import { IFragment } from "../../../interfaces/fragment"
export default function TagsLabel({tags, otherTags, areOtherTagsVisible, setAreOtherTagsVisible, setFragmentTags}: {tags: ITag[], otherTags: ITag[], areOtherTagsVisible: boolean, setAreOtherTagsVisible: Dispatch<SetStateAction<boolean>>, fragments: IFragment[], setFragments: Dispatch<SetStateAction<IFragment[]>>, setFragmentTags: Dispatch<SetStateAction<ITag[]>>}){

    function handleClickRemove(id: string){
        setFragmentTags(fT => fT?.filter((ft) => ft.id !== id))
    }

    function handleClickAdd(id: string, name: string){
        setFragmentTags(fT => [...fT, {id: id, name: name}])
    }

    return(
        <div className="tags-label">
            <span id="tag"><h2>Tags</h2></span>
            <div className="tags">
                <div className="tags-list">
                {tags?.map((tag, index) => <span key={index} className="tag">{tag.name}<img src={Remove} alt="remove" onClick={() => handleClickRemove(tag.id)}/></span>)}
                </div>
                <button onClick={() => setAreOtherTagsVisible(!areOtherTagsVisible)}>{areOtherTagsVisible ? "- Hide tags" : "+ Add tags"}</button>
                <div className="tags-list" 
                style={areOtherTagsVisible ? {display: "flex"} : {display: "none"}}
                >
                {otherTags?.map((tag, index) => <span key={index} className="tag">{tag.name}<img src={Plus} alt="plus" onClick={() => handleClickAdd(tag.id, tag.name)}/></span>)}
                </div>
            </div>
        </div>
    )
}