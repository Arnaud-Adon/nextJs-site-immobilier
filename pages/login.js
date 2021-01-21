import React, { useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import Layout from "../components/layout";
import { useAuth } from "../services/context";
import { useRouter } from "next/router";

const Login = () => {
  const { isAuthenticated, login } = useAuth();
  const router = useRouter();
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (isAuthenticated) router.push("/");
  }, [isAuthenticated]);

  const handleChange = (name) => (e) => {
    setValues({
      ...values,
      [name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    login(values.username, values.password);
  };

  return (
    <Layout>
      <MDBContainer>
        <form onSubmit={onSubmit}>
          <p className="h5 text-center my-4">Se connecter</p>
          <div className="grey-text">
            <MDBInput
              name="username"
              label="Votre nom d'utilisateur"
              icon="user"
              group
              type="text"
              onChange={handleChange("username")}
            />
            <MDBInput
              name="password"
              label="Votre mot de passe"
              icon="lock"
              group
              type="password"
              onChange={handleChange("password")}
            />
          </div>
          <div className="text-center">
            <button type="submit" className="globalButton">
              Connexion
            </button>
          </div>
        </form>
      </MDBContainer>
    </Layout>
  );
};

export default Login;
