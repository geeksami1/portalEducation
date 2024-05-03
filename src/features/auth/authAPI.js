//SIGN UP API

// export function createUser(userData) {
//   return new Promise(async (resolve) => {
//     const response = await fetch("http://localhost:8080/api/v1/student/registerStudent", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(userData),
//     });
//     const data = await response.json();
//     resolve({ data });
//   });
// }

export async function createUser(userData) {
  try {
    const response = await fetch("http://localhost:8080/api/v1/student/registerStudent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    
    const data = await response.json();
    
    return { data };
  } catch (error) {
    // Handle error if needed
    console.error('Error while creating user:', error);
    return { error };
  }
}



// LOGIN API
// export function checkUser(loginInfo) {
//   const email = loginInfo.email;
//   const password = loginInfo.password;

//   return new Promise(async (resolve, reject) => {
//     const response = await fetch("http://localhost:8080/users?email=" + email);
//     const data = await response.json();
//     console.log({ data });
//     if (data.length) {
//       if (data[0].password === password) {
//         resolve({ data: data[0] });
//       } else {
//         reject({ message: "Wrong Credentials" });
//       }
//     } else {
//       reject({ message: "User does not exist" });
//     }
//   });
// }


// SIGNOUT API
// export function signOut(userID) {
//   return new Promise(async (resolve, reject) => {
//     resolve({ data: "success" });
//   });
// }
