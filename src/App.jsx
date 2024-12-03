import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Infos from "./pages/Infos";
import Faq from "./pages/Faq";
import FullMap from "./pages/Fullmap";
import Mentions from "./pages/Mentions";
import FullActu from "./pages/FullActu";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserProfil from "./pages/UserProfil";
import ExclusiveContent from "./pages/ExclusiveContent";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Partners from "./pages/Partners";
//import RedBand from "./components/redband/RedBand";
import Layout from "./components/Layout";
import NotFoundPage from "./pages/NotFoundPage";

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
        <Routes>
          {/* Routes avec Layout */}
          <Route element={<Layout />}>
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
                      <Route path="*" element={<NotFoundPage />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/userprofil" element={<UserProfil />} />
              <Route path="/exclusive-content" element={<ExclusiveContent />} />
            </Route>
          </Route>
          
          {/* Routes sans Layout si besoin*/}
         
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    </>
  );
}

export default App;
