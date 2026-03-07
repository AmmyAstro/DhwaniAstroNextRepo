import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { API_ENDPOINTS, getAuthHeaders } from "../../config/apiConfig";
import { getHistoryRequest, getFetchHistory, getFetchHistoryFail } from "../../reducer/astrologer/getFollowHistory";





const apiData = (payload) => {
  const token = getAuthHeaders();
 const headers = {
         Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
  };
  return axios.get(API_ENDPOINTS.AstrologerFollowHistory, {
    headers,
    params: payload,
  });
};

function* getHistory(action) {


    try {
        const res = yield call(apiData,action.payload);

      
        yield put(getFetchHistory(res?.data));
    } catch (error) {

 
        yield put(getFetchHistoryFail(error.message));

    }


}


export default function* GetHistory() {
    yield takeLatest(getHistoryRequest.type, getHistory);

}




