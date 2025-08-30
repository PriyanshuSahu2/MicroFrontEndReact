import { useRoutes } from "react-router-dom";
import PR from "./pages/PR";
import Dashboard from "./pages/Dashboard";

export default function PreRFQPage() {
  // These are **relative paths** to /pre/*
  const element = useRoutes([
    { path: "dashboard", element: <Dashboard /> },
    { path: "pr", element: <PR /> },
  ]);

  return element;
}
