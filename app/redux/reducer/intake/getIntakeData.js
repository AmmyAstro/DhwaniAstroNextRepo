import { createSlice } from '@reduxjs/toolkit';

const getIntakeData = createSlice({
  name: 'getintakedata',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    getIntakeDataRequest: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { getIntakeDataRequest, setLoading, setError } = getIntakeData.actions;
export default getIntakeData.reducer;
