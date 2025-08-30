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
    { name: "Overview", path: "/overview", icon: IconLayoutDashboard },
    { name: "Categories", path: "/categories", icon: IconFolders },
    { name: "Expenses", path: "/expenses", icon: IconReceipt },
    { name: "Upcoming Payments", path: "/upcoming-payment", icon: IconCalendarBolt },
    { name: "People", path: "/people", icon: IconUserCircle },
    { name: "Settlements", path: "/settlements", icon: IconCurrencyRupee },
    { name: "Settings", path: "/settings", icon: IconSettings },
  ];
  
  export default function Sidebar() {
    const cycles = [
      { label: "Cycle 1", value: "1" },
      { label: "Cycle 2", value: "2" },
    ];
  
    const user = { name: "Priyanshu S.", email: "priyanshu@example.com" };
  
    return (
      <div className="w-72 bg-white h-screen shadow-sm flex flex-col justify-between px-4 py-6">
        {/* Top Section */}
        <div>
          {/* User Avatar and Info */}
          <div className="mb-6 px-1">
            <Group align="center" gap="sm">
              <Avatar radius="xl" color="initials" size="md" name={user.name} />
              <div>
                <Text fw={600} size="sm">{user.name}</Text>
                <Text size="xs" c="dimmed">{user.email}</Text>
              </div>
            </Group>
  
            {/* Cycle Dropdown */}
            <Select
              placeholder="Select Cycle"
              data={cycles}
              defaultValue="1"
              size="xs"
              className="w-full mt-3"
              variant="default"
              clearable={false}
            />
          </div>
  
          {/* Nav Links */}
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to="#"
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all"
                >
                  <Icon size={18} />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
  
        {/* Bottom Section / Logout */}
        <div>
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
  