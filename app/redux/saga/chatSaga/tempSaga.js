import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { API_ENDPOINTS, getAuthHeaders } from "../../config/apiConfig";

import {
  sendTempChatRequest,
  sendTempChatSuccess,
  sendTempChatFail,
} from "../../reducer/chat/TempSlice";

const temp_order = async (payload) => {
    const token=getAuthHeaders();
 const headers = {
         Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
  };
 
  return await axios.post(API_ENDPOINTS.CHAT_TEMP_ORDER, payload,{headers});
};

function* tempOrderGenerate(action) {
  try {
    const response = yield call(temp_order, action.payload);
  if(response?.data.message){
        yield put(sendTempChatSuccess(response?.data?.duetime));
    }else{
        yield put(sendTempChatFail(response));
    }

 
  } catch (error) {
    yield put(sendTempChatFail(error));
  }
}
export default function* tempSaga() {
  yield takeEvery(sendTempChatRequest.type, tempOrderGenerate);
}
