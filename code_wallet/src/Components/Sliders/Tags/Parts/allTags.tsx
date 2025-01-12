import { ReactElement } from "react";
// import { tagEditor } from "../../interfaces/tagEditor";
import { tagsList } from "../../../../interfaces/tagsList";

export default function AllTags({tags, setTags}: tagsList ): ReactElement{

    return (
        <div className="tags">
            <div className="tags-wrapper">
            {tags.map((tag, index) => <span key={index} className="tag">{tag}</span>)}
            </div>
        </div>
    )
}