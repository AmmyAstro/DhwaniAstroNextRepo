import { call, put, takeLatest, all } from "redux-saga/effects";
import axios from "axios";
import { SUBMIT_FORM, formSuccess, formFailure } from "../actions/formActions";
import { API_ENDPOINTS } from '../config/apiConfig';
import Router from "next/router"; // for redirect after success

const getAuthHeaders = () => {
  const userId = process.env.NEXT_PUBLIC_ASTROLOGY_API_USERNAME;
  const apiKey = process.env.NEXT_PUBLIC_ASTROLOGY_API_PASSWORD;

  return {
    "Authorization": "Basic " + btoa(`${userId}:${apiKey}`),
    "Content-Type": "application/json",
  };
};

// Worker Saga for both APIs
function* handleFormSubmit(action) {
  try {
    const headers = getAuthHeaders();
    const formData = action.payload;

    // Make both API calls in parallel
    const [lalKitabResponse, janamKundliResponse] = yield all([
      call(axios.post, API_ENDPOINTS.LAL_KITAB, formData, { headers }),
      call(axios.post, API_ENDPOINTS.JANAM_KUNDLI, formData, { headers }),
    ]);

    // Dispatch success action
    yield put(formSuccess({
      lalKitab: lalKitabResponse.data,
      janamKundli: janamKundliResponse.data,
    }));

    // Navigate to desired page
    yield call(() => {
      window.location.href = "/inKundli/getKundlipage";
    });
  } catch (error) {
    yield put(formFailure(error?.response?.data?.message || "API call failed"));
  }
}

// Worker Saga for Lal Kitab only
function* handleLalKitabOnly(action) {
  try {
    const headers = getAuthHeaders();
    const formData = action.payload;
    const lalKitabResponse = yield call(axios.post, API_ENDPOINTS.LAL_KITAB, formData, { headers });
    yield put(formSuccess({ lalKitab: lalKitabResponse.data, formData }));
    yield call(() => {
      window.location.href = "/inKundli/getKundlipage/lalkitab";
    });
  } catch (error) {
    yield put(formFailure(error?.response?.data?.message || "API call failed"));
  }
}

// Watcher Saga
export default function* formSaga() {
  yield all([
    takeLatest(SUBMIT_FORM, handleFormSubmit),
    takeLatest('SUBMIT_LALKITAB', handleLalKitabOnly),
  ]);
}
