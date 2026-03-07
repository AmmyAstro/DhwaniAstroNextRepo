// src/redux/slices/giftSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  successMessage: null,
  responsedata:[],
};

const giftSlice = createSlice({
  name: "gift",
  initialState,
  reducers: {
    addGiftRequest: (state) => {
      state.loading = true;
      state.error = null;
      state.successMessage = null;
    },
    addGiftSuccess: (state, action) => {
      state.loading = false;
      state.successMessage = 200;
      state.responsedata= action.payload;
    },
    addGiftFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearGiftState: (state) => {
      state.loading = false;
      state.error = null;
      state.successMessage = null;
    
    },
  },
});

export const { addGiftRequest, addGiftSuccess, addGiftFailure, clearGiftState } =
  giftSlice.actions;

export default giftSlice.reducer;
