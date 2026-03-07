import { call, put, takeEvery } from "redux-saga/effects";
import { API_ENDPOINTS, getAuthHeaders } from "../../config/apiConfig";
import axios from "axios";
import {
  getUserFail,
  getUserSuccess,
  getUserFetch,
} from "../../reducer/auth/userSlice";


const get_user_detail = async (action) => {
const token=getAuthHeaders();
 const headers = {
         Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
  };

 return await axios.get(API_ENDPOINTS.GET_USER, {headers});
};

function* getDetail_User() {
  try {
    const response = yield call(get_user_detail);

   yield put(getUserSuccess(response?.data?.user));
  } catch (error) {
  
    yield put(getUserFail(error));
  }
}



export default function* getUserSaga(){
    yield takeEvery(getUserFetch.type,getDetail_User);
}