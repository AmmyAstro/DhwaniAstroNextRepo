import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    statusCode: null,
    response: []
}
const BookingReducer = createSlice({
    name: '`bookingserver`',
    initialState,
    reducers: {
        setBookingInput: (state) => {
            state.loading = true;

        },
        BookingDataAdd: (state, action) => {
            state.loading = false;
            state.response = action.payload;
            state.statusCode=200;
        },
        BookingFail: (state, action) => {
            state.loading = false;

        },

        bookingResetCode: (state)=>{
            state.statusCode=null; 
        }

    }

});
export const { setBookingInput, BookingDataAdd, BookingFail,bookingResetCode } = BookingReducer.actions;
export default BookingReducer.reducer;



