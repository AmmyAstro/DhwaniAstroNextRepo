import { takeLatest, put, call } from 'redux-saga/effects';
import { phonecallCompleted,phonecallStarted,phonecallFailed } from '../../reducer/Calling/phonecallSlice';
import axios from 'axios';
import { API_ENDPOINTS, getAuthHeaders } from '../../config/apiConfig';

const callapi = (payload) =>{
      const token = getAuthHeaders();
 const headers = {
         Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
  };
 return axios.post(API_ENDPOINTS.COMPLETED_PHONECALL, payload ,{headers})
}

function* handlePhonecallCompleted(action) {
  try {
    const response = yield call(callapi, action.payload);

  
    yield put(phonecallCompleted(response?.data));
  } catch (error) {
    yield put(phonecallFailed());
  }
}

export default function* phonecallSaga() {
  yield takeLatest(phonecallStarted.type, handlePhonecallCompleted);
}
