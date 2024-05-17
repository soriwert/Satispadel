import jugador from "../assets/jugador.png";
import pelota from "../assets/pelota.png";
import calendario from "../assets/calendario.png";
import torneo from "../assets/torneo.png";

export const CORE_CONCEPTS = [
  {
    image: jugador,
    id: "Jugadores",
    title: "Jugadores",
    description: "Descripción de cada jugador y su nivel de playtomic.",
    ruta: "/jugadores",
  },
  {
    image: pelota,
    id: "Partidos",
    title: "Partidos",
    description: "Lista de partidos actuales",
    ruta: "/partidos",
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
  },
];
