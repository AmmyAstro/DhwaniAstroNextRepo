import { call, put,takeLatest,select } from 'redux-saga/effects';
import axios from 'axios';


import {
  fetchAstrologers,
  fetchAstrologersSuccess,
  fetchAstrologersFailure,
} from '../reducer/astrologer/astrlogerSlice';

import {graphqlEndpoint } from '../config/apiConfig';




const asteologerdata = ({ page = 1, limit = 12 }) => {

  console.log("Fetching astrologer data for page:", page, "limit:", limit);
  return axios.post(graphqlEndpoint, {
    query: `
      query {
        astrologer_list(limit: ${limit}, page: ${page}) {
          data {
            id
            full_name
            profile_name_en
            rating
            gender
            profile_image
            specialisation
            languages
            experience
            availability
            is_chat_online
            is_call_online
            astro_call_charges
            astro_chat_charges
            astro_video_charges
            disc_chat_charge
            disc_call_charge
            offer_price
            astro_tag
          }
          total
          limit
          page
        }
      }
    `
  });
};






function* fetchAstrologersWorker(action) {
  try {
const { page, limit } = action.payload;
const state = yield select((s) => s.astrologerReducer.data);

console.log("Saga current state:", state);
if (
      page === 1 && state.sortedAstrologers.length > 0 
    ) {
      return;
    }

 const response = yield call(asteologerdata, { page, limit });

 console.log("Fetched astrologer data:", response?.data?.data?.astrologer_list);


    yield put(
      fetchAstrologersSuccess({
        sortedAstrologers: response?.data?.data?.astrologer_list?.data || [],
        total: response?.data?.data?.total,
        page: response?.data?.data?.page,
      })
    );
  } catch (error) {
    console.log("XaXAX",error?.message);
    yield put(fetchAstrologersFailure(error.message));
  }
}

export default function* astrologerSaga() {
  yield takeLatest(fetchAstrologers.type, fetchAstrologersWorker);
}
