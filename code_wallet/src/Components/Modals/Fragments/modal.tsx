export default function Modal({codeSample}: {codeSample: string}){
    return(
        <div className="modal-container" style={{display: "none"}}>
                <div className="modal-code">
                    <h2>The actual title</h2>
                    <p className="close">X</p>
                    <div className="code">
                        <p id="code">
                            {codeSample}
                        </p>
                    </div>
                    <button id="copy">Copy</button>
                </div>
            </div>
    )
}