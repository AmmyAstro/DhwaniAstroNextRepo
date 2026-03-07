import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,

  userData: [],
};

const userSlice = createSlice({
  name: "getuserDetail",
  initialState,
  reducers: {
    getUserFetch: (state) => {
      state.loading = false;
    },
    getUserSuccess: (state,action) => {
      state.loading = true;
      state.userData = action.payload;
    },
    getUserFail: (state,action) => {
      state.loading = false;
    },
    resetPaymentStatus: (state) => {
        state.loading = false;
      },
  },
});

export const { getUserFetch, getUserSuccess, getUserFail,resetPaymentStatus } = userSlice.actions;

export default userSlice.reducer;
