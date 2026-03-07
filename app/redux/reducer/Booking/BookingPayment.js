import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    statusCode: null,
    response: []
}
const BookingPayment = createSlice({
    name: 'servicepayment',
    initialState,
    reducers: {
        setBookingPayment: (state) => {
            state.loading = true;

        },
        PaymentInfomation: (state, action) => {
            state.loading = false;
            state.response = action.payload;
            state.statusCode = 200;
        },
        PaymentFail: (state, action) => {
            state.loading = false;

        }
    }

});
export const { setBookingPayment, PaymentInfomation, PaymentFail } = BookingPayment.actions;

export default BookingPayment.reducer;



