// astrologerSlice.js
import { createSlice } from '@reduxjs/toolkit';

const astrologerSlice = createSlice({
  name: 'astrologerReducer',
  initialState: {
    data: {
      sortedAstrologers: [],  
      total: 0, 
      page:0,            
    },
    loading: false,
    error: null,
  },
  reducers: {
    fetchAstrologers: (state) => {
      state.loading = true;
      state.error = null;
    },
fetchAstrologersSuccess: (state, action) => {
  state.loading = false;

  const { page, sortedAstrologers, total } = action.payload;


  state.data.sortedAstrologers = [...(state.data.sortedAstrologers || []),...sortedAstrologers];
  state.data.page = page;
  state.data.total = total;
},





    fetchAstrologersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchAstrologers,
  fetchAstrologersSuccess,
  fetchAstrologersFailure,
} = astrologerSlice.actions;

export default astrologerSlice.reducer;
