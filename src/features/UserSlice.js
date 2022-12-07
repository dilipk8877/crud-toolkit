import { createSlice } from "@reduxjs/toolkit";

const initialState =
  {
    userItem:[],
  }


const UserSlice = createSlice({
  name: "userItem",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userItem.push(action.payload);
    },
    deleteUser:(state, action) => {
      const id = action.payload
      state.userItem=state.userItem.filter((arrow) => arrow.id !== id)
    },
    editUser:(state,action)=>{
      const update =state.userItem.findIndex((item)=>item.id=action.payload)
      console.log(update)
      state[update] = {
        ...state[update],
        ...action.payload,
      };
    }
  },
});
export const { addUser, deleteUser,editUser } = UserSlice.actions;
export default UserSlice.reducer;
