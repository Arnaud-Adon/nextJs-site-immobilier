import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuth } from "./context";

export const ProtectedRoutes = (Component) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  return () => {
    useEffect(() => {
      if (!isAuthenticated) {
        router.push("/login");
      }
    });

    return <Component {...props} />;
  };
};
