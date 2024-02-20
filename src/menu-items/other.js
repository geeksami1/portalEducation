// assets
import { IconBrandChrome, IconHelp } from '@tabler/icons-react';

// constant
const icons = { IconBrandChrome, IconHelp };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
  id: 'sample-docs-roadmap',
  type: 'group',
  children: [
    {
      id: 'subject',
      title: 'Subjects',
      type: 'item',
      url: '/subject',
      icon: icons.IconBrandChrome,
      breadcrumbs: false
    },
    {
      id: 'result',
      title: 'Results',
      type: 'item',
      url: '/result',
      icon: icons.IconBrandChrome,
      breadcrumbs: false
    },
    {
      id: 'setting',
      title: 'Settings',
      type: 'item',
      url: '/setting',
      icon: icons.IconBrandChrome,
      breadcrumbs: false
    },
    {
      id: 'documentation',
      title: 'Documentation',
      type: 'item',
      url: 'https://codedthemes.gitbook.io/berry/',
      icon: icons.IconHelp,
      external: true,
      target: true
    },
    {
      id: 'sample-page',
      title: 'Sample Page',
      type: 'item',
      url: '/sample-page',
      icon: icons.IconBrandChrome,
      breadcrumbs: false
    }
  ]
};

export default other;
