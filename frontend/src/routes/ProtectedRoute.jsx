import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

function ProtectedRoute() {
  const { estaAutenticado, cargando } = useAuth();

  if (cargando) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  return estaAutenticado ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
