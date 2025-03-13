import { BrowserRouter as Router } from "react-router-dom";
import Rutas from "./Rutas";
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <Router>
        <Rutas />
      </Router>
    </UserProvider>
  );
}

export default App;

