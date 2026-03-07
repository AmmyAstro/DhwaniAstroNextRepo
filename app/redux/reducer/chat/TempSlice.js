import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  status_Code: null,
  dueTime:null
};

const TempChat = createSlice({
  name: "temp_chat",
  initialState,
  reducers: {
    sendTempChatRequest: (state) => {
      state.loading = true;
    },
    sendTempChatSuccess: (state, action) => {
      state.loading = false;
      state.status_Code = 201; 
      state.dueTime= action.payload;
    },
    sendTempChatFail: (state, action) => {
      state.loading = false;
      state.status_Code = 400; 
    },
    StatusCodereset: (state) => {
        state.status_Code = null;
      },



  },
});

export const { sendTempChatRequest, sendTempChatSuccess, sendTempChatFail,StatusCodereset } = TempChat.actions;
export default TempChat.reducer;
