import Rows from "../../assets/rows.svg"
import SquaresWhite from "../../assets/squares-white.svg"

export default function SwitchDisplay(){
    return(
        <div className="switch-display">
            <span id="rows"><img src={Rows} alt="rows" /></span>
            <span id="squares"><img src={SquaresWhite} alt="squares" /></span>
        </div>
    )
} 