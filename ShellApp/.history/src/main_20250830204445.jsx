import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import { MantineProvider } from "@mantine/core";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider
      withGlobalClasses
      defaultColorScheme="light"
      theme={{
        fontFamily: "Inter, sans-serif",
        primaryColor: "indigo",
      }}
    >
      <App />
    </MantineProvider>
  </StrictMode>
);
