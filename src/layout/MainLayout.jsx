import React, { Fragment } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <Fragment>
      <NavBar />
      {/* <main style={{margin:"100px 0 0 0"}}>{children}</main> */}
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default MainLayout;
