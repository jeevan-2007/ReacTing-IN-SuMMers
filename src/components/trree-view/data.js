const MenuData = [
  {
    id: 1,
    title: "Dashboard",
    icon: "📊",
    path: "/dashboard",
  },
  {
    id: 2,
    title: "Users",
    icon: "👥",
    path: "/users",
    children: [
      {
        id: 21,
        title: "All Users",
        path: "/users/all",
      },
      {
        id: 22,
        title: "Add User",
        path: "/users/add",
      },
      {
        id: 23,
        title: "User Settings",
        path: "/users/settings",
        children: [
          {
            id: 231,
            title: "Profile Settings",
            path: "/users/settings/profile",
          },
          {
            id: 232,
            title: "Privacy Settings",
            path: "/users/settings/privacy",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Settings",
    icon: "⚙️",
    path: "/settings",
    children: [
      {
        id: 31,
        title: "General",
        path: "/settings/general",
      },
      {
        id: 32,
        title: "Billing",
        path: "/settings/billing",
      },
    ],
  },
  {
    id: 4,
    title: "Help",
    icon: "❓",
    path: "/help",
  },
];
export default MenuData