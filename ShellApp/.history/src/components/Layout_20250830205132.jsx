// ShellLayout.jsx
import { Header, Footer, Box } from "@mantine/core";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function ShellLayout() {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Header height={60} p="xs">
          Header / Shell App
        </Header>
        <Box sx={{ flex: 1, padding: "16px", backgroundColor: "#fafafa" }}>
          <Outlet />
        </Box>
        <Footer height={50} p="xs">
          Footer
        </Footer>
      </Box>
    </Box>
  );
}
