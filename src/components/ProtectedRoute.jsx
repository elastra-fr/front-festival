import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";



const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth();

  //console.log('ProtectedRoute exécuté :', { isAuthenticated, isLoading });

  // Bloquer l'accès tant que la vérification est en cours
  if (isLoading) {
    return <div>Chargement...</div>; // Vous pouvez personnaliser ce message
  }

  // Autoriser uniquement si authentifié
  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
