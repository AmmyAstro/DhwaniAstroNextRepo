import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  callData: [],
  callStatusCode: null,
  error:null
};

const sendCallRequestSlice = createSlice({
  name: "send_request_call",
  initialState,
  reducers: {
    sendCallRequest: (state) => {
      state.loading = true;
     
    },
    sendCallReqAdd: (state, action) => {
      state.loading = false;
      state.callStatusCode = 200;
      state.callData = action.payload;
    },
    sendCallReqFail: (state, action) => {
      state.loading = false;
      state.callStatusCode = 400;
       state.error = action.payload;
    },
    resetCallCode: (state) => {
      state.callStatusCode = null;
    },
  },
});

export const { sendCallRequest, sendCallReqAdd, sendCallReqFail, resetCallCode }=sendCallRequestSlice.actions;

export default sendCallRequestSlice.reducer;
