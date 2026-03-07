import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    resp: [],
    statusCode: null
}

const PaymentSlice = createSlice({
    name: "payment",
    initialState,
    reducers: {
        setPaymentInput: (state) => {
            state.loading = true;

        },
        setPaymentDeatil: (state, action) => {
            state.loading = false;
            state.resp = action.payload;
            state.statusCode=200;


        },
        setPaymentFail: (state) => {
            state.loading = false;

        },
        ResetCode:(state,action)=>{
            state.statusCode=null

        }

    }
})



export const { setPaymentInput, setPaymentDeatil, setPaymentFail,ResetCode } = PaymentSlice.actions;
export default PaymentSlice.reducer;