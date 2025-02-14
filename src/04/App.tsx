import { useState } from "react";



    

export default function App() {
    const[Compteur, setCompteur] = useState(0);

    function augmenter() {
        setCompteur(Compteur+1);
    }
    const[Compteur2] = useState();

    function decrementer() {
        setCompteur(Compteur-1);
    }

    return (
        <div>
           <button onClick={augmenter}>Augmenter</button> 
           <button onClick={decrementer}>Decrementer</button> 
           <div>Compteur: {Compteur}</div>
           {Compteur2}

        </div>

        
    )

    
}