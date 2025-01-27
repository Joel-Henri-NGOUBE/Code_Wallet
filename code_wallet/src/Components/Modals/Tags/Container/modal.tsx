import { tagEditor } from "../../../../interfaces/tagEditor";
import EditTag from "../EditTag";
import NewTag from "../NewTag";

export default function Modal({tagValue, setTagValue, modalsVisibility, setModalsVisibility}: tagEditor){
    return(
        <div className="modal-container" style={modalsVisibility.edit || modalsVisibility.new ? {display: "flex"} : {display: "none"}}>
            <NewTag 
                // currentTagIndex={currentTagIndex}
                // setCurrentTagIndex={setCurrentTagIndex}
                tagValue={tagValue}
                setTagValue={setTagValue}
                modalsVisibility={modalsVisibility}
                setModalsVisibility={setModalsVisibility}
            />
            <EditTag
                tagValue={tagValue}
                setTagValue={setTagValue}
                // currentTagIndex={currentTagIndex}
                // setCurrentTagIndex={setCurrentTagIndex}
                modalsVisibility={modalsVisibility}
                setModalsVisibility={setModalsVisibility}
            />
        </div>
    )
}