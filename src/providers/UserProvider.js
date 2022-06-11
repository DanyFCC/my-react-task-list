//component that agrupar componentes hijos  y pasando por el context informacion
import react from "react";
import { useState } from "react";
import { createContext, useContext } from "react";

const UserContextDefaultValue = {
  user: { nombre: "", profileImage: "" },
  setUser: () => {},
};

const UserContext = createContext(UserContextDefaultValue);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const value = {
    user,
    setUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  return context;

  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
};
