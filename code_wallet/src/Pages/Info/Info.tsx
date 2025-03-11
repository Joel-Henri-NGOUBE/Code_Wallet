import Header from "../../Components/Header/Header"

export default function Info(){
    return (
    <>
        <Header />
        <div style={{padding: "30px"}}>
            <h3>Presentation of functionnalities</h3>
            L'application a pour but principal d'aider les développeurs à se retrouver dans l'infinité de bouts de code dont ils peuvent avoir besoin au quotidien. Les fonctionnalités de l'application sont donc les suivantes:
            <ol>
                <li>Permettre à l'utilisateur d'ajouter, de modifier ou des supprimer des tags à associer par la suite à des fragments de code</li>
                <li>Permettre à l'utilisateur de créer, de modifier ou de supprimer des fragments de code et de leur associer ou non un ou plusieurs tags</li>
                <li>Être en mesure de copier rapidement un bout de code en l'ajoutant au presse papier</li>
                <li>Choisir le son mode d'affichage de tags et de fragments préféré</li>
                <li>Garder ses fragments de code localement afin d'y avoir accès sans être connecté à Internet</li>
            </ol>
            <h3>Information on the developer</h3>
            Joël NGOUBE a été le seul développeur à travailler sur ce projet. Il lui a fallu beaucoup d'organisation et de discipline pour pouvoir faire grandir un peu plus chaque jour ce projet sachant qu'il y travaille depuis bientôt trois mois (bien évidemment avec des coupures).
            Il a pu s'aider des documentations officielles des outils et librairies, de son professeur Mr Thierry Tranchina qui a su répondre à ses questions, de Google et de Stack Overflow pour les erreurs les plus persistantes.
            Cependant s'était très intéressant de travailler aussi longtemps sur ce projet. De maîtriser chacune de ses parties parce que les modifications, les refactoring et la participation récurrente a fait naître une connaissance plutôt fine des différentes parties de l'application.
            <h3>Information on the legal framework for data management</h3>
            Les utilisateurs n'ayant pas à créer un compte et vu que les interactions avec d'autres individus sont tout bonnement inexistantes, les données sont gérées et utilisées de façon locale sans passer par un serveur distant.
        </div>
    </>
    )
}