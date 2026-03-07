import { createSlice } from "@reduxjs/toolkit";




const CallingResponse = createSlice({
 name: 'callingresponse',
  initialState: {
    loadingcalling: false,
    callstatus: null,
    error: null,
  },
    reducers: {
        getCallingRequest: (state) => {
            state.loading = true;
        },
        getCallingResponse: (state, action) => {

            state.loadingcalling = false;
            state.callstatus = action.payload;
        },
        getCallingResFail: (state,action) => {
            state.loadingcalling = false;
            state.callstatus = action.payload;
        },
          resetCallingState: (state) => {
      state.loadingcalling = false;
      state.callstatus = null;
      state.error = null;
    }


    }

})
export const { getCallingRequest, getCallingResponse, getCallingResFail,resetCallingState } = CallingResponse.actions;
export default CallingResponse.reducer;
