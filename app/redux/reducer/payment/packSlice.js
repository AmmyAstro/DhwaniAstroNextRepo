import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  packData: [],
};

const packSlice = createSlice({
  name: "packrecharge",
  initialState,
  reducers: {
    fetchPack: (state) => {
      state.loading = true;
    },
    fetchPackSucess: (state, action) => {
      (state.loading = false), 
      (state.packData = action.payload);
    },
    fetchPackFail: (state) => {
      state.loading;
    },
  },
});

export const { fetchPack, fetchPackSucess, fetchPackFail } = packSlice.actions;

export default packSlice.reducer;
