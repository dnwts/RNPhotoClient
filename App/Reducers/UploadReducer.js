import Types from '../Actions/Types';
import Immutable from 'seamless-immutable';
import { createReducer } from 'reduxsauce';

export const INITIAL_STATE = Immutable({
  errorCode: null,
  attempting: false,
});

// upload attempts
const attempt = (state, action) =>
  state.merge({ attempting: true, errorCode: null });

// successful upload
const success = (state, action) =>
  state.merge({ attempting: false, errorCode: null });

// upload failure
const failure = (state, action) =>
  state.merge({ attempting: false, errorCode: action.errorCode });

const clear = (state, action) =>
  state.merge({ attempting: false, errorCode: null });

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.UPLOAD_PICTURE]: attempt,
  [Types.UPLOAD_SUCCESS]: success,
  [Types.UPLOAD_FAILURE]: failure,
  [Types.UPLOAD_CLEAR]: clear,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
