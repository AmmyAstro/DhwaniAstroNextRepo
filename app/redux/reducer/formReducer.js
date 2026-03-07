import { SUBMIT_FORM, FORM_SUCCESS, FORM_FAILURE } from "./formActions";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_FORM:
      return { ...state, loading: true, error: null };
    case FORM_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FORM_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default formReducer;
