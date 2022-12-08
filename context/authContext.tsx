import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { IAuthContextProps, User } from "../types/types";

export const AuthContext = createContext<IAuthContextProps>({
  currentUser: null,
  login: (user: User) => {},
  logout: (user: User) => {},
});

export const AuthContextProvider: React.FC<IAuthContextProps> = (props) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const login = async (user: User) => {
    const res = await axios.post(process.env.API_URL + "/auth/login", user, {
      withCredentials: true,
    });
    setCurrentUser(res.data);
  };

  const logout = async (user: User) => {
    await axios.post(process.env.API_URL + "/auth/logout", user, {
      withCredentials: true,
    });
    setCurrentUser(null);
    localStorage.clear();
  };

  useEffect(() => {
    if (localStorage.getItem("user") && !currentUser) {
      setCurrentUser(JSON.parse(localStorage.getItem("user") || "") || null);
    }
    if (currentUser && !localStorage.getItem("user")) {
      localStorage.setItem("user", JSON.stringify(currentUser));
    }
  }, [currentUser]);

  return (
    <>
      <AuthContext.Provider value={{ currentUser, login, logout }}>
        {props.children}
      </AuthContext.Provider>
    </>
  );
};
