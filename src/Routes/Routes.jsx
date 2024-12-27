import { lazy } from "react";

const Routes = [
  {
    path: "/aboutUs",
    component: lazy(() => import("../pages/AboutUsPage")),
  },
  {
    path: "/commerceDisclosure",
    component: lazy(() => import("../pages/CommerceDisclosurePage")),
  },
  {
    path: "/privacyPolicy",
    component: lazy(() => import("../pages/PrivacyPolicyPage")),
  },
  {
    path: "/contactUs",
    component: lazy(() => import("../pages/ContactUsPage")),
  },
];

export default Routes;