import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/Sidebar.jsx";
import Topbar from "../components/common/topbar.jsx";

function DashboardLayout() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div
        className="flex-grow-1 d-flex flex-column"
        style={{ minHeight: "100vh", backgroundColor: "#f4f6f9" }}
      >
        <Topbar />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
