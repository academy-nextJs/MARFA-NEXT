export const publicRoutes = ["/", "/login", "/verifyCode", "/completeRegister"];

const dashboardSubRoutes = [
  "",
  "favorites",
  "profile",
  "payments",
  "Mainmanagementreserves",
  "notifications",
  "my-comments",
  "seller",
  "seller/profile",
  "seller/managementEstats",
  "seller/managementEstats/MyHouses",
  "seller/managementEstats/NewHouses",
  "seller/Mainmanagementreserves",
  "seller/financialmanagement",
  "seller/payments",
  "seller/manage-comments",
  "seller/notifications",
];

export const privateRoutes = dashboardSubRoutes.map(
  (sub) => `/dashboard${sub ? `/${sub}` : ""}`
);

export const authRoutes = ["/login", "/verifyCode", "/completeRegister"];
