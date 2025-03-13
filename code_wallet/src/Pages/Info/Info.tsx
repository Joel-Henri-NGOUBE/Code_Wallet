import Header from "../../Components/Header/Header"
import "./info.css"
export default function Info(){
    return (
    <>
        <Header />
        <div className="info">
            <div>
                <h3>Presentation of functionnalities</h3>
                L'application a pour but principal d'aider les développeurs à se retrouver dans l'infinité de bouts de code dont ils peuvent avoir besoin au quotidien. Les fonctionnalités de l'application sont donc les suivantes:
                <ol>
                    <li><span>Permettre à l'utilisateur d'ajouter, de modifier ou des supprimer des tags à associer par la suite à des fragments de code</span></li>
                    <li><span>Permettre à l'utilisateur de créer, de modifier ou de supprimer des fragments de code et de leur associer ou non un ou plusieurs tags</span></li>
                    <li><span>Être en mesure de copier rapidement un bout de code en l'ajoutant au presse papier</span></li>
                    <li><span>Choisir le son mode d'affichage de tags et de fragments préféré</span></li>
                    <li><span>Garder ses fragments de code localement afin d'y avoir accès sans être connecté à Internet</span></li>
                </ol>
            </div>
            <div>
                <h3>Information on the developer</h3>
                <p><strong>Joël NGOUBE</strong> a été le seul développeur à travailler sur ce projet. Il lui a fallu beaucoup d'organisation et de discipline pour pouvoir faire grandir un peu plus chaque jour ce projet sachant qu'il y travaille depuis bientôt trois mois (bien évidemment avec des coupures).
                Il a pu s'aider <strong>des documentations officielles des outils et librairies</strong>, de <strong>son professeur d'Electron</strong> qui a su répondre à ses questions, de <strong>Google</strong> et de <strong>Stack Overflow</strong> pour les erreurs les plus persistantes.
                Cependant s'était très intéressant de travailler aussi longtemps sur ce projet. De maîtriser chacune de ses parties parce que les modifications, les refactoring et la participation récurrente a fait naître une connaissance plutôt fine des différentes parties de l'application.</p>            </div>
            <div>
                <h3>Information on the legal framework for data management</h3>
                <p>Les utilisateurs n'ayant pas à créer un compte et vu que les interactions avec d'autres individus sont tout bonnement inexistantes, les données sont gérées et utilisées de façon locale sans passer par un serveur distant.</p>            </div>
        </div>
    </>
    )
}