import { ReactElement } from "react";
import { tagEditor } from "../../../interfaces/tagEditor";

export default function EditTag({tagValue, setTagValue}: tagEditor ): ReactElement{

    return (
        <div className="modal-edit" style={{display: "none"}}>
            <h2>Edit tag</h2>
            <p className="close">X</p>
            <div className="form">
                <label htmlFor="tag-name2">TagName</label>
                <input type="text" name="tag-name2" id="tag-name2" placeholder="TagName..." value={tagValue} onChange={(e) => setTagValue(e.target.value)}/>
            </div>
            <div className="buttons">
                <button id="delete">Delete</button>
                <button id="save">Save</button>
            </div>
        </div>
    )
}