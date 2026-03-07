import { call, put, takeLatest } from "redux-saga/effects";
import { API_ENDPOINTS, getAuthHeaders } from "../../config/apiConfig";
import axios from "axios";
import { setBookingInput, BookingDataAdd, BookingFail } from "../../reducer/Booking/BookingReducer";





const apiData = async (payload) => {
    const token = getAuthHeaders();
 const headers = {
         Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
  };


    return await axios.post(API_ENDPOINTS.SERVICE_BOOKING, payload, { headers });
}


function* serviceBook(action) {
    try {
        const res = yield call(apiData, action.payload);

        if (res.status == 200) {
            yield put(BookingDataAdd(res.data));
        }

    } catch (error) {
        yield put(BookingFail(error.message))
    }

}


export default function* bookingSaga() {
    yield takeLatest(setBookingInput.type, serviceBook);
}