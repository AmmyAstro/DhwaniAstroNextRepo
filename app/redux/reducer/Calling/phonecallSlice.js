import { createSlice } from '@reduxjs/toolkit';

const phonecallSlice = createSlice({
    name: 'phonecall',
    initialState: {
        dataphonecall: [],
        phonecallloading: false,
        phonecode: null
    },
    reducers: {
        phonecallStarted(state) {
            state.phonecallloading = true;
        },
        phonecallCompleted(state, action) {
            state.phonecallloading = false;
            state.dataphonecall = action.payload;
            state.phonecode = 200;
        },
        phonecallFailed(state, action) {
            state.phonecallloading = false;
            state.dataphonecall = action.payload;
        },
        resetPhonecode(state) {
            state.phonecode = null;

        }

    },
});

export const {
    phonecallStarted,
    phonecallCompleted,
    phonecallFailed, resetPhonecode } = phonecallSlice.actions;

export default phonecallSlice.reducer;
