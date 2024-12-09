// src/components/Layout.js
import { Outlet } from "react-router-dom";
import RedBand from "./redband/RedBand";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout = () => {
  return (
    <>
      <RedBand />
        <Header />
     
      <>
        <Outlet />
      </>
        <Footer />
    </>
  );
};

export default Layout;
