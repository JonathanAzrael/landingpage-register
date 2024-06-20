import { useEffect, useState } from "react"
import { initializeApp } from "firebase/app"
import { getFirestore, getDocs, collection } from "firebase/firestore"

const firebaseApp = initializeApp({

    apiKey: "AIzaSyD3w9QPfc31WJ12N0xXOQ68jjuGdZ8QEG0",
    authDomain: "moises-react.firebaseapp.com",
    projectId: "moises-react",

  });

export function Register() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [description, setDescription] = useState("")

    const db = getFirestore(firebaseApp)
    const userCollectionRef = collection(db, "new-work");

    useEffect(() => {
        console.log("");
        const getUsers = async () => {
            const data = await getDocs(userCollectionRef)
            console.log("Dados da coleção:", data);
        };
        getUsers();
    }, []);

    return(
        <div className="w-full h-[650px] bg-gray-200 flex justify-between items-center px-10">
            <div>

            </div>
            <div className="h-[500px] w-[500px] bg-white rounded-2xl border-black borde">
                <h1>Olá mundo</h1>
                <form>
                    <label>
                        <input className="bg-blue-400 w-full" placeholder="Escreva seu nome">
                        </input>
                    </label>
                </form>
            </div>
        </div>
    )
}