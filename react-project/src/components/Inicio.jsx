import Header from "./Header";
import Cards from "./Cards";
import { CORE_CONCEPTS } from "../js/data.js";
import Write from "../bbdd/write.jsx";


export default function Inicio() {
  return (
    <div>
      <Header/>
      <main>
        <Cards data={CORE_CONCEPTS} />
      </main>
      <Write/>
    </div>
  );
}
