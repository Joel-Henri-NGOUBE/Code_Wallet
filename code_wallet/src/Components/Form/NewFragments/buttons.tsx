import { ITag } from "../../../interfaces/tag";

export default function Buttons({title, code, tags}: {title: string, code: string, tags: ITag[]}){

    function handleClickDelete(title: string){
        // s
    }

    return(
        <div className="buttons">
            <button id="delete" onClick={() => handleClickDelete(title)}>Delete</button>
            <button id="save" onClick={() => handleClickDelete(title)}>Save</button>
        </div>
    )
}