import { call, put, takeEvery } from "redux-saga/effects";
import { API_ENDPOINTS, getAuthHeaders } from "../../config/apiConfig";
import axios from "axios";
import { sendRequestCall,callCompleted,callCode_Reset,callCompletedFail } from "../../reducer/Calling/callCompletSlice";


const apichat = (payload) => {
  const token = getAuthHeaders();

 const headers = {
         Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
  };
  return axios.post(API_ENDPOINTS.COMPLETED_CALL, payload, { headers });
};

function* CompletedCall(action) {


  try {
    const response = yield call(apichat, action.payload);
    if (response?.data.status) {
      yield put(callCompleted(response?.data));
    } else {
      yield put(callCompletedFail(response?.data));
    }
  } catch (error) {
    yield put(callCompletedFail(error?.message));
  }
}

export default function* completedcallSaga() {
  yield takeEvery(sendRequestCall.type, CompletedCall);
}
