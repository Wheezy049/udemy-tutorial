import { all, call } from "redux-saga/effects";
import { categoriesSaga } from "./categories/categorySaga";
import { usersaga } from "./user/userSaga";

export function* rootSaga() {
  yield all([call(categoriesSaga), call(usersaga)]);
}
