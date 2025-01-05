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

        <div className="modal-container">
            {/* <div className="modal-new">
                <h2>New tag</h2>
                <p className="close">X</p>
                <div className="form">
                    <label htmlFor="tag-name">TagName</label>
                    <input type="text" name="tag-name" id="tag-name" placeholder="TagName..." />
                </div>
                <button>Save</button>
            </div> */}
            <div className="modal-edit">
            <h2>Edit tag</h2>
                <p className="close">X</p>
                <div className="form">
                    <label htmlFor="tag-name2">TagName</label>
                    <input type="text" name="tag-name2" id="tag-name2" placeholder="TagName..." />
                </div>
                <div className="buttons">
                    <button id="delete">Delete</button>
                    <button id="save">Save</button>
                </div>
            </div>
        </div>
    </div>
    )
}