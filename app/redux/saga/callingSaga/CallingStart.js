import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  StartCalling,
  CallingAstrologer,
  CallingFail,
} from "../../reducer/Calling/CallingSlice";
import { API_ENDPOINTS } from "../../config/apiConfig";

const callingApi = async (payload) => {
  return axios.post(API_ENDPOINTS.Calling_Astrologer, payload);
};
function* fetchKnowlityData(action) {
  try {
    const response = yield call(callingApi, action.payload);

   

    yield put(CallingAstrologer(response?.data));
  } catch (error) {
    yield put(CallingFail(error.message));
  }
}

export default function* CallingStart() {
  yield takeLatest(StartCalling.type, fetchKnowlityData);
}
