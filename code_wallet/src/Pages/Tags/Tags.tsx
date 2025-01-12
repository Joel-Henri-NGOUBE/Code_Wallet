import Header from "../../Components/Header/Header"
import "./tags.css"

export default function Tags(){

   const tags = ["Tagadadadadadadadadadadadadadadadadadadadadadadadaadadadadadadadadadaadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadad", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag"]
   const tagsPerFragment = [
                            {title: "Title", tags: ["Tagadadadadadadadadadadadadadadadadadadadadadadadaadadadadadadadadadaadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadad", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag"]},
                            {title: "Title", tags: ["Tag", "Tag", "Tag"]},
                            {title: "Title", tags: ["Tag", "Tag", "Tag"]}
                        ]

    function slide(){
        // console.log("Hey")
        if(!(document.querySelector(".slider-wrapper")as HTMLElement).classList.contains("slide")){
            (document.querySelector(".slider-wrapper") as HTMLElement).classList.add("slide");

            (document.querySelector("#per-fragment") as HTMLElement).classList.add("per-fragment-increase");
            (document.querySelector("#all-tags") as HTMLElement).classList.add("all-tags-decrease")
            // console.log("Slide Back removed")
            if((document.querySelector(".slider-wrapper") as HTMLElement).classList.contains("slide-back")){
                (document.querySelector(".slider-wrapper") as HTMLElement).classList.remove("slide-back");

                (document.querySelector("#per-fragment") as HTMLElement).classList.remove("per-fragment-decrease");
                (document.querySelector("#all-tags") as HTMLElement).classList.remove("all-tags-increase")
            }
            console.log("Slide added")
        }
    }

    function slideBack(){
        // console.log("Hey")
        if(!(document.querySelector(".slider-wrapper") as HTMLElement).classList.contains("slide-back")){
            (document.querySelector(".slider-wrapper") as HTMLElement).classList.add("slide-back");

            (document.querySelector("#per-fragment") as HTMLElement).classList.add("per-fragment-decrease");
            (document.querySelector("#all-tags") as HTMLElement).classList.add("all-tags-increase")

            if((document.querySelector(".slider-wrapper") as HTMLElement).classList.contains("slide")){
                (document.querySelector(".slider-wrapper") as HTMLElement).classList.remove("slide");

                (document.querySelector("#per-fragment") as HTMLElement).classList.remove("per-fragment-increase");
            (document.querySelector("#all-tags") as HTMLElement).classList.remove("all-tags-decrease")
            }
            console.log("Slide Back added")
        }
        // document.querySelector(".slider-wrapper")as HTMLElement).classList.add("slide-back")
    }
    
    return (
    <div className="tags-page">
        <Header />
        <div className="title">
            <h1>Tags</h1>
            <button>New</button>
        </div>

        <div className="switch-display">
            <span id="all-tags" onClick={slideBack}>All tags</span>
            <span id="per-fragment" onClick={slide}>Tags per fragment</span>
        </div>

        <div className="slider">
            <div className="slider-wrapper">

                <div className="tags">
                    <div className="tags-wrapper">
                    {tags.map((tag, index) => <span key={index} className="tag">{tag}</span>)}
                    </div>
                </div>

                <div className="tags2">     
                    {tagsPerFragment.map((fragment) => (<div className="fragment">
                        <h2 className="fragment-title">{fragment.title}</h2>
                        <div className="tags-wrapper2">
                        {fragment.tags.map((tag, index) => <span key={index} className="tag">{tag}</span>)}
                        </div>
                    </div>))}
                </div>
            </div>

        </div>

        <div className="modal-container" style={{display: "none"}}>
            {/* <div className="modal-new" style={{display: "none"}}>
                <h2>New tag</h2>
                <p className="close">X</p>
                <div className="form">
                    <label htmlFor="tag-name">TagName</label>
                    <input type="text" name="tag-name" id="tag-name" placeholder="TagName..." />
                </div>
                <button>Save</button>
            </div> */}
            <div className="modal-edit" style={{display: "none"}}>
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