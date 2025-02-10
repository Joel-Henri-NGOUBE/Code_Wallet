import { ReactElement } from "react";
import { tagEditor } from "../../../interfaces/tagEditor";

export default function NewTag({tagValue, setTagValue, modalsVisibility, setModalsVisibility}: tagEditor ): ReactElement{

    return (
        <div className="modal-new" style={modalsVisibility.new ? {display: "flex"} : {display: "none"}}>
            <h2>New tag</h2>
            <p className="close" onClick={() => setModalsVisibility(mV => ({edit: mV.edit, new: false}))}>X</p>
            <div className="form">
                <label htmlFor="tag-name">TagName</label>
                <input 
                    type="text" 
                    name="tag-name" 
                    id="tag-name" 
                    placeholder="TagName..."  
                    value={tagValue} 
                    onChange={(e) => setTagValue(e.target.value)}/>
            </div>
            <button>Save</button>
        </div>
    )
}