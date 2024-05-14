import Header from "./Header"
import Cards from "./Cards"
import Examples from "./Examples"
import { CORE_CONCEPTS } from "../js/data.js";

export default function Inicio() {
  return (
    <div>
      <Header></Header>
      <main>
        <Cards data={CORE_CONCEPTS} />
        <Examples />
      </main>
    </div>
  );
}
