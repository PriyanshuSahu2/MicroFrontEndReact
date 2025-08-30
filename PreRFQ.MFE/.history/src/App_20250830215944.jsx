// PreRFQApp.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PR from "./pages/PR";

const router = createBrowserRouter([
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/pr", element: <PR /> },
]);

export default function PreRFQApp() {
  return <RouterProvider router={router} />;
}
