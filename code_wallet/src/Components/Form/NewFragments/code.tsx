import { codeEditor } from "../../../interfaces/codeEditor";

export default function Code({code, setCode}: codeEditor){
    return(
        <div className="code">
            <label htmlFor="code"><h2>Code</h2></label>
            <textarea name="code" id="code" placeholder="Write your code here..." value={code} onChange={(e) => setCode(e.target.value)}>
            </textarea>
        </div>
    )
}