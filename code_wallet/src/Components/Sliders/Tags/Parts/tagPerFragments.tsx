import { ReactElement } from "react";
import { tagsPerFragment } from "../../../../interfaces/tagsPerFragmentList";
import { IFragment } from "../../../../interfaces/fragment";
import { ITag } from "../../../../interfaces/tag";

export default function TagsPerFragment({tags, setTagValue, fragments, modalsVisibility, setModalsVisibility}: tagsPerFragment ): ReactElement{
    
    function handleTagClick(tag: ITag){
        setModalsVisibility({edit: true, new: modalsVisibility.new});
        setTagValue(tag)
    }

    return (
        <div className="tags2">     
            {fragments?.map((fragment: IFragment) => (
                <div className="fragment">
                    <h2 className="fragment-title">{fragment.title}</h2>
                    <div className="tags-wrapper2">
                    {fragment.tagIds?.map((tId, index) => {
                        const tag = tags?.filter((t) => t.id === tId)[0]
                        return <span key={index} className="tag" onClick={() => {handleTagClick(tag)}}>{tag.name}</span>
                    }
                    )}
                    </div>
                </div>
            ))}
        </div>
    )
}