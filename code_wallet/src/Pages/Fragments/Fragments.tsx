import Header from "../../Components/Header/Header"
import "./fragments.css"
import FragmentsComponent from "../../Components/Fragments/fragments"

import Actions from "../../Components/Actions/actions"
import { useEffect, useState } from "react"
import { IFragment } from "../../interfaces/fragment"
import { ITag } from "../../interfaces/tag"
import Modal from "../../Components/Modals/Fragments/modal"
export default function Fragments(){
    const [click, setClick] = useState<boolean[]>([false, true])

    const [viewClick, setViewClick] = useState<boolean>(false)
    const [code, setCode] = useState<string>("")

    
    async function handleClickRows(click: boolean[]){
        if(!click[0]){
            setClick([!click[0], !click[1]])
        }

    }
    function handleClickSquares(click: boolean[]){
        if(!click[1]){
            setClick([!click[0], !click[1]])
        }
    }

    const [fragments, setFragments] = useState<IFragment[]>([])

    const [tags, setTags] = useState<ITag[]>([])

    useEffect(() => {
        async function getFragments() {
            const a: IFragment[] = await window.ipcRenderer.invoke("getFragments")
            console.log(a)
            setFragments(a)
        }
        getFragments()
    }, [])

    useEffect(() => {
        async function getTags() {
            const a: ITag[] = await window.ipcRenderer.invoke("getTags")
            console.log(a)
            setTags(a)
        }
        getTags()
        }, [])

    return (
    <>
        <div className="fragments-page">
            <Header />
            
            <Actions click={click} handleClickRows={handleClickRows} handleClickSquares={handleClickSquares}/>

            <FragmentsComponent
                tags={tags}
                fragments={fragments}
                setFragments={setFragments}
                click={click}
                setCode={setCode}
                setViewClick={setViewClick}
            />
      
            <Modal 
                code={code}
                viewClick={viewClick}
                setViewClick={setViewClick}
            />
        </div>
    </>
    )
}