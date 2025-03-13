import { createContext, useState, useEffect } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [jugadores, setJugadores] = useState([]);

  useEffect(() => {
    const storedUser = sessionStorage.getItem('user'); 
    const storedJugadores = sessionStorage.getItem('jugadores'); 
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    if (storedJugadores){
      setJugadores(JSON.parse(storedJugadores));
    }
  }, []);

  const login = (user) => {
    setUser(user);
    sessionStorage.setItem('user', JSON.stringify(user));
  };

  const isLogged = user !== null;

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem('user');
  };

  return (
    <UserContext.Provider value={{ user, jugadores, setJugadores, login, logout, isLogged }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
