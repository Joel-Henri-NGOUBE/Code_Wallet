import { Tags } from "../../../../interfaces/tags";
import AllTags from "../Parts/allTags";
import TagsPerFragment from "../Parts/tagPerFragments";

export default function Slider({tags, tagsPerFragment, tagValue, setTagValue, setTags, setTagsPerFragment, modalsVisibility, setModalsVisibility}: Tags){
    return(
        <div className="slider">
            <div className="slider-wrapper">

                <AllTags
                    tags={tags}
                    setTags={setTags}
                    tagValue={tagValue}
                    setTagValue={setTagValue}
                    // currentTagIndex={currentTagIndex} // Inutile
                    // setCurrentTagIndex={setCurrentTagIndex} // Inutile
                    modalsVisibility={modalsVisibility}
                    setModalsVisibility={setModalsVisibility}
                />

                <TagsPerFragment
                    tagValue={tagValue}
                    setTagValue={setTagValue}
                    tagsPerFragment={tagsPerFragment}
                    setTagsPerFragment={setTagsPerFragment}
                    modalsVisibility={modalsVisibility}
                    setModalsVisibility={setModalsVisibility}
                />
                
            </div>
        </div>
    )
}