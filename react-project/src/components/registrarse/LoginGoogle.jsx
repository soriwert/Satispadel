import { useContext } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../../firebase/auth";
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../context/UserContext';
import "../../css/registrarse/LoginGoogle.css";

const LoginGoogle = () => {
  const { login } = useContext(UserContext);
  const provider = new GoogleAuthProvider();
  const navigateTo = useNavigate();

  const handleLogin = () => {
    const auth = getAuth(app);
    signInWithPopup(auth, provider)
      .then((response) => {
        console.log(response.user);
        login(response.user);
        sessionStorage.setItem("accessToken", JSON.stringify(response.accessToken));
        console.log(response);
        navigateTo("/");
      })
      .catch((error) => {
        console.log(error);
      });
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
