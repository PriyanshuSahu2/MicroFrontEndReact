// Sidebar.jsx
import { Navbar, Text, Stack } from "@mantine/core";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <Navbar
      width={{ base: 250 }}
      height="100vh"
      p="xs"
      sx={{ backgroundColor: "#f5f5f5" }}
    >
      <Stack spacing="sm">
        <Text weight={700}>Navigation</Text>
        <Link to="/pre" style={{ textDecoration: "none", color: "black" }}>
          PreRFQ
        </Link>
        <Link to="/rfq" style={{ textDecoration: "none", color: "black" }}>
          RFQ
        </Link>
        <Link to="/post" style={{ textDecoration: "none", color: "black" }}>
          PostRFQ
        </Link>
      </Stack>
    </Navbar>
  );
}
