import Header from "../../Components/Header/Header"
import "./newfragments.css"

import Title from "../../Components/Titles/NewFragments"
import { useEffect, useState } from "react"
import Buttons from "../../Components/Form/NewFragments/buttons"
import Form from "../../Components/Form/form"
import { useParams } from "react-router-dom"
import { IFragment } from "../../interfaces/fragment"
import { ITag } from "../../interfaces/tag"

export default function NewFragments(){
    const {id} = useParams()

    const [fragments, setFragments] = useState<IFragment[]>([])

    const [areOtherTagsVisible, setAreOtherTagsVisible] = useState<boolean>(false)

    function getCurrentTag(tagsList: ITag[], fragmentTagsList: string[]){
        return tagsList.filter((tag) => !(fragmentTagsList.includes(tag.id)))
    }


    const [title, setTitle] = useState<string>("")
    const [tags, setTags] = useState<ITag[]>([])


    const [code, setCode] = useState<string>("")
    const [fragmentTags, setFragmentTags] = useState<ITag[]>([])

    useEffect(() => {
        async function getFragments() {
            const a: IFragment[] = await window.ipcRenderer.invoke("getFragments")
            setFragments(a)
            id && setCode(a.filter((f) => f.id === id)[0].code)
            id && setTitle(a.filter((f) => f.id === id)[0].title)
        }
        getFragments()
    }, [])

    useEffect(() => {
        async function getTags() {
            const a = await window.ipcRenderer.invoke("getTags")
            setTags(a)
        }
        getTags()
    }, [])

    useEffect(() => {
        (fragments.length && id) && setFragmentTags(fragments.filter((f) => f.id === id)[0].tagIds.map((tI) => tags.filter((t) => t.id === tI)[0]))
    }, [fragments])

    return (
    <div className="newfragments">
        <Header />

        <Title />
        <Form 
            title={title}
            setTitle={setTitle}
            tags={fragmentTags}
            otherTags={getCurrentTag(tags, fragmentTags.map(fT => fT.id))}
            fragments={fragments}
            setFragments={setFragments}
            areOtherTagsVisible={areOtherTagsVisible}
            setAreOtherTagsVisible={setAreOtherTagsVisible}
            code={code}
            setCode={setCode}
            setFragmentTags={setFragmentTags}
            
        />
        {id ? <Buttons 
            id={id}
            title={title}
            code={code}
            tags={fragmentTags}
        /> : <Buttons
            title={title}
            code={code}
            tags={fragmentTags}
        />}
    </div>
    )
}