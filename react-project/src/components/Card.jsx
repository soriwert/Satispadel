import "../css/Card.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <li>
      <nav>
        <Link to={props.ruta}>
          <img src={props.image} alt={props.alt}/>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </Link>
      </nav>
    </li>
  );
}
