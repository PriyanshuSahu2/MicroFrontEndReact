import { useRoutes } from "react-router-dom";
import PR from "./pages/PR";
import Dashboard from "./pages/Dashboard";
import MyAccounts from "./pages/MyAccounts";

export default function PreRFQPage() {
  const routes = useRoutes([
    { path: "dashboard", element: <Dashboard /> },
    { path: "pr", element: <PR /> },
    { path: "accounts", element: <MyAccounts /> },
  ]);

  return routes;
}
