// ============================================================
// App.jsx
// Pertenece a: Clase 04 - Dashboard y rutas protegidas
// ------------------------------------------------------------
// Define TODAS las rutas (URLs) de la aplicacion usando
// react-router-dom. Es como el "mapa" de la app: que componente
// se muestra segun la URL que el usuario visite.
// ============================================================

// Piezas de react-router-dom: Routes/Route definen el mapa de rutas,
// Navigate sirve para redirigir de una URL a otra.
import { Navigate, Route, Routes } from 'react-router-dom';

// Guardian que protege las rutas privadas del dashboard
import ProtectedRoute from './routes/ProtectedRoute';
// Esqueleto visual (sidebar + topbar) que comparten las paginas del dashboard
import DashboardLayout from './layouts/DashboardLayout';

// Paginas publicas y privadas de la aplicacion
import LoginPage from './pages/LoginPage';
import DashboardHome from './pages/DashboardHome';
import UsuariosPage from './pages/UsuariosPage';
import CategoriasPage from './pages/CategoriasPage';
import SubcategoriasPage from './pages/SubcategoriasPage';
import ProductosPage from './pages/ProductosPage';
import NotFoundPage from './pages/NotFoundPage';

// Componente raiz: se renderiza dentro de <BrowserRouter> (ver main.jsx)
function App() {
  return (
    <Routes>
      {/* Ruta raiz: manda directo al login (si ya hay sesion,
          ProtectedRoute se encargara de dejarlo pasar al dashboard) */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Ruta publica: cualquiera puede entrar a /login */}
      <Route path="/login" element={<LoginPage />} />

      {/* Grupo de rutas PROTEGIDAS: todo lo que este dentro de este
          <Route> solo se muestra si ProtectedRoute confirma que hay
          sesion activa; si no, redirige a /login. */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashboardLayout />}>
          {/* index = lo que se muestra en exactamente "/dashboard" */}
          <Route index element={<DashboardHome />} />
          <Route path="usuarios" element={<UsuariosPage />} />
          
          
          <Route path="categorias" element={<CategoriasPage />} />
          <Route path="subcategorias" element={<SubcategoriasPage />} />
          <Route path="productos" element={<ProductosPage />} />
        </Route>
      </Route>

      {/* Cualquier otra URL que no coincida con las anteriores */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

// Exportamos App para que main.jsx lo pueda renderizar
export default App;
