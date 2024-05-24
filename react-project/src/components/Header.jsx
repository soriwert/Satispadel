import logo from "../assets/logo.png";
import "../css/Header.css";
import Previous from "./utils/Previous.jsx";
import Next from "./utils/Next.jsx";
import Logout from "./registrarse/Logout.jsx";

export default function Header() {
  return (
    <>
      <header>
        <div>
          <Previous />
          <Logout />
          <a href="">
            <img src={logo} className="logo" alt="Vite logo" />
          </a>
          <Next />
        </div>
        <h2>Bienvenid@ a tu web de padel</h2>
      </header>
    </>
  );
}
