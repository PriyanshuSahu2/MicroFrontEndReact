import { Routes, Route, useRoutes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import PR from './pages/PR';

export default function App() {
  const routes = useRoutes([
    { path: "pre/dashboard", element: <Dashboard /> },
    { path: "pr", element: <PR /> },
  ]);
  
  return routes
}
