import { useContext } from "react";
import { UserContext } from '../../context/UserContext';
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { logout } = useContext(UserContext);
  const navigateTo = useNavigate();

  const handleLogout = () => {
    logout();
    navigateTo("/");
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;
