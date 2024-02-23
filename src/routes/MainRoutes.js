import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import TeacherDashboard from 'views/dashboard/Teacher';
import Subject from 'views/dashboard/Default/Subject';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
// const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
// const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
// const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
// const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
// const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

// Function to check if the user is a teacher
const isTeacher = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user, "userMaiRoutes")
  return user && user.userRole === 'teacher';
};

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: isTeacher() ? <TeacherDashboard /> : <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: isTeacher() ? <TeacherDashboard /> : <DashboardDefault />
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
          path: 'subject',
          element: <Subject />
        }
      ]
    },
    // {
    //   path: 'utils',
    //   children: [
    //     {
    //       path: 'util-typography',
    //       element: <UtilsTypography />
    //     }
    //   ]
    // },
    // {
    //   path: 'utils',
    //   children: [
    //     {
    //       path: 'util-color',
    //       element: <UtilsColor />
    //     }
    //   ]
    // },
    // {
    //   path: 'utils',
    //   children: [
    //     {
    //       path: 'util-shadow',
    //       element: <UtilsShadow />
    //     }
    //   ]
    // },
    // {
    //   path: 'icons',
    //   children: [
    //     {
    //       path: 'tabler-icons',
    //       element: <UtilsTablerIcons />
    //     }
    //   ]
    // },
    // {
    //   path: 'icons',
    //   children: [
    //     {
    //       path: 'material-icons',
    //       element: <UtilsMaterialIcons />
    //     }
    //   ]
    // },
    {
      path: 'sample-page',
      element: <SamplePage />
    }
  ]
};

export default MainRoutes;
