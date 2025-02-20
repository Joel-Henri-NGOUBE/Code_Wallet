import Header from "../../Components/Header/Header"
import "./fragments.css"
import FragmentsComponent from "../../Components/Fragments/fragments"

// import RowsWhite from "../../assets/rows-white.svg"
// import Squares from "../../assets/squares.svg"
import Modal from "../../Components/Modals/Fragments/modal"
import Actions from "../../Components/Actions/actions"
import { useEffect, useState } from "react"
// import { ipcRenderer } from "electron"
// import CodeImage from "../../assets/remove.svg"

export default function Fragments(){
    const [click, setClick] = useState<boolean[]>([false, true])

    const [viewClick, setViewClick] = useState<boolean>(false)
    const [code, setCode] = useState<string>("")

    const [modalValues, setModalValues] = useState<IFragment>({
        id: "",
        title: "",
        code: "",
        tags: []
    })
    
    
    async function handleClickRows(click: boolean[]){
        if(!click[0]){
            setClick([!click[0], !click[1]])
        }
        // console.log(await window.ipcRenderer.goodMorning("ipcRenderer", (goodMorning) => goodMorning()))
        const a = await window.ipcRenderer.invoke("bonjour", "bonjour")
        // const b = await window.electronAPI
        // const b = window.ipcRenderer.invoke

        console.log(a)
    }
    function handleClickSquares(click: boolean[]){
        if(!click[1]){
            setClick([!click[0], !click[1]])
        }
    }

    const codeSample = `pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp
                        ppppppppppppppppp
                        ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp
                        pppppppppppppppppppppppp
                        pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp
                        pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp
                        pppppppppppppppp
                        ppppppppppppppppppppppppppp
                        ppppppp
                        pppppppppp
                        pppp
                        pppppppppppp
                        pppppppppppppppppppppppp
                        pppppppppppppppppppppppppppppppp
                        pppppppppppp`

    const [fragments, setFragments] = useState<IFragment[]>([])

    useEffect(() => {
        async function getFragments() {
            const a = await window.ipcRenderer.invoke("getFragments")
            setFragments(a)
        }
        getFragments()
    }, [])

    return (
    <>
        <div className="fragments-page">
            <Header />
            
            <Actions click={click} handleClickRows={handleClickRows} handleClickSquares={handleClickSquares}/>

            <FragmentsComponent
                fragments={fragments}
                setFragments={setFragments}
                click={click}
                code={code}
                setCode={setCode}
                setModalValues={setModalValues}
                setViewClick={setViewClick}
            />
      
            <Modal 
                code={code}
                setCode={setCode}
                codeSample={codeSample}
                viewClick={viewClick}
                setViewClick={setViewClick}
            />
        </div>
    </>
    )
}