   import {createSlice} from "@reduxjs/toolkit";



   const initialState={
    loading:false,
    couponlist:[],
    error:[],


   }


   const getCouponList = createSlice({
    name:"getcoupon",
    initialState,
    reducers:{
        sendRequestCoupon:(state)=>{
            state.loading=true;
        },
         fetchCouponList:(state,action)=>{
            state.loading=false,
            state.couponlist=action.payload;            
         },
        fetchFailCouponList:(state,action)=>{
            state.loading=false,
            state.error=action.payload

        }
    },

   })

   export const {sendRequestCoupon,fetchCouponList,fetchFailCouponList} = getCouponList.actions;
   export default getCouponList.reducer;