import Header from "../../Components/Header/Header"
import "./fragments.css"
import Eye from "../../assets/Eye.svg"
import Remove from "../../assets/remove.svg"
import Rows from "../../assets/rows.svg"
import Sqaures from "../../assets/squares.svg"
// import CodeImage from "../../assets/remove.svg"

export default function Fragments(){
    const fragments = [
        {title: "The actual title", tags: ["Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag"]},
        {title: "The actual title", tags: ["Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag"]},
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
    return (
    <>
        <div className="fragments-page">
            <Header />
            <div className="actions">
                <div className="switch-display">
                <span id="rows"><img src={Rows} alt="" /></span>
                <span id="squares"><img src={Sqaures} alt="" /></span>
                </div>
                <button id="new">New</button>
            </div>
            <div className="fragments">
                {fragments.map((fragment, index) => (<div className="fragment" key={index}>
                    <div className="top-background">
                        <div className="top">
                            <div className="icons">
                                <img src={Eye} alt="eye" />
                                <img src={Remove} alt="remove" width={20}/>
                            </div>
                            <span className="fragment-title">{fragment.title}</span>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="tags">
                        {fragment.tags.map((tag, index) => <span key={index} className="tag">{tag}</span>)}
                        </div>
                    </div>
                </div>))}
            </div>
        </div>
    </>
    )
}