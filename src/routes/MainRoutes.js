import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import TeacherDashboard from 'views/dashboard/Teacher';
import Subject from 'views/dashboard/Default/Subject';
import Result from 'views/dashboard/Default/Result';
import Settings from 'views/dashboard/Default/Settings';
import Topics from 'views/dashboard/Default/Topics';
import Lesson from 'views/dashboard/Default/Lesson';
import Chapter from 'views/dashboard/Default/Chapter';
import Course from 'views/dashboard/Teacher/Courses';
import Student from 'views/dashboard/Teacher/Student';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
// const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
// const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
// const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
// const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
// const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
// const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

// Function to check if the user is a teacher
const isTeacher = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user, 'userMaiRoutes');
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
    // SUBJECT ROUTING
    {
      path: 'dashboard',
      children: [
        {
          path: 'subject',
          element: <Subject />
        }
      ]
    },
    // TOPIC ROUTING
    {
      path: 'dashboard',
      children: [
        {
          path: 'topic',
          element: <Topics />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'lesson',
          element: <Lesson />
        }
      ]
    },
    // LESSON ROUTING
    {
      path: 'dashboard',
      children: [
        {
          path: 'result',
          element: <Result />
        }
      ]
    },
    // CHAPTER ROUTING
    {
      path: 'dashboard',
      children: [
        {
          path: 'chapter',
          element: <Chapter />
        }
      ]
    },
    // SETTING ROUTING
    {
      path: 'dashboard',
      children: [
        {
          path: 'setting',
          element: <Settings />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'course',
          element: <Course />
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
    // {
    //   path: 'sample-page',
    //   element: <SamplePage />
    // }
  ]
};

export default MainRoutes;
