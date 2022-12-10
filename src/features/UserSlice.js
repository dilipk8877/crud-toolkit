import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk("user/getUser", async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
const initialState = {
  userItem: [],
  status: null,
  toggleUpdate: true,
  modalOpen:false
};

const UserSlice = createSlice({
  name: "userItem",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userItem.push(action.payload);
    },
    deleteUser: (state, action) => {
      const id = action.payload;
      state.userItem = state.userItem.filter((arrow) => arrow.id !== id);
    },
    editUser: (state, action) => {
      state.userItem = state.userItem.map((el) =>
      el.id == action.payload.id ? action.payload : el
    );
    },
    setToggleUpdate: (state, action) => {
      state.toggleUpdate = false;
    },
    setToggleClose: (state, action) => {
      state.toggleUpdate = true;
    },
    setModalOpen:(state,action)=>{
      state.modalOpen = action.payload
    },
    setModalClose:(state,action)=>{
      state.modalOpen = action.payload
    },
    
  },
  extraReducers: {
    [getUser.pending]: (state, action) => {
      state.status = "loading";
    },
    [getUser.fulfilled]: (state, action) => {
      state.status = "success";
      state.userItem = action.payload;
    },
    [getUser.rejected]: (state, action) => {
      state.status = "error";
    },
  },
});
export const {
  addUser,
  deleteUser,
  editUser,
  setToggleUpdate,
  setToggleClose,
  setModalOpen,
  setModalClose
} = UserSlice.actions;
export default UserSlice.reducer;
