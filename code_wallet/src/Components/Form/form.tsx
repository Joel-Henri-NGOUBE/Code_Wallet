import { IForm } from "../../interfaces/form";
import Code from "./NewFragments/code";
import FragmentTitle from "./NewFragments/fragmentTitle";
import TagsLabel from "./NewFragments/tags";

export default function Form({title, setTitle, tags, code, setCode}: IForm){
    return(
        <div className="form">
            <FragmentTitle 
                title={title}
                setTitle={setTitle}
            />

            <TagsLabel
                tags={tags}
            />
            
            <Code 
                code={code}
                setCode={setCode}
            />
        </div>
    )
}