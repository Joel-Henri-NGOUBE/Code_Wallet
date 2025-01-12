import Fragment from "./Fragment/fragment";

export default function FragmentsComponent({fragments}: {fragments: IFragment[]}){
    return(
        <div className="fragments">
            {fragments.map((fragment, index) => <Fragment index={index} fragment={fragment} />)}
        </div>
    )
}