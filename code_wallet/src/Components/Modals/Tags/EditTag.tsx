import { ReactElement } from "react";
import { tagEditor } from "../../../interfaces/tagEditor";
import { ITag } from "../../../interfaces/tag";

export default function EditTag({tagValue, setTagValue, setTags, modalsVisibility, setModalsVisibility, setFragments}: tagEditor ): ReactElement{

    async function handleClickSave(tagValue: ITag){
        await window.ipcRenderer.invoke("setTag", tagValue)
        setTags((tags) => tags.map((t) => t.id === tagValue.id ? tagValue : t))
        setModalsVisibility(mV => ({edit: false, new: mV.new}))
    }

    async function handleClickDelete(tagId: string){
        setFragments((fs) => fs.map((f) => 
            f.tagIds.includes(tagId) ? ({...f, tagIds: f.tagIds.filter(tI => tI !== tagId)}) : f
        ))
        await window.ipcRenderer.invoke("deleteTag", tagId)
        // if (removal) console.log(window.location.href)
        setTags((tags) => tags.filter((t) => t.id !== tagId))
        setModalsVisibility(mV => ({edit: false, new: mV.new}))
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