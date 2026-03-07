import { call, put, takeEvery } from "redux-saga/effects";
import { API_ENDPOINTS, getAuthHeaders } from "../../config/apiConfig";
import axios from "axios";
import {
  sendChatRequest,
  sendChatReqAdd,
  sendChatReqFail,
} from "../../reducer/chat/sendRequestSlice";

const send_request = async (payload) => {
  const token = getAuthHeaders();
  const headers = {
         Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
  };


  return await axios.post(API_ENDPOINTS.NEW_CHAT_REQUEST, payload, { headers });
};

function* send_new_request(action) {
  try {
    const response = yield call(send_request, action.payload);



    if (response?.data.message) {
      yield put(sendChatReqAdd(response?.data));
    } else {
      yield put(sendChatReqFail(response?.data));
    }
  } catch (error) {
    yield put(sendChatReqFail(error?.message));
  }
}

export default function* chatrequestSaga() {
  yield takeEvery(sendChatRequest.type, send_new_request);
}
