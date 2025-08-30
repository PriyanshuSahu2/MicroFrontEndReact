import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PR from "./pages/PR";
import Dashboard from "./pages/Dashboard";
import MyAccounts from "./pages/MyAccounts";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="pr" element={<PR />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="accounts" element={<MyAccounts />} />
      </Routes>
    </div>
  );
};

export default App;
