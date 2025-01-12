import Remove from "../../../assets/remove.svg"
import Plus from "../../../assets/plus.svg"
export default function TagsLabel({tags}: {tags: string[]}){
    return(
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
    )
}