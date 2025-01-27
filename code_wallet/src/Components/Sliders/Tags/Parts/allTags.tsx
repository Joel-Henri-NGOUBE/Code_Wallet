import { ReactElement } from "react";
// import { tagEditor } from "../../interfaces/tagEditor";
import { tagsList } from "../../../../interfaces/tagsList";

export default function AllTags({tags, setTags, tagValue, setTagValue, modalsVisibility, setModalsVisibility}: tagsList ): ReactElement{

    function handleTagClick(tag: string){
        setModalsVisibility({edit: true, new: modalsVisibility.new});
        setTagValue(tag)
        // console.log(modalsVisibility)
    }

    return (
        <div className="tags">
            <div className="tags-wrapper">
            {tags.map((tag, index) => <span key={index} className="tag" onClick={() => {handleTagClick(tags[index])}}>{tag}</span>)}
            </div>
        </div>
    )
}