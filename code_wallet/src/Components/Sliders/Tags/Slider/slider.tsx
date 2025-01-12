import { Tags } from "../../../../interfaces/tags";
import AllTags from "../Parts/allTags";
import TagsPerFragment from "../Parts/tagPerFragments";

export default function Slider({tags, tagsPerFragment, setTags, setTagsPerFragment}: Tags){
    return(
        <div className="slider">
            <div className="slider-wrapper">

                <AllTags
                    tags={tags}
                    setTags={setTags}
                />

                <TagsPerFragment
                    tagsPerFragment={tagsPerFragment}
                    setTagsPerFragment={setTagsPerFragment}
                />
                
            </div>
        </div>
    )
}