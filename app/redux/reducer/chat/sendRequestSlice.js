import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  chatData: [],
  chatStatusCode: null,
};

const sendRequestSlice = createSlice({
  name: "send_request_chat",
  initialState,
  reducers: {
    sendChatRequest: (state) => {
      state.loading = true;
      state.chatStatusCode = 0;
    },
    sendChatReqAdd: (state, action) => {
      state.loading = false;
      state.chatStatusCode = 200;
      state.chatData = action.payload;
    },
    sendChatReqFail: (state, action) => {
      state.loading = false;
      state.chatStatusCode = 400;
    },
    resetCode: (state) => {
      state.chatStatusCode = null;
    },
  },
});

export const { sendChatRequest, sendChatReqAdd, sendChatReqFail, resetCode }=sendRequestSlice.actions;

export default sendRequestSlice.reducer;
