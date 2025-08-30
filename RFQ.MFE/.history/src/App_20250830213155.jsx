import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contract from "./pages/Contract";
import PO from "./pages/PO";
import Requirement from "./pages/Requirement";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="requirement" element={<Requirement />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
