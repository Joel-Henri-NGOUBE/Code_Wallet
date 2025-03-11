import { Link, useNavigate } from "react-router-dom"
import "./header.css"

export default function Header(){
    const navigate : Function = useNavigate()
    return (
    <div className="header">
        <h1 className="logo" onClick={() => navigate("/")}>
            <span id="left">{"{ Code"}</span>
            <span id="right">{" Wallet }"}</span>
        </h1>
        <div className="links">
            <Link to="/">Fragments</Link>
            <Link to="/tags">Tags</Link>
            <Link to="/info">Info</Link>
            {/* <Link to="/newroute/1">New Route</Link> */}
        </div>
    </div>
    )
}