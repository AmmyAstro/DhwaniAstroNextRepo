import { combineReducers } from 'redux';
import formReducer from './formReducer';
import formInputReducer from '@/app/redux/services/daUserFormSlice';

export default combineReducers({
  form: formReducer,
   formInput: formInputReducer,
});
