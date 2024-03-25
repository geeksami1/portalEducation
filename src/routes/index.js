// import { useRoutes } from 'react-router-dom';
// import MainRoutes from './MainRoutes';
// import AuthenticationRoutes from './AuthenticationRoutes';
// import TeacherRoutes from './TeacherRoutes';
// const user = JSON.parse(localStorage.getItem('user'));
// console.log(user, 'TeacherRoutes');
// const userRoute = user && user.role;
// export default function ThemeRoutes() {
//   return useRoutes([
//     userRoute === 'teacher' ? TeacherRoutes :
//     MainRoutes,
//     AuthenticationRoutes
//   ]);
// }

//2ND APPROACH

import { useRoutes } from 'react-router-dom';
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import TeacherRoutes from './TeacherRoutes';
import ParentRoutes from './ParentRoutes'; // Import ParentRoutes if not already done

export default function ThemeRoutes() {
  const user = JSON.parse(localStorage.getItem('user'));
  const userRole = user ? user.role : null; // Handle the case when user is null

  let routesToRender;

  switch (userRole) {
    case 'teacher':
      routesToRender = TeacherRoutes;
      break;
    case 'parent':
      routesToRender = ParentRoutes; // Assuming you have ParentRoutes
      break;
    default:
      routesToRender = MainRoutes;
      break;
  }

  return useRoutes([routesToRender, AuthenticationRoutes]);
}

