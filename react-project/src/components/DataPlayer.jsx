import { Jugadores } from "../js/data.js";


export default function DataPlayer(props) {
    return (
    <div id="tab-content">
      <h3>{Jugadores[props.selectedTopic].ManoDominante}</h3>
      <p>
        {Object.keys(Jugadores[props.selectedTopic].golpes["derecha"])[0]}:{" "}
        {Jugadores[props.selectedTopic].golpes["derecha"].plano}
      </p>
      <p>
        {Object.keys(Jugadores[props.selectedTopic].golpes["derecha"])[1]}:{" "}
        {Jugadores[props.selectedTopic].golpes["derecha"].cortado}
      </p>
      <p>
        {Object.keys(Jugadores[props.selectedTopic].golpes["reves"])[0]}:{" "}
        {Jugadores[props.selectedTopic].golpes["derecha"].plano}
      </p>
      <p>
        {Object.keys(Jugadores[props.selectedTopic].golpes["reves"])[1]}:{" "}
        {Jugadores[props.selectedTopic].golpes["derecha"].cortado}
      </p>
      <p>
        {Object.keys(Jugadores[props.selectedTopic].golpes)[2]}:{" "}
        {Jugadores[props.selectedTopic].golpes["volea"]}
      </p>
      <p>
        {Object.keys(Jugadores[props.selectedTopic].golpes)[3]}:{" "}
        {Jugadores[props.selectedTopic].golpes["globo"]}
      </p>
      <p>
        {Object.keys(Jugadores[props.selectedTopic].golpes)[4]}:{" "}
        {Jugadores[props.selectedTopic].golpes["remate"]}
      </p>
      <p>
        {Object.keys(Jugadores[props.selectedTopic].golpes)[5]}:{" "}
        {Jugadores[props.selectedTopic].golpes["salidaPared"]}
      </p>
      <pre>
        {Object.keys(Jugadores[props.selectedTopic])[2]}:{" "}
        {Jugadores[props.selectedTopic].actitud}
      </pre>
      <pre>
        {Object.keys(Jugadores[props.selectedTopic])[3]}:{" "}
        {Jugadores[props.selectedTopic].pala}
      </pre>

      <pre>
        <code>
          {Object.keys(Jugadores[props.selectedTopic])[4]}:{" "}
          {Jugadores[props.selectedTopic].winner}
        </code>
      </pre>
    </div>
  );
  
  
}