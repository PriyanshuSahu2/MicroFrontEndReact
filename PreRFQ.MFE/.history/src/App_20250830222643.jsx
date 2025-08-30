import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import PR from './pages/PR';

export default function App() {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="pr" element={<PR />} />
    </Routes>
  );
}
