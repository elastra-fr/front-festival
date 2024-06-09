import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import Infos from "./pages/infos/Infos";
import Faq from "./pages/faq/Faq";
import FullMap from "./pages/fullmap/Fullmap";
import Mentions from "./pages/mentions/Mentions";
import FullActu from "./pages/fullactu/FullActu";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import UserProfil from "./pages/userprofil/UserProfil";
import ExclusiveContent from "./pages/exclusivecontent/ExclusiveContent";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Partners from "./pages/partners/Partners";
import RedBand from "./components/redband/RedBand";

function App() {

  const [fullConcerts, setFullConcerts] = useState([]);



  const getConcerts = () => {
    fetch("http://festival.local/wp-json/wp/v2/concert?per_page=100")
      .then((response) => response.json())
      .then((data) => {
        data.sort((a, b) => {
          return a.acf.horaire - b.acf.horaire;
        });
        setFullConcerts(data);
      });
  };

  useEffect(() => {
    getConcerts;
  }, []);




  

  return (
    <>
    <AuthProvider>
      <BrowserRouter>
      <RedBand />
        <Routes>
          <Route path="/" element={<HomePage concerts={fullConcerts} />} />
          <Route path="/home" element={<HomePage concerts={fullConcerts} />} />
          <Route path="/infos" element={<Infos />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/map" element={<FullMap />} />
          <Route path="/mentions" element={<Mentions />} />
          <Route path="/fullactu" element={<FullActu />} />
          <Route path="/partner" element={<Partners />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
                  <Route element={<ProtectedRoute />}>
            <Route path="/userprofil" element={<UserProfil />} />
            <Route path="/exclusive-content" element={<ExclusiveContent />} />
          </Route>

        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
