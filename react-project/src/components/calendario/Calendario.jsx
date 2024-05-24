import { useState } from "react";
import { HORARIOS_SELECCIONADOS } from "../../js/calendario/horariosSeleccionados";
import "../../css/calendario/Calendario.css";

export default function Calendario() {
  const [jugadores, setJugadores] = useState(HORARIOS_SELECCIONADOS);

  const findMatches = () => {
    const coincidencias = {};

    // Llenar el diccionario con las preferencias de los jugadores
    jugadores.forEach(({ Jugador, Horarios }) => {
      Horarios.forEach((horarioDia) => {
        const [dia, horas] = horarioDia;
        horas.forEach((hora) => {
          const horario = `${dia} ${hora}`;
          if (!coincidencias[horario]) {
            coincidencias[horario] = [];
          }
          coincidencias[horario].push(Jugador);
        });
      });
    });

    // Filtrar las fechas y horarios con al menos 4 jugadores
    return Object.entries(coincidencias).filter(
      ([horario, players]) => players.length >= 4
    );
  };

  const partidos = findMatches();

  return (
    <div className="Calendario">
      <h1>Partidos de Padel</h1>
      {partidos.length > 0 ? (
        <div>
          {partidos.map(([horario, players]) => (
            <div key={horario}>
              <h2>Horario: {horario}</h2>
              {players.map((player) => (
                <div key={player}>
                  <button>{player}</button>
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <p>No hay suficientes coincidencias para formar partidos.</p>
      )}
    </div>
  );
}
