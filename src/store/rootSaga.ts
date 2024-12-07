import { all, call } from "typed-redux-saga/macro";
import { categoriesSaga } from "./categories/categorySaga";
import { usersaga } from "./user/userSaga";

export function* rootSaga() {
  yield* all([call(categoriesSaga), call(usersaga)]);
}
