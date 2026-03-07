import { call, put, takeLatest } from "redux-saga/effects";
import { API_ENDPOINTS, getAuthHeaders } from "../../config/apiConfig";
import axios from "axios";
import { IntakeFromRequest, IntakeFromAdd, IntakeFromFail } from "../../reducer/auth/intakeStoreSlice";

const apiData = (payload) => {


    const token = getAuthHeaders();
   const headers = {
         Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
  };
    return axios.post(API_ENDPOINTS.INTAKE_FROM_SAVE, payload, { headers })
}

function* saveIntake(action) {
    try {
        const response = yield call(apiData, action.payload.intakedata);
        if (response.status === 201) {
            yield put(IntakeFromAdd(response?.data))
        }
    } catch (error) {
        yield put(IntakeFromFail(error));
    }


}


export default function* intakeStoreSaga() {
    yield takeLatest(IntakeFromRequest.type, saveIntake)
}
