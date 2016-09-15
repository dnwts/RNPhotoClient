import { take, put, call, fork } from 'redux-saga/effects';
import Types from '../Actions/Types';
import Actions from '../Actions/Creators';

export function * photosListLoad (payload) {
  try {
    let response = yield call(fetch, 'http://im.dnw.ro/images', { 
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }, 
    });
    const list = JSON.parse(response._bodyText);
    response._bodyInit = 'hijack!';
    response._bodyText = 'hijack!';
    console.log('LIST LOAD RESPONSE:', response);//, list);
    yield put(Actions.replacePhotosList(list.data));
  }
  catch (e) {
    console.log('LIST LOAD ERROR:', e);
    yield put(Actions.clearPhotosList());
    yield put(Actions.errorPhotosList(e.message));
  }
}

export function * watchPhotosListLoad () {
  while (true) {
    const payload = yield take(Types.LIST_LOAD);
    console.log('PHOTOS SAGA', payload);
    yield call(photosListLoad, payload);
  }
}