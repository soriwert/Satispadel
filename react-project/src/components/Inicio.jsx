import Header from "./Header.jsx";
import Cards from "./Cards.jsx";
import { OPCIONES } from "../js/menu.js";


export default function Inicio() {
  
  return (
    <div>
      <Header/>
      <main>
        <Cards data={OPCIONES} />
      </main>
    </div>
  );
}
