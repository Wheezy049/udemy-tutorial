import { takeLatest, all, call, put } from "redux-saga/effects";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase";
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from "./categoryAction";
import { CATEGORIES_ACTION_TYPES } from "./categoryType";

// using saga
export function* fetchCategoriesAsync() {
  // dispatch(fetchCategoriesStart());
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments, "categories");
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesFailed(error));
  }
}

// general function
export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
