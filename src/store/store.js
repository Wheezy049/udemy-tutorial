import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./root-reducer";
// import { thunk } from 'redux-thunk';
import createSagaMiddlewre from "redux-saga";
import { rootSaga } from "./rootSaga";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
  // blackList: ['user']
};

const sagaMiddleware = createSagaMiddlewre();

const persistedReducer = persistReducer(persistConfig, rootReducer);

// using thunk or saga
const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  sagaMiddleware,
].filter(Boolean);

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
