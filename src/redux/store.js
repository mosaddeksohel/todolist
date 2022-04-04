import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

const milddleware = [];

if (process.env.NODE_ENV === "development") {
  milddleware.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...milddleware));

export default store;
