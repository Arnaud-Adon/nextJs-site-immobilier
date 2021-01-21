import React from "react";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children, footer }) => {
  return (
    <>
      <Header />
      {children}
      {footer === true ? <Footer /> : false}
    </>
  );
};

export default Layout;
