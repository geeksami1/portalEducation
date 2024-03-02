// import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
// import Loadable from 'ui-component/Loadable';
import TeacherDashboard from 'views/dashboard/Teacher';
import Courses from 'views/dashboard/Teacher/Courses';
import Student from 'views/dashboard/Teacher/Student';


// dashboard routing
// const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// const isTeacher = () => {
//   const user = JSON.parse(localStorage.getItem('user'));
//   console.log(user, 'Teacher');
//   return user && user.userRole === 'teacher';
// };

const TeacherRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element:<TeacherDashboard /> 
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'teacher',
          element:  <TeacherDashboard /> 
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'teacher',
          element: <TeacherDashboard />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'course',
          element: <Courses />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'student',
          element: <Student />
        }
      ]
    }


  ]
};

export default TeacherRoutes;
