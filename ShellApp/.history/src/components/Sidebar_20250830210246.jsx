import { Box, Stack, UnstyledButton, Text } from '@mantine/core';
import { IconHome, IconFileText, IconSettings } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const links = [
    { label: 'Home', icon: <IconHome size={20} /> },
    { label: 'RFQ', icon: <IconFileText size={20} /> },
    { label: 'Settings', icon: <IconSettings size={20} /> },
    { label: 'Profile', icon: <IconHome size={20} /> }, // placeholder
    { label: 'Reports', icon: <IconFileText size={20} /> }, // placeholder
  ];

  return (
    <Box
      sx={{
        width: 200,
        height: '100vh',
        backgroundColor: '#f5f5f5',
        padding: '16px',
      }}
    >
      <Stack spacing="sm">
        {links.map((link) => (
          <Link
            key={link.label}
            to="#"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <UnstyledButton
              sx={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                padding: '8px',
                borderRadius: 4,
                '&:hover': { backgroundColor: '#e0e0e0' },
              }}
            >
              {link.icon}
              <Text ml="sm">{link.label}</Text>
            </UnstyledButton>
          </Link>
        ))}
      </Stack>
    </Box>
  );
}
