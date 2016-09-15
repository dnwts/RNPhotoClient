import Types from '../Actions/Types';
import Immutable from 'seamless-immutable';
import { createReducer } from 'reduxsauce';

export const INITIAL_STATE = Immutable({
  list: [],
  error: null,
  loading: false,
});

const loading = (state, action) =>
  state.merge({ loading: true, error: null });

const replace = (state, action) =>
  state.merge({ loading: false, error: null, list: action.list });

const append = (state, action) =>
  state.merge({ loading: false, error: null, list: state.list.concat(action.list) });

const fail = (state, action) =>
  state.merge({ loading: false, error: action.error });

const clear = (state, action) =>
  state.merge({ loading: false, error: null, list: [] });

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.LIST_LOAD]: loading,
  [Types.LIST_REPLACE]: replace,
  [Types.LIST_APPEND]: append,
  [Types.LIST_FAILURE]: fail,
  [Types.LIST_CLEAR]: clear,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
