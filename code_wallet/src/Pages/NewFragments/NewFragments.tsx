import Header from "../../Components/Header/Header"
import "./newfragments.css"

import Title from "../../Components/Titles/NewFragments"
// import FragmentTitle from "../../Components/Form/NewFragments/fragmentTitle"
// import Code from "../../Components/Form/NewFragments/code"
import { useEffect, useState } from "react"
// import TagsLabel from "../../Components/Form/NewFragments/tags"
import Buttons from "../../Components/Form/NewFragments/buttons"
import Form from "../../Components/Form/form"
import { useParams } from "react-router-dom"
import { IFragment } from "../../interfaces/fragment"
import { ITag } from "../../interfaces/tag"

export default function NewFragments(){
    const {id} = useParams()
    
    // const fragmentsSample = [
    //     // {id: "1",title: "The actual title", code: "codeSample", tags: []}, 
    //     {id: "1",title: "The actual title", code: "codeSample", tags: [{id: 15, name: "Tagadadadadadadadadadadadadadadadadadadadadadadadadadadaadadadadadadadaxdaadadadadadadadadadaddaadad"}, {id: 16, name: "Redux"}, {id: 17, name: "StateComponents"}, {id: 18, name: "ReactRedux"}, {id: 19, name: "ReduxToolkits"}, {id: 4, name: "Tag4"}, {id: 8, name: "Tag8"}]}, 
    //     {id: "2",title: "The actual title", code: "codeSample", tags: [{id: 4, name: "Tag4"}, {id: 9, name: "Tag9"}, {id: 10, name: "Tag10"}]},
    //     {id: "3",title: "The actual title", code: "codeSample1", tags: [{id: 2, name: "Tag2"}, {id: 5, name: "Tag5"}, {id: 8, name: "Tag8"}, {id: 9, name: "Tag9"}]},
    //     {id: "4",title: "The actual title", code: "codeSample2", tags: [{id: 3, name: "Tag3"}, {id: 7, name: "Tag7"}, {id: 9, name: "Tag9"}, {id: 1, name: "Tag1"}]},
    //     {id: "5",title: "The actual title", code: "codeSample3", tags: [{id: 4, name: "Tag4"}, {id: 7, name: "Tag7"}, {id: 5, name: "Tag5"}, {id: 7, name: "Tag7"}]},
    //     {id: "6",title: "The actual title", code: "codeSample4", tags: [{id: 1, name: "Tag1"}, {id: 12, name: "Tag12"}, {id: 11, name: "Tag11"}]},
    //     {id: "7",title: "The actual title", code: "codeSample5", tags: [{id: 5, name: "Tag5"}, {id: 3, name: "Tag3"}, {id: 2, name: "Tag2"}, {id: 12, name: "Tag12"}]},
    //     {id: "8",title: "The actual title", code: "codeSample6", tags: [{id: 11, name: "Tag11"}, {id: 2, name: "Tag2"}, {id: 8, name: "Tag8"}, {id: 9, name: "Tag9"}]},
    //     {id: "9",title: "The actual title", code: "codeSample7", tags: [{id: 1, name: "Tag1"}, {id: 2, name: "Tag2"}, {id: 3, name: "Tag3"}, {id: 4, name: "Tag4"}]},
    //     {id: "10",title: "The actual title", code: "codeSample8", tags: [{id: 7, name: "Tag7"}, {id: 6, name: "Tag6"}, {id: 5, name: "Tag5"}, {id: 10, name: "Tag10"}]},
    //     {id: "11",title: "The actual title", code: "codeSample9", tags: [{id: 10, name: "Tag10"}, {id: 7, name: "Tag7"}, {id: 9, name: "Tag9"}, {id: 11, name: "Tag11"}]},
    //     {id: "12",title: "The actual title", code: "codeSample10", tags: [{id: 2, name: "Tag2"}, {id: 7, name: "Tag7"}, {id: 9, name: "Tag9"}, {id: 12, name: "Tag12"}]}
    // ]

    // const [fragment, setFragment] = useState(fragmentsSample[parseInt(id)])
    
    // id && console.log(fragmentsSample[parseInt(id)].tags)

    // const [fragments, setFragments] = useState<IFragment[]>([{
    //     id: "",
    //     title: "",
    //     code: "",
    //     tags: [{id: 0, name: ""}]
    // }])

    const [fragments, setFragments] = useState<IFragment[]>([])

    const [areOtherTagsVisible, setAreOtherTagsVisible] = useState<boolean>(false)

    // const ids = tagsToFilter.reduce((acc: string[], val) => {acc.push(val.id); return acc}, [])
    function getCurrentTag(tagsList: ITag[], fragmentTagsList: string[]){
        return tagsList.filter((tag) => !(fragmentTagsList.includes(tag.id)))
    }

//    const tags2 = ["Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag"]

    const [title, setTitle] = useState<string>("")
    const [tags, setTags] = useState<ITag[]>([])
    // A utiliser
    // const [tagIds, setTagIds] = useState<string[]>([])


    const [code, setCode] = useState<string>("")
    const [fragmentTags, setFragmentTags] = useState<ITag[]>([])

    useEffect(() => {
        async function getFragments() {
            const a: IFragment[] = await window.ipcRenderer.invoke("getFragments")
            // console.log(a)
            setFragments(a)
            id && setCode(a.filter((f) => f.id === id)[0].code)
            // console.log(a.filter((f) => f.id === id)[0].code)
            id && setTitle(a.filter((f) => f.id === id)[0].title)
            // console.log(a.filter((f) => f.id === id)[0].title)
        }
        getFragments()
    }, [])

    // useEffect(() => {  
    //         id && setCode(fragments.filter((f) => f.id === id)[0].code)
    //         console.log(fragments.filter((f) => f.id === id)[0].code)
    //         id && setTitle(fragments.filter((f) => f.id === id)[0].title)
    //         console.log(fragments.filter((f) => f.id === id)[0].title)
    // }, [])

    useEffect(() => {
        async function getTags() {
            const a = await window.ipcRenderer.invoke("getTags")
            // console.log(a)
            setTags(a)
        }
        getTags()
    }, [])

    useEffect(() => {
        // console.log(id)
        // console.log(fragments.filter((f) => f.id === id)[0])
        (fragments.length && id) && setFragmentTags(fragments.filter((f) => f.id === id)[0].tagIds.map((tI) => tags.filter((t) => t.id === tI)[0]))
    }, [fragments])

    return (
    <div className="newfragments">
        <Header />

        <Title />
        {/* {id ? `${fragments.filter((f) => f.id === id)[0].code}` : "ningùn id"} */}
        <Form 
            title={title}
            setTitle={setTitle}
            // tags={tags}
            // Un useEffect dépendant de Fragments pour modifier les tags
            tags={fragmentTags}
            // otherTags={tags}
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