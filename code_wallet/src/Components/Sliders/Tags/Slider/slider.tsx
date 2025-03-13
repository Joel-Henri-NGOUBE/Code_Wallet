import { Tags } from "../../../../interfaces/tags";
import AllTags from "../Parts/allTags";
import TagsPerFragment from "../Parts/tagPerFragments";

export default function Slider({tags, fragments, setTagValue, modalsVisibility, setModalsVisibility}: Tags){
    return(
        <div className="slider">

            <div className="slider-wrapper">

                {tags.length ? <><AllTags
                    tags={tags}
                    setTagValue={setTagValue}
                    modalsVisibility={modalsVisibility}
                    setModalsVisibility={setModalsVisibility}
                />
                

                <TagsPerFragment
                    tags={tags}
                    setTagValue={setTagValue}
                    fragments={fragments}
                    modalsVisibility={modalsVisibility}
                    setModalsVisibility={setModalsVisibility}
                /></>
                : <p style={{margin: "auto"}}>No tag yet</p>}

                
            </div>
            
        </div>
    )
}