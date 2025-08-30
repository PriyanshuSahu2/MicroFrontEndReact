import {
    IconLayoutDashboard,
    IconSettings,
    IconReceipt,
    IconFolders,
    IconUserCircle,
    IconCurrencyRupee,
    IconCalendarBolt,
  } from "@tabler/icons-react";
  import { Avatar, Button, Divider, Text, Select, Group } from "@mantine/core";
  import { Link } from "react-router-dom";
  
  const navItems = [
    { name: "Dashboard", icon: IconLayoutDashboard },
    { name: "My Accounts", icon: IconFolders },
    { name: "PR Management", icon: IconReceipt },
    { name: "Requirements", icon: IconCalendarBolt },
    { name: "Contracts", icon: IconUserCircle },
    { name: "POs", icon: IconSettings },
    { name: "Reports", icon: IconCurrencyRupee },
  ];
  
  export default function Sidebar() {
    const cycles = [
      { label: "Cycle 1", value: "1" },
      { label: "Cycle 2", value: "2" },
    ];
  
    const user = { name: "Automation Customer", email: "priyanshu@example.com" };
  
    const sidebarStyle = {
      width: '288px', // 72 * 4
      height: '100vh',
      backgroundColor: 'white',
      boxShadow: '0 0 10px rgba(0,0,0,0.05)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '24px 16px',
    };
  
    const topSectionStyle = {
      display: 'flex',
      flexDirection: 'column',
    };
  
    const userInfoStyle = {
      marginBottom: '24px',
    };
  
    const navLinkStyle = {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '8px 12px',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: 500,
      color: '#4B5563', // gray-700
      textDecoration: 'none',
      transition: 'all 0.2s',
    };
  

  
    const bottomSectionStyle = {};
  
    return (
      <div style={sidebarStyle}>
        <div style={topSectionStyle}>
          <div style={userInfoStyle}>
            <Group align="center" spacing="sm">
              <Avatar radius="xl" color="initials" size="md" name={user.name} />
              <div>
                <Text weight={600} size="sm">{user.name}</Text>
                <Text size="xs" color="dimmed">{user.email}</Text>
              </div>
            </Group>
          </div>
  
          {/* Nav Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to="#"
                  style={navLinkStyle}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = '#F9FAFB'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <Icon size={18} />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
  
        {/* Bottom Section / Logout */}
        <div style={bottomSectionStyle}>
          <Divider my="sm" />
          <Button
            fullWidth
            variant="light"
            color="red"
            leftSection={<IconSettings size={16} />}
          >
            Logout
          </Button>
        </div>
      </div>
    );
  }
  