import { Link } from "react-router-dom"

export default function Header(){
    return (
    <>
        <h1 className="logo">
            <span id="left">{"{ Code"}</span>
            <span id="right">{" Wallet }"}</span>
        </h1>
        <div className="links">
            <Link to="/">Fragments</Link>
            <Link to="/tags">Tags</Link>
            <Link to="/info">Info</Link>
        </div>
    </>
    )
}