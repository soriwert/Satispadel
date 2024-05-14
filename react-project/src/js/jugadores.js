export const JUGADORES = {
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
