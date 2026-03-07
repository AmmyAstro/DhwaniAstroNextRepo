
import { takeEvery, put, delay } from 'redux-saga/effects';
import { setIdRequest,setIdSuccess } from '../../reducer/chat/idSlice';


function* handleSetId(action) {
  const id = action.payload;
    yield delay(500);

  yield put(setIdSuccess(id));
}

export default function* idSaga() {
  yield takeEvery(setIdRequest.type, handleSetId);
}
