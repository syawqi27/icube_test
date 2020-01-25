
import { put, all } from "redux-saga/effects"
import Data from '../datas/costumers';

export function* getDataCustomer() {
  yield put({ type: "GET_DATA", data : Data.main });
}

export default function* rootSaga() {
  yield all([
      getDataCustomer(),
  ])
};