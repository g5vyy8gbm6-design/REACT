import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

function Topbar() {
  const { usuario, logout } = useAuth();
  const navigate = useNavigate();

  function manejarLogout() {
    logout();
    navigate("/login", { replace: true });
  }

  return (
    <nav className="navbar navbar-light bg-white border-bottom px-4 py-3">
      <span className="navbar-brand mb-0 h1 fs-6 text-muted">
        Panel de administración
      </span>
      <div className="d-flex align-items-center gap-3">
        <div className="text-end d-none d-sm-block">
          <div className="fw-semibold">{usuario?.nombre}</div>
          <small className="text-muted text-capitalize">{usuario?.rol}</small>
        </div>
        <button
          className="btn btn-outline-danger btn-sm d-flex align-items-center gap-1"
          onClick={manejarLogout}
        >
          <i className="bi bi-box-arrow-right" aria-hidden="true" />
          Salir
        </button>
      </div>
    </nav>
  );
}

export default Topbar;
