import Rutas from "./Rutas";
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
    <Rutas />
  </UserProvider>
)}

export default App;
