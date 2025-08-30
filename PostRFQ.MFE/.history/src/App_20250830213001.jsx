import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contract from "./pages/contract";
import PO from "./pages/po";

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
