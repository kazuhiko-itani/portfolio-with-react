import axios from 'axios';
import { select, all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { formData, FormActionType, submitForm } from '../actions/form';

const jsonpAdapter = require('axios-jsonp');
const GAS_URL = 'https://script.google.com/macros/s/AKfycbzSmIm1Ht-HBR4fnDD5TiaHdMSb402QtAOVspcVzTeAKpX2Y3M/exec';

// axiosの返り値ってなんなんだ・・・？（anyで逃げ）
function postFormDataApi(data: formData): any {
    return axios({
        method: 'post',
        url: GAS_URL,
        params: { data },
        adapter: jsonpAdapter,
    })
    .then(res => {
        return res;
    })
    .catch (err => {
        return err;
    });
}

function* runPostFormData(action: ReturnType<typeof submitForm.start>) {
    const data = yield select();
    if (!data.name || !data.email || !data.message) return;

    try {
        const api = postFormDataApi(data);
        const res = yield call(api);

        console.log(res);

        if (res.status === 200) {
            yield put(submitForm.succeed(res.status));
        } else {
            yield put(submitForm.fail(res.status));
        }
    } catch (err) {
        yield put(submitForm.fail({ status: 'network error'}));
    }
}

export function* watchPostFormData() {
    yield takeLatest(FormActionType.POSTDATASTART, runPostFormData);
}

export default function* rootSaga() {
    yield all([fork(watchPostFormData)]);
}