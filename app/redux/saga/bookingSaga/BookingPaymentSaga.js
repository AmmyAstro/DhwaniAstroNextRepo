import { call, put, takeLatest } from "redux-saga/effects";
import { API_ENDPOINTS, getAuthHeaders } from "../../config/apiConfig";
import axios from "axios";
import { setPaymentInput, setPaymentDeatil, setPaymentFail } from "../../reducer/Booking/PaymentSlice";








const apiData = async (payload) => {


    try {
        const token = getAuthHeaders();
 const headers = {
         Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
  };
        return await axios.post(API_ENDPOINTS.SERVICE_BOOKING_PAYMENT, payload, { headers });

    } catch (error) {



    }
}


function* servicePayment(action) {
    try {

        const res = yield call(apiData, action.payload);

        yield put(setPaymentDeatil(res.data));
    } catch (error) {


        yield put(setPaymentFail(error.message));
    }
}


export default function* BookingPaymentSaga() {
    yield takeLatest(setPaymentInput.type, servicePayment);
}