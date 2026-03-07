import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { API_ENDPOINTS, getAuthHeaders } from "../../config/apiConfig";
import axios from "axios";
import {
  sendPaymentDetail,
  PaymentAddSuccess,
  PaymentDetailFail,
} from "../../reducer/payment/rechargeSlice";



const sendPayment_Detail = async (payload) => {
  const token = getAuthHeaders();
 const headers = {
         Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
  };

return await axios.post(API_ENDPOINTS.PAYMENT_DETAIL, payload, { headers });
};
function* paymentDetails(action) {
  try {
    const response = yield call(sendPayment_Detail, action.payload);



 
    if (response?.data?.success) {
      yield put(
        PaymentAddSuccess({
          response: {
            data: response.data,
            status: response.status,
            success: response?.data?.success,
           
          },
        })
      );
    } else {

      console.error("Payment Details Failed:", response);
      yield put(PaymentDetailFail({ response }));
    }
  } catch (error) {
    console.error("Payment Details Error:", error.message);
    yield put(PaymentDetailFail(error));
  }
}

export default function* paymentdetailSaga() {
  yield takeLatest(sendPaymentDetail.type, paymentDetails);
}
