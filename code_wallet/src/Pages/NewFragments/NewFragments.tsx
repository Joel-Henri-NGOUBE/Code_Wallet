import Header from "../../Components/Header/Header"
import "./newfragments.css"
import Remove from "../../assets/remove.svg"
import Plus from "../../assets/plus.svg"

export default function NewFragments(){
   const tags = ["Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag"]

    return (
    <div className="newfragments">
        <Header />
        <div className="title">
            <h1>Fragments</h1>
        </div>
        <div className="form">
            <div className="fragment-title">
                <label htmlFor="title"><h2>Title</h2></label>
                <input type="text" placeholder="Title..." name="title" id="title"/>
            </div>
            <div className="tags-label">
                <span id="tag"><h2>Tags</h2></span>
                <div className="tags">
                    <div className="tags-list">
                    {tags.map((tag, index) => <span key={index} className="tag">{tag}<img src={Remove} alt="remove" /></span>)}
                    </div>
                    <button>+ Add tag</button>
                    <div className="tags-list" style={{display: "none"}}>
                    {tags.map((tag, index) => <span key={index} className="tag">{tag}<img src={Plus} alt="plus" /></span>)}
                    </div>
                </div>
            </div>
            <div className="code">
                <label htmlFor="code"><h2>Code</h2></label>
                <textarea name="code" id="code" placeholder="Write your code here..."></textarea>
            </div>
        </div>
        <div className="buttons">
            <button id="delete">Delete</button>
            <button id="save">Save</button>
        </div>
    </div>
    )
}