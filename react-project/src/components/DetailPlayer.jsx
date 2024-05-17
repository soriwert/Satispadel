import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
function DetailPlayer(props) {
  const { jugador } = props;
  const { id } = useParams();

  const jugadorElegido = jugador.find(jugador => jugador.id === parseInt(id));

  return (
    <div>
      <img src="./assets/FotoPerfil/1.png" alt={props.alt}/>
      <h2>{jugadorElegido.nombre}</h2>
      <p>{jugadorElegido.description}</p>
    </div>
  );
}

export default DetailPlayer;

DetailPlayer.propTypes = {
    jugador: PropTypes.array,
    image: PropTypes.string,
    alt: PropTypes.string
  };
