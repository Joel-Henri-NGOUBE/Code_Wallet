import { ReactElement } from "react";
// import { tagEditor } from "../../interfaces/tagEditor";
import { tagsPerFragment } from "../../../../interfaces/tagsPerFragmentList";

export default function TagsPerFragment({tagValue, setTagValue, tagsPerFragment, setTagsPerFragment, modalsVisibility, setModalsVisibility}: tagsPerFragment ): ReactElement{
    
    function handleTagClick(tag: string){
        setModalsVisibility({edit: true, new: modalsVisibility.new});
        setTagValue(tag)
        // console.log(modalsVisibility)
    }

    return (
        <div className="tags2">     
            {tagsPerFragment.map((fragment) => (
                <div className="fragment">
                    <h2 className="fragment-title">{fragment.title}</h2>
                    <div className="tags-wrapper2">
                    {fragment.tags.map((tag, index) => <span key={index} className="tag" onClick={() => {handleTagClick(fragment.tags[index].name)}}>{tag.name}</span>)}
                    </div>
                </div>
            ))}
        </div>
    )
}