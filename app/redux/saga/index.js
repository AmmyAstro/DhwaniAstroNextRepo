
import { all } from 'redux-saga/effects';
import authSaga from './authSaga';
import astrologerSaga from './astrologerSaga';
import intakeSaga from './user/intakeData';
import packSaga from './paymentSaga/packSaga';
import paymentdetailSaga from './paymentSaga/paymentdetailSaga';
import getUserSaga from './user/getUserSaga';
import tempSaga from './chatSaga/tempSaga';
import chatrequestSaga from './chatSaga/chatrequestSaga';
import completedchatSaga from './chatSaga/completedchatSaga';
import { chatAlertSaga } from './chatSaga/chatAlertSaga';
import lalSaga from './astrology-api-saga/lalSaga';
import CallingStart from './callingSaga/CallingStart';
import CallingResponseSaga from './callingSaga/CallingResponseSaga';
import bookingSaga from './bookingSaga/bookingSaga';
import BookingPaymentSaga from './bookingSaga/BookingPaymentSaga';
import intakeStoreSaga from './user/intakeStoreSaga';
import AstrologerFollow from './follow/AstrologerFollow';
import GetHistory from './follow/GetHistory';
import completedcallSaga from './callingSaga/completedcallSaga';
import phonecallSaga from './callingSaga/phonecallSaga';
import idSaga from './chatSaga/idSaga';
import AstrologerDetailSaga from './astrology-api-saga/AstrologerDetailSaga.js';
import CallSendSaga from "./call/CallSendSaga.js";
import reviewSaga from "./user/reviewSaga.js";
import watchGiftSaga from "./gift/giftSaga.js";
import getCouponListSaga from './coupon/getCouponListSaga';



export default function* rootSaga() {
  yield all([authSaga(),
  astrologerSaga(),
  intakeSaga(),
  packSaga(),
  paymentdetailSaga(),
  getUserSaga(),
  tempSaga(),
  chatrequestSaga(),
  completedchatSaga(),
  chatAlertSaga(),
  CallingStart(),
  lalSaga(),
  CallingResponseSaga(),
  bookingSaga(),
  BookingPaymentSaga(),
  intakeStoreSaga(),
  AstrologerFollow(),
  GetHistory(),
  completedcallSaga(),
  phonecallSaga(),
  idSaga(),
  AstrologerDetailSaga(),
  CallSendSaga(),
  reviewSaga(),
  watchGiftSaga(),
  getCouponListSaga()
  ]);
}

