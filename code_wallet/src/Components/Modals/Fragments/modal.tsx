import { FragmentModal } from "../../../interfaces/fragmentModal";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';


export default function Modal({ viewClick, setViewClick, code}: FragmentModal){
    return(
        <div className="modal-container" style={viewClick ? {display: "flex"} : {display: "none"}}>
                <div className="modal-code">
                    <h2>The actual title</h2>
                    <p className="close" onClick={() => setViewClick(false)}>X</p>
                    <div className="code">
                        <div id="code">
                            <SyntaxHighlighter style={docco} showLineNumbers={true}>
                                {code}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                    <button id="copy" onClick={() => navigator.clipboard.writeText(code)}>Copy</button>
                </div>
            </div>
    )
}