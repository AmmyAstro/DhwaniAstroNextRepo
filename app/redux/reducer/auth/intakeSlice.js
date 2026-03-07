const { createSlice } = require("@reduxjs/toolkit");


const initialState = {
    isIntakeCompleted: false,
    loading: false,
    error: null,
    data:[]
}

const intakeSlice = createSlice({
    name: "intake",
    initialState,
    reducers: {
        fetchIntakeRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchIntakeSuccess: (state, action) => {
            state.loading = false;
            state.isIntakeCompleted = true;
            state.data = action.payload;
        },
        fetchIntakeFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        resetIntakeState: (state) => {
            state.isIntakeCompleted = false;
            state.data = [];
            state.loading = false;
            state.error = null;
        }
    }
});

export const {
    fetchIntakeRequest,
    fetchIntakeSuccess,
    fetchIntakeFailure,
    resetIntakeState
} = intakeSlice.actions;
export default intakeSlice.reducer;