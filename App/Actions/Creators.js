import Types from './Types';

const attemptUpload = (data) =>
  ({ type: Types.UPLOAD_PICTURE, data });

const uploadSuccess = () =>
  ({ type: Types.UPLOAD_SUCCESS });

const uploadFailure = (errorCode) =>
  ({ type: Types.UPLOAD_FAILURE, errorCode });

const clearUpload = (data) =>
  ({ type: Types.UPLOAD_CLEAR, data });

const attemptLogin = (username, password) =>
  ({ type: Types.LOGIN_ATTEMPT, username, password });

const loginSuccess = (username) =>
  ({ type: Types.LOGIN_SUCCESS, username });

const loginFailure = (errorCode) =>
  ({ type: Types.LOGIN_FAILURE, errorCode });

const logout = () => ({ type: Types.LOGOUT });

const startup = () => ({ type: Types.STARTUP });

const loadPhotosList = () =>
  ({ type: Types.LIST_LOAD });

const errorPhotosList = (error) =>
  ({ type: Types.LIST_FAILURE, error });

const replacePhotosList = (list) =>
  ({ type: Types.LIST_REPLACE, list });

const appendPhotosList = (list) =>
  ({ type: Types.LIST_APPEND, list });

const clearPhotosList = () =>
  ({ type: Types.LIST_CLEAR });

// const requestTemperature = (city) => ({ type: Types.TEMPERATURE_REQUEST, city });
// const receiveTemperature = (temperature) => ({ type: Types.TEMPERATURE_RECEIVE, temperature });
// const receiveTemperatureFailure = () => ({ type: Types.TEMPERATURE_FAILURE });

/**
 Makes available all the action creators we've created.
 */
export default {
  attemptUpload,
  clearUpload,
  uploadSuccess,
  uploadFailure,
  attemptLogin, 
  loginSuccess,
  loginFailure,
  logout,
  startup,
  loadPhotosList,
  clearPhotosList,
  errorPhotosList,
  replacePhotosList,
  appendPhotosList,
  // requestTemperature,
  // receiveTemperature,
  // receiveTemperatureFailure,
};
