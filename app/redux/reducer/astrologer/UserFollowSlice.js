import { createSlice } from '@reduxjs/toolkit';

const UserFollowSlice = createSlice({
    name: 'followastrologer',
    initialState: {
        response: [],
        loading: false,
        error: null,
    },
    reducers: {
        fetchUsersRequest(state, action) {
            state.loading = true;
        },
        followUserRequest(state, action) {
            state.loading = false;
            state.response = action.payload;
        },

        unfollowUserRequest(state, action) {
            state.loading = false;
            state.response = action.payload;
        },

        userActionFailure(state, action) {
            state.error = action.payload;
            state.loading = false;
        }
    }
});

export const {
    fetchUsersRequest,
    followUserRequest,
    unfollowUserRequest,
    userActionFailure

} = UserFollowSlice.actions;

export default UserFollowSlice.reducer;
