import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contract from "./pages/Contract";
import PO from "./pages/PO";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="po" element={<PO />} />
          <Route path="contact" element={<Contract />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
