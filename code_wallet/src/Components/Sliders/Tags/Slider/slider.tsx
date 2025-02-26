import { Tags } from "../../../../interfaces/tags";
import AllTags from "../Parts/allTags";
import TagsPerFragment from "../Parts/tagPerFragments";

export default function Slider({tags, fragments, tagValue, setTagValue, setTags, setFragments, modalsVisibility, setModalsVisibility}: Tags){
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
                    tags={tags}
                    tagValue={tagValue}
                    setTagValue={setTagValue}
                    fragments={fragments}
                    setFragments={setFragments}
                    modalsVisibility={modalsVisibility}
                    setModalsVisibility={setModalsVisibility}
                />
                
            </div>
        </div>
    )
}