interface Props {
    lang?: string //Facultatif
    name: string
}


export default function hello(p: Props) {
    //const {lang, name} = p

    if(p.lang == "en") {
        return (<div>welcome<strong>{p.name}</strong></div>)
    }
    return(
        <div>bienvenue<strong>{p.name}</strong></div>
    )
}