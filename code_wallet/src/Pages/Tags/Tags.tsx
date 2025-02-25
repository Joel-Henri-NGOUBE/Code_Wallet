import { useEffect, useState } from "react";
import Header from "../../Components/Header/Header"
// import EditTag from "../../Components/Modals/EditTag";
import "./tags.css"
// import NewTag from "../../Components/Modals/NewTag";
// import AllTags from "../../Components/Sliders/Tags/Parts/allTags";
// import fragments from "../../Components/Sliders/Tags/Parts/tagPerFragments";
import SwitchDisplay from "../../Components/SwitchDisplay/Tags/switchDisplay";
import Title from "../../Components/Titles/Tags";
import Slider from "../../Components/Sliders/Tags/Slider/slider";
import Modal from "../../Components/Modals/Tags/Container/modal";
import { ModalsVisibility } from "../../types/modalsVisibility";
import { IFragment } from "../../interfaces/fragment";

export default function Tags(){

//    const tagsSample = [{id: 1, name: "Tagadadadadadadadadadadadadadadadadadadadadadadadaadadadadadadadadadaadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadad"}, {id: 1, name: "Tag"}, {id: 1, name: "Tag"}, {id: 1, name: "Tag"}, {id: 1, name: "Tag"}, {id: 1, name: "Tag"}, {id: 1, name: "Tag"}, {id: 1, name: "Tag"}, {id: 1, name: "Tag"}, {id: 1, name: "Tag"}, {id: 1, name: "Tag"}, {id: 1, name: "Tag"}, {id: 1, name: "Tag"}, {id: 1, name: "Tag"}]
//    const fragmentsSample = [
//        {id: "1", title: "Title", tags: [{id: 1, name: "Tagadadadadadadadadadadadadadadadadadadadadadadadaadadadadadadadadadaadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadad"}, {id: 1, name: "Tag"}, {id: 1, name: "Tag"}, {id: 1, name: "Tag"}, {id: 1, name: "Tag"}, {id: 1, name: "Tag"}, {id: 1, name: "Tag"}, {id: 1, name: "Tag"}, {id: 1, name: "Tag"}, {id: 1, name: "Tag"}, {id: 1, name: "Tag"}, {id: 1, name: "Tag"}, {id: 1, name: "Tag"}, {id: 1, name: "Tag"}, {id: 1, name: "Tag"}]},
//        {id: "2", title: "Title", tags: [{id: 1, name: "Tag"}, {id: 1, name: "Tag"}, {id: 1, name: "Tag"}]},
//        {id: "3", title: "Title", tags: [{id: 1, name: "Tag"}, {id: 1, name: "Tag"}, {id: 1, name: "Tag"}]}
//     ]
    
    const [tagValue, setTagValue] = useState<string>("")

    // const [currentTagIndex, setCurrentTagIndex] = useState< number | null >(null)
    
    // Tous les tags ou allTags
    const [tags, setTags] = useState<{id: number, name: string}[]>([])
    
    // Variable Fragments
    const [fragments, setFragments] = useState<IFragment[]>([])

    const [modalsVisibility, setModalsVisibility] = useState<ModalsVisibility>({edit: false, new: false})

    // const [clickManager, setClickManager] = useState<[]>()
   
    useEffect(() => {
        async function getFragments() {
            const a = await window.ipcRenderer.invoke("getFragments")
            console.log(a)
            setFragments(a)
        }
        getFragments()
    }, [])

    useEffect(() => {
        async function getTags() {
            const a = await window.ipcRenderer.invoke("getTags")
            console.log(a)
            setTags(a)
        }
        getTags()
    }, [])
    
    return (
        <div className="tags-page">
            <Header />
            
            <Title
                tagValue={tagValue}
                setTagValue={setTagValue}
                modalsVisibility={modalsVisibility}
                setModalsVisibility={setModalsVisibility} 
            />

            <SwitchDisplay />

            <Slider 
                tags={tags}
                fragments={fragments}
                tagValue={tagValue}
                setTagValue={setTagValue}
                // currentTagIndex={currentTagIndex}
                // setCurrentTagIndex={setCurrentTagIndex}
                setTags={setTags}
                setFragments={setFragments}
                modalsVisibility={modalsVisibility}
                setModalsVisibility={setModalsVisibility}
            />

            <Modal
                tagValue={tagValue}
                setTagValue={setTagValue}
                // currentTagIndex={currentTagIndex}
                // setCurrentTagIndex={setCurrentTagIndex}
                modalsVisibility={modalsVisibility}
                setModalsVisibility={setModalsVisibility}
            />
        </div>
    )
}