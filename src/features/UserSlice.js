import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk("user/getUser", async () => {
  try {
    const res = await axios.get("http://localhost:3004/users");
    // thunkAPI.dispatch(getUser())
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const deleteUser = createAsyncThunk(
  "delete/getUser",
  async (id, thunkAPI) => {
    console.log(id);
    try {
      const res = await axios.delete(`http://localhost:3004/users/${id}`);
      thunkAPI.dispatch(getUser(id));
      return res.data;
    } catch (error) {
      console.log("error");
    }
  }
);

export const addUser = createAsyncThunk(
  "add,getUser",
  async (data, thunkAPI) => {
    try {
      const res = await axios.post("http://localhost:3004/users", data);
      thunkAPI.dispatch(getUser(data));
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const updateUser = createAsyncThunk(
  "update,getUser",
  async (data, thunkAPI) => {
    console.log(data)
    try {
      const res = axios.put(`http://localhost:3004/users/${data.editId}`,data.userData)
      thunkAPI.dispatch(getUser())
      return res.data
    } catch (error) {
      console.log(error);
    }
  }
);
const initialState = {
  userItem: [],
  status: null,
  toggleUpdate: true,
  modalOpen: false,
  editId: null,
};

const UserSlice = createSlice({
  name: "userItem",
  initialState,
  reducers: {
    editIds: (state, action) => {
      state.editId = action.payload;
    },
    setToggleUpdate: (state, action) => {
      state.toggleUpdate = false;
    },
    setToggleClose: (state, action) => {
      state.toggleUpdate = true;
    },
    setModalOpen: (state, action) => {
      state.modalOpen = action.payload;
    },
    setModalClose: (state, action) => {
      state.modalOpen = action.payload;
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
  editIds,
  setToggleUpdate,
  setToggleClose,
  setModalOpen,
  setModalClose,
} = UserSlice.actions;
export default UserSlice.reducer;
