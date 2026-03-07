import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: [],
  responseData: [],
  chatCode: null,
};
const chatCompletSlice = createSlice({
  name: "chat_completed",
  initialState,
  reducers: {
    sendRequestChat: (state) => {
      state.loading = true;
    },
    chatCompleted: (state, action) => {
      state.loading = false;
      state.responseData = action.payload;
      state.chatCode = 200;
    },
    chatCompletedFail: (action, state) => {
      state.loading = false;
      state.responseData = action.payload;
    },
    chatCode_Reset: (state) => {
     state.chatCode = null;
    },
  },
});

export const {
  sendRequestChat,
  chatCompleted,
  chatCompletedFail,
  chatCode_Reset,
} = chatCompletSlice.actions;
export default chatCompletSlice.reducer;
