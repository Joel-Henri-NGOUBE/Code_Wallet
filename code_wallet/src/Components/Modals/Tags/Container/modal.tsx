import { tagEditor } from "../../../../interfaces/tagEditor";
import EditTag from "../EditTag";
import NewTag from "../NewTag";

export default function Modal({tagValue, setTagValue, setTags, modalsVisibility, setModalsVisibility, setFragments}: tagEditor){
    return(
        <div className="modal-container" style={modalsVisibility.edit || modalsVisibility.new ? {display: "flex"} : {display: "none"}}>
            <NewTag 
                tagValue={tagValue}
                setTagValue={setTagValue}
                setTags={setTags}
                modalsVisibility={modalsVisibility}
                setModalsVisibility={setModalsVisibility}
                setFragments={setFragments}
            />
            <EditTag
                tagValue={tagValue}
                setTagValue={setTagValue}
                setTags={setTags}
                modalsVisibility={modalsVisibility}
                setModalsVisibility={setModalsVisibility}
                setFragments={setFragments}
            />
        </div>
    )
}