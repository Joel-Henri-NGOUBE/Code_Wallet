import { ReactElement } from "react";
// import { tagEditor } from "../../interfaces/tagEditor";
import { tagsPerFragment } from "../../../../interfaces/tagsPerFragmentList";

export default function TagsPerFragment({tagsPerFragment, setTagsPerFragment}: tagsPerFragment ): ReactElement{

    return (
        <div className="tags2">     
            {tagsPerFragment.map((fragment) => (
                <div className="fragment">
                    <h2 className="fragment-title">{fragment.title}</h2>
                    <div className="tags-wrapper2">
                    {fragment.tags.map((tag, index) => <span key={index} className="tag">{tag}</span>)}
                    </div>
                </div>
            ))}
        </div>
    )
}