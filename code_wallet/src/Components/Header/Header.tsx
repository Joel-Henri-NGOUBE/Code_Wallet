import { Link } from "react-router-dom"
import "./header.css"

export default function Header(){
    return (
    <div className="header">
        <h1 className="logo">
            <span id="left">{"{ Code"}</span>
            <span id="right">{" Wallet }"}</span>
        </h1>
        <div className="links">
            <Link to="/">Fragments</Link>
            <Link to="/tags">Tags</Link>
            <Link to="/info">Info</Link>
        </div>
    </div>
    )
}