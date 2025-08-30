import { Routes, Route, useRoutes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import PR from './pages/PR';

export default function App() {
  const routes = useRoutes([
    { path: "dashboard", element: <Dashboard /> },
    { path: "accounts", element: <Accounts /> },
    { path: "pr", element: <PR /> },
  ]);
  
  return routes
}
