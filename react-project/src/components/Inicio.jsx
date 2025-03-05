import Cards from "./Cards.jsx";
import { OPCIONES } from "../js/menu.js";


export default function Inicio() {
  return ( <Cards data={OPCIONES} /> );
}
