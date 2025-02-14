
import { useState } from "react";


export default function Drapeau() {
    const [flag, setFlag] = useState("./RCA.png");

    function setSango() {
        setFlag("./RCA.png")
    }

    function setEnglish() {
        setFlag("./NIG.png")
    }

    return (
        <div>
            <button onClick={setSango}>SANGO</button>
            &nbsp;
            <button onClick={setEnglish}>Anglais</button>
            <p>
            <img src={flag} alt="" width={50} height={32} />
            </p>
        </div>
    )
}

