import { call, put, takeEvery } from "redux-saga/effects";
import { API_ENDPOINTS, getAuthHeaders } from "../../config/apiConfig";
import axios from "axios";
import {
  sendRequestChat,
  chatCompleted,
  chatCompletedFail,
  chatCodeReset,
} from "../../reducer/chat/chatCompletSlice";

const apichat = (payload) => {
  const token = getAuthHeaders();
 const headers = {
         Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
  };


  return axios.post(API_ENDPOINTS.COMPLETED_CHAT, payload, { headers });
};

function* CompletedChat(action) {


  try {
    const response = yield call(apichat, action.payload);

    if (response?.data.status) {
      yield put(chatCompleted(response?.data));
    } else {
      console.log("Response indicates failure:", response?.data);
      yield put(chatCompletedFail(response?.data));
    }
  } catch (error) {

    console.log("Error in completed chat saga:", error.message);
    yield put(chatCompletedFail(error?.message));
  }
}

export default function* completedchatSaga() {
  yield takeEvery(sendRequestChat.type, CompletedChat);
}
