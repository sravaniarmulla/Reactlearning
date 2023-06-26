import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reduces";
import thunkMiddleware from "redux-thunk";
import promise from "redux-promise";

const createStoreWithMiddleware = applyMiddleware(
  promise,
  thunkMiddleware
)(createStore);



export default createStoreWithMiddleware(rootReducer);
