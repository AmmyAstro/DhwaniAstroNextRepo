import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    response: []
}


const intakeStoreSlice = createSlice({
    name: "intakefrom",
    initialState,
    reducers: {
        IntakeFromRequest: (state) => {
            state.loading = true

        },
        IntakeFromAdd: (state, action) => {
            state.loading = false,
                state.response = action.payload
        },
        IntakeFromFail: (state, action) => {
            state.loading = false;
        }
    }
})


export const {IntakeFromRequest,IntakeFromAdd,IntakeFromFail}= intakeStoreSlice.actions;

export default intakeStoreSlice.reducer;