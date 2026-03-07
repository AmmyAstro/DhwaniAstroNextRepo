
import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { addGiftRequest,addGiftSuccess,addGiftFailure } from "../../reducer/giftSlice/giftSlice";
import { API_ENDPOINTS, getAuthHeaders } from "../../config/apiConfig";

const addGiftApi = (payload) => {
      const token = getAuthHeaders();
 const headers = {
         Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
  };
 return axios.post(API_ENDPOINTS.GIFT_STORE,payload,{headers})
};

function* handleAddGift(action) {
  try {
    const response = yield call(addGiftApi, action.payload);




  if(response?.status === 201){
    yield put(addGiftSuccess(response?.data));
    }else{
 yield put(addGiftFailure(response?.data?.message)); 
    }   
  } catch (error) {
    yield put(addGiftFailure(error.response?.data?.error || error.message));
  }
}


export default function* watchGiftSaga() {
  yield takeLatest(addGiftRequest.type, handleAddGift);
}
