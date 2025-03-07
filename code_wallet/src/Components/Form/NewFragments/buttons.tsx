import { useNavigate } from "react-router-dom";
import { ITag } from "../../../interfaces/tag";

export default function Buttons({id, title, code, tags}: {id?: string, title: string, code: string, tags: ITag[]}){

    const navigate : Function = useNavigate()

    async function handleClickDelete(id: string){
        await window.ipcRenderer.invoke("deleteFragment", id)
        navigate("/")
        // useNavigation()
    }
    
    async function handleClickSave(title: string, code: string, tags: ITag[], id?: string){
        const tagIds = tags.map(tI => tI.id)
        id ? await window.ipcRenderer.invoke("setFragment", {id: id, title: title, code: code, tagIds: tagIds}) : await window.ipcRenderer.invoke("addFragment", {title: title, code: code, tagIds: tagIds})
        // Navigate
        navigate("/")
    }

    return(
        <div className="buttons">
            <button id="delete" onClick={() => id && handleClickDelete(id)}>Delete</button>
            <button id="save" onClick={() => id ? handleClickSave(title, code, tags, id) : handleClickSave(title, code, tags)}>Save</button>
        </div>
    )
}