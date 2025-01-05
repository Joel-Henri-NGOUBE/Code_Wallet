import Header from "../../Components/Header/Header"
import "./tags.css"

export default function Tags(){

   const tags = ["Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag"]
   const tagsPerFragment = [
                            {title: "Title", tags: ["Tag", "Tag", "Tag"]},
                            {title: "Title", tags: ["Tag", "Tag", "Tag"]},
                            {title: "Title", tags: ["Tag", "Tag", "Tag"]}
                        ]
    
    return (
    <div className="tags-page">
        <Header />
        <div className="title">
            <h1>Tags</h1>
            <button>New</button>
        </div>

        <div className="switch-display">
            <span id="all-tags">All tags</span>
            <span id="per-fragment">Tags per fragment</span>
        </div>

        {/* <div className="tags">
            <div className="tags-wrapper">
            {tags.map((tag, index) => <span key={index} className="tag">{tag}</span>)}
            </div>
        </div> */}

        <div className="tags2">     
            {tagsPerFragment.map((fragment) => (<div className="fragment">
                <h2 className="fragment-title">{fragment.title}</h2>
                <div className="tags-wrapper2">
                {fragment.tags.map((tag, index) => <span key={index} className="tag">{tag}</span>)}
                </div>
            </div>))}
        </div>
    </div>
    )
}