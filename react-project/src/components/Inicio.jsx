import Header from "./Header";
import Cards from "./Cards";
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
