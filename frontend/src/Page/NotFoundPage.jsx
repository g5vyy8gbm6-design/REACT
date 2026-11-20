import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 text-center px-3">
      <h1 className="display-4 fw-bold text-primary">404</h1>
      <p className="text-muted mb-4">La página que buscas no existe.</p>
      <Link to="/" className="btn btn-primary">
        Volver al inicio
      </Link>
    </div>
  );
}

export default NotFoundPage;
