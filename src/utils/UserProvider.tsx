import React, { createContext, useContext, useState } from "react";
interface IUserContext {
  user: string;
  setUser: (user: string) => void;
  token: string;
  setToken: (token: string) => void;
  isLoggingin: boolean;
  setIsLoggingin: (isLoggingin: boolean) => void;
}
const UserContext = createContext<IUserContext | undefined>(undefined);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");
  const [isLoggingin, setIsLoggingin] = useState(false);
  return (
    <UserContext.Provider
      value={{ user, setUser, token, setToken, isLoggingin, setIsLoggingin }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used with in a UserProvider");
  }
  return context;
};
