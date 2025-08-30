import { MemoryRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PR from "./pages/PR";
import MyAccounts from "./pages/MyAccounts";

export default function PreRFQPage({ basePath = "/pre" }) {
  return (
    <MemoryRouter initialEntries={[basePath + "/dashboard"]}>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="pr" element={<PR />} />
        <Route path="accounts" element={<MyAccounts />} />
      </Routes>
    </MemoryRouter>
  );
}
