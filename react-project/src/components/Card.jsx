import "../css/Card.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Card(props) {
  return (
    <li>
      <nav>
        <Link to={props.ruta} >
          { props.image !== undefined && <img src={props.image} alt={props.alt}/>}
          { props.title !== undefined && <h3>{props.title}</h3>}
          { props.description !== undefined && <p>{props.description}</p>}
          { props.nombre !== undefined && <p>{props.nombre}</p>}
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
  alt: PropTypes.string
};
