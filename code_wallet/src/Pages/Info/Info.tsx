import Header from "../../Components/Header/Header"
import "./info.css"
export default function Info(){
    return (
    <>
        <Header />
        <div className="info">
            <div>
                <h3>Presentation of functionnalities</h3>
                <p>The main aim of the application is helping develo to find the several number of pieces of code which the would need in the future. The applications' are the following:</p>
                <ol>
                    <li><span>Allow the user to add, modifiy and delete tags to associate afterwards to fragments of code</span></li>
                    <li><span>Allow the user to create, modify and delete code fragments and make associations between them and one or more tags</span></li>
                    <li><span>Make the user able to quickly copy some piece of code by adding it to the clipboard</span></li>
                    <li><span>Choose their preferred display mode for tags and fragments</span></li>
                    <li><span>Keep the fragments of code locally in order to get access to it offline</span></li>
                </ol>
            </div>
            <div>
                <h3>Information on the developer</h3>
                <p><strong>Joël NGOUBE</strong> was the only developer to work on this project. He needed much organisation and discipline to make this project grow up each day since the beginning knowing that it started 3 months ago (obviously with some cuts).
                He was able to take advantage of <strong>the official documentations of all tools and libraries</strong> used in the project, <strong>of his Electron teacher </strong> who knew how to answer his questions, of <strong>Google</strong> and <strong> Stack Overflow </strong> for all persisting errors he couldn't easily handle.
                However, it was thrilling to work that long ont this project, to master each part of it beacouse the modifications, the refactoring and the regular participation generated a very deep knowledge of all the parts of the application.</p>
                </div>
            <div>
                <h3>Information on the legal framework for data management</h3>
                <p>Since the users don't have to create any account et that interactions with other individuals are non-existent, the data is treated, managed and used locally without interactions with an externanl server.</p>            </div>
        </div>
    </>
    )
}