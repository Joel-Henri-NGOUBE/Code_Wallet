import { ReactElement } from "react";
import { tagEditor } from "../../../interfaces/tagEditor";
import { ITag } from "../../../interfaces/tag";

export default function EditTag({tagValue, setTagValue, setTags, modalsVisibility, setModalsVisibility}: tagEditor ): ReactElement{

    async function handleClickSave(tagValue: ITag){
        await window.ipcRenderer.invoke("setTag", tagValue)
        setTags((tags) => tags.map((t) => t.id === tagValue.id ? tagValue : t))

    }

    async function handleClickDelete(tagValue: string){
        await window.ipcRenderer.invoke("deleteTag", tagValue)
        setTags((tags) => tags.filter((t) => t.id !== tagValue))
    }

    return (
        <div className="modal-edit" style={modalsVisibility.edit ? {display: "flex"} : {display: "none"}}>
            <h2>Edit tag</h2>
            <p className="close" onClick={() => setModalsVisibility(mV => ({edit: false, new: mV.new}))}>X</p>
            <div className="form">
                <label htmlFor="tag-name2">TagName</label>
                <input type="text" name="tag-name2" id="tag-name2" placeholder="TagName..." value={tagValue.name} onChange={(e) => setTagValue({id: tagValue.id, name: e.target.value})}/>
            </div>
            <div className="buttons">
                <button id="delete" onClick={() => handleClickDelete(tagValue.id)}>Delete</button>
                <button id="save" onClick={() => handleClickSave(tagValue)}>Save</button>
            </div>
        </div>
    )
}