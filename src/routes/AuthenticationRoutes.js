import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Login3')));
const AuthRegister3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Register3')));
const AuthForgotPassword3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/ForgetPassword3')));
const AuthOTP3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/AuthOTP3')));
const ResetPassword3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/ResetPassword3')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/auth/login',
      element: <AuthLogin3 />
    },
    {
      path: '/auth/register',
      element: <AuthRegister3 />
    },
    {
      path: '/auth/forgot-password',
      element: <AuthForgotPassword3 />
    },
    {
      path: '/auth/otp',
      element: <AuthOTP3 />
    },
    {
      path: '/auth/reset-password',
      element: <ResetPassword3 />
    }
  ]
};

export default AuthenticationRoutes;
