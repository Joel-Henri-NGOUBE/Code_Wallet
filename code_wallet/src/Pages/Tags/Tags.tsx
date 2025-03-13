import { useEffect, useState } from "react";
import Header from "../../Components/Header/Header"
import "./tags.css"
import SwitchDisplay from "../../Components/SwitchDisplay/Tags/switchDisplay";
import Title from "../../Components/Titles/Tags";
import Slider from "../../Components/Sliders/Tags/Slider/slider";
import Modal from "../../Components/Modals/Tags/Container/modal";
import { ModalsVisibility } from "../../types/modalsVisibility";
import { IFragment } from "../../interfaces/fragment";
import { ITag } from "../../interfaces/tag";

export default function Tags(){
    
    const [tagValue, setTagValue] = useState<ITag>({id: "", name: ""})

    
    const [tags, setTags] = useState<ITag[]>([])
    
    const [fragments, setFragments] = useState<IFragment[]>([])

    const [modalsVisibility, setModalsVisibility] = useState<ModalsVisibility>({edit: false, new: false})

   
    useEffect(() => {
        async function getFragments() {
            const a = await window.ipcRenderer.invoke("getFragments")
            setFragments(a)
        }
        getFragments()
    }, [])

    useEffect(() => {
        async function getTags() {
            const a = await window.ipcRenderer.invoke("getTags")
            setTags(a)
        }
        getTags()
    }, [])
    
    return (
        <div className="tags-page">
            <Header />
            
            <Title
                setTagValue={setTagValue}
                modalsVisibility={modalsVisibility}
                setModalsVisibility={setModalsVisibility} 
            />

            <SwitchDisplay />

            <Slider 
                tags={tags}
                fragments={fragments}
                setTagValue={setTagValue}
                modalsVisibility={modalsVisibility}
                setModalsVisibility={setModalsVisibility}
            />

            <Modal
                tagValue={tagValue}
                setTagValue={setTagValue}
                setTags={setTags}
                modalsVisibility={modalsVisibility}
                setModalsVisibility={setModalsVisibility}
                setFragments={setFragments}
            />
        </div>
    )
}