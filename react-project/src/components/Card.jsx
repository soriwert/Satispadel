import "../css/Card.css";
import "../css/Cards.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Card(props) {
  return (
    <li >
      <nav>
        <Link to={props.ruta}>
          <div className="img_Card_Container">
            {props.image !== undefined && (
              <img className="imgCard" src={props.image} alt={props.alt} />
            )}
          </div>
          <div className="title_Card">
            {props.title !== undefined && <h3>{props.title}</h3>}
          </div>
          <div className="description_Card">
            {props.description !== undefined && <p>{props.description}</p>}
          </div>
          <div className="nombre_Card">
            {props.nombre !== undefined && <p>{props.nombre}</p>}
          </div>
        </Link>
      </nav>
    </li>
  );
}

Card.propTypes = {
  data: PropTypes.array,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  nombre: PropTypes.string,
  ruta: PropTypes.string,
  alt: PropTypes.string,
};
