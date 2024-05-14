import logo from "../assets/logo.png";
import "../css/Header.css"

export default function Header() {
    return (
      <header>
        <a href="">
          <img src={logo} className="logo" alt="Vite logo" />
        </a>
        <h2>Bienvenid@ a tu web de padel</h2>
      </header>
    );
  }