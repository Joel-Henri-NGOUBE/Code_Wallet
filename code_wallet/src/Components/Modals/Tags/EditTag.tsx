import { ReactElement } from "react";
import { tagEditor } from "../../../interfaces/tagEditor";

export default function EditTag({tagValue, setTagValue, modalsVisibility, setModalsVisibility}: tagEditor ): ReactElement{

    return (
        <div className="modal-edit" style={modalsVisibility.edit ? {display: "flex"} : {display: "none"}}>
            <h2>Edit tag</h2>
            <p className="close" onClick={() => setModalsVisibility(mV => ({edit: false, new: mV.new}))}>X</p>
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