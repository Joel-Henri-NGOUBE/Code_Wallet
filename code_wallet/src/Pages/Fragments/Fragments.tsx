import { Link } from "react-router-dom";

export default function Fragments(){
    return (
    <>
        <p>Bonjour les fragments</p>
        <Link to="/">Fragments</Link>
        <Link to="/tags">Tags</Link>
        <Link to="/info">Info</Link>
    </>
    )
}