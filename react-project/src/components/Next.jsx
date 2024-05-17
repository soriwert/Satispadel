import { useNavigate } from 'react-router-dom';

function Next() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate(1); 
  };

  return (
    <button onClick={handleNext}>
      Siguiente
    </button>
  );
}

export default Next;
