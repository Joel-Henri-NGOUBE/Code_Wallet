import { ReactElement } from "react";
import { tagsList } from "../../../../interfaces/tagsList";
import { ITag } from "../../../../interfaces/tag";

export default function AllTags({tags, setTagValue, modalsVisibility, setModalsVisibility}: tagsList ): ReactElement{

    function handleTagClick(tag: ITag){
        setModalsVisibility({edit: true, new: modalsVisibility.new});
        setTagValue(tag)
        console.log(tag)
    }

    return (
        <div className="tags">
            <div className="tags-wrapper">
            {tags.map((tag, index) => <span key={index} className="tag" onClick={() => {handleTagClick(tags[index])}}>{tag.name}</span>)}
            </div>
        </div>
    )
}