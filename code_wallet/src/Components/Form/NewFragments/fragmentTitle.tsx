import { titleEditor } from "../../../interfaces/titleEditor";

export default function FragmentTitle({title, setTitle}: titleEditor){
    return(
        <div className="fragment-title">
            <label htmlFor="title"><h2>Title</h2></label>
            <input type="text" placeholder="Title..." name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
        </div>
    )
}