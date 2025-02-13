interface Props{
    name: string
    âge: number
    tel: string
}

export default function Etudiant(props: Props) {
    //jsx {interface utilisateur / Balises HTML}
    const {name,âge,tel} = props
    return(
        <div>
       Nom:<strong>{name}</strong> Age:<strong>{âge}</strong> Numéro de téléphone:<strong>{tel}</strong>
        </div>
    )
}