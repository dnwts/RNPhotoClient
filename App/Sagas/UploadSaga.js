import { take, put, call, fork } from 'redux-saga/effects';
import Types from '../Actions/Types';
import Actions from '../Actions/Creators';

// attempts to login
export function * attemptUpload (payload) {
  // console.log('attemptUpload', payload.data, typeof(data), payload.data.uri, !payload.data, !payload.data.uri, !payload.data || !payload.data.uri);
  const data = payload && payload.data;
  if (!data || !data.uri) {
    return yield put(Actions.uploadFailure('No image to upload!'));
  }
  if (!data || !data.caption) {
    return yield put(Actions.uploadFailure('Please give it a name!'));
  }
  try {
    const response = yield call(fetch, 'http://im.dnw.ro/uploads', { 
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }, 
      body: JSON.stringify({
        uri: data.uri,
        initialFileName: data.caption,
      }),
    });
    console.log('UPLOAD RESPONSE:', response);
    if (response.ok) {
      yield put(Actions.uploadSuccess(data));
    } else {
      yield put(Actions.uploadFailure('Server error ' + response.status + ': "' + response.statusText + '"'));
    }
  }
  catch (e) {
    console.log('ERROR:', e);
    yield put(Actions.uploadFailure(e.message));
  }
}

export function * watchUploadAttempt () {
  while (true) {
    const payload = yield take(Types.UPLOAD_PICTURE);
    console.log('SAGA', payload);
    yield call(attemptUpload, payload);
  }
}