import { Outlet } from "react-router-dom";
import RedBand from "./redband/RedBand";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Link to="#pageContent" className="skip-to-main-link">
        Aller au contenu principal
      </Link>

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
