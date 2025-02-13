
import Student from "../02/Etudiant";

const studentList = [
    {
        nom: "John DOE",
        age: 21,
        tel: "0000000"
    },
    {
        nom: "Alfonse",
        age: 31,
        tel: "11111"
    }
]


export default function App2() {

    const etudiants = studentList.map(function(e, index){
        return (
            <Student key={index} 
                name={e.nom} 
                âge={e.age} 
                tel={e.tel} />
        )
    });

    return (
        <div>
            <h1>Liste étudiants</h1>
            {etudiants}
        </div>
    )
}
