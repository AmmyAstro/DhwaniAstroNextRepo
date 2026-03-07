import { call, put, takeLatest } from "redux-saga/effects";
import { API_ENDPOINTS, getAuthHeaders } from "../../config/apiConfig";
import axios from "axios";
import { fetchUsersRequest, followUserRequest, unfollowUserRequest, userActionFailure } from "../../reducer/astrologer/UserFollowSlice";





const apidata = (payload) => {
    const token = getAuthHeaders();
  const headers = {
         Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
  };
    return axios.post(API_ENDPOINTS.AstrologerFollow, payload, { headers })

}

function* userFollow(action) {

    try {
        const res = yield call(apidata, action.payload);
       yield put(followUserRequest(res?.data));
    } catch (error) {
        yield put(userActionFailure(error.message));

    }


}

export default function* AstrologerFollow() {
    yield takeLatest(fetchUsersRequest.type, userFollow);

}

