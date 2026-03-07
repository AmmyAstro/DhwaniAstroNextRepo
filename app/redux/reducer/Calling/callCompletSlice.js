import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: [],
  responseData: [],
  chatCode: null,
};
const callCompletSlice = createSlice({
  name: "call_completed",
  initialState,
  reducers: {
    sendRequestCall: (state) => {
      state.loading = true;
    },
    callCompleted: (state, action) => {
      state.loading = false;
      state.responseData = action.payload;
      state.chatCode = 200;
    },
    callCompletedFail: (action, state) => {
      state.loading = false;
      state.responseData = action.payload;
    },
    callCode_Reset: (state) => {
     state.chatCode = null;
    },
  },
});

export const {
  sendRequestCall,
  callCompleted,
  callCompletedFail,
  callCode_Reset,
} = callCompletSlice.actions;
export default callCompletSlice.reducer;
