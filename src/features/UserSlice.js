import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  user:{
    name:"Dilip",
    email:"Email",
    phone:"8756455"
  }
};

const UserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
  },
  extraReducers: {},
});
export const { addUser } = UserSlice.actions;
export default UserSlice.reducer;
