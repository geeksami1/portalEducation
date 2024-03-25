// // import dashboard from './dashboard';
// // import dashboard2 from './dashboard2';


// // const user = JSON.parse(localStorage.getItem('user'))
// // const userRole = user && user.role;
// // console.log(userRole);

// // // const menuItems = {
// // //   items: [dashboard]
// // // };

// // // export default menuItems;

// // const menuItems = {
// //   items: [userRole === 'student' ? dashboard : dashboard2]
// // };

// // export default menuItems;


// import dashboard from './dashboard';
// import dashboard2 from './dashboard2';
// import dashboard3 from './dashboard3'; // Import dashboard3 for the 'parent' role

// const user = JSON.parse(localStorage.getItem('user'))
// const userRole = user ? user.role : null; // Handle the case when user is null
// console.log(userRole);

// let selectedDashboard;

// // Conditionally select the dashboard component based on the user's role
// switch (userRole) {
//   case 'student':
//     selectedDashboard = dashboard;
//     break;
//   case 'parent':
//     selectedDashboard = dashboard3;
//     break;
//   default:
//     selectedDashboard = dashboard2;
//     break;
// }

// const menuItems = {
//   items: [selectedDashboard]
// };

// export default menuItems;
