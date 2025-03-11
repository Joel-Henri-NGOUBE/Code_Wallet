import { useParams } from "react-router-dom"

export default function NewRoute(){
    const {id} = useParams()
    return (
        <div>Bonjour {id}</div>
    )
}