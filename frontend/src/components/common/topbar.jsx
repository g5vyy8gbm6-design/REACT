
// Hook para navegar programaticamente (sin que el usuario haga clic en un Link)
import { useNavigate } from 'react-router-dom';
// Hook para leer el usuario logueado y la funcion logout()
import { useAuth } from '../../context/AuthContext';

// No recibe props: toma todo lo que necesita del AuthContext
function Topbar() {
  // usuario: datos de quien inicio sesion; logout: borra la sesion
  const { usuario, logout } = useAuth();
  // Funcion para cambiar de URL desde codigo JavaScript
  const navigate = useNavigate();

  // Al cerrar sesion: limpiamos el contexto/localStorage y
  // mandamos al usuario de vuelta a la pantalla de login.
  function manejarLogout() {
    logout();
    navigate('/login', { replace: true });
  }

  return (
    <nav className="navbar navbar-light bg-white border-bottom px-4 py-3">
      <span className="navbar-brand mb-0 h1 fs-6 text-muted">Panel de administracion</span>

      <div className="d-flex align-items-center gap-3">
        <div className="text-end d-none d-sm-block">
          <div className="fw-semibold">{usuario?.nombre}</div>
          <small className="text-muted text-capitalize">{usuario?.rol}</small>
        </div>

        <button className="btn btn-outline-danger btn-sm d-flex align-items-center gap-1" onClick={manejarLogout}>
          <i className="bi bi-box-arrow-right"></i>
          Salir
        </button>
      </div>
    </nav>
  );
}

// Exportamos el componente para usarlo en DashboardLayout.jsx
export default Topbar;
