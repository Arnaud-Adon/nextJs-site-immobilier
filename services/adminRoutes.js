import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuth } from "./context";

export const adminRoutes = (Component) => {
  return () => {
    const { isAuthenticated, user } = useAuth();
    const router = useRouter();
    useEffect(() => {
      if (!isAuthenticated && user.role === "admin") {
        router.push("/");
      }
    }, [isAuthenticated]);

    return <Component {...arguments} />;
  };
};
