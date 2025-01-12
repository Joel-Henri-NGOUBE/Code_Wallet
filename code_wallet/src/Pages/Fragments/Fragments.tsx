import Header from "../../Components/Header/Header"
import "./fragments.css"
import FragmentsComponent from "../../Components/Fragments/fragments"

// import RowsWhite from "../../assets/rows-white.svg"
// import Squares from "../../assets/squares.svg"
import Modal from "../../Components/Modals/Fragments/modal"
import Actions from "../../Components/Actions/actions"
// import CodeImage from "../../assets/remove.svg"

export default function Fragments(){
    const fragments = [
        {title: "The actual title", tags: ["Tagadadadadadadadadadadadadadadadadadadadadadadadadadadaadadadadadadadaxdaadadadadadadadadadaddaadad", "Redux", "StateComponents", "ReactRedux", "ReduxToolkits", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag"]},
        {title: "The actual title", tags: ["Tag", "Tag", "Tag"]},
        {title: "The actual title", tags: ["Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag"]},
        {title: "The actual title", tags: ["Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag"]},
        {title: "The actual title", tags: ["Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag"]},
        {title: "The actual title", tags: ["Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag"]},
        {title: "The actual title", tags: ["Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag"]},
        {title: "The actual title", tags: ["Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag"]},
        {title: "The actual title", tags: ["Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag"]},
        {title: "The actual title", tags: ["Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag"]},
        {title: "The actual title", tags: ["Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag"]},
        {title: "The actual title", tags: ["Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag"]}
    ]

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
    return (
    <>
        <div className="fragments-page">
            <Header />
            
            <Actions />

            <FragmentsComponent
                fragments={fragments}
            />
      
            <Modal 
                codeSample={codeSample}
            />
        </div>
    </>
    )
}