import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import userReducer from "./userReducer";
import profileReducer from "./postReduce";

const rootReducer = combineReducers({
  form: reduxFormReducer,
  user: userReducer,
  profile: profileReducer,
});

export default rootReducer;
