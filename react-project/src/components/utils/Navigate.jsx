import { useNavigate } from "react-router-dom";
import "../../css/Header.css";

function Navigate() {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate(1);
  };
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="navigate">
      <img src="src/assets/registrarse/back.png" onClick={handleBack} />
      <img src="src/assets/registrarse/next.png" onClick={handleNext} />
    </div>
  );
}

export default Navigate;
