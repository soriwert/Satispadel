import Card from "./Card.jsx";
import PropTypes from "prop-types";

export default function Cards({ data }) {

  
  return (
    <section id="core-concepts">
      <div className="section-header">
        <h2>OPCIONES</h2>
      </div>
      <div className="core-concepts-content">
        <ul>
          {data.map(
            (dato) =>
              <Card key={dato.Id} {...dato} />
          )}
        </ul>
      </div>
    </section>
  );
}

Cards.propTypes = {
  data: PropTypes.array,
};
