import { Navigate, Route, Routes } from "react-router-dom";
import DashboardHome from "./Page/DashboardHome.jsx";
import LoginPage from "./Page/LoginPage.jsx";
import NotFoundPage from "./Page/NotFoundPage.jsx";
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
