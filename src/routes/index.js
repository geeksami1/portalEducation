// ThemeRoutes.js

import { useRoutes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import useSelector to access Redux state

// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  const userRole = useSelector((state) => state.user.currentRole); // Access user's role from Redux state

  // Conditional rendering of routes based on user's role
  return useRoutes([
    // Use Navigate component to redirect to the desired route
    { path: '/', element: <Navigate to={userRole === 'teacher' ? '/dashboard/teacher' : '/dashboard/default'} replace /> },
    MainRoutes,
    AuthenticationRoutes
  ]);
}
