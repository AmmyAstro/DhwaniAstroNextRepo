import axios from "axios";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { API_ENDPOINTS } from "../../config/apiConfig";
import { fetchPack, fetchPackFail, fetchPackSucess } from "../../reducer/payment/packSlice";


const packData = (payload) => {
    
 return axios.get(API_ENDPOINTS.RECHARGE_PACKAGE);
}



function* RechargePack() {
    try {

  const existingData = yield select((state) => state.packrecharge.packData);

if (existingData && existingData.length > 0) {
  return;
}
        const response = yield call(packData);



        yield put(fetchPackSucess(response.data))

    } catch (error) {

        yield put(fetchPackFail(error))

    }
}



export default function* packSaga() {
    yield takeLatest(fetchPack.type, RechargePack);
}






