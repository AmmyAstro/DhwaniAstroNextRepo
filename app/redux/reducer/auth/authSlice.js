import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  user: null,
  token: null,
  otpSent: 1,
  loading: false,
  error: null,
  statusCode: null,
  otpnumber: null,
  usertype:null,
  updatenameCode:null,
  nameloading:false,
  showPopup: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    sendOtpRequest: (state) => {
      state.loading = true;
      state.error = null;
      state.otpSent = 1;
      state.otpnumber = null; 
      state.usertype = null;
    
    },
    sendOtpSuccess: (state, action) => {
      state.loading = false;
      state.otpSent = 2;
      state.otpnumber = action.payload?.otp || null; 
      state.usertype = action.payload?.type || null; 
      state.error = null;
  
    },

    sendOtpFailure: (state, action) => {
      state.loading = false;
      state.otpSent = 0;
      state.error = action.payload || "Failed to send OTP";
      state.otpnumber = null;
      state.usertype =  null; 
      
    },

    verifyOtpRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    verifyOtpSuccess: (state, action) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.user = action.payload?.user || null;
      state.token = action.payload?.token || null;
      state.statusCode = 200;
      state.otpSent = 0;
      state.otpnumber = null; 
      state.error = null;
  
    },
    verifyOtpFailure: (state, action) => {
      state.loading = false;
      state.isLoggedIn = false;
      state.statusCode = 201;
      state.error = action.payload || "Invalid OTP";
    },

    sendRequestName:(state)=>{
     state.nameloading = true;

    },
    updateNameDone: (state,action) =>{ 
      state.nameloading=false;
      state.updatenameCode=202;
 },


    resetStatusCode: (state) => {
      state.statusCode = null;
      state.updatenameCode = null;
      state.otpSent = 0;
      state.showPopup= true;
    },




    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
      state.otpSent = 1;
      state.otpnumber = null;
      state.error = null;
      state.statusCode = null;
      state.nameloading= false;
      state.updatenameCode= null;
      state.usertype=null;
     state.showPopup= false;
    },
  },
});

export const {
  sendOtpRequest,
  sendOtpSuccess,
  sendOtpFailure,
  verifyOtpRequest,
  verifyOtpSuccess,
  verifyOtpFailure,
  sendRequestName,
  updateNameDone,
  logout,
  resetStatusCode,
  updatePopup
} = authSlice.actions;

export default authSlice.reducer;
