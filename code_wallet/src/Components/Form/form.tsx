import { IForm } from "../../interfaces/form";
import Code from "./NewFragments/code";
import FragmentTitle from "./NewFragments/fragmentTitle";
import TagsLabel from "./NewFragments/tags";

export default function Form({title, setTitle, fragments, setFragments, areOtherTagsVisible, setAreOtherTagsVisible, tags, otherTags, code, setCode}: IForm){
    return(
        <div className="form">
            <FragmentTitle 
                title={title}
                setTitle={setTitle}
            />

            <TagsLabel
                fragments={fragments}
                setFragments={setFragments}
                areOtherTagsVisible={areOtherTagsVisible}
                setAreOtherTagsVisible={setAreOtherTagsVisible}
                tags={tags}
                // fragmentTags={fragmentTags}
                otherTags={otherTags}
            />
            
            <Code 
                code={code}
                setCode={setCode}
            />
        </div>
    )
}