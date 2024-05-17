import { useNavigate } from 'react-router-dom';

function Previous() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); 
  };

  return (
    <button onClick={handleBack}>
      Volver
    </button>
  );
}

export default Previous;
