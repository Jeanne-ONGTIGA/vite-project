import Capitale from "./Capitale";
import Etudiant from "./Etudiant"
import Hello from "./Hello";



export default function App02() {

    const capitales = (
        <div>
            <h1>Capitales</h1>
            <Capitale pays="RCA" ville="Bangui" />
            <Capitale pays="Sénégal" ville="Dakar" />
        </div>
    )

    const étudiants = (
        <div>
            <h1>Etudiants</h1>
            <Etudiant  name="RCA" âge={21} tel="00000" />
            <Etudiant name="Jeanne" âge={23} tel="72313304" />
        </div>
    )

    const hello = (
        <div>
            <h1>Welcome</h1>
            <Hello lang="en" name="Tite" />
            <Hello lang="fr" name="Aristide" />
            <Hello lang="es" name="Pétula" />
        </div>
    )

    return(
        <div>
            {capitales}
            {étudiants}
            {hello}
        </div>
    )
        
}