import { ReactElement } from "react";

export default function SwitchDisplay(): ReactElement{

    function slide(){
        // console.log("Hey")
        if(!(document.querySelector(".slider-wrapper")as HTMLElement).classList.contains("slide")){
            (document.querySelector(".slider-wrapper") as HTMLElement).classList.add("slide");

            (document.querySelector("#per-fragment") as HTMLElement).classList.add("per-fragment-increase");
            (document.querySelector("#all-tags") as HTMLElement).classList.add("all-tags-decrease")
            // console.log("Slide Back removed")
            if((document.querySelector(".slider-wrapper") as HTMLElement).classList.contains("slide-back")){
                (document.querySelector(".slider-wrapper") as HTMLElement).classList.remove("slide-back");

                (document.querySelector("#per-fragment") as HTMLElement).classList.remove("per-fragment-decrease");
                (document.querySelector("#all-tags") as HTMLElement).classList.remove("all-tags-increase")
            }
            console.log("Slide added")
        }
    }

    function slideBack(){
        // console.log("Hey")
        if(!(document.querySelector(".slider-wrapper") as HTMLElement).classList.contains("slide-back")){
            (document.querySelector(".slider-wrapper") as HTMLElement).classList.add("slide-back");

            (document.querySelector("#per-fragment") as HTMLElement).classList.add("per-fragment-decrease");
            (document.querySelector("#all-tags") as HTMLElement).classList.add("all-tags-increase")

            if((document.querySelector(".slider-wrapper") as HTMLElement).classList.contains("slide")){
                (document.querySelector(".slider-wrapper") as HTMLElement).classList.remove("slide");

                (document.querySelector("#per-fragment") as HTMLElement).classList.remove("per-fragment-increase");
            (document.querySelector("#all-tags") as HTMLElement).classList.remove("all-tags-decrease")
            }
            console.log("Slide Back added")
        }
        // document.querySelector(".slider-wrapper")as HTMLElement).classList.add("slide-back")
    }

    return (
        <div className="switch-display">
            <span id="all-tags" onClick={slideBack}>All tags</span>
            <span id="per-fragment" onClick={slide}>Tags per fragment</span>
        </div>
    )
}