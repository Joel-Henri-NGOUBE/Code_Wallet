import Header from "../../Components/Header/Header"
import "./newfragments.css"

import Title from "../../Components/Titles/NewFragments"
// import FragmentTitle from "../../Components/Form/NewFragments/fragmentTitle"
import Code from "../../Components/Form/NewFragments/code"
import { useState } from "react"
// import TagsLabel from "../../Components/Form/NewFragments/tags"
import Buttons from "../../Components/Form/NewFragments/buttons"
import Form from "../../Components/Form/form"
import { useParams } from "react-router-dom"

export default function NewFragments(){
    const {id} = useParams()

   const tags = ["Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag"]
//    const tags2 = ["Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag"]

    const [title, setTitle] = useState<string>("Title")
    const [code, setCode] = useState<string>("")
    return (
    <div className="newfragments">
        <Header />

        <Title />
        {id ? id : "ningùn id"}
        <Form 
            title={title}
            setTitle={setTitle}
            tags={tags}
            code={code}
            setCode={setCode}
        />
        <Buttons />
    </div>
    )
}