import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import logo from "../assets/logo.png";
import "../css/Header.css";
import Navigate from "./utils/Navigate.jsx";
import Logout from "./registrarse/Logout.jsx";
import { Link } from "react-router-dom";
import LoginGoogle from "./registrarse/LoginGoogle.jsx";

export default function Header() {
  const { user } = useContext(UserContext);

  return (
    <header className="header">
      <div className="header__izquierda">
        <Link to="/">
          <img src={logo} className="header__logo" alt="Logo Vite" />
        </Link>
      </div>
      <div className='header__center'>
        <h2 className="header__titulo">Bienvenid@ a tu web de pádel</h2>
      </div>
      <div className="header__derecha">
        <Navigate />
        {user ? <Logout /> : <LoginGoogle />}
      </div>
    </header>
  );
}
