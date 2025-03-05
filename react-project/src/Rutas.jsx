import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserContext } from './context/UserContext';
import Inicio from './components/Inicio';
import Jugadores from './components/jugadores/Jugadores';
import Match from './components/match/Match';
import Calendario from './components/calendario/Calendario';
import Torneos from './components/torneos/Torneos';
import DetailPlayer from './components/jugadores/DetailPlayer';
import { JUGADORES } from './js/jugadores/jugadores';
import Registrarse from './bbdd/registrarse/Registrarse';
import Layout from './components/Layout';
import { useContext } from 'react';

export default function Rutas() {
    const { isLogged } = useContext(UserContext);



    return (
        <Router>
            <Routes>
                {isLogged ? (
                    <>
                        <Route path="/" element={<Layout><Inicio /></Layout>} />
                        <Route path="/jugadores" element={<Layout><Jugadores /></Layout>} />
                        <Route path="/match" element={<Layout><Match /></Layout>} />
                        <Route path="/calendario" element={<Layout><Calendario /></Layout>} />
                        <Route path="/torneos" element={<Layout><Torneos /></Layout>} />
                        <Route path="/jugadores/:id" element={<Layout><DetailPlayer jugadores={JUGADORES} /></Layout>}
                        />
                    </>
                ) : (
                    <>
                        <Route path="/" element={<Layout><Registrarse /></Layout>} />
                        {/* <Route path="*" element={<Navigate to="/registrarse" />} /> */}
                    </>
                )}

            </Routes>
        </Router>
    );
}