// assets
import { IconDashboard, IconSettings, IconBook, IconFileText } from '@tabler/icons-react';

// constant
const icons = { IconDashboard, IconSettings, IconBook, IconFileText };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  // title: <span style={{ color: 'white' }}>Student</span>,
  type: 'group1',
  children: [
    {
      id: 'default',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'subject',
      title: 'Subjects',
      type: 'item',
      url: '/dashboard/subject',
      icon: icons.IconBook, 
      breadcrumbs: false
    },
    {
      id: 'result',
      title: 'Results',
      type: 'item',
      url: '/dashboard/result',
      icon: icons.IconFileText,
      breadcrumbs: false
    },
    {
      id: 'setting',
      title: 'Settings',
      type: 'item',
      url: '/dashboard/setting',
      icon: icons.IconSettings, 
      breadcrumbs: false
    },
  ]
};

export default dashboard;
