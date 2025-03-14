import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [jugadores, setJugadores] = useState([]);

  
  useEffect(() => {
    const storedUser = localStorage.getItem('user'); 
    const storedJugadores = localStorage.getItem('jugadores'); 
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    if (storedJugadores){
      setJugadores(JSON.parse(storedJugadores));
    }
  }, []);
  
  const login = (user) => {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  };
  
  const setJugadoresGuardados = (newJugadores) => {
    setJugadores(newJugadores);
    localStorage.setItem('jugadores', JSON.stringify(newJugadores));
  };
  
  const isLogged = user !== null;

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <UserContext.Provider value={{ user, jugadores, setJugadoresGuardados, login, logout, isLogged }}>
      {children}
    </UserContext.Provider>
  );
};
UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { UserContext, UserProvider };

