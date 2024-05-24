import { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../../firebase/auth";
import { useNavigate } from "react-router-dom";
import '../../css/registrarse/LoginGoogle.css'

const LoginGoogle = () => {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();
  const navigateTo = useNavigate();

  const handleLogin = () => {
    const auth = getAuth(app);
    signInWithPopup(auth, provider)
      .then((response) => {
        console.log(response.user);
        setUser(response.user);
        // Almacenar el usuario en sessionStorage
        sessionStorage.setItem("user", JSON.stringify(response.user));
        sessionStorage.setItem(
          "accessToken",
          JSON.stringify(response.accessToken)
        );
        console.log(response);
        navigateTo("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {user === null && (
        <div className="loginContainer">
          <h1>Iniciar sesión con</h1>
          <div className="buttonContainer">
            <button onClick={handleLogin}>
              <img className="logoGoogle" src="src/assets/google.png" alt="Google" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginGoogle;
