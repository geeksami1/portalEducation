// assets
import { IconDashboard, IconSettings, IconBook, IconFileText } from '@tabler/icons-react';

// constant
// const icons = { IconDashboard, IconSettings, IconBook, IconFileText };
const icons = { IconDashboard, IconSettings, IconBook, IconFileText };



const dashboard2 = {
  id: 'dashboard2',
  
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/teacher',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
        id: 'course',
        title: 'Course',
        type: 'item',
        url: '/dashboard/course',
        icon: icons.IconDashboard,
        breadcrumbs: false
      },
      {
        id: 'student',
        title: 'Student',
        type: 'item',
        url: '/dashboard/student',
        icon: icons.IconDashboard,
        breadcrumbs: false
      },
    
  ]
};

export default dashboard2;
