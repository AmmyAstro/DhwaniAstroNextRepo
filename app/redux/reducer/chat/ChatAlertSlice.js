import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  astrologerData: [],
  code: null,
  openCode: null,
};

const ChatAlertSlice = createSlice({
  name: "chatAlert",
  initialState,
  reducers: {
    setChatAlertLoading: (state, action) => {
      state.loading = true;
    },
    setChatAlertData: (state, action) => {
      state.loading = false;
      state.astrologerData = action.payload;
      state.code = 200;

    },
    setOpenCode: (state, action) => {
      state.openCode = 201;
    },
    resetChatAlertData: (state) => {
      state.loading = false;
      state.code = null;
  
    },
    resetOpenCode: (state) => {
      state.openCode = null;
    }
  },
});

export const { setChatAlertLoading, setChatAlertData, resetChatAlertData,setOpenCode,resetOpenCode } =
  ChatAlertSlice.actions;
export default ChatAlertSlice.reducer;
