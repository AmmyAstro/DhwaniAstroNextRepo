import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  response: [],
  errorData: [],
  callingCode: null,
};

const CallingSlice = createSlice({
  name: "callingreducer",
  initialState,
  reducers: {
    StartCalling: (state, action) => {
      state.loading = true;
  
    },
    CallingAstrologer: (state, action) => {
      state.loading = false;
      state.response = action.payload;
      state.callingCode = 200;
    },
    CallingFail: (state, action) => {
      state.loading = false;
      state.response = action.payload;
    },
    resetCallingCode: (state, action) => {
      state.callingCode = null;
    },
  },
});
export const {
  StartCalling,
  CallingAstrologer,
  CallingFail,
  resetCallingCode,
} = CallingSlice.actions;
export default CallingSlice.reducer;
