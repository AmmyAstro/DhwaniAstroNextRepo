
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: null,
};
const idSlice = createSlice({
  name: 'id_slice',
  initialState,
  reducers: {
    setIdRequest: (state, action) => {
      
    },
    setIdSuccess: (state, action) => {
      state.id = action.payload;
    },
    clearId: (state) => {
      state.id = null;
    },
  },
});

export const { setIdRequest, setIdSuccess, clearId } = idSlice.actions;
export default idSlice.reducer;
