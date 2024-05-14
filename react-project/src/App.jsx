import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio.jsx";
import Partidos from "./components/Partidos.jsx"
import Calendario from "./components/Calendario.jsx"
import Torneos from "./components/Torneos.jsx"
import Jugadores from "./components/Jugadores.jsx"

function App() {
  return (
    <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Inicio/>} />
            <Route exact path="/jugadores" element={<Jugadores/>} />
            <Route path="/partidos" element={<Partidos/>} />
            <Route path="/calendario" component={<Calendario/>} />
            <Route path="/torneos" component={<Torneos/>} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
