import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import { API_ENDPOINTS } from "../../config/apiConfig";
import { getCallingRequest,getCallingResponse,getCallingResFail } from "../../reducer/Calling/CallingResponse";


const callingApi = async (payload) => {
  return axios.post(API_ENDPOINTS.Calling_Response, payload);
};
function* fetchKnowlityData(action) {


  try {
    const response = yield call(callingApi, action.payload);

    const parsedMessage = JSON.parse(response?.data?.message);

    
    const callstatus = parsedMessage.events || "Unknown";

   

    yield put(getCallingResponse({ callstatus }));
  } catch (error) {
    console.error("Error fetching call data:", error);
    yield put(getCallingResFail(error.message));
  }
}


export default function* CallingResponseSaga() {
  yield takeLatest(getCallingRequest.type, fetchKnowlityData);
}