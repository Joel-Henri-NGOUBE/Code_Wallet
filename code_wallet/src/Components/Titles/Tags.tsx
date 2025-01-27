import { IModalsVisibility } from "../../interfaces/modalsVisibility";

export default function Title({tagValue, setTagValue, modalsVisibility, setModalsVisibility}: IModalsVisibility){

    function handleClickNew(editVisibility: boolean){
        setModalsVisibility({new: true, edit: editVisibility})
        setTagValue("")
    }

    return (
    <div className="title">
        <h1>Tags</h1>
        <button onClick={() => handleClickNew(modalsVisibility.edit)}>New</button>
    </div>
    )
}