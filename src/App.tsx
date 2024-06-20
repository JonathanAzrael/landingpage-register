import { initializeApp } from "firebase/app"
import { Register } from "./components/register";

function App() {

  const firebaseApp = initializeApp({

    apiKey: "AIzaSyD3w9QPfc31WJ12N0xXOQ68jjuGdZ8QEG0",
    authDomain: "moises-react.firebaseapp.com",
    projectId: "moises-react",

  });

  return (
    <div className="App">
      <h1>Fala bro</h1>
      <Register />
    </div>
  );
}

export default App;
