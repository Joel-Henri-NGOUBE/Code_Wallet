import { useState } from "react";
import Header from "../../Components/Header/Header"
// import EditTag from "../../Components/Modals/EditTag";
// import "./tags.css"
// import NewTag from "../../Components/Modals/NewTag";
// import AllTags from "../../Components/Sliders/Tags/Parts/allTags";
// import TagsPerFragment from "../../Components/Sliders/Tags/Parts/tagPerFragments";
import SwitchDisplay from "../../Components/SwitchDisplay/Tags/switchDisplay";
import Title from "../../Components/Titles/Tags";
import Slider from "../../Components/Sliders/Tags/Slider/slider";
import Modal from "../../Components/Modals/Container.tsx/modal";

export default function Tags(){

   const tagsSample = ["Tagadadadadadadadadadadadadadadadadadadadadadadadaadadadadadadadadadaadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadad", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag"]
   const tagsPerFragmentSample = [
       {title: "Title", tags: ["Tagadadadadadadadadadadadadadadadadadadadadadadadaadadadadadadadadadaadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadad", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag"]},
       {title: "Title", tags: ["Tag", "Tag", "Tag"]},
       {title: "Title", tags: ["Tag", "Tag", "Tag"]}
    ]
    
    const [tagValue, setTagValue] = useState<string>("")
    
    const [tags, setTags] = useState<string[]>(tagsSample)
    
    const [tagsPerFragment, setTagsPerFragment] = useState<Fragment[]>(tagsPerFragmentSample)


    
    
    return (
        <div className="tags-page">
            <Header />
            
            <Title />

            <SwitchDisplay />

            <Slider 
                tags={tags}
                tagsPerFragment={tagsPerFragment}
                setTags={setTags}
                setTagsPerFragment={setTagsPerFragment}
            />

            <Modal 
                tagValue={tagValue}
                setTagValue={setTagValue}
            />
        </div>
    )
}