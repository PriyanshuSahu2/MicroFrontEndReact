// Sidebar.jsx
import { Box, Stack, Text } from '@mantine/core';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: 250,
        height: '100vh',
        backgroundColor: '#f5f5f5',
        padding: '16px',
      }}
    >
      <Stack spacing="sm">
        <Text weight={700}>Navigation</Text>
        <Link to="/pre" style={{ textDecoration: 'none', color: 'black' }}>
          PreRFQ
        </Link>
        <Link to="/rfq" style={{ textDecoration: 'none', color: 'black' }}>
          RFQ
        </Link>
        <Link to="/post" style={{ textDecoration: 'none', color: 'black' }}>
          PostRFQ
        </Link>
      </Stack>
    </Box>
  );
}
