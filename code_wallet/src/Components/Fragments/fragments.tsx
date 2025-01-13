import Fragment from "./Fragment/fragment";

export default function FragmentsComponent({fragments, click}: {fragments: IFragment[], click: boolean[]}){
    return(
        click[1] ?
        (<div className="fragments">
            {fragments.map((fragment, index) => <Fragment index={index} fragment={fragment} click={click}/>)}
        </div>) :
        (<div className="fragments2">
            {fragments.map((fragment, index) => <Fragment index={index} fragment={fragment} click={click}/>)}
        </div>)
    )
}