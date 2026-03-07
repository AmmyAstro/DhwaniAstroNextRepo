import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  statusCode: null,
  responseData: [],
};

const rechargeSlice = createSlice({
  name: "recharge_payment",
  initialState,
  reducers: {
    sendPaymentDetail: (state) => {
      state.loading = true;
      state.error = null;
    },
    PaymentAddSuccess: (state, action) => {
      state.loading = false;
      state.statusCode = 200;
      state.responseData = action.payload;
    },
    PaymentDetailFail: (state) => {
      state.loading = false;
      state.statusCode = 400;
    },
    resetStatusCode: (state) => {
      state.statusCode = null;
    },
  },
});

export const { sendPaymentDetail, PaymentAddSuccess, PaymentDetailFail,resetStatusCode } =
  rechargeSlice.actions;

export default rechargeSlice.reducer;
