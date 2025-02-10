import Header from "../../Components/Header/Header"
import "./fragments.css"
import FragmentsComponent from "../../Components/Fragments/fragments"

// import RowsWhite from "../../assets/rows-white.svg"
// import Squares from "../../assets/squares.svg"
import Modal from "../../Components/Modals/Fragments/modal"
import Actions from "../../Components/Actions/actions"
import { useState } from "react"
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
    
    
    function handleClickRows(click: boolean[]){
        if(!click[0]){
            setClick([!click[0], !click[1]])
        }
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

    const fragmentsSample = [
        {id: "1",title: "The actual title", code: codeSample, tags: ["Tagadadadadadadadadadadadadadadadadadadadadadadadadadadaadadadadadadadaxdaadadadadadadadadadaddaadad", "Redux", "StateComponents", "ReactRedux", "ReduxToolkits", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag"]},
        {id: "2",title: "The actual title", code: "codeSample", tags: ["Tag", "Tag", "Tag"]},
        {id: "3",title: "The actual title", code: "codeSample1", tags: ["Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag"]},
        {id: "4",title: "The actual title", code: "codeSample2", tags: ["Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag"]},
        {id: "5",title: "The actual title", code: "codeSample3", tags: ["Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag"]},
        {id: "6",title: "The actual title", code: "codeSample4", tags: ["Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag"]},
        {id: "7",title: "The actual title", code: "codeSample5", tags: ["Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag"]},
        {id: "8",title: "The actual title", code: "codeSample6", tags: ["Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag"]},
        {id: "9",title: "The actual title", code: "codeSample7", tags: ["Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag"]},
        {id: "10",title: "The actual title", code: "codeSample8", tags: ["Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag"]},
        {id: "11",title: "The actual title", code: "codeSample9", tags: ["Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag"]},
        {id: "12",title: "The actual title", code: "codeSample10", tags: ["Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag"]}
    ]

    const [fragments, setFragments] = useState<IFragment[]>(fragmentsSample)

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