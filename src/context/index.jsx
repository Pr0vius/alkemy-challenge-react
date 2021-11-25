import { createContext, useState } from "react";
import auth from "../services/auth";

export const AuthContext = createContext({});
export const TeamContext = createContext([]);
const AuthProvider = ({ children }) => {
  const initialState = {
    auth: auth.authentication,
    token: localStorage.getItem("AlkemyToken"),
  };
  const [authState, setAuthState] = useState(initialState);

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};

const TeamProvider = ({ children }) => {
  const [team, setTeam] = useState([]);

  return (
    <TeamContext.Provider value={{ team, setTeam }}>
      {children}
    </TeamContext.Provider>
  );
};

const ContextGroup = ({ children }) => {
  return (
    <AuthProvider>
      <TeamProvider>{children}</TeamProvider>
    </AuthProvider>
  );
};

export default ContextGroup;
