import { Dispatch, SetStateAction } from "react";
import { FragmentModal } from "../../../interfaces/fragmentModal";

export default function Modal({codeSample, viewClick, setViewClick, code, setCode}: FragmentModal){
    return(
        <div className="modal-container" style={viewClick ? {display: "flex"} : {display: "none"}}>
                <div className="modal-code">
                    <h2>The actual title</h2>
                    <p className="close" onClick={() => setViewClick(false)}>X</p>
                    <div className="code">
                        <p id="code">
                            {code}
                        </p>
                    </div>
                    <button id="copy">Copy</button>
                </div>
            </div>
    )
}