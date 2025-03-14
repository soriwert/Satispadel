import { useContext, useEffect } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../../firebase/auth";
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../context/UserContext';
import "../../css/registrarse/LoginGoogle.css";
import { db } from "../../firebase/auth";
import { collection, getDocs, addDoc, query, where } from "firebase/firestore";

const LoginGoogle = () => {
  const { login, jugadores, setJugadoresGuardados } = useContext(UserContext);
  const provider = new GoogleAuthProvider();
  provider.addScope("profile");
  const navigateTo = useNavigate();

  useEffect(() => {
  }, [jugadores, setJugadoresGuardados]);



  async function recuperarJugador(newJugador) {
    const jugadoresCollection = collection(db, "JUGADORES");
    const jugadores = await getDocs(jugadoresCollection);
    const jugadorExistente = query(jugadoresCollection, where("Id", "==", newJugador.Id));
    
    if (jugadorExistente) {
      login(newJugador);
    } else {
      await addDoc(jugadoresCollection, newJugador);
    }

    const jugadoresLista = jugadores.docs.map(doc => doc.data());
    console.log(jugadoresLista)
    setJugadoresGuardados(jugadoresLista);
  }

  const handleLogin = async () => {
    try {
      const auth = getAuth(app);
      const response = await signInWithPopup(auth, provider);

      const newJugador = {
        Id: response.user.uid,
        AccessToken: response.user.accessToken,
        Name: response.user.displayName,
        Email: response.user.email,
        Image: response.user.photoURL
      };

      await recuperarJugador(newJugador);

      navigateTo("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={handleLogin}>
      <img
        className="logoGoogle"
        src="src/assets/google.png"
        alt="Google"
      />
    </button>
  );
};

export default LoginGoogle;
