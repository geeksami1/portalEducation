import dashboard from './dashboard';
import dashboard2 from './dashboard2';


const user = JSON.parse(localStorage.getItem('user'))
const userRole = user && user.userRole;
console.log(userRole);

// const menuItems = {
//   items: [dashboard]
// };

// export default menuItems;

const menuItems = {
  items: [userRole === 'student' ? dashboard : dashboard2]
};

export default menuItems;