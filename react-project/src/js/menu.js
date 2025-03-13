import jugador from "../assets/jugadores/jugador.png";
import pelota from "../assets/pelota.png";
import calendario from "../assets/calendario.png";
import torneo from "../assets/torneo.png";
import registrarse from "../assets/registrarse.png";

export const OPCIONES = [
  {
    image: jugador,
    id: "Jugadores",
    title: "Jugadores",
    description: "Descripción de cada jugador y su nivel de playtomic.",
    ruta: "/jugadores",
  },
  {
    image: pelota,
    id: "Match",
    title: "Match",
    description: "Selecciona tus dias y horarios para hacer Match",
    ruta: "/Match",
  },
  {
    image: calendario,
    id: "Calendario",
    title: "Calendario",
    description: "Calendario Semanal para apuntarse a los partidos",
    ruta: "/calendario",
  },
  {
    image: torneo,
    id: "Torneos",
    title: "Torneos",
    description: "Futuros torenos, eventos, Americanos, Pozos... etc",
    ruta: "/torneos",
  }
];
