import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../services/axios";
import { useRouter } from "next/router";
import jwtDecode from "jwt-decode";
import { getCookieFromBrowser, removeCookie, setCookie } from "./cookie";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTokenFromCookie() {
      const token = getCookieFromBrowser("token");
      if (token) {
        try {
          const userData = jwtDecode(token);
          api.defaults.headers.Authorization = `Bearer ${token}`;
          const { data: user } = await api.get(`/api/user/${userData._id}`);
          if (user) setUser(user);
        } catch (error) {
          setUser(null);
          removeCookie("token");
          window.alert("Votre session a expirée");
        }
      }
      setLoading(false);
    }

    loadTokenFromCookie();
  }, []);

  const login = async (username, password) => {
    const { data: token } = await api.post("/api/login", {
      username,
      password,
    });
    if (token) {
      setCookie("token", token);
      const userData = jwtDecode(token);
      api.defaults.headers.Authorization = `Bearer ${token}`;
      const { data: user } = await api.get(`/api/user/${userData._id}`);
      setUser(user);
      console.log("token", token);
      console.log("user", user);
      const cookieToken = await getCookieFromBrowser("token");
      console.log("cookie token", cookieToken);
      router.push("/");
    }
  };

  const logout = async () => {
    setUser(null);
    removeCookie("token");
    await router.push("/");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!user, user, login, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
