export default function Form03() {
     return(
        <div className="p-12">


            <div className="flex flex-col">
                <label>Destinataire :</label>
                <input type="email" className="border p-2 w-70 mt-1 rounded-md" />
            </div>

            <div className="flex flex-col">
            <label>Sujet du message :</label>
            <input type="text" className="border p-6 w-64 mt-1 rounded-md" />
            </div>

            <div className="flex flex-col">
            <label>Message :</label>
            <input type="text" className="border p-2 w-64 mt-1 rounded-md" />
            </div>
            <div className="flex gap-6">
                <button type="submit" className="mt-4 bg-black text-white px-6 py-2 rounded-md hover: bg-black space-x-4">
                    Envoyer
                </button>
                <button type="submit" className="mt-4 bg-black text-black px-4 py-2 rounded-md hover: bg-white">
                    Effacer
                </button> 
            </div>
        </div>
     )
}