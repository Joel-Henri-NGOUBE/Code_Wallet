import { ReactElement } from "react";
import { tagEditor } from "../../../interfaces/tagEditor";
import { ITag } from "../../../interfaces/tag";

export default function NewTag({tagValue, setTagValue, setTags, modalsVisibility, setModalsVisibility}: tagEditor ): ReactElement{

    async function handleClick(tagValue: ITag){
        const newTag = await window.ipcRenderer.invoke("addTag", tagValue.name)
        setTags(t => [...t, newTag])
        setModalsVisibility(mV => ({edit: mV.edit, new: false}))
    }

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
                    value={tagValue.name} 
                    onChange={(e) => setTagValue({id: tagValue.id, name: e.target.value})}/>
            </div>
            <button onClick={() => handleClick(tagValue)}>Save</button>
        </div>
    )
}