import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { checkUser,  createUser,  signOut } from "./authAPI";
const initialState = {
  loggedInUser: null,
  status: "idle",
  error: null,
};

//REGISTER
export const createUserAsync = createAsyncThunk(
  "user/createUser",
  async (userData) => {
    const response = await createUser(userData);
    return response.data;
  }
);
//LOGIN
// export const checkUserAsync = createAsyncThunk(
//   "user/checkUser",
//   async (loginInfo) => {
//     const response = await checkUser(loginInfo);
//     return response.data;
//   }
// );

//SIGNOUT

// export const signOutAsync = createAsyncThunk(
//   "user/signOut",
//   async (loginInfo) => {
//     const response = await signOut(loginInfo);
//     return response.data;
//   }
// );

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUser = action.payload;
      })
      // .addCase(checkUserAsync.pending, (state) => {
      //   state.status = "loading";
      // })
      // .addCase(checkUserAsync.fulfilled, (state, action) => {
      //   state.status = "idle";
      //   state.loggedInUser = action.payload;
      // })
      // .addCase(checkUserAsync.rejected, (state, action) => {
      //   state.status = "failed";
      //   state.error = action.error;
      // })
      // .addCase(signOutAsync.pending, (state) => {
      //   state.status = "loading";
      // })
      // .addCase(signOutAsync.fulfilled, (state, action) => {
      //   state.status = "idle";
      //   state.loggedInUser = null;
      // });
  },
});

export const { increment } = userSlice.actions;

export const selectCount = (state) => state.counter.value;
export const selectUser = (state) => state.auth.loggedInUser;
export const selectError = (state) => state.auth.error;

export default userSlice.reducer;
