import MainLayout from 'layout/MainLayout';
import ParentDashboard from 'views/dashboard/Parent';



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




  ]
};

export default ParentRoutes;
