import Card from "../Cards";
import { UserContext } from "../../context/UserContext";
import { useContext } from 'react';

export default function Jugadores(){
    const { jugadores } = useContext(UserContext);
    console.log(jugadores)
    return (
        <section id="core-concepts">
          <div className="section-header">
            <h2>OPCIONES</h2>
          </div>
          <div className="core-concepts-content">
            <ul>
              {jugadores.map(
                (jugador) =>
                        <li key={jugador.Id}>
                          {/* <nav> */}
                            {/* <Link to={props.ruta}> */}
                              <div className="img_Card_Container">
                                {jugador.Image !== undefined && (
                                  <img className="imgCard" src={jugador.Image} alt={jugador.Name} />
                                )}
                              </div>
                              <div className="title_Card">
                                {jugador.Name !== undefined && <h3>{jugador.Name}</h3>}
                              </div>
                              <div className="description_Card">
                                {jugador.Email !== undefined && <p>{jugador.Email}</p>}
                              </div>
                            {/* </Link> */}
                          {/* </nav> */}
                        </li>
                //   <Card key={dato.Id} {...dato} />
              )}
            </ul>
          </div>
        </section>
    )
}