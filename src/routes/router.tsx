import { ElementType, Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router";
import { PATH_AUTH, PATH_GENERIC, PATH_PAGE } from "./paths";
// hooks

// layouts

// guards
// import { AuthGuard, GuestGuard } from "../guards";
// config
import { PATH_AFTER_LOGIN } from "../config";

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) =>
  (
    // eslint-disable-next-line react-hooks/rules-of-hooks
    <Suspense fallback={<div>Loading ...</div>}>
      <Component {...props} />
    </Suspense>
  );

const Router = () => {
  const authRoutes = {
    path: "auth",
    children: [
      {
        path: "login",
        element: <Login />,
      },
      // { path: "register", element: <Register /> },
      // { path: "reset-password", element: <ResetPassword /> },
      // { path: "new-password", element: <NewPassword /> },
      // { path: "verify", element: <VerifyCode /> },
    ],
  };

  const appRoutes = {
    path: "app",
    // element: (
    //   <AuthGuard>
    //     <AppLayout />
    //   </AuthGuard>
    // ),
    children: [
      { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
      { path: "home", element: <AppPage /> },
    ],
  };

  const genericRoutes = {
    path: "*",
    // element: <LayoutHere />,
    children: [
      // { path: "coming-soon", element: <ComingSoon /> },
      // { path: "maintenance", element: <Maintenance /> },
      // { path: "500", element: <Page500 /> },
      // { path: "404", element: <Page404 /> },
      // { path: "403", element: <Page403 /> },
      { path: "*", element: <Navigate to="/404" replace /> },
    ],
  };

  const routes = [
    authRoutes,
    appRoutes,
    genericRoutes,
    {
      path: "/",
      // element: <MainLayout />,
      children: [
        // { element: <HomePage />, index: true },
        // { path: "about-us", element: <About /> },
        // { path: "contact-us", element: <Contact /> },
        // { path: "faqs", element: <Faqs /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ];

  return useRoutes(routes);
};

//auth
const Login = Loadable(lazy(() => import("../pages/auth/LoginPage")));
const AppPage = Loadable(lazy(() => import("../pages/AppPage")));

export default Router;
