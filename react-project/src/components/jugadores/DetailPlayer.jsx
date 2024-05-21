import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import "../../css/jugadores/DetailPlayer.css";

function DetailPlayer(props) {
  const { jugadores } = props;
  const { id } = useParams();

  const jugadorElegido = jugadores.find(
    (jugador) => jugador.id === parseInt(id)
  );
  return (
    <div className="container">
      <h1>Detalle de Jugador</h1>
      <div className="info">
        <img src={jugadorElegido.image} alt={props.alt} />
        <h2>
          <label>Nombre: </label> {jugadorElegido.nombre}
        </h2>
        <p>
          <label>Edad: </label>
          {jugadorElegido.edad}
        </p>
        <p>
          <label>description: </label>
          {jugadorElegido.description}
        </p>
        <p>
          <label>nombreEspalda: </label>
          {jugadorElegido.nombreEspalda}
        </p>
        <p>
          <label>ManoDominante: </label>
          {jugadorElegido.ManoDominante}
        </p>
        <p>
          <label>actitud: </label>
          {jugadorElegido.actitud}
        </p>
        <p>
          <label>pala: </label>
          {jugadorElegido.pala}
        </p>
        <p>
          <label>winner: </label>
          {jugadorElegido.winner}
        </p>
      </div>
    </div>
  );
}

export default DetailPlayer;

DetailPlayer.propTypes = {
  jugadores: PropTypes.array,
  image: PropTypes.string,
  alt: PropTypes.string,
};
