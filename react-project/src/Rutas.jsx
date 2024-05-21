import Inicio from './components/Inicio';
import Jugadores from './components/Jugadores';
import Match from './components/Match';
import Calendario from './components/Calendario';
import Torneos from './components/Torneos';
import DetailPlayer from './components/DetailPlayer';
import { JUGADORES } from './js/jugadores';
import Write from './bbdd/Write';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function Rutas(){
    return (
        <Router>
        <div>
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route exact path="/jugadores" element={<Jugadores />} />
          <Route path="/match" element={<Match />} />
          <Route path="/calendario" element={<Calendario />} />
          <Route path="/torneos" element={<Torneos />} />
          <Route path="/registrarse" element={<Write />} />
          <Route
            path="/jugadores/:id"
            element={<DetailPlayer jugadores={JUGADORES} />}
          />
        </Routes>
      </div>
    </Router>
    )
}