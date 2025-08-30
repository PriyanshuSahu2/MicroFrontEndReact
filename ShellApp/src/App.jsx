import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ShellLayout from "./components/Layout";
import "@mantine/core/styles.css";

// Lazy load micro-frontend
const PreRFQPage = React.lazy(() => import("preRfq/PreRFQPage"));
const RFQPage = React.lazy(() => import("rfq/RFQPage"));
const PostRFQPage = React.lazy(() => import("postRfq/PostRFQPage"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShellLayout />}>
          <Route
            path="pre/*"
            element={
              <React.Suspense fallback={<div>Loading PreRFQ...</div>}>
                <PreRFQPage />
              </React.Suspense>
            }
          />
          <Route
            path="rfq/*"
            element={
              <React.Suspense fallback={<div>Loading RFQ...</div>}>
                <RFQPage />
              </React.Suspense>
            }
          />
          <Route
            path="post/*"
            element={
              <React.Suspense fallback={<div>Loading PostRFQ...</div>}>
                <PostRFQPage />
              </React.Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
