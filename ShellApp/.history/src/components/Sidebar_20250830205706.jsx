import { useState } from 'react';
import { Box, Stack, Text, UnstyledButton, ThemeIcon } from '@mantine/core';
import { IconHome, IconFileText, IconCheck } from '@tabler/icons-react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { label: 'PreRFQ', icon: IconHome, path: '/pre' },
  { label: 'RFQ', icon: IconFileText, path: '/rfq' },
  { label: 'PostRFQ', icon: IconCheck, path: '/post' },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <Box
      sx={(theme) => ({
        width: collapsed ? 80 : 250,
        transition: 'width 0.2s',
        height: '100vh',
        backgroundColor: theme.colors.gray[0],
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      })}
    >
      <Stack spacing="sm">
        {links.map((link) => {
          const active = location.pathname === link.path;
          return (
            <Link key={link.label} to={link.path} style={{ textDecoration: 'none' }}>
              <UnstyledButton
                sx={(theme) => ({
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                  padding: '8px',
                  borderRadius: theme.radius.sm,
                  backgroundColor: active ? theme.colors.blue[0] : 'transparent',
                  '&:hover': {
                    backgroundColor: theme.colors.blue[1],
                  },
                })}
              >
                <ThemeIcon color="blue" variant="light" size={30}>
                  <link.icon size={20} />
                </ThemeIcon>
                {!collapsed && <Text ml="sm">{link.label}</Text>}
              </UnstyledButton>
            </Link>
          );
        })}
      </Stack>

      <UnstyledButton
        onClick={() => setCollapsed((c) => !c)}
        sx={{
          marginTop: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '8px',
        }}
      >
        <Text>{collapsed ? '➡️' : '⬅️'}</Text>
      </UnstyledButton>
    </Box>
  );
}
