import Remove from "../../../assets/remove.svg"
import Plus from "../../../assets/plus.svg"
import { Dispatch, SetStateAction } from "react"
export default function TagsLabel({tags, otherTags, fragments, setFragments, areOtherTagsVisible, setAreOtherTagsVisible}: {tags: {id: number, name: string}[], otherTags: {id: number, name: string}[], areOtherTagsVisible: boolean, setAreOtherTagsVisible: Dispatch<SetStateAction<boolean>>, fragments: {
    id: string;
    title: string;
    code: string;
    tags: {
        id: number;
        name: string;
    }[];
}[], setFragments: Dispatch<SetStateAction<{
    id: string;
    title: string;
    code: string;
    tags: {
        id: number;
        name: string;
    }[];
}[]>>}){

    function handleClickRemove(id: number, fragments: any){
        setFragments((fs) => fs.map((f) => f.id === "1" ? ({...f, tags: tags.filter((t) => t.id !== id)}) : f))
        console.log(fragments)
    }

    function handleClickAdd(id: number, name: string){
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