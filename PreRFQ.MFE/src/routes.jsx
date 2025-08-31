// routes.jsx (pure routes, no BrowserRouter)
import { Routes, Route } from "react-router-dom";
import PR from "./pages/PR";
import Dashboard from "./pages/Dashboard";
import MyAccounts from "./pages/MyAccounts";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="pr-management" element={<PR />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="account" element={<MyAccounts />} />
    </Routes>
  );
}
