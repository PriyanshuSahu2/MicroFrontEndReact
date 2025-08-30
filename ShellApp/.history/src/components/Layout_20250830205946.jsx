import {  Box } from "@mantine/core";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function ShellLayout() {
  return (
    <Box className={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Box height={60} p="xs">
          Header / Shell App
        </Box>
        <Box sx={{ flex: 1, padding: "16px", backgroundColor: "#fafafa" }}>
          <Outlet />
        </Box>
        <Box height={50} p="xs">
          Footer
        </Box>
      </Box>
    </Box>
  );
}
