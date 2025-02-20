import { useState } from "react"

export default function Form01() {
    const[chiffre, setChiffre] = useState();
 
    function modulechange()
    return(

        <div className="p-12">
            <input type="text" className="border" 
            onChange={}
            value={chiffre} />  
       <div>
        <p>Calcul automatique</p>
        <div className="text-bold text-red-500">{chiffre = 2}</div>
        </div>
        </div>
    )
        

    

}