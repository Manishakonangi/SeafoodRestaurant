import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("seafoodUser");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const login = (data) => {
    setUser(data);
    localStorage.setItem("seafoodUser", JSON.stringify(data));
    localStorage.setItem("seafoodToken", data.token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("seafoodUser");
    localStorage.removeItem("seafoodToken");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
