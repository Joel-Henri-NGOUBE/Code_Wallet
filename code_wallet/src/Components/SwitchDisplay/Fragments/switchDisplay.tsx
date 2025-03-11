import Rows from "../../../assets/rows.svg"
import SquaresWhite from "../../../assets/squares-white.svg"

export default function SwitchDisplay({click, handleClickRows, handleClickSquares}: any){
    
    return(
        <div className="switch-display">
            <span id="rows" onClick={() => handleClickRows(click)}><img src={Rows} alt="rows" /></span>
            <span id="squares" onClick={() => handleClickSquares(click)}><img src={SquaresWhite} alt="squares" /></span>
        </div>
    )
} 