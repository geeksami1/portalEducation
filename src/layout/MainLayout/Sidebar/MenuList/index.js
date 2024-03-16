// material-ui
import { Typography } from '@mui/material';

// project imports
import NavGroup from './NavGroup';
import menuItem from 'menu-items';

// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = (userrole) => {
  const navItems = menuItem.items.map((item) => {
    switch (item.type) {
      case 'group1':
        return <NavGroup key={item.id} item={item} />;
       case 'group2':
        return <NavGroup key={item.id} item={item} />; 
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
   
  });

  return <>{navItems}</>;
};

export default MenuList;

//================================CODE 2

// import { Typography } from '@mui/material';
// import NavGroup from './NavGroup';
// import menuItem from 'menu-items';

// const MenuList = ({ userrole }) => { // Destructure userrole from props
//   console.log(userrole, "ROLE FROM MENU LIST!!!!!!!!!!!!");
//   const navItems = menuItem.items.map((item) => {
//     switch (item.type) {
//       case 'group1':
//         if (userrole === 'student') { // Use strict equality comparison
//           return <NavGroup key={item.id} item={item} />;
//         }
//         break;
//       case 'group2':
//         if (userrole === 'teacher') { // Use strict equality comparison
//           return <NavGroup key={item.id} item={item} />;
//         }
//         break;
//       default:
//         return (
//           <Typography key={item.id} variant="h6" color="error" align="center">
//             Menu Items Error
//           </Typography>
//         );
//     }
//   });

//   return <>{navItems}</>;
// };

// export default MenuList;
