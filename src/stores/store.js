import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
// import Saga from "../sagas/saga";

import mainReducer from "../reducers/reducer";

const middleware = createSagaMiddleware();

const configureStore = createStore(mainReducer, applyMiddleware(middleware));

// middleware.run(Saga)

export default configureStore;
