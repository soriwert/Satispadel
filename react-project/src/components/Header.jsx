import logo from "../assets/logo.png";
import "../css/Header.css";
import Previous from "./utils/Previous.jsx";
import Next from "./utils/Next.jsx";

export default function Header() {
  return (
    <>
      <Previous />
      <Next />
      <header>
        <a href="">
          <img src={logo} className="logo" alt="Vite logo" />
        </a>
        <h2>Bienvenid@ a tu web de padel</h2>
        
      </header>
    </>
  );
}
