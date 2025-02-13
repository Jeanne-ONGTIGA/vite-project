interface Props{
    pays: string
    ville: string
}

export default function Capitale(props: Props) {
    //jsx {interface utilisateur / Balises HTML}
    return(
        <div>
       La Capitale de <strong>{props.pays}</strong> est <strong>{props.ville}</strong>
        </div>
    )
}