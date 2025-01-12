import { tagEditor } from "../../../../interfaces/tagEditor";
import EditTag from "../EditTag";
import NewTag from "../NewTag";

export default function Modal({tagValue, setTagValue}: tagEditor){
    return(
        <div className="modal-container" style={{display: "none"}}>
            <NewTag 
                tagValue={tagValue}
                setTagValue={setTagValue}
            />
            <EditTag
                tagValue={tagValue}
                setTagValue={setTagValue}
            />
        </div>
    )
}