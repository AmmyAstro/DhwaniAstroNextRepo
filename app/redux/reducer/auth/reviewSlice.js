import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  success: false,
  error: null,
  reviews: [],
};

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    createReviewRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    createReviewSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.reviews.push(action.payload);
    },
    createReviewFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    resetReviewState: (state) => {
      state.success = false;
      state.error = null;
    },
  },
});

export const {
  createReviewRequest,
  createReviewSuccess,
  createReviewFailure,
  resetReviewState,
} = reviewSlice.actions;

export default reviewSlice.reducer;
