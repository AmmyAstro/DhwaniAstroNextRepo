import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    formData: null,
    responseData: null,
    loading: false,
    success: false,
    error: null,
};

const lalkitabSlice = createSlice({
    name: "lalkitab",
    initialState,
    reducers: {
        submitFormRequest: (state, action) => {
            state.loading = true;
            state.success = false;
            state.error = null;
            state.formData = action.payload;
        },
        submitFormSuccess: (state, action) => {
            state.loading = false;
            state.success = true;
            state.formData = action.payload.formData;
            state.responseData = action.payload.responseData;
        },
        submitFormFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        resetSuccess: (state) => {
            state.success = false;
        },
    },
});

export const { submitFormRequest, submitFormSuccess, submitFormFailure } = lalkitabSlice.actions;
export default lalkitabSlice.reducer;

