import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import UploadReducer from './UploadReducer';
import PhotosListReducer from './PhotosListReducer';
import WeatherReducer from './WeatherReducer';

// glue all the reducers together into 1 root reducer
export default combineReducers({
  login: LoginReducer,
  photosList: PhotosListReducer,
  upload: UploadReducer,
  //weather: WeatherReducer,
});

// Put reducer keys that you do NOT want stored to persistence here
export const persistentStoreBlacklist = ['login'];
// OR put reducer keys that you DO want stored to persistence here (overrides blacklist)
// export const persistentStoreWhitelist = []
