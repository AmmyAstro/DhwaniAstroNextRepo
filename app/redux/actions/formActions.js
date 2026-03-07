export const SUBMIT_FORM = "SUBMIT_FORM";
export const FORM_SUCCESS = "FORM_SUCCESS";
export const FORM_FAILURE = "FORM_FAILURE";

// Action creator for form submission
export const submitForm = (formData) => ({
  type: SUBMIT_FORM,
  payload: formData,
});

export const formSuccess = (data) => ({
  type: FORM_SUCCESS,
  payload: data,
});

export const formFailure = (error) => ({
  type: FORM_FAILURE,
  payload: error,
});
