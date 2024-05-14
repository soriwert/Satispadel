import Cards from "./Cards";
import { JUGADORES } from "../js/jugadores";

export default function Jugadores(){
    return (<>
        <a>HOLAAA</a>
        <Cards data={ JUGADORES }></Cards>
    </>
    );
}