import SwitchDisplay from "../SwitchDisplay/Fragments/switchDisplay"

export default function Actions({click, handleClickRows, handleClickSquares}: any){
    return(
        <div className="actions">
            <SwitchDisplay click={click} handleClickRows={handleClickRows} handleClickSquares={handleClickSquares}/>
            <button id="new">New</button>
        </div>
    )
} 