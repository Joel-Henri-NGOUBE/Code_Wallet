import { ITag } from "../../../interfaces/tag";

export default function Buttons({id, title, code, tags}: {id?: string, title: string, code: string, tags: ITag[]}){

    async function handleClickDelete(id: string){
        await window.ipcRenderer.invoke("deleteFragment", id)
    }

    async function handleClickSave(title: string, code: string, tags: ITag[], id?: string){
        const tagIds = tags.map(tI => tI.id)
        id ? await window.ipcRenderer.invoke("setFragment", {id: id, title: title, code: code, tagIds: tagIds}) : await window.ipcRenderer.invoke("addFragment", {title: title, code: code, tagIds: tagIds})
    }

    return(
        <div className="buttons">
            <button id="delete" onClick={() => id && handleClickDelete(id)}>Delete</button>
            <button id="save" onClick={() => id ? handleClickSave(title, code, tags, id) : handleClickSave(title, code, tags)}>Save</button>
        </div>
    )
}