import Card from "../Cards";
import { JUGADORES } from "../../js/jugadores/jugadores";
import Header from "../Header";

export default function Jugadores(){
    return (<>
        <Header/>
        <Card data={ JUGADORES }></Card>
    </>
    );
}