import { createSlice } from "@reduxjs/toolkit";



const initialState= {
    loading:false,
    resposeData:[],
}
const getFollowHistory = createSlice({
    name:'getfollowhistory',
    initialState,
    reducers:{
        getHistoryRequest(state){
            state.loading=true;
},
getFetchHistory(state,action){
    state.loading=false;
    state.resposeData=action.payload;

},
getFetchHistoryFail(state) {
    state.loading=false;

}
    }
    
})

export const {getHistoryRequest,getFetchHistory,getFetchHistoryFail}=getFollowHistory.actions;
export default getFollowHistory.reducer;