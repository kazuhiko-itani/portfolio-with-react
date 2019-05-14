import { select, all, fork, put, takeLatest } from 'redux-saga/effects';
import { firebaseDb } from '../firebase/index';

import { FormActionType, submitForm } from '../actions/form';
const contactDb = firebaseDb.ref('contact');

function* runPostFormData(action: ReturnType<typeof submitForm.start>) {
    const data = yield select();
    if (!data.name || !data.email || !data.message) {
        yield put(submitForm.fail({ status: 'validate' }));
        return;
    }

    const res = contactDb.push({
        name: data.name,
        email: data.email,
        message: data.message,
    });

    if (res.key) {
        yield put(submitForm.succeed({ status: 'success' }));
        return;
    }

    yield put(submitForm.fail({ status: 'error' }));
}

export function* watchPostFormData() {
    yield takeLatest(FormActionType.POSTDATASTART, runPostFormData);
}

export default function* rootSaga() {
    yield all([fork(watchPostFormData)]);
}