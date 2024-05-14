import jugador from "../assets/jugador.png";
import pelota from "../assets/pelota.png";
import calendario from "../assets/calendario.png";
import torneo from "../assets/torneo.png";

export const CORE_CONCEPTS = [
  {
    image: jugador,
    title: "Jugadores",
    description: "Descripción de cada jugador y su nivel de playtomic.",
    ruta:"/jugadores"
  },
  {
    image: pelota,
    title: "Partidos",
    description: "Lista de partidos actuales",
    ruta:"/partidos"
  },
  {
    image: calendario,
    title: "Calendario",
    description: "Calendario Semanal para apuntarse a los partidos",
    ruta:"/calendario"
  },
  {
    image: torneo,
    title: "Torneos",
    description: "Futuros torenos, eventos, Americanos, Pozos... etc",
    ruta:"/torneos"
  },
];

export const Jugadores = {
  Jeni: {
    ManoDominante: "Derecha",
    golpes: {
      derecha: {
        plano: 0,
        cortado: 0,
      },
      reves: {
        plano: 0,
        cortado: 0,
      },
      volea: 0,
      globo: 0,
      remate: 0,
      salidaPared: 0,
    },
    actitud: "positiva",
    pala: "NOX ATTACK",
    winner: "function WINNER(){ return <h1>HELLO WORLD!</h1> }",
  },

  Patri: {
    ManoDominante: "Derecha",
    golpes: {
      derecha: {
        plano: 1,
        cortado: 0,
      },
      reves: {
        plano: 3,
        cortado: 0,
      },
      volea: 0,
      globo: 5,
      remate: 0,
      salidaPared: 0,
    },
    actitud: "positiva",
    pala: "NOX",
    winner: "function WINNER(){ return <h1>LETS GO</h1> }",
  },

  Joseph: {
    ManoDominante: "Zurdo",
    golpes: {
      derecha: {
        plano: 10,
        cortado: 10,
      },
      reves: {
        plano: 10,
        cortado: 9,
      },
      volea: 10,
      globo: 10,
      remate: 9,
      salidaPared: 10,
    },
    actitud: "negativa",
    pala: "MYSTICA",
    winner: "function WINNER(){ return <h1> PA TU CASA</h1> }",
  },
};
