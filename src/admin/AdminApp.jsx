import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import AdminLogin from "./AdminLogin";
import AdminLayout from "./AdminLayout";
import DashboardHome from "./pages/DashboardHome";
import Registrations from "./pages/Registrations";
import Analytics from "./pages/Analytics";
import ExportData from "./pages/ExportData";
import Settings from "./pages/Settings";

/**
 * ProtectedRoute — redirects to /admin/login if not authenticated.
 * Auth is stored in sessionStorage under "ft_admin_auth".
 */
function ProtectedRoute({ children }) {
  const isAuth = sessionStorage.getItem("ft_admin_auth") === "true";
  if (!isAuth) return <Navigate to="/admin/login" replace />;
  return children;
}

/**
 * AdminApp — standalone admin SPA.
 * Mounted at /admin/* in the main App.jsx (no Navbar/Footer).
 */
export default function AdminApp() {
  return (
    <Routes>
      {/* /admin → redirect to login */}
      <Route index element={<Navigate to="/admin/login" replace />} />

      {/* Login page */}
      <Route path="login" element={<AdminLogin />} />

      {/* Protected dashboard routes */}
      <Route
        path="dashboard"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        {/* AdminLayout renders <Outlet />, so nested routes appear in the main content */}
        <Route index element={<DashboardHome />} />
      </Route>

      <Route
        path="registrations"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Registrations />} />
      </Route>

      <Route
        path="analytics"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Analytics />} />
      </Route>

      <Route
        path="export"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<ExportData />} />
      </Route>

      <Route
        path="settings"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Settings />} />
      </Route>

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/admin/login" replace />} />
    </Routes>
  );
}
