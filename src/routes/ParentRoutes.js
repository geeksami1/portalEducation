import MainLayout from 'layout/MainLayout';
import Settings from 'views/dashboard/Default/Settings';
import ParentDashboard from 'views/dashboard/Parent';
import Calendar from 'views/dashboard/Parent/Calendar';
import MyChildrens from 'views/dashboard/Parent/MyChildrens';

const ParentRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <ParentDashboard />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'parent',
          element: <ParentDashboard />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'parent',
          element: <ParentDashboard />
        }
      ]
    },
    //MY CHILDRENS
    {
      path: 'dashboard',
      children: [
        {
          path: 'children',
          element: <MyChildrens />
        }
      ]
    },
    //Calendar
    {
      path: 'dashboard',
      children: [
        {
          path: 'calendar',
          element: <Calendar />
        }
      ]
    },

    //Setting
    {
      path: 'dashboard',
      children: [
        {
          path: 'setting',
          element: <Settings />
        }
      ]
    }
  ]
};

export default ParentRoutes;
