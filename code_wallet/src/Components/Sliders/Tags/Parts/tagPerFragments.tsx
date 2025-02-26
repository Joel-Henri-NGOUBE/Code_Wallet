import { ReactElement } from "react";
// import { tagEditor } from "../../interfaces/tagEditor";
import { tagsPerFragment } from "../../../../interfaces/tagsPerFragmentList";
import { IFragment } from "../../../../interfaces/fragment";
import { ITag } from "../../../../interfaces/tag";

export default function TagsPerFragment({tags, tagValue, setTagValue, fragments, setFragments, modalsVisibility, setModalsVisibility}: tagsPerFragment ): ReactElement{
    
    function handleTagClick(tag: ITag){
        setModalsVisibility({edit: true, new: modalsVisibility.new});
        setTagValue(tag)
        // console.log(modalsVisibility)
    }

    return (
        <div className="tags2">     
            {fragments.map((fragment: IFragment) => (
                <div className="fragment">
                    <h2 className="fragment-title">{fragment.title}</h2>
                    <div className="tags-wrapper2">
                    {/* fragments.filter((f) => f.id === id)[0].tagIds.map((tI) => tags.filter((t) => t.id === tI)[0]) */}
                    {fragment.tagIds.map((tId, index) => {
                        const tag = tags.filter((t) => t.id === tId)[0]
                        return <span key={index} className="tag" onClick={() => {handleTagClick(tag)}}>{tag.name}</span>
                    }
                    // <span key={index} className="tag" onClick={() => {handleTagClick(tags[index].name)}}>{tag.name}</span>
                    )}
                    {/* {fragment.tagIds.map((tag, index) => <span key={index} className="tag" onClick={() => {handleTagClick(fragment.tags[index].name)}}>{tag.name}</span>)} */}
                    </div>
                </div>
            ))}
        </div>
    )
}