import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: null,
  isVisible: false, 
};

const chatButton = createSlice({
  name: 'chatbutton',
  initialState,
  reducers: {
    sendbuttonRequest: (state, action) => {
   },
  
    showChatButton: (state) => {
      state.isVisible = true;
    },
    hideChatButton: (state) => {
      state.isVisible = false;
    },
  },
});

export const {
 sendbuttonRequest,
  showChatButton,
  hideChatButton,
} = chatButton.actions;

export default chatButton.reducer;
