// ThemeRoutes.js

import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import TeacherRoutes from './TeacherRoutes';

// ==============================|| ROUTING RENDER ||============================== //
const user = JSON.parse(localStorage.getItem('user'));
console.log(user, 'TeacherRoutes');
const userRoute = user && user.role;
export default function ThemeRoutes() {
  return useRoutes([
    // MainRoutes,
    userRoute === 'teacher' ? TeacherRoutes :
    MainRoutes,
    AuthenticationRoutes
  ]);
}
