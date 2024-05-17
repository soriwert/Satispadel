import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './components/Inicio';
import Jugadores from './components/Jugadores';
import Partidos from './components/Partidos';
import Calendario from './components/Calendario';
import Torneos from './components/Torneos';
import DetailPlayer from './components/DetailPlayer';
import { JUGADORES } from './js/jugadores';



function App() {
  return (
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Inicio />} />
            <Route exact path="/jugadores" element={<Jugadores />} />
            <Route path="/partidos" element={<Partidos />} />
            <Route path="/calendario" element={<Calendario />} />
            <Route path="/torneos" element={<Torneos />} />
            <Route
              path="/jugadores/:id"
              element={<DetailPlayer jugador={JUGADORES} />}
            />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
